import About from '@/components/Homepage/About';
import Consultancy from '@/components/Homepage/Consultancy';
import Hero from '@/components/Homepage/Hero';
import Recruitment from '@/components/Homepage/Recruitment';

export default function HomePage() {
  return (
    <div className="homepage">
      <Hero />
      <About />
      <Recruitment />
      <Consultancy />
    </div>
  );
}
