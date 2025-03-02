import Image from 'next/image';
import maids from '@public/maids.webp';

const Maids = () => {
  const maidsDetails = {
    header: 'Maids',
    mainParagraph: {
      title: 'Trusted Care , Skilled Hands, Peace of Mind',
      description:
        'We provide professional and reliable maid services tailored to meet your household needs. Our maids are trained in childcare, eldercare, and household chores to ensure your home runs smoothly. With a focus on trust, quality, and customer satisfaction, we guarantee skilled and dependable domestic support for your family.',
    },
  };

  return (
    <div className="maid-maidspage">
      <div className="container flex flex-col items-center justify-center gap-6 p-32">
        <div className="flex gap-8">
          <div className="w-1/3">
            <Image
              src={maids}
              alt="Maid image"
              width={250}
              height={250}
              priority
              className="mb-4 w-full object-contain"
            />
          </div>
          <div className="w-2/3">
            <h1 className="mt-2 text-3xl font-extrabold text-secondary">
              {maidsDetails.header}
            </h1>
            <h1 className="mt-10 text-3xl font-extrabold text-secondary">
              {maidsDetails.mainParagraph.title}
            </h1>
            <p className="mt-4 text-xl leading-9">
              {maidsDetails.mainParagraph.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Maids;
