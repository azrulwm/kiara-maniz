import Image from 'next/image';
import homepageImage from '@public/homepage-image.png';
import Link from 'next/link';
import { ROUTES } from '@/config/route';

const Hero = () => {
  const heroDetails = {
    title: 'Welcome to Kiara Maniz',
    description: `Your Expert Recruitment
      Service for Domestic &
      Foreign Workers`,
    link: ROUTES.ABOUT,
  };

  return (
    <div className="hero-section relative">
      <Image
        src={homepageImage}
        alt="Background Image"
        priority
        width={2000}
        height={845}
        className="object-cover"
      />

      <div className="absolute inset-0 flex items-center justify-center">
        <div className="max-w-[840px]">
          <h1 className="text-2xl font-bold text-secondary drop-shadow-2xl">
            {heroDetails.title}
          </h1>
          <h2 className="mb-8 whitespace-pre-line text-5xl font-extrabold leading-[4rem] text-white drop-shadow-2xl">
            {heroDetails.description}
          </h2>
          <Link
            href={heroDetails.link}
            className="rounded-2xl bg-secondary px-10 py-4 font-bold text-white transition hover:bg-secondary/90"
          >
            Learn More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
