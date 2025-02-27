import About from '@/components/layout/homepage/about';
import Consultancy from '@/components/layout/homepage/consultancy';
import Hero from '@/components/layout/homepage/hero';
import Recruitment from '@/components/layout/homepage/recruitment';

export default function Home() {
  return (
    <div className="homepage">
      <Hero />
      <About />
      <Recruitment />
      <Consultancy />
    </div>
  );
}
