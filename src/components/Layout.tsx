import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Breadcrumbs from './Breadcrumbs'; // Certifique-se de que o arquivo Breadcrumbs.tsx existe

export default function Layout() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <Outlet />
      </main>

      <footer className="px-8 py-12 border-t border-white/5">
        <div className="max-w-7xl mx-auto w-full">
          {/* Breadcrumbs estilo Apple */}
          <Breadcrumbs /> 
          
          <div className="mt-8 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 text-[10px] uppercase tracking-[0.2em] text-white/20">
            <p>Pitore © 2026 por Din — CC BY 4.0</p>
            <p className="font-light italic">Enigma Sublime</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
