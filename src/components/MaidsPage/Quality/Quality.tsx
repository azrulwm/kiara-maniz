import Image from 'next/image';
import qualityFirstLogo from '@public/quality-first-logo.svg';
import qualitySecondLogo from '@public/quality-second-logo.svg';
import qualityThirdLogo from '@public/quality-third-logo.svg';
import qualityFourthLogo from '@public/quality-fourth-logo.svg';
import qualityImage from '@public/quality-maid.webp';

const Quality = () => {
  const qualityDetails = {
    qualityCard: [
      {
        title: 'Expertly Trained, Quality Assured',
        descripton:
          'We provide housemaids who are well-trained, experienced, and ready to exceed your expectations.',
        logo: qualityFirstLogo,
      },
      {
        title: 'Honest Pricing, No Surprises',
        descripton:
          'Transparent pricing with no hidden fees – what you see is what you get.',
        logo: qualitySecondLogo,
      },
      {
        title: 'Convenience Delivered',
        descripton:
          'We bring top-notch housemaids right to your doorstep, saving you time and hassle.',
        logo: qualityThirdLogo,
      },
      {
        title: 'Excellent Support',
        descripton: '24/7 customer assistance.',
        logo: qualityFourthLogo,
      },
    ],
  };

  return (
    <div className="quality-maidspage">
      <div className="container relative flex items-center justify-center gap-10 px-32 py-16 max-md:px-4 max-md:py-8">
        {/* Desktop Image */}
        <div className="w-1/2 max-md:hidden">
          <Image
            src={qualityImage}
            alt="Quality image"
            width={500}
            height={500}
            priority
            className="mb-4 object-contain"
          />
        </div>

        {/* Mobile Background Image */}
        <div className="hidden max-md:absolute max-md:inset-0 max-md:block">
          <Image
            src={qualityImage}
            alt="Quality image"
            fill
            priority
            className="object-cover brightness-50"
          />
        </div>

        {/* Cards Grid Section */}
        <div className="w-1/2 max-md:relative max-md:w-full max-md:px-4">
          <div className="grid w-full grid-cols-2 gap-4 max-md:gap-2">
            {qualityDetails.qualityCard.map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center rounded-xl bg-gray-300 p-6 shadow-lg transition-all duration-200 hover:shadow-xl max-md:p-3"
              >
                <h3 className="mb-4 text-center text-lg font-bold text-secondary max-md:mb-2 max-md:text-sm">
                  {item.title}
                </h3>
                <Image
                  src={item.logo}
                  alt={`${item.title} Logo`}
                  width={75}
                  height={100}
                  priority
                  className="mb-4 w-[50px] object-contain md:mb-2 md:w-[75px]"
                />
                <p className="text-center text-sm max-md:text-xs">
                  {item.descripton}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quality;
