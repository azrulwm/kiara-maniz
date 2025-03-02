import Image from 'next/image';
import foreignWorker from '@public/foreign-worker.webp';

const ForeignWorker = () => {
  const foreignWorkerDetails = {
    header: 'Foreign Worker',
    mainParagraph: {
      title:
        'Your Trusted Partner for Effortless Recruitment of Foreign Workers',
      description:
        'Navigating the complexities of recruiting foreign workers can be a daunting task. Let us simplify the process for you. Kiara Maniz facilitates the recruitment of foreign workers, ensuring compliance with legal regulations and providing a seamless experience for both employers and employees',
    },
    descriptionParagraph: [
      {
        intro: 'Our Foreign Workers and Maids Recruitment services include:',
        list: [
          'Documentation and compliance: We handle all necessary documentation and ensure compliance with immigration and labour laws, easing the burden on your end.',
          'Skill-Specific Recruitment: Whether you require workers for industrial, construction, hospitality or other industries, we specialize in recruiting skilled and qualified foreign workers tailored to your business needs.',
          'Cultural Sensitivity: Recognizing the importance of cultural integration, we prioritize candidates who not only possess the required skills but also align with your organizational culture.',
        ],
      },
    ],
  };

  return (
    <div className="foreign-worker-foreignworkerpage">
      <div className="container flex flex-col items-center justify-center gap-6 px-32 py-16">
        <div className="flex gap-8">
          <div className="w-1/3">
            <Image
              src={foreignWorker}
              alt="Foreign worker image"
              width={250}
              height={250}
              priority
              className="mb-4 w-full object-contain"
            />
          </div>
          <div className="w-2/3">
            <h1 className="mt-2 text-3xl font-extrabold text-secondary">
              {foreignWorkerDetails.header}
            </h1>
            <h1 className="mt-10 text-3xl font-extrabold text-secondary">
              {foreignWorkerDetails.mainParagraph.title}
            </h1>
            <p className="mt-4 text-xl leading-9">
              {foreignWorkerDetails.mainParagraph.description}
            </p>
          </div>
        </div>
        <div>
          {foreignWorkerDetails.descriptionParagraph.map((item, index) => {
            if (typeof item === 'object' && 'intro' in item) {
              return (
                <div key={index} className="mb-10">
                  <p className="text-xl leading-8">{item.intro}</p>
                  <ul className="mt-4 list-disc space-y-2 pl-8">
                    {item.list.map((bullet, bulletIndex) => (
                      <li key={bulletIndex} className="text-xl leading-8">
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            }
            return (
              <p key={index} className="mb-10 text-xl leading-8">
                {item}
              </p>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ForeignWorker;
