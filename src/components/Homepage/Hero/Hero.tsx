import Image from 'next/image';
import Link from 'next/link';
import homepageImage from '@public/homepage-image.png';
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
        className="h-[500px] w-full object-cover md:h-auto"
      />

      <div className="absolute inset-0 flex items-center justify-center">
        <div className="max-w-[840px] px-4 md:px-0">
          <h1 className="text-2xl font-bold text-secondary drop-shadow-2xl">
            {heroDetails.title}
          </h1>
          <h2 className="mb-6 whitespace-pre-line text-2xl font-extrabold text-white drop-shadow-2xl sm:mb-8 sm:text-5xl sm:leading-[4rem]">
            {heroDetails.description}
          </h2>
          <Link
            href={heroDetails.link}
            className="text-md inline-block rounded-2xl bg-secondary px-5 py-3 font-bold text-white transition hover:bg-secondary/90 md:px-10 md:py-4 md:text-xl"
          >
            Learn More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
