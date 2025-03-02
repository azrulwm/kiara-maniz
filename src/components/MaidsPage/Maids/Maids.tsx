import Image from 'next/image';
import maids from '@public/maids.webp';

const Maids = () => {
  const maidsDetails = {
    header: 'Maids',
    mainParagraph: {
      title: 'Trusted Care, Skilled Hands, Peace of Mind',
      description:
        'We provide professional and reliable maid services tailored to meet your household needs. Our maids are trained in childcare, eldercare, and household chores to ensure your home runs smoothly. With a focus on trust, quality, and customer satisfaction, we guarantee skilled and dependable domestic support for your family.',
    },
  };

  return (
    <div className="maid-maidspage">
      <div className="container flex flex-col items-center justify-center gap-6 px-32 py-16 max-md:px-0 max-md:py-0">
        <div className="flex gap-8 max-md:block max-md:w-full">
          {/* Image Section */}
          <div className="w-1/3 max-md:relative max-md:h-[40vh] max-md:w-full">
            <div className="max-md:absolute max-md:inset-0">
              <Image
                src={maids}
                alt="Maid image"
                width={250}
                height={250}
                priority
                className="mb-4 w-full object-contain max-md:h-full max-md:w-full max-md:object-cover max-md:brightness-50"
              />
            </div>
            {/* Mobile Header */}
            <div className="hidden max-md:absolute max-md:inset-0 max-md:flex max-md:items-center max-md:justify-center">
              <h1 className="text-center text-3xl font-extrabold text-secondary">
                {maidsDetails.header}
              </h1>
            </div>
          </div>

          {/* Content Section */}
          <div className="w-2/3 max-md:mt-8 max-md:w-full max-md:px-4">
            {/* Desktop Header */}
            <h1 className="mt-2 text-3xl font-extrabold text-secondary max-md:hidden">
              {maidsDetails.header}
            </h1>
            <h1 className="mt-10 text-3xl font-extrabold text-secondary max-md:mt-0">
              {maidsDetails.mainParagraph.title}
            </h1>
            <p className="mt-4 text-xl leading-9 max-md:text-base">
              {maidsDetails.mainParagraph.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Maids;
