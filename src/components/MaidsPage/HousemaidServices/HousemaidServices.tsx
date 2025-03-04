import Image from 'next/image';
import housemaidImage from '@public/housemaid-image.webp';

const HousemaidServices = () => {
  const housemaidServicesDetails = [
    {
      title: 'Housemaid Services',
      description:
        'Full-time, part-time, or live-in housemaids tailored to your requirements. Services',
    },
    {
      title: 'Delivery to Your Doorsteps',
      description:
        'We ensure the housemaid is conveniently delivered to your home, saving you time and hassle',
    },
    {
      title: 'Customizable Options',
      description:
        'Select services such as cleaning, childcare, or cooking to fit your unique needs',
    },
  ];

  return (
    <div className="housemaid-services-maidspage bg-gray-100">
      {/* Desktop View - Kept exactly the same */}
      <div className="hidden md:flex">
        <div className="container flex gap-8 px-32 py-16">
          <div className="w-1/2">
            {housemaidServicesDetails.map((item, index) => (
              <div key={index} className="mb-10">
                <h1 className="text-3xl font-extrabold text-secondary">
                  {item.title}
                </h1>
                <p className="text-xl leading-9">{item.description}</p>
              </div>
            ))}
          </div>
          <div className="w-1/2">
            <Image
              src={housemaidImage}
              alt="Maid image"
              width={250}
              height={250}
              priority
              className="h-full w-auto object-contain"
            />
          </div>
        </div>
      </div>

      {/* Mobile View - New design with background image */}
      <div className="relative min-h-screen md:hidden">
        <Image
          src={housemaidImage}
          alt="Maid image"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />

        <div className="relative z-10 px-4 py-8">
          {housemaidServicesDetails.map((item, index) => (
            <div
              key={index}
              className="mb-4 rounded-xl border border-gray-200 bg-white/95 p-6 shadow-lg backdrop-blur-sm"
            >
              <div className="md:mb-4">
                <h1 className="text-2xl font-extrabold text-secondary">
                  {item.title}
                </h1>
              </div>
              <div className="border-t border-gray-100 md:pt-4">
                <p className="text-base leading-7 text-gray-600">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HousemaidServices;
