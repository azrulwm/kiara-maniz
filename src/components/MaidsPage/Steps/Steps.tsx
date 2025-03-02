const Steps = () => {
  const stepDetails = {
    header: '6 Simple Steps to Welcome Your New Maid',
    subHeader:
      'Our simple, step-by-step process ensures a seamless experience in hiring your maid.',
    commitmentCard: [
      {
        title: '1. Consultation',
        descripton: `We believe every home is unique! During our consultation, we'll take the time to listen to your needs, answer your questions, and recommend the best housemaid for your family. The consultation can take place over the phone, online, or in person—whichever is most convenient for you.`,
      },
      {
        title: '2. Choose & Interview',
        descripton: `After the consultation, you can review our curated list of housemaids and select the one that best fits your needs. Once chosen, you'll have the opportunity to interview the maid to ensure they are the right match for your home.`,
      },
      {
        title: '3. Document & Submission',
        descripton:
          'After selecting a maid, please provide us with the necessary documents for the application process for Jabatan Tenaga Kerja, the Immigration Department of Malaysia, and the Indonesia or Philippines embassy.',
      },
      {
        title: '4. Medical Screening',
        descripton:
          'After completing the documentation, the selected maid will undergo a thorough medical screening to ensure they meet the health requirements set by relevant authorities.',
      },
      {
        title: '5. Trained & Prepared',
        descripton:
          'Once the medical screening is complete, the maid will undergo comprehensive training to ensure they are fully equipped and prepared to meet your household needs.',
      },
      {
        title: '6. Delivering',
        descripton:
          'Finally, your maid will be delivered directly to your doorstep for your convenience. Alternatively, you can choose to pick up the maid yourself, but we prioritize doorstep delivery to ensure a smooth and hassle-free experience.',
      },
    ],
  };

  return (
    <div className="steps-maidspage">
      <div className="container flex flex-col items-center justify-center px-32 py-16 max-md:px-4 max-md:py-8">
        <h1 className="text-center text-3xl font-extrabold text-secondary max-md:text-2xl">
          {stepDetails.header}
        </h1>
        <p className="mb-10 text-xl max-md:mb-6 max-md:text-base">
          {stepDetails.subHeader}
        </p>
        <div className="grid w-full grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-3">
          {stepDetails.commitmentCard.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center rounded-xl bg-secondary p-6 shadow-lg max-md:min-h-[200px] md:h-[300px]"
            >
              <h3 className="mb-4 text-center text-xl font-bold text-white max-md:text-lg">
                {item.title}
              </h3>
              <p className="text-center text-white max-md:text-sm">
                {item.descripton}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Steps;
