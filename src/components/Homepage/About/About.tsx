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
      <div className="container flex flex-col items-center justify-center p-32">
        <Image
          src={kiaraManizLogo}
          alt="Brand Logo"
          width={120}
          height={40}
          priority
          className="object-contain"
        />
        <h1 className="mt-2 text-3xl font-extrabold text-secondary">
          {aboutDetails.title}
        </h1>
        <div className="mt-10 flex flex-col gap-8">
          {aboutDetails.descripton.map((item, index) => (
            <p className="text-center text-xl" key={index}>
              {item}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
