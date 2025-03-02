import { ROUTES } from '@/config/route';
import Link from 'next/link';

const Consultancy = () => {
  const aboutDetails = {
    title: 'Human Resource Consultancy',
    descripton:
      'We provide expert solutions for recruitment, workforce management, and compliance. Our services include tailored training and development programs for the local workforce, allowing companies to enhance skills while benefiting from government-claimable training expenses. Let us help you build an efficient and capable team.',
    button: [
      {
        label: 'List of Services',
        href: ROUTES.HR_CONSULTANCY,
      },
    ],
  };
  return (
    <div className="consultancy-homepage">
      <div className="container flex flex-col items-center justify-center px-4 py-8 md:px-32 md:py-16">
        <h1 className="mt-2 text-center text-2xl font-extrabold text-secondary md:text-3xl">
          {aboutDetails.title}
        </h1>
        <p className="mt-6 text-justify text-lg leading-7 md:mt-10 md:text-center md:text-xl md:leading-9">
          {aboutDetails.descripton}
        </p>
        <div className="py-8 md:py-16">
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

export default Consultancy;
