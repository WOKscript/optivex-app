import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      {/* HEADER */}
      <header className="fixed top-0 left-0 right-0 z-50 glass-header">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            
            {/* LOGO IMAGE ADDED HERE */}
            <img 
                src="/images/logo.png" 
                alt="Optivex Logo" 
                className="h-10 w-10 object-cover" 
            />

            <h2 className="text-white text-xl font-extrabold tracking-tight uppercase">Optivex</h2>
          </Link>
          
          {/* NAV */}
          <nav className="hidden md:flex items-center gap-10">
            <Link to="/" className="text-white/80 hover:text-primary text-sm font-medium transition-colors">Home</Link>
            <Link to="/pricing" className="text-white/80 hover:text-primary text-sm font-medium transition-colors">Pricing & Services</Link>
            
            <Link to="/#mission" className="text-white/80 hover:text-primary text-sm font-medium transition-colors">Mission</Link>
            <Link to="/#projects" className="text-white/80 hover:text-primary text-sm font-medium transition-colors">Projects</Link>
          </nav>
          
          <button className="bg-primary text-background-dark px-6 py-2.5 rounded-xl text-sm font-bold transition-all hover:scale-105 active:scale-95 emerald-glow">
            Get Started
          </button>
        </div>
      </header>

      {/* PAGE CONTENT INJECTED HERE */}
      <main className="pt-24">
        <Outlet />
      </main>

      {/* FOOTER */}
      <footer className="border-t border-slate-border px-6 lg:px-12 py-12 bg-background-dark">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-3">
             {/* FOOTER LOGO (Optional: You can also use the image here if you want) */}
            <div className="size-6 text-primary">
              <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                <path d="M24 4C25.7818 14.2173 33.7827 22.2182 44 24C33.7827 25.7818 25.7818 33.7827 24 44C22.2182 33.7827 14.2173 25.7818 4 24C14.2173 22.2182 22.2182 14.2173 24 4Z" fill="currentColor"></path>
              </svg>
            </div>
            <h2 className="text-white text-lg font-bold tracking-tight uppercase">Optivex</h2>
          </div>
          <div className="flex gap-8 text-white/40 text-sm">
            <a className="hover:text-primary transition-colors" href="#">Privacy Policy</a>
            <a className="hover:text-primary transition-colors" href="#">Terms of Service</a>
            <a className="hover:text-primary transition-colors" href="#">Cookie Policy</a>
          </div>
          <p className="text-white/30 text-xs">© 2026 Optivex IT Solutions. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
};

export default Layout;