import Image from 'next/image';
import trainingDevelopmentImage from '@public/training-development.webp';

const TrainingDevelopment = () => {
  const trainingDetails = {
    header: 'Training & Development',
    description:
      'Invest in your workforce through tailored training programs. We design and deliver training modules that enhance skills, boost productivity, and contribute to long-term employee satisfaction.',
  };
  return (
    <div className="training-trainingpage">
      <div className="container flex flex-col items-center justify-center gap-4 p-0 md:gap-10 md:px-32 md:py-16">
        {/* Header section with background image */}
        <div className="relative w-full">
          <div className="relative h-[300px] w-full md:h-[400px]">
            <Image
              src={trainingDevelopmentImage}
              alt="Training&development image"
              fill
              priority
              className="object-cover"
            />
            {/* Overlay to ensure text readability */}
            <div className="absolute inset-0 bg-black/40" />
            {/* Centered header text */}
            <div className="absolute inset-0 flex items-center justify-center">
              <h1 className="z-10 text-center text-2xl font-extrabold text-secondary md:text-3xl">
                {trainingDetails.header}
              </h1>
            </div>
          </div>
        </div>

        {/* Description paragraph */}
        <p className="text-center text-base md:text-lg">
          {trainingDetails.description}
        </p>
      </div>
    </div>
  );
};

export default TrainingDevelopment;
