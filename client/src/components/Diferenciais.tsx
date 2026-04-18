import { motion } from 'framer-motion';
import { DIFFERENTIALS } from '@/lib/constants';
import { SectionLabel } from './SectionLabel';

export function Diferenciais() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="diferenciais" className="relative py-20 md:py-32 bg-[#F8F8F8] font-sans">
      <div className="container max-w-6xl mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <SectionLabel>Por que a Gold</SectionLabel>
          
          {/* Título: Reduzido o peso para font-medium, aplicado tracking e limite de largura */}
          <h2 className="text-3xl md:text-5xl font-medium tracking-wide leading-tight text-[#1A1A1A] max-w-4xl mx-auto">
            Por que confeccionistas e revendedores escolhem a{' '}
            <span className="text-[#8B0000]">Gold Aviamentos</span>
          </h2>
        </motion.div>

        {/* Differentials Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12"
        >
          {DIFFERENTIALS.map((diff) => (
            <motion.div
              key={diff.number}
              variants={itemVariants}
              className="group relative pb-4"
            >
              {/* Number - Peso reduzido de bold para medium para maior elegância */}
              <div className="mb-6">
                <span className="text-6xl md:text-7xl font-medium text-[rgba(212,175,55,0.2)] group-hover:text-[rgba(212,175,55,0.4)] transition-colors duration-300">
                  {diff.number}
                </span>
              </div>

              {/* Content */}
              <div>
                {/* Título do Card */}
                <h3 className="text-xl md:text-2xl font-medium tracking-wide text-[#1A1A1A] mb-3">
                  {diff.title}
                </h3>
                {/* Descrição do Card - Fonte mais leve e espaçada */}
                <p className="text-base font-light tracking-wide text-[rgba(26,26,26,0.7)] leading-relaxed">
                  {diff.description}
                </p>
              </div>

              {/* Border Bottom - Ajustada para ficar um pouco mais abaixo do texto */}
              <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-[rgba(212,175,55,0.25)] to-transparent" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}