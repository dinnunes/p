import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Breadcrumbs from './Breadcrumbs';

export default function Layout() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* mt-40 garante que o rodapé fique bem longe do botão da Butique no desktop */}
      <footer className="px-8 mt-40 pb-12 border-t border-white/5">
        <div className="max-w-7xl mx-auto w-full">
          
          {/* Breadcrumbs agora com um respiro elegante */}
          <div className="py-12">
            <Breadcrumbs /> 
          </div>
          
          <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 text-[10px] uppercase tracking-[0.2em] text-white/20">
            <p>Pitore © 2026 por Din — CC BY 4.0</p>
            <p className="font-light italic opacity-50">Enigma sublime...</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
