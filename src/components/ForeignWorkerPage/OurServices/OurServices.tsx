const OurServices = () => {
  const serviceDetails = {
    header: 'Our Services Include',
    commitmentCard: [
      {
        title: 'Recruitment',
        descripton:
          'Housemaid recruitment services from Indonesia or other countries.',
      },
      {
        title: 'Orientation & Training',
        descripton:
          'In-house orientation and training for agency-hired housemaids.',
      },
      {
        title: 'Work Permit',
        descripton:
          'Application, renewal, or cancellation of work permits with assistance in the process.',
      },
      {
        title: 'Passport Renewal',
        descripton: 'Arrangement of passport renewal for housemaids.',
      },
      {
        title: 'Home Leave Processing',
        descripton:
          'Process and prepare documents needed for housemaid’s holidays to their home country.',
      },
      {
        title: 'Flight Ticket Booking & Check Out Memo',
        descripton: 'Necessarily application for departing domestic helpers.',
      },
      {
        title: 'Re-entry of Previous Domestic Helper Application',
        descripton: 'Request for maid or direct hire by the employer.',
      },
      {
        title: 'Professional Counseling',
        descripton: '24 months counseling services with compliments (FOC).',
      },
      {
        title: 'Medical Checkup (FOMEMA)',
        descripton: 'Arrangement of medical checkup services for housemaids.',
      },
      {
        title: 'Insurance',
        descripton: 'Purchase of housemaid insurance.',
      },
      {
        title: 'Salary Remittance',
        descripton:
          'Remittance of salary to housemaids’ families in the source country.',
      },
      {
        title: 'Airport Transfer & Escort Services',
        descripton:
          'Transportation to/from the airport and assistance in airport check-in services.',
      },
    ],
  };
  return (
    <div className="our-services-foreignworkerpage bg-gray-100">
      <div className="container flex flex-col items-center justify-center p-32">
        <h1 className="mb-10 text-center text-3xl font-extrabold text-secondary">
          {serviceDetails.header}
        </h1>
        <div className="grid w-full grid-cols-1 gap-x-20 gap-y-8 md:grid-cols-2">
          {serviceDetails.commitmentCard.map((item, index) => (
            <div
              key={index}
              className="flex h-[150px] flex-col items-center rounded-3xl bg-secondary p-6"
            >
              <h3 className="mb-4 text-center text-xl font-bold text-white">
                {item.title}
              </h3>
              <p className="text-center text-white">{item.descripton}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurServices;
