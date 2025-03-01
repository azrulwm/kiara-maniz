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
      <div className="container flex flex-col items-center justify-center gap-20 p-32">
        <h1 className="mt-2 text-center text-3xl font-extrabold text-secondary">
          {commitmentDetails.header}
        </h1>
        <div className="grid w-full grid-cols-1 gap-20 md:grid-cols-2">
          {commitmentDetails.commitmentCard.map((item, index) => (
            <div
              key={index}
              className="flex h-[300px] flex-col items-center rounded-2xl bg-secondary p-6"
            >
              <h3 className="mb-4 text-xl font-bold text-white">
                {item.title}
              </h3>
              <Image
                src={item.logo}
                alt="Description Logo"
                width={250}
                height={250}
                priority
                className="mb-4 object-contain"
              />
              <p className="text-center text-white">{item.descripton}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurCommitment;
