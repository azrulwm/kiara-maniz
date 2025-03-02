import Image from 'next/image';
import complianceFirstLogo from '@public/compliance-first-logo.svg';
import complianceSecondLogo from '@public/compliance-second-logo.svg';
import complianceThirdLogo from '@public/compliance-third-logo.svg';
import complianceFourthLogo from '@public/compliance-fourth-logo.svg';

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
      <div className="container flex flex-col items-center justify-center px-32 py-16 max-md:px-4 max-md:py-8">
        <h1 className="text-center text-3xl font-extrabold text-white max-md:text-2xl">
          {complianceDetails.header}
        </h1>
        <div className="mt-6 grid grid-cols-2 gap-4 md:flex md:gap-16">
          {complianceDetails.logos.map((item, index) => (
            <div key={index} className="flex items-center justify-center">
              <Image
                src={item}
                alt="compliance logo"
                width={150}
                height={150}
                priority
                className="w-[150px] object-contain max-md:w-[120px]"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Compliance;
