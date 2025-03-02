import complianceFirstLogo from '@public/compliance-first-logo.svg';
import complianceSecondLogo from '@public/compliance-second-logo.svg';
import complianceThirdLogo from '@public/compliance-third-logo.svg';
import complianceFourthLogo from '@public/compliance-fourth-logo.svg';
import Image from 'next/image';

const Compliance = () => {
  const complianceDetails = {
    header: 'IN COOPERATION AND COMPLIANCE WITH',
    logos: [
      complianceFirstLogo,
      complianceSecondLogo,
      complianceThirdLogo,
      complianceFourthLogo,
    ],
  };
  return (
    <div className="compliance-maidspage bg-secondary">
      <div className="container flex flex-col items-center justify-center px-32 py-16">
        <h1 className="text-center text-3xl font-extrabold text-white">
          {complianceDetails.header}
        </h1>
        <div className="mt-6 flex gap-16">
          {complianceDetails.logos.map((item, index) => (
            <Image
              key={index}
              src={item}
              alt="compliance logo"
              width={150}
              height={150}
              priority
              className="mb-4 w-full object-contain"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Compliance;
