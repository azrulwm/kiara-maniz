import { ROUTES } from '@/config/route';
import Link from 'next/link';

const Recruitment = () => {
  const aboutDetails = {
    title: 'Recruitment of Workers & Maids',
    descripton:
      'At Kiara Maniz, we specialize in sourcing and selecting qualified individuals to meet your workforce needs, whether for business or home. Our recruitment services cover a broad spectrum, from skilled professionals and low-skilled workers for various industries to trained and reliable maids for household support. We focus on delivering a seamless, efficient, and compliant hiring process, ensuring you find the right fit for your specific requirements. With a commitment to quality and client satisfaction, we aim to make recruitment simple and stress-free.',
    button: [
      {
        label: 'Domestic Worker',
        href: ROUTES.DOMESTIC_WORKER,
      },
      {
        label: 'Foreign Worker',
        href: ROUTES.FOREIGN_WORKER,
      },
      {
        label: 'Maids',
        href: ROUTES.MAIDS,
      },
    ],
  };

  return (
    <div className="recruitment-homepage bg-primary">
      <div className="container flex flex-col items-center justify-center px-4 py-8 md:px-32 md:py-16">
        <h1 className="mt-2 text-center text-2xl font-extrabold text-secondary md:text-3xl">
          {aboutDetails.title}
        </h1>
        <p className="mt-6 text-justify text-lg leading-7 text-white md:mt-10 md:text-center md:text-xl md:leading-9">
          {aboutDetails.descripton}
        </p>
        <div className="mt-8 flex flex-col gap-4 md:mt-14 md:flex-row md:gap-32">
          {aboutDetails.button.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="flex h-[40px] w-[160px] items-center justify-center rounded-xl bg-secondary font-bold text-white transition hover:bg-secondary/90 md:h-[60px]"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Recruitment;
