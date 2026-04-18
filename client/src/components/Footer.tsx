import { motion } from 'framer-motion';

const LOGO_URL = 'https://i.ibb.co/Kc4shjRx/Gemini-Generated-Image-mbq2mrmbq2mrmbq2.png';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-12 md:py-16 bg-white border-t border-[rgba(212,175,55,0.15)]">
      <div className="container max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center justify-between gap-8"
        >
          {/* Logo */}
          <div className="flex-shrink-0">
            <img src={LOGO_URL} alt="Gold Aviamentos" className="h-8 md:h-10 w-auto" />
          </div>

          {/* Copyright */}
          <div className="text-center">
            <p className="text-sm text-[rgba(26,26,26,0.6)]">
              © {currentYear} Gold Aviamentos. Todos os direitos reservados.
            </p>
          </div>

          {/* Credits */}
          <div className="text-center md:text-right">
            <p className="text-sm text-[rgba(26,26,26,0.6)]">
              Desenvolvido por{' '}
              <a
                href="https://linkedin.com/in/alexandrecesardev"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#D4AF37] hover:text-[#8B0000] transition-colors"
              >
                Alexandre César - Bangor Tech
              </a>
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
