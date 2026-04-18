import { Nav } from '@/components/Nav';
import { Hero } from '@/components/Hero';
import { Produtos } from '@/components/Produtos';
import { Diferenciais } from '@/components/Diferenciais';
import { Sobre } from '@/components/Sobre';
import { Contato } from '@/components/Contato';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-[#1A1A1A]">
      <Nav />
      <Hero />
      <Produtos />
      <Diferenciais />
      <Sobre />
      <Contato />
      <Footer />
    </div>
  );
}
