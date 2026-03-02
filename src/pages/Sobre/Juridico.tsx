import PageTemplate from '../../components/PageTemplate';

export default function Juridico() {
  return (
    <PageTemplate title="Jurídico">
      <div className="space-y-12">
        
        <section>
          <h2 className="text-white/80 text-sm uppercase tracking-[0.2em] mb-4">Termos de Uso</h2>
          <p className="text-white/50 font-light leading-relaxed">
            Este site é uma obra-prima que está arquitetando os 7 pilares da experiência humana.<br/>
            Ao navegar, você concorda em utilizar o conteúdo de forma ética e respeitosa. 
            As transações comerciais são processadas via Kiwify, seguindo seus próprios protocolos de segurança.
          </p>
        </section>

        <section>
          <h2 className="text-white/80 text-sm uppercase tracking-[0.2em] mb-4">Privacidade</h2>
          <p className="text-white/50 font-light leading-relaxed">
            Respeitamos sua privacidade. Não coletamos dados pessoais diretamente neste site.<br/>
            A hospedagem é provida pelo GitHub Pages, que pode coletar logs técnicos básicos. 
            Dados de compra são gerenciados exclusivamente pela plataforma de pagamento parceira.
          </p>
        </section>

        <section>
          <h2 className="text-white/80 text-sm uppercase tracking-[0.2em] mb-4">Propriedade Intelectual</h2>
          <p className="text-white/50 font-light leading-relaxed">
            Acreditamos na livre circulação do pensamento.<br/>
            Todo o conteúdo deste site está licenciado sob a 
            <a 
              href="https://creativecommons.org/licenses/by/4.0/?ref=chooser-v1" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:underline ml-1"
            >
              CC BY 4.0
            </a>.
          </p>
          <p className="text-white/30 text-[10px] mt-4 uppercase tracking-widest">
            Pitore — Desde 2026
          </p>
        </section>

      </div>
    </PageTemplate>
  );
}
