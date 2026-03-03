import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Isso evita que o TypeScript dê erro dizendo que 'gtag' não existe
declare global {
  interface Window {
    gtag: (command: string, id: string, config?: object) => void;
  }
}

const GA_MEASUREMENT_ID = 'G-R50VL3YBP7';

export default function Analytics() {
  const location = useLocation();

  useEffect(() => {
    if (window.gtag) {
      window.gtag('config', GA_MEASUREMENT_ID, {
        page_path: location.pathname + location.hash, // Inclui o hash do HashRouter
      });
    }
  }, [location]);

  return null;
}
