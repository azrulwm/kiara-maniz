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
      <div className="container flex flex-col items-center justify-center gap-10 px-32 py-16">
        <h1 className="mt-2 text-3xl font-extrabold text-secondary">
          {trainingDetails.header}
        </h1>
        <Image
          src={trainingDevelopmentImage}
          alt="Training&development image"
          width={900}
          height={400}
          priority
          className="object-contain"
        />
        <p className="text-center text-lg">{trainingDetails.description}</p>
      </div>
    </div>
  );
};

export default TrainingDevelopment;
