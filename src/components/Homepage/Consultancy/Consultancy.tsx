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
      <div className="container flex flex-col items-center justify-center px-32 py-16">
        <h1 className="mt-2 text-3xl font-extrabold text-secondary">
          {aboutDetails.title}
        </h1>
        <p className="mt-10 text-center text-xl leading-9">
          {aboutDetails.descripton}
        </p>
        <div className="flex py-16">
          {aboutDetails.button.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="w-[160px] rounded-xl bg-secondary px-6 py-2 text-center font-bold text-white"
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
