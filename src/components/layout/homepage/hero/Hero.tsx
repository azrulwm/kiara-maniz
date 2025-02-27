import Image from 'next/image';
import homepageImage from '@public/homepage-image.png';

const Hero = () => {
  const heroDetails = {
    title: 'Welcome to Kiara Maniz',
    description: `Your Expert Recruitment
      Service for Domestic &
      Foreign Workers`,
  };

  return (
    <div className="hero-section relative">
      <Image
        src={homepageImage}
        alt="Background Image"
        priority
        width={1440}
        height={372}
        className="object-cover"
      />

      <div className="absolute inset-0 flex items-center justify-center">
        <div className="max-w-[840px]">
          <h1 className="text-2xl font-bold text-secondary drop-shadow-2xl">
            {heroDetails.title}
          </h1>
          <h2 className="whitespace-pre-line text-5xl font-extrabold leading-[4rem] text-white drop-shadow-2xl">
            {heroDetails.description}
          </h2>
          <button className="mt-6 rounded-2xl bg-secondary px-6 py-2 font-bold text-white">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
