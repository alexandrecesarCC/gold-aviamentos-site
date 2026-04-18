import { 
  Menu, X, MessageCircle, Package, Award, Info, ChevronRight, ChevronLeft
} from 'lucide-react';
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { COMPANY } from '@/lib/constants';
import { Button } from './Button';
import { motion, AnimatePresence } from 'framer-motion';

const LOGO_URL = 'https://i.ibb.co/YFVJFYfS/03e18484-8673-463a-a5e3-3c94e80448db.png';

export function Nav() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const threshold = window.innerHeight - 10;
      const scrolled = window.scrollY >= threshold;
      setIsScrolled(scrolled);
      if (scrolled) setIsSidebarExpanded(false);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    window.dispatchEvent(new CustomEvent('sidebarToggle', { detail: isSidebarExpanded }));
  }, [isSidebarExpanded]);

  const navLinks = [
    { label: 'Produtos', href: '#produtos', icon: Package },
    { label: 'Diferenciais', href: '#diferenciais', icon: Award },
    { label: 'Sobre nós', href: '#sobre', icon: Info },
  ];

  const handleNavClick = (href: string) => {
    const id = href.replace('#', '');
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="font-sans antialiased subpixel-antialiased">
      {/* =================================================================
          MODO 1: TOP NAVBAR DESKTOP (VERMELHO VIVO / TEXTO ROBUSTO)
          ================================================================= */}
      <AnimatePresence>
        {isScrolled && (
          <motion.header
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="hidden md:flex fixed top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-7xl h-[72px] z-50 flex-row items-center justify-between px-10 rounded-2xl bg-gradient-to-r from-[#990000] via-[#cc0000] to-[#990000] border border-white/20 shadow-[0_12px_40px_rgba(0,0,0,0.4)]"
          >
            <div className="flex items-center gap-10">
              <img 
                src={LOGO_URL} 
                alt="Gold Aviamentos"
                className="h-10 w-auto object-contain cursor-pointer hover:scale-105 transition-transform" 
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} 
              />
              <nav className="flex items-center gap-8">
                {navLinks.map((link) => (
                  <button
                    key={link.href}
                    onClick={() => handleNavClick(link.href)}
                    className="text-white/90 hover:text-white text-[15px] font-semibold tracking-wide transition-all"
                  >
                    {link.label}
                  </button>
                ))}
              </nav>
            </div>

            <button
              onClick={() => window.open(`https://wa.me/${COMPANY.whatsapp}`, '_blank')}
              className="group flex items-center justify-center gap-3 bg-white px-6 py-3 rounded-full shadow-lg hover:bg-[#D4AF37] transition-all duration-300 transform hover:scale-105"
            >
              <svg 
                className="w-5 h-5 text-[#cc0000] group-hover:text-white transition-colors" 
                fill="currentColor" 
                viewBox="0 0 24 24"
              >
                <path d="M12.031 0C5.385 0 0 5.385 0 12.031c0 2.122.553 4.195 1.605 6.01L0 24l6.115-1.605A11.956 11.956 0 0012.031 24c6.646 0 12.031-5.385 12.031-12.031S18.677 0 12.031 0zm0 22.015c-1.802 0-3.567-.485-5.116-1.404l-.367-.218-3.8.997 1.015-3.705-.24-.381A9.972 9.972 0 012.015 12.03c0-5.54 4.507-10.047 10.046-10.047 5.54 0 10.047 4.507 10.047 10.047s-4.507 10.015-10.077 10.015h-.001zm5.342-7.306c-.293-.147-1.733-.855-2.001-.952-.268-.098-.464-.147-.659.147-.195.293-.757.952-.928 1.147-.171.195-.342.22-.635.073-.293-.147-1.238-.456-2.358-1.454-.871-.776-1.46-1.735-1.631-2.029-.171-.293-.018-.452.129-.599.132-.132.293-.342.439-.513.147-.171.195-.293.293-.489.098-.195.049-.366-.024-.513-.073-.147-.659-1.589-.903-2.176-.239-.575-.483-.497-.659-.506-.171-.009-.366-.009-.561-.009-.195 0-.512.073-.781.366-.268.293-1.025.999-1.025 2.438 0 1.439 1.049 2.83 1.195 3.025.147.195 2.062 3.149 4.996 4.417.698.303 1.242.483 1.666.618.7.224 1.338.192 1.84.116.564-.085 1.733-.708 1.977-1.392.244-.683.244-1.269.171-1.392-.073-.122-.268-.195-.561-.342z" />
              </svg>
              <span className="text-[11px] uppercase tracking-[0.2em] font-bold text-[#cc0000] group-hover:text-white transition-colors">Falar agora</span>
            </button>
          </motion.header>
        )}
      </AnimatePresence>

      {/* =================================================================
          MENU MOBILE (POSICIONADO NO TOPO / FLUTUANTE)
          ================================================================= */}
      <div className="md:hidden fixed top-6 left-1/2 -translate-x-1/2 z-[60] w-[92%]">
        <nav className={cn(
          "flex flex-col rounded-[2.5rem] bg-white/90 backdrop-blur-2xl border border-white/40 shadow-2xl overflow-hidden transition-all duration-500",
          isMobileMenuOpen ? "p-8" : "p-4 h-[72px] flex-row items-center justify-between px-6"
        )}>
          {!isMobileMenuOpen ? (
            <>
              <img src={LOGO_URL} alt="Logo" className="h-8 w-auto object-contain" />
              <button 
                onClick={() => setIsMobileMenuOpen(true)} 
                className="p-3 bg-[#cc0000] text-white rounded-full shadow-lg"
              >
                <Menu size={20} strokeWidth={2} />
              </button>
            </>
          ) : (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-col gap-6">
              <div className="flex justify-between items-center mb-2">
                <img src={LOGO_URL} alt="Logo" className="h-8 w-auto object-contain" />
                <button 
                  onClick={() => setIsMobileMenuOpen(false)} 
                  className="p-3 bg-gray-100 rounded-full"
                >
                  <X size={20} strokeWidth={2} className="text-gray-600" />
                </button>
              </div>
              
              <div className="space-y-3">
                {navLinks.map((link) => (
                  <button 
                    key={link.href} 
                    onClick={() => handleNavClick(link.href)}
                    className="flex items-center justify-between p-5 bg-gray-50 rounded-3xl hover:bg-gray-100 transition-colors"
                  >
                    <span className="font-semibold text-lg text-gray-800">{link.label}</span>
                    <ChevronRight size={18} className="text-gray-300" />
                  </button>
                ))}
              </div>

              <Button 
                variant="red" 
                size="lg" 
                className="w-full rounded-3xl py-7 shadow-xl shadow-[#cc0000]/20" 
                onClick={() => window.open(`https://wa.me/${COMPANY.whatsapp}`, '_blank')}
              >
                Falar no WhatsApp
              </Button>
            </motion.div>
          )}
        </nav>
      </div>

      {/* =================================================================
          SIDEBAR VERTICAL (ESTILO MICROSOFT / GLASSMORPHISM)
          ================================================================= */}
      {!isScrolled && (
        <aside
          className={cn(
            "hidden md:flex fixed top-0 left-0 z-50 h-screen flex-col bg-white/70 backdrop-blur-2xl border-r border-black/[0.03] shadow-sm transition-[width] duration-400 ease-[cubic-bezier(0.23,1,0.32,1)]",
            isSidebarExpanded ? "w-64" : "w-20"
          )}
        >
          {/* Toggle Button */}
          <button
            onClick={() => setIsSidebarExpanded(!isSidebarExpanded)}
            className="absolute -right-4 top-10 bg-white/90 backdrop-blur-md border border-black/[0.05] rounded-full p-2 text-black/40 hover:text-[#D4AF37] transition-all shadow-xl hover:scale-110"
          >
            {isSidebarExpanded ? <ChevronLeft size={16} strokeWidth={1.2} /> : <ChevronRight size={16} strokeWidth={1.2} />}
          </button>

          <div className="flex items-center justify-center h-24 w-full mb-4 px-4">
            <img 
              src={LOGO_URL} 
              alt="Logo"
              className={cn("transition-all duration-500 object-contain", isSidebarExpanded ? "h-10 opacity-100" : "h-0 opacity-0 scale-50")} 
            />
          </div>

          <nav className="flex-1 px-4 space-y-2 relative">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className={cn(
                  "relative flex items-center w-full rounded-xl transition-all duration-300 group",
                  isSidebarExpanded ? "px-4 py-3 gap-4" : "justify-center py-4",
                  "hover:bg-black/[0.03] text-black/60 hover:text-black font-semibold"
                )}
              >
                <link.icon size={22} strokeWidth={1.2} className="group-hover:text-[#D4AF37] transition-colors" />
                {isSidebarExpanded && <span className="text-sm tracking-tight">{link.label}</span>}
                
                {!isSidebarExpanded && (
                  <div className="absolute left-full ml-4 px-3 py-1.5 bg-[#1A1A1A] text-white text-xs font-semibold tracking-wide rounded-md opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-300 shadow-xl whitespace-nowrap z-50">
                    {link.label}
                    <div className="absolute top-1/2 -left-1 -translate-y-1/2 border-t-[5px] border-b-[5px] border-r-[5px] border-transparent border-r-[#1A1A1A]" />
                  </div>
                )}
              </button>
            ))}
          </nav>

          <div className="p-4 relative group">
            <button
              onClick={() => window.open(`https://wa.me/${COMPANY.whatsapp}`, '_blank')}
              className={cn(
                "flex items-center justify-center bg-[#8B0000] text-white rounded-2xl shadow-lg transition-all hover:brightness-110",
                isSidebarExpanded ? "w-full py-4 px-6 gap-3" : "w-12 h-12 mx-auto"
              )}
            >
              <MessageCircle size={20} strokeWidth={1.5} />
              {isSidebarExpanded && <span className="text-[10px] uppercase tracking-widest font-bold">Contato</span>}
            </button>
            
            {!isSidebarExpanded && (
              <div className="absolute left-full ml-2 px-3 py-1.5 top-1/2 -translate-y-1/2 bg-[#8B0000] text-white text-xs font-semibold tracking-wide rounded-md opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-300 shadow-xl whitespace-nowrap z-50">
                Falar agora
                <div className="absolute top-1/2 -left-1 -translate-y-1/2 border-t-[5px] border-b-[5px] border-r-[5px] border-transparent border-r-[#8B0000]" />
              </div>
            )}
          </div>
        </aside>
      )}
    </div>
  );
}