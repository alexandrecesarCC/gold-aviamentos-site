import { motion } from 'framer-motion';
import { COMPANY } from '@/lib/constants';
import { SectionLabel } from './SectionLabel';
import { Button } from './Button';
import { MapPin, Clock, MessageCircle } from 'lucide-react';

export function Contato() {
  const handleWhatsApp = () => {
    const message = 'Olá! Gostaria de falar com a Gold Aviamentos.';
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${COMPANY.whatsapp}?text=${encodedMessage}`, '_blank');
  };

  const infoCards = [
    {
      icon: MessageCircle,
      label: 'WhatsApp',
      value: COMPANY.whatsapp,
      action: handleWhatsApp,
    },
    {
      icon: Clock,
      label: 'Horário',
      value: COMPANY.hours,
    },
    {
      icon: MapPin,
      label: 'Localização',
      value: COMPANY.address,
    },
  ];

  return (
    <section id="contato" className="relative py-20 md:py-32 bg-[#F8F8F8] font-sans">
      <div className="container max-w-4xl mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <SectionLabel>Contato</SectionLabel>
          <h2 className="text-3xl md:text-5xl font-medium tracking-wide leading-tight mb-4 text-[#1A1A1A]">
            Seu próximo fornecedor{' '}
            <span className="text-[#D4AF37]">está a uma mensagem.</span>
          </h2>
          <p className="text-base md:text-lg font-light tracking-wide text-[rgba(26,26,26,0.7)] max-w-2xl mx-auto">
            Sem formulário, sem espera e sem burocracia. Fale direto com nossa equipe no WhatsApp e receba atendimento 
            rápido, sem atraso.
          </p>
        </motion.div>

        {/* Main CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="mb-12 max-w-md mx-auto"
        >
          <Button
            variant="whatsapp"
            size="lg"
            onClick={handleWhatsApp}
            className="w-full flex items-center justify-center gap-3 text-lg"
          >
            {/* Ícone do WhatsApp Corrigido e Simétrico */}
            <svg 
              className="w-6 h-6" 
              fill="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12.031 0C5.385 0 0 5.385 0 12.031c0 2.122.553 4.195 1.605 6.01L0 24l6.115-1.605A11.956 11.956 0 0012.031 24c6.646 0 12.031-5.385 12.031-12.031S18.677 0 12.031 0zm0 22.015c-1.802 0-3.567-.485-5.116-1.404l-.367-.218-3.8.997 1.015-3.705-.24-.381A9.972 9.972 0 012.015 12.03c0-5.54 4.507-10.047 10.046-10.047 5.54 0 10.047 4.507 10.047 10.047s-4.507 10.015-10.077 10.015h-.001zm5.342-7.306c-.293-.147-1.733-.855-2.001-.952-.268-.098-.464-.147-.659.147-.195.293-.757.952-.928 1.147-.171.195-.342.22-.635.073-.293-.147-1.238-.456-2.358-1.454-.871-.776-1.46-1.735-1.631-2.029-.171-.293-.018-.452.129-.599.132-.132.293-.342.439-.513.147-.171.195-.293.293-.489.098-.195.049-.366-.024-.513-.073-.147-.659-1.589-.903-2.176-.239-.575-.483-.497-.659-.506-.171-.009-.366-.009-.561-.009-.195 0-.512.073-.781.366-.268.293-1.025.999-1.025 2.438 0 1.439 1.049 2.83 1.195 3.025.147.195 2.062 3.149 4.996 4.417.698.303 1.242.483 1.666.618.7.224 1.338.192 1.84.116.564-.085 1.733-.708 1.977-1.392.244-.683.244-1.269.171-1.392-.073-.122-.268-.195-.561-.342z" />
            </svg>
            Falar no WhatsApp agora
          </Button>
        </motion.div>

        {/* Info Cards */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {infoCards.map((card, index) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={index}
                whileHover={{ y: -4 }}
                className="p-6 rounded-2xl border border-[rgba(212,175,55,0.2)] bg-white hover:border-[#D4AF37] hover:shadow-xl transition-all duration-300 text-center cursor-pointer"
                onClick={card.action}
              >
                <div className="flex justify-center mb-4">
                  <Icon className="w-8 h-8 text-[#D4AF37]" strokeWidth={1.5} />
                </div>
                <h3 className="text-sm font-medium text-[#D4AF37] mb-2 uppercase tracking-widest">
                  {card.label}
                </h3>
                <p className="text-[rgba(26,26,26,0.8)] font-light tracking-wide">{card.value}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}