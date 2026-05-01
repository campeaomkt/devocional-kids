/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { 
  Check, 
  ChevronDown, 
  Mail, 
  Printer, 
  Smile, 
  BookOpen, 
  Heart, 
  Users, 
  Star,
  ShieldCheck,
  Zap,
  ArrowRight
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import React, { useState } from 'react';

// Reusable Components
const CTAButton = ({ className = '', children, onClick = () => {} }: { className?: string, children: React.ReactNode, onClick?: () => void }) => (
  <motion.button
    whileHover={{ y: -2 }}
    whileTap={{ y: 0 }}
    onClick={onClick}
    className={`bg-green-500 hover:bg-green-600 text-white font-black py-4 px-6 md:px-10 rounded-2xl md:rounded-3xl shadow-xl shadow-green-100 border-b-4 border-green-700 text-lg md:text-2xl uppercase tracking-tight transition-all cursor-pointer ${className}`}
  >
    {children}
  </motion.button>
);

const SectionTitle = ({ children, subtitle }: { children: React.ReactNode, subtitle?: string }) => (
  <div className="text-center mb-10 md:mb-16 px-4">
    <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-sky-900 leading-[0.95] tracking-tighter italic mb-4">{children}</h2>
    {subtitle && <p className="text-base md:text-lg text-sky-800 font-medium max-w-2xl mx-auto opacity-80">{subtitle}</p>}
  </div>
);

const FAQItem = ({ question, answer }: { question: string, answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-2 border-sky-100 rounded-2xl md:rounded-[32px] mb-4 overflow-hidden bg-white shadow-sm">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-4 md:p-6 text-left font-bold text-sky-900 hover:bg-sky-50 transition-colors"
      >
        <span className="text-base md:text-lg pr-4">{question}</span>
        <ChevronDown className={`transition-transform duration-300 text-sky-400 shrink-0 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <div className="p-4 md:p-6 text-sm md:text-base text-sky-800 font-medium border-t-2 border-sky-50 bg-sky-50/30">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function App() {
  const scrollToPricing = () => {
    document.getElementById('oferta')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-sky-50 font-sans text-sky-900 selection:bg-yellow-200">
      
      {/* Sticky Top Bar */}
      <div className="fixed bottom-0 w-full bg-sky-900 text-white px-4 py-3 z-50 flex flex-row justify-between items-center gap-2 border-t border-sky-400/20 shadow-2xl safe-area-bottom">
        <div className="flex flex-col">
          <p className="text-[10px] md:text-sm font-bold opacity-60 uppercase tracking-widest italic">Oferta Kids</p>
          <p className="text-sm md:text-base font-black text-yellow-400 leading-none">U$ 10,99</p>
        </div>
        <button 
          onClick={scrollToPricing}
          className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-2xl font-black text-xs md:text-sm uppercase border-b-4 border-orange-700 transition-all transform active:translate-y-1 shadow-lg shadow-orange-500/20"
        >
          GARANTIR ACESSO
        </button>
      </div>

      {/* Hero Section */}
      <section className="pt-8 md:pt-16 pb-16 md:pb-32 px-4 relative overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-10 md:gap-12 relative z-10">
          
          <div className="lg:w-3/5 space-y-6 text-center lg:text-left">
            <div className="inline-block bg-yellow-100 text-yellow-700 px-4 py-1 rounded-full font-bold text-[10px] md:text-xs uppercase tracking-widest border border-yellow-200">
              Discipulado Bíblico para Crianças
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-8xl font-black text-sky-900 leading-[0.9] tracking-tighter mb-4 md:mb-8">
              Plante a Palavra no <span className="text-orange-500 underline decoration-yellow-400">coração</span> do seu filho.
            </h1>
            <p className="text-lg md:text-2xl text-sky-800 font-medium max-w-2xl mx-auto lg:mx-0 opacity-90 leading-relaxed">
              Assuma o protagonismo espiritual da sua casa com um guia de 52 semanas, ensinando a Bíblia de forma simples e apaixonante.
            </p>
            
            <div className="flex flex-col md:flex-row items-center lg:items-start gap-6 md:gap-8 pt-4 md:pt-8">
              <CTAButton onClick={scrollToPricing} className="w-full md:w-auto">QUERO MEU ACESSO AGORA</CTAButton>
              <div className="flex flex-col items-center md:items-start">
                <span className="text-sky-900 font-bold text-[10px] uppercase opacity-60 italic tracking-widest">Oferta Vitalícia</span>
                <span className="text-sky-900 font-black text-2xl md:text-3xl">U$ 10,99</span>
              </div>
            </div>
          </div>

          <div className="lg:w-2/5 relative">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="relative w-full aspect-[4/5] bg-white rounded-[48px] shadow-2xl overflow-hidden border-[10px] border-white ring-1 ring-sky-200"
            >
              <div className="h-1/2 bg-yellow-400 flex flex-col items-center justify-center relative group overflow-hidden">
                <div className="absolute inset-0 flex flex-wrap opacity-10">
                  {[...Array(12)].map((_, i) => (
                    <div key={i} className="w-12 h-12 border border-yellow-900 rounded-full m-2"></div>
                  ))}
                </div>
                <div className="bg-white px-8 py-4 rounded-2xl shadow-lg border-b-4 border-gray-200 group-hover:scale-110 transition-transform">
                   <span className="text-4xl md:text-5xl font-black text-sky-900 italic">KIDS</span>
                </div>
                <span className="text-sky-900 font-black mt-4 tracking-[0.2em] uppercase text-xs">Devocional Bíblico</span>
              </div>
              <div className="p-8 space-y-4">
                <div className="h-4 w-2/3 bg-blue-50 rounded-full animate-pulse"></div>
                <div className="h-4 w-full bg-sky-50 rounded-full"></div>
                <div className="h-4 w-full bg-sky-50 rounded-full"></div>
                <div className="grid grid-cols-2 gap-4 mt-8">
                  <div className="aspect-square bg-sky-50 rounded-2xl border-2 border-dashed border-sky-100 flex items-center justify-center text-sky-200">
                    <BookOpen size={32} />
                  </div>
                  <div className="aspect-square bg-sky-50 rounded-2xl border-2 border-dashed border-sky-100 flex items-center justify-center text-sky-200">
                    <Heart size={32} />
                  </div>
                </div>
              </div>
              
              <div className="absolute -bottom-6 -left-6 bg-orange-500 text-white p-6 rounded-[32px] font-black shadow-xl rotate-3 border-b-4 border-orange-700 text-center min-w-[140px]">
                <span className="text-xs leading-none uppercase block opacity-80 mb-1">Apenas</span>
                <span className="text-3xl">U$ 10.99</span>
              </div>
            </motion.div>
          </div>

        </div>
      </section>

      {/* Social Proof Bar */}
      <div className="bg-sky-900 py-6 px-4 md:px-10 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-4 text-white">
          <div className="flex -space-x-4">
            <div className="w-12 h-12 rounded-full border-4 border-sky-900 bg-blue-400 shadow-xl" />
            <div className="w-12 h-12 rounded-full border-4 border-sky-900 bg-yellow-400 shadow-xl" />
            <div className="w-12 h-12 rounded-full border-4 border-sky-900 bg-green-400 shadow-xl" />
          </div>
          <p className="text-sm md:text-base font-black italic tracking-wide uppercase">+ de 35.000 famílias transformadas</p>
        </div>
        <div className="text-sky-300 text-[10px] md:text-xs font-black uppercase tracking-[0.2em] text-center md:text-right">
          Acesso Vitalício • Formato Digital PDF • Garantia Total
        </div>
      </div>

      {/* Features Section */}
      <section className="py-16 md:py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionTitle>Simples, Prático e Educativo</SectionTitle>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {[
              { emoji: "📖", title: "Chega no E-mail", desc: "Acesso instantâneo após a confirmação. Comece hoje mesmo o discipulado.", bg: "bg-blue-50" },
              { emoji: "🎨", title: "Pode Imprimir", desc: "Material em PDF de alta qualidade. Imprima quantas vezes quiser para seus filhos.", bg: "bg-green-50" },
              { emoji: "✨", title: "Hora da Diversão", desc: "Atividades lúdicas que ensinam valores bíblicos para a vida toda.", bg: "bg-orange-50" }
            ].map((f, i) => (
              <div key={i} className="p-8 md:p-10 rounded-[32px] md:rounded-[40px] border-2 border-sky-50 bg-white shadow-xl hover:shadow-2xl transition-all group hover:-translate-y-2">
                <div className={`w-16 h-16 md:w-20 md:h-20 ${f.bg} rounded-2xl md:rounded-3xl flex items-center justify-center text-3xl md:text-4xl mb-6 md:mb-8 group-hover:scale-110 transition-transform`}>
                  {f.emoji}
                </div>
                <h3 className="text-xl md:text-2xl font-black text-sky-900 italic mb-4">{f.title}</h3>
                <p className="text-sm md:text-base text-sky-800 font-medium leading-relaxed opacity-70">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 md:py-24 bg-sky-50 px-4">
        <div className="max-w-5xl mx-auto">
          <SectionTitle>O que é o Devocional Kids?</SectionTitle>
          
          <div className="bg-white p-8 md:p-16 rounded-[32px] md:rounded-[48px] shadow-2xl border-2 border-sky-100 flex flex-col md:flex-row gap-10 md:gap-12 items-center">
             <div className="w-full md:w-1/2 space-y-4 md:space-y-6 text-base md:text-lg font-medium text-sky-800 leading-relaxed text-center md:text-left">
               <p className="font-black text-sky-900 text-xl md:text-2xl italic leading-tight">Assuma o papel de discipular seus filhos na Palavra de Deus.</p>
               <p>Uma proposta simples: uma história da Bíblia por semana, ensinada de forma clara e intencional. Ao longo de 52 semanas, a criança percorre toda a narrativa bíblica.</p>
               <p>Em um mundo onde as crianças são ensinadas por todos, o Devocional Kids devolve aos pais o protagonismo espiritual.</p>
             </div>
             <div className="w-full md:w-1/2 grid grid-cols-1 gap-3 md:gap-4">
                {[
                  { text: "52 Devocionais Cronológicos", sub: "Do Gênesis ao Apocalipse" },
                  { text: "52 Desenhos Bíblicos", sub: "Atividades práticas e lúdicas" },
                  { text: "Linguagem Acessível", sub: "Para crianças de todas as idades" },
                  { text: "Acesso Vitalício", sub: "Adquira uma vez, use para sempre" }
                ].map((item, i) => (
                  <div key={i} className="bg-sky-50/50 p-6 rounded-3xl flex items-start gap-4 border border-sky-100">
                    <div className="w-10 h-10 bg-green-500 rounded-2xl flex items-center justify-center text-white shrink-0 shadow-lg shadow-green-100">
                      <Check size={20} strokeWidth={4} />
                    </div>
                    <div>
                      <p className="font-black text-sky-900 uppercase text-sm tracking-tight">{item.text}</p>
                      <p className="text-xs text-sky-600 font-bold italic">{item.sub}</p>
                    </div>
                  </div>
                ))}
             </div>
          </div>
        </div>
      </section>

      {/* Bonuses Section */}
      <section className="py-24 px-4 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="bg-orange-100 text-orange-600 text-[10px] md:text-xs font-black uppercase px-4 py-1 rounded-full inline-block mb-4 tracking-widest border border-orange-200">
              Presentes Exclusivos
            </span>
            <SectionTitle subtitle="Adquirindo hoje, você recebe gratuitamente estes 3 materiais complementares para acelerar o aprendizado do seu filho.">
              Bônus Especiais para Você
            </SectionTitle>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                title: "Alfabeto Bíblico", 
                desc: "Ensina o alfabeto de A a Z com personagens e versículos bíblicos marcantes.", 
                emoji: "🅰️",
                originalPrice: "U$ 17,00"
              },
              { 
                title: "Andando com Jesus", 
                desc: "Um livro lúdico que conta a história da vida de Cristo de forma interativa e cativante.", 
                emoji: "✝️",
                originalPrice: "U$ 27,00"
              },
              { 
                title: "Os Nomes dos Animais", 
                desc: "Interatividade onde as crianças descobrem os nomes dos animais criados por Deus.", 
                emoji: "🦁",
                originalPrice: "U$ 17,00"
              }
            ].map((bonus, i) => (
              <div key={i} className="p-8 md:p-10 rounded-[32px] md:rounded-[40px] bg-sky-50 border-2 border-sky-100 relative overflow-hidden group hover:-translate-y-2 transition-all shadow-lg flex flex-col h-full">
                <div className="absolute top-6 right-6 bg-green-500 text-white text-[9px] md:text-[10px] font-black px-3 py-1 rounded-full shadow-lg">GRÁTIS</div>
                <div className="w-16 h-16 md:w-20 md:h-20 bg-white rounded-[24px] md:rounded-[32px] mb-6 shadow-md flex items-center justify-center text-3xl md:text-4xl group-hover:scale-110 transition-transform border border-sky-100">
                   {bonus.emoji}
                </div>
                <h4 className="text-lg md:text-xl font-black text-sky-900 border-b-2 border-sky-200 pb-2 mb-4 italic uppercase tracking-tight">#BÔNUS {i + 1}</h4>
                <p className="font-black text-sky-900 text-base md:text-lg mb-2">{bonus.title}</p>
                <p className="text-sky-800 font-medium text-sm md:text-base opacity-70 leading-relaxed mb-8">{bonus.desc}</p>
                <div className="mt-auto pt-4 border-t border-sky-200/50 flex justify-between items-center italic">
                  <span className="text-[9px] md:text-[10px] font-bold text-sky-400 uppercase tracking-widest">Valor Original</span>
                  <span className="text-xs md:text-sm font-black text-sky-900 line-through opacity-40">{bonus.originalPrice}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Offer/Pricing Section */}
      <section id="oferta" className="py-16 md:py-24 bg-sky-900 px-4 overflow-hidden relative">
        <div className="max-w-4xl mx-auto relative z-10 text-center mb-10 md:mb-16">
          <span className="text-yellow-400 font-black uppercase tracking-[0.3em] text-[10px] md:text-sm mb-4 block italic">Oferta por tempo limitado</span>
          <h2 className="text-white text-4xl md:text-7xl font-black mb-4 tracking-tighter leading-none italic">Garanta seu Acesso Agora</h2>
        </div>

        <div className="max-w-4xl mx-auto bg-white rounded-[32px] md:rounded-[48px] p-6 md:p-16 shadow-2xl relative overflow-hidden border-[6px] md:border-[12px] border-sky-800/20">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 md:gap-12 items-center">
            <div className="lg:col-span-3 space-y-6">
               <h3 className="text-sky-900 text-lg md:text-xl font-black uppercase tracking-tight italic border-b-4 border-sky-100 pb-2 inline-block">Plano Kids Completo</h3>
               <ul className="space-y-3 md:space-y-4">
                  {[
                    "52 Devocionais em Ordem Cronológica",
                    "52 Desenhos para Colorir Inclusos",
                    "Acesso Imediato e Vitalício ao PDF",
                    "7 Dias de Garantia Incondicional",
                    "BÔNUS: Alfabeto Bíblico Ilustrado",
                    "BÔNUS: Coleção Nomes dos Animais"
                  ].map((item, i) => (
                    <li key={i} className="flex gap-3 items-center group">
                      <div className="w-6 h-6 bg-sky-100 rounded-lg flex items-center justify-center text-sky-900 group-hover:bg-green-500 group-hover:text-white transition-colors">
                        <Check size={14} strokeWidth={4} />
                      </div>
                      <span className={`text-sm font-bold ${item.startsWith('BÔNUS') ? 'text-orange-500 italic' : 'text-sky-800'}`}>{item}</span>
                    </li>
                  ))}
               </ul>
            </div>

            <div className="lg:col-span-2 flex flex-col items-center bg-sky-50 rounded-3xl md:rounded-[40px] p-6 md:p-8 border-2 border-sky-100 italic">
              <span className="text-sky-400 font-bold uppercase tracking-widest text-[9px] md:text-[10px] mb-4 md:mb-6">Investimento Único</span>
              <div className="mb-2 flex flex-col items-center">
                <span className="text-sky-900/30 line-through text-lg md:text-xl font-black italic">U$ 59,90</span>
                <span className="text-5xl md:text-7xl font-black text-sky-900 leading-none tracking-tighter">U$ 10.99</span>
              </div>
              <span className="text-base md:text-lg font-black text-sky-900 mb-6 md:mb-8 uppercase tracking-widest">vigo</span>
              <button 
                onClick={() => alert("Checkout placeholder...")}
                className="w-full bg-orange-500 hover:bg-orange-600 text-white font-black py-5 rounded-2xl shadow-xl shadow-orange-100 border-b-4 border-orange-700 text-xl uppercase tracking-tighter transition-all active:translate-y-1"
              >
                APROVEITAR AGORA
              </button>
              <div className="flex flex-col items-center gap-2 mt-6 opacity-40">
                 <div className="flex items-center gap-2">
                    <ShieldCheck size={14} className="text-sky-900" />
                    <span className="text-[10px] font-black uppercase text-sky-900">Garantia de 7 Dias</span>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Guarantee Section */}
      <section className="py-24 bg-white px-4 relative overflow-hidden">
        <div className="max-w-5xl mx-auto">
          <div className="bg-sky-50 rounded-[48px] p-8 md:p-16 border-2 border-sky-100 flex flex-col md:flex-row items-center gap-12 shadow-2xl relative">
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-yellow-400 rounded-full opacity-10 blur-3xl" />
            
            <div className="w-full md:w-1/3 flex justify-center relative">
              <div className="relative group">
                <div className="w-48 h-48 md:w-56 md:h-56 bg-white rounded-full flex flex-col items-center justify-center shadow-2xl border-8 border-sky-900 relative z-10 group-hover:scale-105 transition-transform duration-500">
                  <span className="text-sky-900 font-black text-5xl md:text-6xl italic leading-none">07</span>
                  <span className="text-sky-900 font-black text-xs md:text-sm uppercase tracking-[0.2em] mt-1">Dias</span>
                  <div className="absolute -bottom-4 bg-yellow-400 text-yellow-900 font-black px-4 py-1 rounded-full text-[10px] md:text-xs shadow-lg uppercase border-2 border-yellow-600">Garantido</div>
                </div>
                {/* Decorative rays */}
                <div className="absolute inset-0 bg-yellow-400/20 rounded-full blur-2xl group-hover:scale-125 transition-transform duration-700" />
              </div>
            </div>

            <div className="w-full md:w-2/3 space-y-6 text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-black text-sky-900 italic tracking-tighter leading-none">Risco Zero: <br /><span className="text-orange-500">Garantia Blindada</span></h2>
              <p className="text-sky-800 font-medium text-lg leading-relaxed opacity-90">
                Seu investimento está 100% seguro. Se por qualquer motivo você achar que o <span className="font-bold text-sky-900">Devocional Kids</span> não é para você ou seu filho, basta nos enviar um e-mail em até 7 dias. 
              </p>
              <p className="text-sky-800 font-black text-xl italic italic">
                Devolovemos todo o seu dinheiro, sem perguntas e sem letras miúdas.
              </p>
              <div className="flex items-center justify-center md:justify-start gap-4">
                <ShieldCheck size={24} className="text-green-500" />
                <span className="text-xs font-black text-sky-900 uppercase tracking-widest italic opacity-60">Satisfação Total ou Reembolso</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 px-4">
        <div className="max-w-3xl mx-auto">
          <SectionTitle>Dúvidas Frequentes</SectionTitle>
          <div className="space-y-4">
            <FAQItem 
              question="O material é digital ou físico?" 
              answer="O Devocional Kids é um produto 100% DIGITAL em formato PDF. Você recebe no seu e-mail para imprimir em casa ou ver no tablet." 
            />
            <FAQItem 
              question="Qual a idade recomendada?" 
              answer="Indicado para crianças de 3 a 10 anos. A linguagem é simples e as atividades envolvem todas as idades." 
            />
            <FAQItem 
              question="Posso imprimir mais de uma vez?" 
              answer="Sim! O arquivo é seu para sempre. Você pode imprimir quantas vezes precisar para seus filhos ou alunos." 
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-sky-900 text-sky-300 py-16 px-4">
         <div className="max-w-7xl mx-auto text-center space-y-8">
            <div className="flex items-center justify-center gap-3 mb-8">
               <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center border-2 border-yellow-600">
                  <span className="text-yellow-900 font-bold">DK</span>
               </div>
               <h4 className="text-2xl font-black text-white italic tracking-tighter">Devocional Kids</h4>
            </div>
            
            <div className="flex justify-center gap-8 text-[11px] font-black uppercase tracking-[0.2em] border-t border-sky-800 pt-8">
               <a href="#" className="hover:text-white transition-colors">Políticas</a>
               <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
               <a href="#" className="hover:text-white transition-colors">Contato</a>
            </div>
            
            <p className="text-[10px] opacity-40 max-w-2xl mx-auto italic">
              Este site não é afiliado ao Facebook. Todos os direitos reservados © 2026 Devocional Kids.
            </p>
         </div>
      </footer>

    </div>
  );
}
