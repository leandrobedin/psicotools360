import React from 'react';
import { useScroll } from '../context/ScrollContext';
import { Check } from 'lucide-react';

const Solution: React.FC = () => {
  const { scrollToSection } = useScroll();

  return (
    <section className="py-16 px-4 bg-[#e9edc9]">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center text-[#2e2e2e] mb-4">
          Conheça o PsicoToolkit 360°: o maior arsenal interativo para psicólogos de TCC no Brasil
        </h2>
        
        <p className="text-xl text-center text-[#5a5a5a] mb-10">
          Baixe uma vez, personalize em minutos e aplique para sempre.
        </p>
        
        <div className="mb-10 rounded-xl overflow-hidden shadow-lg">
          <div id="vid_682e06754c5c2e5081633593" style={{position: "relative", width: "100%", padding: "56.25% 0 0"}}>
            <img id="thumb_682e06754c5c2e5081633593" src="https://images.converteai.net/35f32f3f-99b7-4604-91d3-9a9d133f55e3/players/682e06754c5c2e5081633593/thumbnail.jpg" style={{position: "absolute", top: 0, left: 0, width: "100%", height: "100%", objectFit: "cover", display: "block"}} alt="VSL PsicoToolkit 360" />
            <div id="backdrop_682e06754c5c2e5081633593" style={{WebkitBackdropFilter: "blur(5px)", backdropFilter: "blur(5px)", position: "absolute", top: 0, height: "100%", width: "100%"}}></div>
          </div>
          <script type="text/javascript" id="scr_682e06754c5c2e5081633593" dangerouslySetInnerHTML={{__html: `var s=document.createElement("script"); s.src="https://scripts.converteai.net/35f32f3f-99b7-4604-91d3-9a9d133f55e3/players/682e06754c5c2e5081633593/player.js", s.async=!0,document.head.appendChild(s);`}}></script>
        </div>
        
        <div className="space-y-4 mb-10 max-w-3xl mx-auto">
          <div className="flex items-start gap-3">
            <Check className="text-[#d4a373] h-6 w-6 mt-1 flex-shrink-0" />
            <p className="text-[#2e2e2e] text-lg">
              Formulários & questionários 100% editáveis (Canva + PDF preenchível).
            </p>
          </div>
          <div className="flex items-start gap-3">
            <Check className="text-[#d4a373] h-6 w-6 mt-1 flex-shrink-0" />
            <p className="text-[#2e2e2e] text-lg">
              Baralhos & jogos on-line que duplicam o engajamento.
            </p>
          </div>
          <div className="flex items-start gap-3">
            <Check className="text-[#d4a373] h-6 w-6 mt-1 flex-shrink-0" />
            <p className="text-[#2e2e2e] text-lg">
              Materiais prontos para impressão com design profissional.
            </p>
          </div>
          <div className="flex items-start gap-3">
            <Check className="text-[#d4a373] h-6 w-6 mt-1 flex-shrink-0" />
            <p className="text-[#2e2e2e] text-lg">
              Atualizações vitalícias incluídas, sem taxa adicional.
            </p>
          </div>
        </div>
        
        <div className="flex justify-center">
          <button 
            onClick={() => scrollToSection('demonstration-section')}
            className="bg-[#ccd5ae] hover:bg-[#b8c292] text-[#2e2e2e] text-lg font-bold py-3 px-8 rounded-lg shadow-lg transition-all duration-300"
          >
            VER O KIT EM AÇÃO
          </button>
        </div>
      </div>
    </section>
  );
};

export default Solution;