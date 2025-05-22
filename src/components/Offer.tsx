import React, { useState, useEffect } from 'react';

const Offer: React.FC = () => {
  const [remainingSpots, setRemainingSpots] = useState(37);

  // Generate a random decrement for the spots to create urgency
  useEffect(() => {
    const decrementInterval = setInterval(() => {
      setRemainingSpots(prev => {
        if (prev <= 10) return prev;
        return prev - Math.floor(Math.random() * 2 + 1);
      });
    }, 60000); // Every minute

    return () => clearInterval(decrementInterval);
  }, []);

  return (
    <section className="py-16 px-4 bg-[#fefae0]">
      <div className="container mx-auto max-w-4xl">
        <div className="bg-white rounded-xl overflow-hidden shadow-2xl border-4 border-[#d4a373] transform hover:scale-[1.02] transition-all duration-500">
          <div className="bg-[#d4a373] py-6 px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-center text-white">
              APROVEITE ESTA OFERTA EXCLUSIVA!
            </h2>
          </div>
          
          <div className="p-8">
            <div className="text-center mb-8">
              <p className="text-lg text-[#5a5a5a] mb-2">Valor de Mercado:</p>
              <p className="text-2xl font-bold text-[#5a5a5a] line-through">+ de R$ 498,00</p>
              
              <div className="mt-6">
                <p className="text-lg text-[#2e2e2e] font-bold">Somente hoje por apenas:</p>
                <p className="text-5xl font-black text-[#d4a373] my-2">R$ 57,00</p>
                <p className="text-[#d4a373] font-bold">PAGAMENTO ÚNICO</p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-[#faedcd] p-4 rounded-lg">
                <h3 className="font-bold text-[#2e2e2e] mb-2">O que você recebe:</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-[#d4a373] font-bold">✓</span>
                    <span>250+ Ferramentas TCC prontas para uso</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#d4a373] font-bold">✓</span>
                    <span>Formulários & questionários 100% editáveis</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#d4a373] font-bold">✓</span>
                    <span>Baralhos & jogos interativos</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#d4a373] font-bold">✓</span>
                    <span>Atualizações vitalícias</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-[#faedcd] p-4 rounded-lg">
                <h3 className="font-bold text-[#2e2e2e] mb-2">+ Bônus exclusivos:</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-[#d4a373] font-bold">✓</span>
                    <span>Prontuário Digital <span className="text-[#d4a373]">(R$ 97,00)</span></span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#d4a373] font-bold">✓</span>
                    <span>Documentos Psicológicos <span className="text-[#d4a373]">(R$ 77,00)</span></span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#d4a373] font-bold">✓</span>
                    <span>Caderno de Terapia TCC <span className="text-[#d4a373]">(R$ 97,00)</span></span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#d4a373] font-bold">✓</span>
                    <span>Planner + Bloquinho <span className="text-[#d4a373]">(R$ 127,00)</span></span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="text-center mb-8">
              <a 
                href="https://go.pepperpay.com.br/ckike"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#d4a373] hover:bg-[#c3956a] text-white text-xl font-bold py-4 px-8 rounded-lg shadow-lg w-full max-w-lg transform hover:scale-105 transition-all duration-300 uppercase"
              >
                SIM, QUERO O PSICOTOOLKIT 360° AGORA!
              </a>
              <p className="text-sm text-[#5a5a5a] mt-2">
                Pagamento único • acesso vitalício • atualizações vitalícias
              </p>
            </div>
            
            <div className="text-center">
              <p className="text-[#d4a373] font-bold animate-pulse">
                Restam apenas {remainingSpots} vagas promocionais!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Offer;