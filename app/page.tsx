import Hero from './components/Hero';
import Problema from './components/Problema';
import Solucion from './components/Solucion';
import Beneficios from './components/Beneficios';
import Testimonios from './components/Testimonios';
import CTA from './components/CTA';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#121212]">
      <Hero />
      <Problema />
      <Solucion />
      <Beneficios />
      <Testimonios />
      <CTA />
      <FAQ />
      <Footer />
    </main>
  );
}
