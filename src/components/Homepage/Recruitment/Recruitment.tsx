const Recruitment = () => {
  const aboutDetails = {
    title: 'Recruitment of Workers & Maids',
    descripton:
      'At Kiara Maniz, we specialize in sourcing and selecting qualified individuals to meet your workforce needs, whether for business or home. Our recruitment services cover a broad spectrum, from skilled professionals and low-skilled workers for various industries to trained and reliable maids for household support. We focus on delivering a seamless, efficient, and compliant hiring process, ensuring you find the right fit for your specific requirements. With a commitment to quality and client satisfaction, we aim to make recruitment simple and stress-free.',
    button: [
      {
        label: 'Domestic Worker',
        href: '',
      },
      {
        label: 'Foreign Worker',
        href: '',
      },
      {
        label: 'Maids',
        href: '',
      },
    ],
  };
  return (
    <div className="recruitment-homepage bg-primary">
      <div className="container flex flex-col items-center justify-center px-32 py-16">
        <h1 className="mt-2 text-3xl font-extrabold text-secondary">
          {aboutDetails.title}
        </h1>
        <p className="mt-10 text-center text-xl leading-9 text-white">
          {aboutDetails.descripton}
        </p>
        <div className="gapx-32 mt-14 flex py-16">
          {aboutDetails.button.map((item, index) => (
            <button
              key={index}
              className="w-[160px] rounded-xl bg-secondary px-6 py-2 font-bold text-white"
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Recruitment;
