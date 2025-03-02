import Image from 'next/image';
import kiaraManizLogo from '@public/kiara-maniz-logo.svg';

const About = () => {
  const aboutDetails = {
    title: 'About Kiara Maniz',
    descripton: [
      'Kiara Maniz provides reliable local and foreign workforce solutions for industries like manufacturing, construction, plantation, and hospitality. We also specialize in housemaid services for childcare, eldercare, and household needs.',
      'Our services include recruitment, training, visa arrangements, and post-placement support, ensuring a seamless experience. We prioritize compliance, ethical hiring, and transparency, while offering customizable solutions to meet client needs.',
      'Empowering businesses and households with skilled talent, we focus on quality, reliability, and exceptional service.',
    ],
  };

  return (
    <div className="about-homepage">
      <div className="container flex flex-col items-center justify-center px-4 py-8 md:px-32 md:py-16">
        <Image
          src={kiaraManizLogo}
          alt="Brand Logo"
          width={120}
          height={40}
          priority
          className="w-[60px] object-contain md:w-[120px]"
        />
        <h1 className="mt-2 text-center text-2xl font-extrabold text-secondary md:text-3xl">
          {aboutDetails.title}
        </h1>
        <div className="mt-6 flex flex-col gap-6 md:mt-10 md:gap-8">
          {aboutDetails.descripton.map((item, index) => (
            <p
              className="text-justify text-lg md:text-center md:text-xl"
              key={index}
            >
              {item}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
