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
      <div className="container px-32 py-16 max-md:px-4 max-md:py-8">
        {housemaidServicesDetails.map((item, index) => (
          <div key={index} className="mb-10 w-1/2 max-md:w-full">
            {/* Desktop View */}
            <div className="hidden md:block">
              <h1 className="text-3xl font-extrabold text-secondary">
                {item.title}
              </h1>
              <p className="text-xl leading-9">{item.description}</p>
            </div>

            {/* Mobile Card View */}
            <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-lg transition-all duration-200 hover:shadow-xl md:hidden">
              <div className="mb-4">
                <h1 className="text-2xl font-extrabold text-secondary">
                  {item.title}
                </h1>
              </div>
              <div className="border-t border-gray-100 pt-4">
                <p className="text-base leading-7 text-gray-600">
                  {item.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HousemaidServices;
