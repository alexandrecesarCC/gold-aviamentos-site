import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { COMPANY, STATS, WHATSAPP_MESSAGE } from '@/lib/constants';
import { Button } from './Button';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

const HERO_BG = 'https://i.ibb.co/C5dNPGzs/card-soft-template-paper-report.jpg';
const LOGO_URL = 'https://i.ibb.co/YFVJFYfS/03e18484-8673-463a-a5e3-3c94e80448db.png';

export function Hero() {
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);

  // Escuta o evento emitido pelo Nav.tsx
  useEffect(() => {
    const handleToggle = (e: any) => setIsSidebarExpanded(e.detail);
    window.addEventListener('sidebarToggle', handleToggle);
    return () => window.removeEventListener('sidebarToggle', handleToggle);
  }, []);

  const handleBudgetClick = () => {
    const message = WHATSAPP_MESSAGE('Gostaria de fazer um orçamento com a Gold Aviamentos.');
    window.open(message, '_blank');
  };

  const handleProductsClick = () => {
    const element = document.getElementById('produtos');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      // Aplicado font-sans globalmente na seção para padronizar a tipografia limpa
      className="relative min-h-screen w-full overflow-hidden bg-white flex items-center pt-20 font-sans"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${HERO_BG})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      />

      {/* Espaçador para a Sidebar no Desktop */}
      <div className="hidden md:block md:w-16" />

      {/* Content Container - Centralizado no espaço restante */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-4 py-20 text-center">
        
        {/* Logo Centralizada - Oculta em Mobile (hidden) e Visível em Desktop (md:block) */}
        <motion.div
          animate={{ 
            opacity: isSidebarExpanded ? 0 : 1,
            scale: isSidebarExpanded ? 0.8 : 1
          }}
          transition={{ duration: 0.3 }}
          className={cn(
            "hidden md:block mb-8 -mt-20 md:-mt-32", 
            isSidebarExpanded && "pointer-events-none"
          )}
        >
          <img 
            src={LOGO_URL} 
            alt="Gold Aviamentos" 
            className="h-16 md:h-24 w-auto drop-shadow-2xl" 
          />
        </motion.div>

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8 inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-[rgba(212,175,55,0.3)] bg-[rgba(212,175,55,0.08)] backdrop-blur-sm max-w-3xl"
        >
          <div className="w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse flex-shrink-0" />
          <span className="text-sm md:text-base text-[#D4AF37] font-normal tracking-wide">
            Há mais de uma década oferecendo variedade, agilidade e confiança para confeccionistas. 
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-3xl md:text-5xl lg:text-[3.25rem] font-medium tracking-wide leading-tight mb-6 text-white max-w-4xl mx-auto"
        >
          Quando sua produção não pode parar, <span className="text-[#D4AF37]">escolha quem entrega.</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-base md:text-lg text-white/90 font-light leading-relaxed mb-10 max-w-2xl mx-auto tracking-wide"
        >
          Fitas, botões, zíperes, rendas, apliques, laços, tiaras e mais de 3 mil itens para confecções, facções, revendedores e empreendedores que precisam de agilidade, padrão e pronta entrega.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
        >
          <Button variant="red" size="lg" onClick={handleBudgetClick}>
            Fazer orçamento
          </Button>
          <Button
            variant="ghost-gold"
            size="lg"
            onClick={handleProductsClick}
            className="flex items-center justify-center gap-2"
          >
            Ver produtos
          </Button>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {STATS.map((stat, index) => (
            <div
              key={index}
              className="p-4 rounded-lg border border-[rgba(212,175,55,0.2)] bg-white/10 backdrop-blur-md shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="text-2xl md:text-3xl font-medium text-[#D4AF37] tracking-wider mb-1">{stat.value}</div>
              <div className="text-sm font-light tracking-wide text-white/80">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}