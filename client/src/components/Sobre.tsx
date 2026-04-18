import { motion } from 'framer-motion';
import { COMPANY } from '@/lib/constants';
import { SectionLabel } from './SectionLabel';
import { Button } from './Button';

const COMPANY_IMAGE = 'https://i.ibb.co/sdvjnhg6/FOTO-MODA-CENTER.jpg';

export function Sobre() {
  const handleWhatsApp = () => {
    const message = 'Gostaria de falar com a equipe da Gold Aviamentos.';
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${COMPANY.whatsapp}?text=${encodedMessage}`, '_blank');
  };

  return (
    <section id="sobre" className="relative py-20 md:py-32 bg-white font-sans">
      <div className="container max-w-6xl mx-auto px-4">
        {/* Grid com items-stretch para garantir que as colunas tenham a mesma altura */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-stretch">
          
          {/* Coluna da Esquerda - Texto */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center"
          >
            <SectionLabel>Nossa história</SectionLabel>
            
            <h2 className="text-3xl md:text-5xl font-medium tracking-wide leading-tight mb-8 text-[#1A1A1A]">
              No centro de um dos maiores polos de confecção do Brasil.
            </h2>

            <div className="space-y-6 mb-8">
              {/* Adicionado 'text-justify' aos três parágrafos */}
              <p className="text-base md:text-lg text-[rgba(26,26,26,0.7)] leading-relaxed font-light tracking-wide text-justify">
                A Gold Aviamentos nasceu em Santa Cruz do Capibaribe, reconhecida como a Capital 
                da Moda e da Sulanca no Nordeste e sede do Moda Center Santa Cruz, um dos maiores 
                centros de confecções da América Latina.
              </p>

              <p className="text-base md:text-lg text-[rgba(26,26,26,0.7)] leading-relaxed font-light tracking-wide text-justify">
                Estar inserida nesse ambiente significa entender de perto a realidade de confeccionistas, 
                revendedores e pequenos empreendedores que dependem de agilidade, estoque e pronta entrega 
                para manter a produção em movimento.
              </p>

              <p className="text-base md:text-lg text-[rgba(26,26,26,0.7)] leading-relaxed font-light tracking-wide text-justify">
                Desde 2014, construímos nossa trajetória com base em confiança, variedade de produtos 
                e atendimento eficiente, acompanhando o ritmo de um mercado onde prazo, qualidade e disponibilidade 
                fazem toda a diferença.
              </p>
            </div>

            <div className="flex justify-start">
              <Button variant="ghost-gold" size="lg" onClick={handleWhatsApp} className="flex items-center gap-2">
                Falar com a equipe →
              </Button>
            </div>
          </motion.div>

          {/* Coluna da Direita - Imagem Expandida Verticalmente */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative min-h-[400px] md:min-h-full"
          >
            <div className="absolute inset-0 rounded-2xl overflow-hidden shadow-xl">
              <img
                src={COMPANY_IMAGE}
                alt="Equipe Gold Aviamentos"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[rgba(26,26,26,0.2)] via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Floating Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="absolute -bottom-6 -left-6 bg-white/90 backdrop-blur-md border border-[rgba(212,175,55,0.2)] rounded-2xl p-6 shadow-xl z-20"
            >
              <div className="flex items-center gap-4">
                <div>
                  <div className="text-3xl md:text-4xl font-medium tracking-wider text-[#D4AF37]">10+</div>
                  <div className="text-sm font-light tracking-wide text-[rgba(26,26,26,0.7)] mt-1">Anos de mercado</div>
                </div>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}