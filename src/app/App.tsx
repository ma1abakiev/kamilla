import { Hero } from '@/app/components/Hero';
import { About } from '@/app/components/About';
import { Services } from '@/app/components/Services';
import { Portfolio } from '@/app/components/Portfolio';
import { Pricing } from '@/app/components/Pricing';
import { Contact } from '@/app/components/Contact';
import { Footer } from '@/app/components/Footer';
import { Header } from '@/app/components/Header';


export default function App() {
  return (
    <div className="w-full">
      <Header />
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Pricing />
      <Contact />
      <Footer />
    </div>
  );
}
