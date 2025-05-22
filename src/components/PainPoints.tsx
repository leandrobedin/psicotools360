import React from 'react';

const PainPoints: React.FC = () => {
  return (
    <section className="py-16 px-4 bg-[#faedcd]">
      <div className="container mx-auto max-w-3xl">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-[#2e2e2e] mb-8">
          Horas perdidas, pacientes desmotivados… soa familiar?
        </h2>
        
        <div className="space-y-4 text-lg text-[#2e2e2e] mb-10">
          <p className="flex items-start">
            <span className="w-3 h-3 rounded-full bg-[#d4a373] mt-1.5 mr-3 flex-shrink-0"></span>
            Você gasta noites adaptando fichas que o paciente nem devolve.
          </p>
          <p className="flex items-start">
            <span className="w-3 h-3 rounded-full bg-[#d4a373] mt-1.5 mr-3 flex-shrink-0"></span>
            Sente que o engajamento cai depois da 2.ª sessão on-line.
          </p>
          <p className="flex items-start">
            <span className="w-3 h-3 rounded-full bg-[#d4a373] mt-1.5 mr-3 flex-shrink-0"></span>
            Falta variedade para lidar com demandas de ansiedade, DBT, habilidades sociais.
          </p>
          <p className="flex items-start">
            <span className="w-3 h-3 rounded-full bg-[#d4a373] mt-1.5 mr-3 flex-shrink-0"></span>
            PDFs estáticos não levam sua marca e acredite, eles viram prints no WhatsApp do paciente.
          </p>
          <p className="flex items-start">
            <span className="w-3 h-3 rounded-full bg-[#d4a373] mt-1.5 mr-3 flex-shrink-0"></span>
            Tudo isso reduz adesão, alonga o tratamento e compromete seus resultados.
          </p>
        </div>
        
        <p className="text-xl font-medium text-center text-[#2e2e2e]">
          A boa notícia? <span className="font-bold">Existe um atalho ⚡</span>
        </p>
      </div>
    </section>
  );
};

export default PainPoints;