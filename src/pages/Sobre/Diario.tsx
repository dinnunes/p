import PageTemplate from '../../components/PageTemplate';
import { motion } from 'motion/react';

export default function Diario() {
  return (
    <PageTemplate title="Diário">
      <div className="max-w-2xl space-y-8">
        <p className="text-white/80 text-lg font-light leading-relaxed italic">
          "Onde a ordem encontra o Enigma."
        </p>

        <p className="text-white/50 font-light leading-relaxed">
          O Diário da Pitore é o nosso espaço de registro contínuo. Optamos por hospedar nossas crônicas e reflexões no <strong>Blogger</strong> por um motivo estratégico: a qualidade da experiência narrativa. 
        </p>

        <p className="text-white/50 font-light leading-relaxed">
          Enquanto o GitHub provê a arquitetura sólida técnica, o Diário exige uma fluidez que transcende o código. Lá, as imagens, os textos e as cores se fundem para dar vida às histórias por trás de cada coleção, permitindo um mergulho profundo no que chamamos de <strong>"Enigma sublime..."</strong>.
        </p>

        <div className="bg-white/5 border-l-2 border-white/20 p-6 my-10">
          <p className="text-white/60 text-sm font-light leading-relaxed italic">
            Na Pitore, nada é puramente estético. Cada postagem, cada linha e cada imagem do nosso Diário carrega uma camada oculta. Decifrar o conteúdo faz parte da experiência.
          </p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="pt-8"
        >
          <a 
            href="https://SEU-BLOG-AQUI.blogger.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block px-12 py-4 bg-white text-black text-[10px] font-bold tracking-[0.3em] uppercase hover:bg-white/90 transition-all"
          >
            Diário ›
          </a>
        </motion.div>
      </div>
    </PageTemplate>
  );
}
