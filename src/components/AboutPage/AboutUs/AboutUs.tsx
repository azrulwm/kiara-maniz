const AboutUs = () => {
  const aboutDetails = [
    {
      title: 'Why Choose Us?',
      descripton:
        'At Kiara Maniz, we prioritize delivering exceptional workforce solutions tailored to your needs. Whether you require skilled professionals, low-skilled workers, or reliable maids, we are committed to providing the best talent for businesses and households alike. Our expertise ensures a seamless hiring process, from sourcing and screening to placement and post-placement support. With a focus on quality, compliance, and client satisfaction, we go above and beyond to exceed expectations, making us a trusted partner for all your workforce needs.',
    },
    {
      title: 'About Us',
      descripton:
        'Kiara Maniz is a dynamic company dedicated to providing comprehensive workforce solutions for both businesses and households. We specialize in the recruitment of local and foreign workers, offering a diverse range of talent, including skilled professionals, low-skilled laborers, and trained domestic helpers. Our services extend to training and development programs for the local workforce, with government-claimable options that support skill enhancement and productivity. With a commitment to professionalism, efficiency, and personalized service, we strive to build lasting relationships and deliver the highest standards in workforce management.',
    },
  ];
  return (
    <div className="about-us-aboutpage bg-gray-100">
      <div className="container flex flex-col items-center justify-center gap-20 p-32">
        {aboutDetails.map((item, index) => (
          <div key={index}>
            <h1 className="mt-2 text-center text-3xl font-extrabold text-secondary">
              {item.title}
            </h1>
            <p className="mt-10 text-center text-xl leading-9">
              {item.descripton}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutUs;
