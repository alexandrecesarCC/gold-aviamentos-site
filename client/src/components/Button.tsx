import { cn } from '@/lib/utils';
import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'gold' | 'red' | 'ghost-gold' | 'ghost-red' | 'whatsapp';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'gold', size = 'md', children, ...props }, ref) => {
    const baseStyles =
      'font-semibold transition-all duration-200 active:scale-[0.98] rounded-md focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:ring-offset-2 focus:ring-offset-white';

    const variants = {
      gold: 'bg-[#D4AF37] text-[#1A1A1A] hover:bg-[#F0E68C]',
      red: 'bg-[#8B0000] text-white hover:bg-[#DC143C]',
      'ghost-gold': 'border border-[#D4AF37] text-[#D4AF37] hover:bg-[rgba(212,175,55,0.1)]',
      'ghost-red': 'border border-[#8B0000] text-[#8B0000] hover:bg-[rgba(139,0,0,0.1)]',
      whatsapp: 'bg-[#25D366] text-white hover:bg-[#1DA851]',
    };

    const sizes = {
      sm: 'px-4 py-2 text-sm',
      md: 'px-6 py-3 text-base',
      lg: 'px-8 py-4 text-lg',
    };

    return (
      <button
        ref={ref}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';
