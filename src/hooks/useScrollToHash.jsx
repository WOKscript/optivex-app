import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const useScrollToHash = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // If there is a hash (e.g. #mission), scroll to it
    if (hash) {
      const element = document.getElementById(hash.replace('#', ''));
      if (element) {
        // Small timeout ensures the DOM is fully loaded before scrolling
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      }
    } else {
      // If no hash, always scroll to top of page (standard SPA behavior)
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]); // Re-run this effect when path or hash changes
};

export default useScrollToHash;