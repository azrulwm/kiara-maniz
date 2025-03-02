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
      <div className="container px-32 py-16">
        {housemaidServicesDetails.map((item, index) => (
          <div key={index} className="mb-10 w-1/2">
            <h1 className="text-3xl font-extrabold text-secondary">
              {item.title}
            </h1>
            <p className="text-xl leading-9">{item.description}</p>
          </div>
        ))}
      </div>
      ;
    </div>
  );
};

export default HousemaidServices;
