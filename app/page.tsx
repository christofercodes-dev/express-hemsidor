import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';
import Pricing from '@/components/Pricing';
import Process from '@/components/Process';
import Projects from '@/components/Projects';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Projects/>
      <Pricing />
      <Process />
      <Contact/>
      <Footer/>
    </main>
  );
}