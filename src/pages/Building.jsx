import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

const Building = () => {
  const mountRef = useRef(null);
  const cursorRef = useRef(null);
  const trailRef = useRef([]);
  const headlineRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);

  // Disable right-click
  useEffect(() => {
    const handleContextMenu = (e) => e.preventDefault();
    document.addEventListener('contextmenu', handleContextMenu);
    return () => document.removeEventListener('contextmenu', handleContextMenu);
  }, []);

  // Custom Cursor with Polished Trail
  useEffect(() => {
    const cursor = cursorRef.current;
    const trail = trailRef.current;
    const trailLength = 6;
    
    // Initialize trail elements with refined styling
    for (let i = 0; i < trailLength; i++) {
      const dot = document.createElement('div');
      const progress = i / trailLength;
      const size = 4 * (1 - progress * 0.7);
      
      dot.className = 'fixed pointer-events-none z-50 rounded-full';
      dot.style.width = `${size}px`;
      dot.style.height = `${size}px`;
      dot.style.background = 'white';
      dot.style.opacity = 1 - progress * 0.8;
      dot.style.boxShadow = `0 0 ${6 * (1 - progress)}px ${2 * (1 - progress)}px rgba(255, 255, 255, ${0.8 - progress * 0.5})`;
      dot.style.transform = 'translate(-50%, -50%)';
      document.body.appendChild(dot);
      trail.push({ element: dot, x: 0, y: 0, prevX: 0, prevY: 0 });
    }

    let mouseX = 0;
    let mouseY = 0;
    let cursorX = 0;
    let cursorY = 0;
    let lastMouseX = 0;
    let lastMouseY = 0;

    const handleMouseMove = (e) => {
      lastMouseX = mouseX;
      lastMouseY = mouseY;
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const animateCursor = () => {
      // Smooth cursor follow with easing
      const ease = 0.15;
      cursorX += (mouseX - cursorX) * ease;
      cursorY += (mouseY - cursorY) * ease;

      // Calculate velocity and angle
      const velocityX = mouseX - lastMouseX;
      const velocityY = mouseY - lastMouseY;
      const speed = Math.sqrt(velocityX ** 2 + velocityY ** 2);
      const angle = Math.atan2(velocityY, velocityX) * (180 / Math.PI) + 90;

      // Update main cursor
      if (cursor) {
        cursor.style.left = `${cursorX}px`;
        cursor.style.top = `${cursorY}px`;
        cursor.style.transform = `translate(-50%, -50%) rotate(${speed > 0.5 ? angle : 0}deg)`;
      }

      // Update trail with physics-based delay
      trail.forEach((dot, index) => {
        const delay = (index + 1) * 0.12;
        const influence = Math.pow(0.6, index);
        
        // Store previous position for stretch calculation
        dot.prevX = dot.x;
        dot.prevY = dot.y;
        
        // Target is either cursor or previous dot
        const targetX = index === 0 ? cursorX : trail[index - 1].x;
        const targetY = index === 0 ? cursorY : trail[index - 1].y;
        
        // Smooth lerp with individual easing
        dot.x += (targetX - dot.x) * (0.35 - index * 0.04);
        dot.y += (targetY - dot.y) * (0.35 - index * 0.04);
        
        // Calculate stretch based on movement
        const moveX = dot.x - dot.prevX;
        const moveY = dot.y - dot.prevY;
        const dotSpeed = Math.sqrt(moveX ** 2 + moveY ** 2);
        const stretch = Math.min(2.5, 1 + dotSpeed * 0.08);
        const dotAngle = Math.atan2(moveY, moveX) * (180 / Math.PI);
        
        // Apply transform with rotation and stretch
        dot.element.style.left = `${dot.x}px`;
        dot.element.style.top = `${dot.y}px`;
        dot.element.style.transform = `
          translate(-50%, -50%) 
          rotate(${dotAngle}deg) 
          scale(${1 / stretch}, ${stretch})
        `;
      });

      requestAnimationFrame(animateCursor);
    };

    window.addEventListener('mousemove', handleMouseMove);
    animateCursor();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      trail.forEach(dot => dot.element.remove());
      trailRef.current = [];
    };
  }, []);

  // Three.js Background
  useEffect(() => {
    const mount = mountRef.current;
    
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    mount.appendChild(renderer.domElement);

    // === STARFIELD ===
    const starsGeometry = new THREE.BufferGeometry();
    const starsCount = 200;
    const starsPositions = new Float32Array(starsCount * 3);
    const starsSizes = new Float32Array(starsCount);
    const starsTwinkle = new Float32Array(starsCount);
    
    for (let i = 0; i < starsCount; i++) {
      const i3 = i * 3;
      starsPositions[i3] = (Math.random() - 0.5) * 60;
      starsPositions[i3 + 1] = (Math.random() - 0.5) * 60;
      starsPositions[i3 + 2] = (Math.random() - 0.5) * 40;
      starsSizes[i] = Math.random();
      starsTwinkle[i] = Math.random() * Math.PI * 2;
    }
    
    starsGeometry.setAttribute('position', new THREE.BufferAttribute(starsPositions, 3));
    starsGeometry.setAttribute('size', new THREE.BufferAttribute(starsSizes, 1));
    starsGeometry.setAttribute('twinkle', new THREE.BufferAttribute(starsTwinkle, 1));

    const starsMaterial = new THREE.ShaderMaterial({
      uniforms: {
        time: { value: 0 },
        mouse: { value: new THREE.Vector2(0, 0) },
        color: { value: new THREE.Color(0xffffff) }
      },
      vertexShader: `
        attribute float size;
        attribute float twinkle;
        varying float vAlpha;
        uniform float time;
        uniform vec2 mouse;
        
        void main() {
          vec3 pos = position;
          float dist = distance(pos.xy, mouse * 30.0);
          float ripple = sin(dist * 0.5 - time * 3.0) * exp(-dist * 0.1) * 2.0;
          pos.z += ripple;
          
          vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
          gl_PointSize = size * (2.0 + sin(time + twinkle) * 0.5);
          gl_Position = projectionMatrix * mvPosition;
          vAlpha = 0.6 + 0.4 * sin(time * 2.0 + twinkle);
        }
      `,
      fragmentShader: `
        uniform vec3 color;
        varying float vAlpha;
        void main() {
          float r = distance(gl_PointCoord, vec2(0.5));
          if (r > 0.5) discard;
          float glow = 1.0 - (r * 2.0);
          glow = pow(glow, 2.0);
          gl_FragColor = vec4(color, vAlpha * glow);
        }
      `,
      transparent: true,
      blending: THREE.AdditiveBlending
    });

    const stars = new THREE.Points(starsGeometry, starsMaterial);
    scene.add(stars);

    // === SHOOTING STARS ===
    const shootingStars = [];
    
    for (let i = 0; i < 2; i++) {
      const geometry = new THREE.BufferGeometry();
      const positions = new Float32Array(6);
      geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
      
      const material = new THREE.LineBasicMaterial({
        color: 0xffffff,
        transparent: true,
        opacity: 0
      });
      
      const line = new THREE.Line(geometry, material);
      scene.add(line);
      
      shootingStars.push({
        line, geometry, material,
        active: false, speed: 0, life: 0,
        direction: new THREE.Vector3()
      });
    }

    const spawnShootingStar = () => {
      const star = shootingStars.find(s => !s.active);
      if (!star) return;
      
      star.active = true;
      star.life = 1.0;
      star.speed = 0.3 + Math.random() * 0.3;
      
      const startX = Math.random() > 0.5 ? -30 : 30;
      const startY = 20 + Math.random() * 10;
      const startZ = (Math.random() - 0.5) * 20;
      const endX = startX > 0 ? -40 : 40;
      const endY = startY - 20 - Math.random() * 15;
      const endZ = startZ + (Math.random() - 0.5) * 10;
      
      const positions = star.geometry.attributes.position.array;
      positions[0] = startX; positions[1] = startY; positions[2] = startZ;
      positions[3] = startX; positions[4] = startY; positions[5] = startZ;
      
      star.geometry.attributes.position.needsUpdate = true;
      star.direction.set(endX - startX, endY - startY, endZ - startZ).normalize();
      star.material.opacity = 1;
    };

    camera.position.z = 25;

    let mouseX = 0;
    let mouseY = 0;
    const handleMouseMove = (e) => {
      mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
      mouseY = -(e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener('mousemove', handleMouseMove);

    const clock = new THREE.Clock();
    let shootingStarTimer = 0;
    
    const animate = () => {
      requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();
      
      starsMaterial.uniforms.time.value = elapsedTime;
      starsMaterial.uniforms.mouse.value.set(mouseX, mouseY);
      stars.rotation.y += 0.0002;
      
      shootingStarTimer += 0.016;
      if (shootingStarTimer > 2 + Math.random() * 4) {
        spawnShootingStar();
        shootingStarTimer = 0;
      }
      
      shootingStars.forEach(star => {
        if (!star.active) return;
        const positions = star.geometry.attributes.position.array;
        positions[3] += star.direction.x * star.speed;
        positions[4] += star.direction.y * star.speed;
        positions[5] += star.direction.z * star.speed;
        positions[0] += star.direction.x * star.speed * 1.5;
        positions[1] += star.direction.y * star.speed * 1.5;
        positions[2] += star.direction.z * star.speed * 1.5;
        star.geometry.attributes.position.needsUpdate = true;
        star.life -= 0.015;
        star.material.opacity = Math.max(0, star.life);
        if (star.life <= 0 || Math.abs(positions[0]) > 50 || Math.abs(positions[1]) > 50) {
          star.active = false;
          star.material.opacity = 0;
        }
      });

      renderer.render(scene, camera);
    };
    animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      mount.removeChild(renderer.domElement);
      starsGeometry.dispose();
      starsMaterial.dispose();
      shootingStars.forEach(s => {
        s.geometry.dispose();
        s.material.dispose();
      });
      renderer.dispose();
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-black overflow-hidden cursor-none">
      {/* Custom Arrow Cursor */}
      <div 
        ref={cursorRef}
        className="fixed pointer-events-none z-[100] w-6 h-6"
        style={{
          left: 0,
          top: 0,
          filter: 'drop-shadow(0 2px 6px rgba(0,0,0,0.4))'
        }}
      >
        <svg 
          width="24" 
          height="24" 
          viewBox="0 0 24 24" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          <path 
            d="M5.5 3.21V20.8c0 .45.54.67.85.35l4.86-4.86a.5.5 0 0 1 .35-.15h6.87a.5.5 0 0 0 .35-.85L6.35 2.86a.5.5 0 0 0-.85.35Z" 
            fill="white"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      {/* Three.js Canvas */}
      <div 
        ref={mountRef} 
        className="absolute inset-0 z-0"
        style={{ pointerEvents: 'none' }}
      />
      
      {/* Content */}
      <div 
        className="relative z-10 min-h-screen flex items-center justify-center px-6 select-none"
        onContextMenu={(e) => e.preventDefault()}
      >
        <div className="text-center flex flex-col items-center">
          <div className="flex justify-center">
            <img 
              src="/images/sss-logo.gif" 
              alt="Building in progress"
              className="max-w-[300px] md:max-w-[400px] lg:max-w-[500px] w-full h-auto opacity-90 pointer-events-none"
              draggable="false"
            />
          </div>

          {/* Headline with gradient hover effect */}
          <div className="space-y-4 -mt-8 md:-mt-12 lg:-mt-16 font-['Montserrat',_sans-serif]">
            <h1 
              ref={headlineRef}
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
              className={`
                text-3xl md:text-4xl lg:text-5xl font-black tracking-tight
                transition-all duration-500 ease-out cursor-none
                ${isHovering 
                  ? 'bg-gradient-to-r from-[#0a192f] via-[#1e3a5f] to-[#ff6b35] bg-clip-text text-transparent' 
                  : 'text-white/90'
                }
              `}
              style={{
                backgroundSize: '200% auto',
                animation: isHovering ? 'gradient-shift 3s ease infinite' : 'none'
              }}
            >
              A Fresh Identity is Arriving Soon.
            </h1>
            
            <div className="flex items-center justify-center gap-2 text-white/50">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
              </span>
              <p className="text-sm md:text-base font-medium tracking-wide opacity-90">
                Under Construction
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Gradient animation keyframes */}
      <style>{`
        @keyframes gradient-shift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </div>
  );
};

export default Building;