import PageTemplate from '../../components/PageTemplate';

export default function Marca() {
  return (
    <PageTemplate title="Marca">
      <div className="max-w-2xl space-y-10">
        
        {/* Seção de Lemas */}
        <div className="space-y-8">
          <p className="text-white/80 font-light leading-relaxed">
            <strong className="text-[10px] uppercase tracking-[0.3em] block mb-2 opacity-50">Lema</strong>
            <span className="text-xl tracking-tight italic">Enigma sublime...</span>
          </p>

          <p className="text-white/80 font-light leading-relaxed">
            <strong className="text-[10px] uppercase tracking-[0.3em] block mb-2 opacity-50">Lema secundário</strong>
            <span className="text-xl tracking-tight italic">Uma tragicomédia...</span>
          </p>

          <p className="text-white/80 font-light leading-relaxed">
            <strong className="text-[10px] uppercase tracking-[0.3em] block mb-2 opacity-50">Lema especial</strong>
            <span className="text-xl tracking-tight italic">Ordem e progresso...</span>
          </p>

          <p className="text-white/80 font-light leading-relaxed">
            <strong className="text-[10px] uppercase tracking-[0.3em] block mb-2 opacity-50">Forma Curta</strong>
            <span className="text-xl tracking-tight italic">...</span>
          </p>
        </div>

        <hr className="border-white/5 my-12" />

        {/* História e Conceito */}
        <div className="space-y-6 text-white/50 font-light leading-relaxed">
          <p>
            A história simples. O nome Pitore se forma da simples ideia do Din de criar uma redução leve da palavra Pitoresco.
          </p>

          <p>
            O “Pi” e o “▭” em qualquer tipografia e cor, são duas opções na forma de texto que você pode usar para se referir a Pitore.
          </p>
          
          <p>
            Os liivros tem a sua marca também, como você pode ver abaixo. PiTeni por exemplo, significa: Pitore de Entretenimento.
          </p>
          
          <p>
            Juntos, eles formam os “Pis“: <br/>
            <span className="text-white/70 italic">PiTeni, PiDin, PiSau, PiSofia, PiLin, Pistilo e PiMor.</span>
          </p>
        </div>

      </div>
    </PageTemplate>
  );
}
