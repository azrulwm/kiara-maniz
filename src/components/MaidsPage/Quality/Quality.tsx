import Image from 'next/image';
import qualityFirstLogo from '@public/quality-first-logo.svg';
import qualitySecondLogo from '@public/quality-second-logo.svg';
import qualityThirdLogo from '@public/quality-third-logo.svg';
import qualityFourthLogo from '@public/quality-fourth-logo.svg';
import qualityImage from '@public/quality-maid.webp';

const quality = () => {
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
      <div className="container flex items-center justify-center gap-10 p-32">
        <div className="w-1/2">
          <Image
            src={qualityImage}
            alt="Quality image"
            width={500}
            height={500}
            priority
            className="mb-4 object-contain"
          />
        </div>
        <div className="grid w-1/2 grid-cols-1 gap-4 md:grid-cols-2">
          {qualityDetails.qualityCard.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center rounded-2xl bg-gray-300 p-3"
            >
              <h3 className="mb-4 text-center text-lg font-bold text-secondary">
                {item.title}
              </h3>
              <Image
                src={item.logo}
                alt="Description Logo"
                width={75}
                height={75}
                priority
                className="mb-4 object-contain"
              />
              <p className="text-center text-sm">{item.descripton}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default quality;
