import Image from 'next/image';
import domesticWorker from '@public/domestic-worker.webp';

const DomesticWorker = () => {
  const domesticWorkerDetails = {
    header: 'Domestic Worker',
    mainParagraph: {
      title: 'Empowering Corporate Success',
      description:
        'Explore our extensive local services tailored to meet the diverse needs of Corporate Customers – Small, Medium, and Large Scale Industries. Our focus on professionalism and quality execution sets us apart.',
    },
    descriptionParagraph: [
      'We have partnered with public universities across Malaysia, including Sabah and Sarawak, through a government-initiated training program. This collaboration ensures that domestic workers are equipped with skills to meet current industry demands.',

      {
        intro: 'Our training focuses on five in-demand areas:',
        list: [
          'Creative Media: Developing skills in design and multimedia production',
          'Digital Marketing: Mastering online marketing strategies and tools',
          'IT & Web Development: Learning technical skills for building and managing websites',
          'Linguistics and Writing: Enhancing communication and content creation abilities',
          'Data Analysis: Understanding and interpreting data to support decision-making',
        ],
      },

      'Fresh graduates and alumni from these universities who complete the training program are supplied to companies through our domestic services, ensuring businesses gain access to skilled, industry-ready talent.',
    ],
  };

  return (
    <div className="domestic-worker-aboutpage">
      <div className="container flex flex-col items-center justify-center gap-6 p-32">
        <div className="flex gap-8">
          <div className="w-1/3">
            <Image
              src={domesticWorker}
              alt="Domestic worker image"
              width={250}
              height={250}
              priority
              className="mb-4 w-full object-contain"
            />
          </div>
          <div className="w-2/3">
            <h1 className="mt-2 text-3xl font-extrabold text-secondary">
              {domesticWorkerDetails.header}
            </h1>
            <h1 className="mt-10 text-3xl font-extrabold text-secondary">
              {domesticWorkerDetails.mainParagraph.title}
            </h1>
            <p className="mt-4 text-xl leading-9">
              {domesticWorkerDetails.mainParagraph.description}
            </p>
          </div>
        </div>
        <div>
          {domesticWorkerDetails.descriptionParagraph.map((item, index) => {
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

export default DomesticWorker;
