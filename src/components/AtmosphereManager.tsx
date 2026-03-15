import { useEffect } from 'react';

export default function AtmosphereManager() {
  useEffect(() => {
    const updateAtmosphere = () => {
      const hours = new Date().getHours();
      const root = document.documentElement;

      let config = {
        bg: '#111111',
        font: '"Inter", sans-serif',
        opacity: '0.9'
      };

      // Manhã (06:00 - 11:59) - Claridade Sutil
      if (hours >= 6 && hours < 12) {
        config = {
          bg: '#111111',
          font: '"Inter", sans-serif',
          opacity: '0.85'
        };
      } 
      // Tarde (12:00 - 17:59) - Foco Editorial
      else if (hours >= 12 && hours < 18) {
        config = {
          bg: '#080808',
          font: '"Helvetica Neue", Helvetica, Arial, sans-serif',
          opacity: '0.9'
        };
      } 
      // Noite (18:00 - 05:59) - Enigma Absoluto
      else {
        config = {
          bg: '#000000',
          font: '-apple-system, BlinkMacSystemFont, "San Francisco", sans-serif',
          opacity: '1'
        };
      }

      // Verificação de segurança: Só aplica se houver mudança real
      // Isso evita o "piscar" de fontes e cores ao navegar entre páginas
      const currentBg = root.style.getPropertyValue('--pitore-bg');
      
      if (currentBg !== config.bg) {
        root.style.setProperty('--pitore-bg', config.bg);
        root.style.setProperty('--pitore-font', config.font);
        root.style.setProperty('--pitore-text-opacity', config.opacity);
        
        // Log para você conferir no console (F12) se a atmosfera mudou
        console.log(`Atmosfera Pitore atualizada para o ciclo: ${hours}h`);
      }
    };

    updateAtmosphere();
    
    // Intervalo de 1 minuto para checar a hora
    const interval = setInterval(updateAtmosphere, 60000);
    return () => clearInterval(interval);
  }, []);

  return null;
}
