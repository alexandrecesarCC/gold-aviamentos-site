import { motion } from 'framer-motion';
import { PRODUCTS } from '@/lib/constants';
import { SectionLabel } from './SectionLabel';

const PRODUCT_IMAGES = [
  'https://d2xsxph8kpxj0f.cloudfront.net/310519663435430073/5pUq2QnMQgohfQisJbMSuR/product-threads-light-FHEC358i92TYDrMiL8NSqc.webp',
  'https://d2xsxph8kpxj0f.cloudfront.net/310519663435430073/5pUq2QnMQgohfQisJbMSuR/product-buttons-light-XFWQ6mfxVV4qerY2KKNK6W.webp',
  'https://d2xsxph8kpxj0f.cloudfront.net/310519663435430073/5pUq2QnMQgohfQisJbMSuR/product-zippers-light-oRfFnUN6rsAsoa69rpks6m.webp',
  'https://d2xsxph8kpxj0f.cloudfront.net/310519663435430073/5pUq2QnMQgohfQisJbMSuR/product-threads-light-FHEC358i92TYDrMiL8NSqc.webp',
  'https://d2xsxph8kpxj0f.cloudfront.net/310519663435430073/5pUq2QnMQgohfQisJbMSuR/product-buttons-light-XFWQ6mfxVV4qerY2KKNK6W.webp',
  'https://d2xsxph8kpxj0f.cloudfront.net/310519663435430073/5pUq2QnMQgohfQisJbMSuR/product-zippers-light-oRfFnUN6rsAsoa69rpks6m.webp',
  'https://d2xsxph8kpxj0f.cloudfront.net/310519663435430073/5pUq2QnMQgohfQisJbMSuR/product-threads-light-FHEC358i92TYDrMiL8NSqc.webp',
  'https://d2xsxph8kpxj0f.cloudfront.net/310519663435430073/5pUq2QnMQgohfQisJbMSuR/product-buttons-light-XFWQ6mfxVV4qerY2KKNK6W.webp',
];

export function Produtos() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="produtos" className="relative py-20 md:py-32 bg-white font-sans">
      <div className="container max-w-6xl mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <SectionLabel>Nosso Catálogo</SectionLabel>
          
          {/* Título com tipografia refinada e tracking-wide */}
          <h2 className="text-3xl md:text-5xl font-medium tracking-wide leading-tight mb-4 text-[#1A1A1A] max-w-4xl mx-auto">
            Um catálogo completo para{' '}
            <span className="text-[#D4AF37]">manter sua produção em movimento.</span>
          </h2>
          
          {/* Subtítulo mais leve para contraste visual */}
          <p className="text-base md:text-lg font-light tracking-wide text-[rgba(26,26,26,0.7)] max-w-2xl mx-auto">
            Estoque amplo, pronta entrega e uma linha completa de aviamentos para quem trabalha com prazo, produção e resultado.
          </p>
        </motion.div>

        {/* Products Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6"
        >
          {PRODUCTS.map((product, index) => (
            <motion.div
              key={product.id}
              variants={itemVariants}
              className="group relative overflow-hidden rounded-2xl border border-[rgba(212,175,55,0.2)] bg-white hover:border-[#D4AF37] hover:shadow-xl transition-all duration-300 cursor-pointer"
            >
              {/* Product Image Container */}
              <div className="relative w-full aspect-square overflow-hidden bg-[#F8F8F8]">
                
                <img
                  src={PRODUCT_IMAGES[index % PRODUCT_IMAGES.length]}
                  alt={product.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                
                {/* DEGRADÊ SOFISTICADO: Sempre visível, escuro na base sumindo para o topo */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10" />
              </div>

              {/* Product Info (Reposicionado e alterado para Branco) */}
              <div className="absolute inset-x-0 bottom-0 flex flex-col justify-end p-4 md:p-5 z-20">
                <h3 className="text-base md:text-lg font-medium tracking-wide text-white mb-1 drop-shadow-md">
                  {product.title}
                </h3>
                <p className="text-xs md:text-sm font-light tracking-wide text-white/80 line-clamp-2">
                  {product.description}
                </p>
              </div>

            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}