import About from '@/components/layout/homepage/about';
import Hero from '@/components/layout/homepage/hero';

export default function Home() {
  return (
    <div className="homepage">
      <Hero />
      <About />
    </div>
  );
}
