import Image from 'next/image';
import commitmentFirstLogo from '@public/commitment-first-logo.svg';
import commitmentSecondLogo from '@public/commitment-second-logo.svg';
import commitmentThirdLogo from '@public/commitment-third-logo.svg';
import commitmentFourthLogo from '@public/commitment-fourth-logo.svg';

const OurCommitment = () => {
  const commitmentDetails = {
    header: 'Our Commitment',
    commitmentCard: [
      {
        title: 'Reliable and Verified Workforce',
        descripton:
          'All workers are strictly screened to ensure they are skilled, trustworthy, and qualified.',
        logo: commitmentFirstLogo,
      },
      {
        title: 'Comprehensive Services',
        descripton:
          'We offer end-to-end workforce solutions, including recruitment, training, visa arrangements, and post-placement support.',
        logo: commitmentSecondLogo,
      },
      {
        title: 'Professionalism',
        descripton: 'Our approach is rooted in professionalism',
        logo: commitmentThirdLogo,
      },
      {
        title: 'Compliance and Ethics',
        descripton:
          'Ethical hiring practices and full adherence to labor laws.',
        logo: commitmentFourthLogo,
      },
    ],
  };

  return (
    <div className="our-commitment-aboutpage">
      <div className="container flex flex-col items-center justify-center gap-8 px-4 py-8 md:gap-20 md:px-32 md:py-16">
        <h1 className="mt-2 text-center text-2xl font-extrabold text-secondary md:text-3xl">
          {commitmentDetails.header}
        </h1>
        <div className="grid w-full grid-cols-1 gap-8 md:grid-cols-2 md:gap-20">
          {commitmentDetails.commitmentCard.map((item, index) => (
            <div
              key={index}
              className="flex h-auto flex-col items-center rounded-2xl bg-secondary p-4 md:h-[300px] md:p-6"
            >
              <h3 className="mb-3 text-lg font-bold text-white md:mb-4 md:text-xl">
                {item.title}
              </h3>
              <Image
                src={item.logo}
                alt={`${item.title} Logo`}
                width={250}
                height={250}
                priority
                className="mb-3 h-auto w-[150px] object-contain md:mb-4 md:w-[250px]"
              />
              <p className="text-center text-sm text-white md:text-base">
                {item.descripton}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurCommitment;
