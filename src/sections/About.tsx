import React, { useState } from 'react';
import { ScrollReveal } from '../components/ScrollReveal';

interface AccordionItem {
  id: string;
  title: string;
  content: React.ReactNode;
}

export const About: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  const accordionItems: AccordionItem[] = [
    {
      id: 'significado-nome-maik',
      title: 'QUAL O SIGNIFICADO DO NOME MAIK?',
      content: (
        <div className="space-y-4">
          <p>
            O nome MAIK carrega um significado muito especial: “Quem é como Deus?” — uma pergunta que expressa fé, reconhecimento e confiança na grandeza de Deus. Esse nome representa a certeza de que ninguém é como Deus, e que foi Ele quem conduziu cada passo dessa história, unindo sonhos, abrindo caminhos e permitindo que tudo acontecesse no momento certo.
          </p>
          <p>
            A MAIK Café e Donuts nasceu com o propósito de ser mais do que uma cafeteria: um lugar onde sonhos se encontram, onde cada detalhe é preparado com carinho e onde cada cliente pode viver momentos especiais ao redor de um bom café e donuts fresquinhos.
          </p>
        </div>
      ),
    },
    {
      id: 'como-a-maik-surgiu',
      title: 'COMO A MAIK SURGIU?',
      content: (
        <div className="space-y-4">
          <p>
            A loja surgiu a partir de um sonho que já existia no coração há muitos anos. Há cerca de 10 anos, eu atuo na confeitaria, trabalhando de forma artesanal e atendendo inicialmente por delivery em casa, onde os donuts começaram a ser preparados com dedicação, estudo e muito cuidado em cada detalhe.
          </p>
          <p>
            Com o tempo, o delivery cresceu e conquistou muitos clientes, fortalecendo ainda mais o desejo de levar esses produtos para um espaço físico, onde as pessoas pudessem viver uma experiência completa.
          </p>
          <p>
            Nesse caminho, Deus colocou uma amiga muito querida, que também tinha o sonho de abrir uma cafeteria e o amor pelo café. Ao perceber que nossos sonhos se completavam — o meu com os donuts e o dela com o café — decidimos unir nossos propósitos e transformar esse sonho em realidade.
          </p>
          <p className="font-semibold text-[#34251F]">
            Assim nasceu a MAIK Café e Donuts, resultado da união de sonhos, fé e coragem para dar um novo passo.
          </p>
        </div>
      ),
    },
    {
      id: 'o-que-torna-os-donuts-especiais',
      title: 'O QUE TORNA OS DONUTS DA MAIK ESPECIAIS?',
      content: (
        <div className="space-y-4">
          <p>
            O que torna os donuts da MAIK Café e Donuts especiais é o cuidado em cada etapa da produção.
          </p>
          <div>
            <p className="font-semibold text-[#34251F] mb-2">Os donuts são:</p>
            <ul className="space-y-2 pl-2">
              <li className="flex items-start gap-2">
                <span className="text-[#D97D9E] font-bold select-none">•</span>
                <span>Feitos artesanalmente todos os dias</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#D97D9E] font-bold select-none">•</span>
                <span>Produzidos com ingredientes de qualidade</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#D97D9E] font-bold select-none">•</span>
                <span>Preparados com receitas estudadas e testadas cuidadosamente</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#D97D9E] font-bold select-none">•</span>
                <span>Pensados para ter textura macia, sabor equilibrado e recheios que combinam perfeitamente</span>
              </li>
            </ul>
          </div>
          <p>
            Por não serem industrializados, cada donut é feito manualmente, com carinho e atenção aos detalhes, trazendo o sabor caseiro que lembra aconchego e qualidade.
          </p>
          <p className="font-semibold text-[#34251F]">
            Mais do que um produto, cada donut representa dedicação, amor pela confeitaria e o desejo de oferecer sempre o melhor para cada cliente.
          </p>
        </div>
      ),
    },
  ];

  return (
    <section id="sobre" className="py-16 md:py-24 bg-[#FAF8F5]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Section Header: SOBRE A MAIK */}
        <ScrollReveal>
          <div className="text-center mb-10 sm:mb-12">
            <span className="text-xs uppercase tracking-widest font-bold text-[#D97D9E]">
              Conheça Nossa Essência
            </span>
            <h2 className="mt-2 font-serif font-bold text-3xl sm:text-4xl md:text-5xl text-[#34251F] tracking-tight">
              SOBRE A MAIK
            </h2>
            <p className="mt-4 text-base sm:text-lg text-[#4A3028]/85 leading-relaxed font-normal max-w-2xl mx-auto">
              A Maik Café e Donuts é um lugar para aproveitar bons cafés, donuts especiais e transformar pequenos momentos da rotina em algo ainda mais gostoso.
            </p>
          </div>
        </ScrollReveal>

        {/* Clean Accordion Questions */}
        <div className="space-y-4">
          {accordionItems.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={item.id}
                id={`accordion-item-${item.id}`}
                className="bg-white rounded-2xl sm:rounded-3xl border border-[#F2D8E2] shadow-2xs overflow-hidden transition-all duration-300 hover:border-[#EAA5BA]"
              >
                <button
                  type="button"
                  id={`accordion-btn-${item.id}`}
                  aria-expanded={isOpen}
                  aria-controls={`accordion-panel-${item.id}`}
                  onClick={() => toggleAccordion(index)}
                  className="w-full px-6 sm:px-8 py-5 sm:py-6 flex items-center justify-between text-left gap-4 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D97D9E] focus-visible:ring-inset select-none"
                >
                  <span className="font-serif font-bold text-base sm:text-lg md:text-xl text-[#34251F] group-hover:text-[#D97D9E] transition-colors tracking-tight">
                    {item.title}
                  </span>
                  <span
                    aria-hidden="true"
                    className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#FAF8F5] border border-[#F2D8E2] text-[#D97D9E] flex items-center justify-center shrink-0 text-xl font-normal leading-none transition-all duration-300 group-hover:bg-[#F8EEF2] group-hover:border-[#EAA5BA]"
                  >
                    {isOpen ? '−' : '+'}
                  </span>
                </button>

                <div
                  id={`accordion-panel-${item.id}`}
                  role="region"
                  aria-labelledby={`accordion-btn-${item.id}`}
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="pt-2 pb-6 sm:pb-8 px-6 sm:px-8 border-t border-[#F8EEF2] text-[#4A3028]/85 text-base sm:text-[17px] leading-relaxed">
                      {item.content}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
