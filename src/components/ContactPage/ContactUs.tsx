const ContactUs = () => {
  const contactDetails = {
    header: 'Contact Us',
    mainParagraph: {
      title: 'Get in Touch',
      description:
        'Have questions or need assistance? Our team is here to help. Reach out to us through any of the following channels.',
    },
    contactInfo: {
      locations: [
        {
          city: 'Seremban, Negeri Sembilan',
          address:
            'No.4 First Floor, Jalan KS 1, Kepayang Sentral, Taman Bukit Kepayang 70200 Seremban Negeri Sembilan',
        },
        {
          city: 'Kluang, Johor',
          address:
            "24B, Jalan Penghulu Kassim, Kampung Masjid Lama, 86000 Kluang, Johor Darul Ta'zim",
        },
        {
          city: 'Kajang, Selangor',
          address:
            '5-M, Jalan Hentian 1C, Pusat Hentian Kajang 43000, Kajang Selangor',
        },
      ],
      email: 'sales.kiaramaniz@gmail.com',
      phone: '018-7887739',
      hours: 'Monday - Friday: 9:00 AM - 6:00 PM',
    },
  };

  return (
    <div className="contact-us-page">
      <div className="container flex flex-col items-center justify-center gap-6 px-32 py-16 max-md:px-4 max-md:py-8">
        <h1 className="mt-2 text-center text-3xl font-extrabold text-secondary max-md:text-2xl">
          {contactDetails.header}
        </h1>
        <div className="max-w-[840px] max-md:w-full">
          <h2 className="mb-4 text-center text-2xl font-bold text-primary max-md:text-xl">
            {contactDetails.mainParagraph.title}
          </h2>
          <p className="mb-10 text-center text-xl leading-8 max-md:mb-6 max-md:text-base max-md:leading-7">
            {contactDetails.mainParagraph.description}
          </p>
        </div>

        <div className="grid w-full max-w-[840px] grid-cols-1 gap-10 max-md:gap-6 md:grid-cols-2">
          {/* Contact Form */}
          <div className="rounded-lg bg-white p-6 shadow-md max-md:p-4">
            <h3 className="mb-6 text-xl font-bold text-secondary max-md:mb-4 max-md:text-lg">
              Send us a message
            </h3>
            <form className="space-y-4">
              <div>
                <label className="mb-2 block text-sm font-medium">Name</label>
                <input
                  type="text"
                  className="w-full rounded-md border border-gray-300 p-2"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium">Email</label>
                <input
                  type="email"
                  className="w-full rounded-md border border-gray-300 p-2"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium">
                  Message
                </label>
                <textarea
                  className="w-full rounded-md border border-gray-300 p-2"
                  rows={4}
                  placeholder="Your message"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full rounded-md bg-secondary px-4 py-2 text-white hover:bg-secondary/90"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="rounded-lg bg-white p-6 shadow-md max-md:p-4">
            <h3 className="mb-6 text-xl font-bold text-secondary max-md:mb-4 max-md:text-lg">
              Contact Information
            </h3>
            <div className="space-y-6">
              {/* Locations */}
              <div className="space-y-4">
                <h4 className="font-medium">Our Locations</h4>
                {contactDetails.contactInfo.locations.map((location, index) => (
                  <div key={index} className="border-l-2 border-secondary pl-3">
                    <p className="font-medium text-secondary">
                      {location.city}
                    </p>
                    <p className="text-gray-600 max-md:text-sm">
                      {location.address}
                    </p>
                  </div>
                ))}
              </div>

              <div>
                <h4 className="font-medium">Email</h4>
                <a
                  href={`mailto:${contactDetails.contactInfo.email}`}
                  className="inline-flex items-center gap-2 text-secondary underline transition-colors duration-200 hover:text-secondary/80 max-md:text-sm"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-5 w-5"
                  >
                    <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                    <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                  </svg>
                  {contactDetails.contactInfo.email}
                </a>
              </div>
              <div>
                <h4 className="font-medium">Phone</h4>
                <a
                  href={`tel:${contactDetails.contactInfo.phone}`}
                  className="inline-flex items-center gap-2 text-secondary underline transition-colors duration-200 hover:text-secondary/80 max-md:text-sm"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-5 w-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {contactDetails.contactInfo.phone}
                </a>
              </div>
              <div>
                <h4 className="font-medium">Business Hours</h4>
                <p className="text-gray-600 max-md:text-sm">
                  {contactDetails.contactInfo.hours}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
