const ContactUs = () => {
  const contactDetails = {
    header: 'Contact Us',
    mainParagraph: {
      title: 'Get in Touch',
      description:
        'Have questions or need assistance? Our team is here to help. Reach out to us through any of the following channels.',
    },
    contactInfo: {
      address: '123 Business Street, Kuala Lumpur, Malaysia',
      email: 'info@kiaramaniz.com',
      phone: '+60 12-345 6789',
      hours: 'Monday - Friday: 9:00 AM - 6:00 PM',
    },
  };

  return (
    <div className="contact-us-page">
      <div className="container flex flex-col items-center justify-center gap-6 px-32 py-16">
        <h1 className="mt-2 text-center text-3xl font-extrabold text-secondary">
          {contactDetails.header}
        </h1>
        <div className="max-w-[840px]">
          <h2 className="mb-4 text-center text-2xl font-bold text-primary">
            {contactDetails.mainParagraph.title}
          </h2>
          <p className="mb-10 text-center text-xl leading-8">
            {contactDetails.mainParagraph.description}
          </p>
        </div>

        <div className="grid w-full max-w-[840px] grid-cols-1 gap-10 md:grid-cols-2">
          {/* Contact Form */}
          <div className="rounded-lg bg-white p-6 shadow-md">
            <h3 className="mb-6 text-xl font-bold text-secondary">
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
          <div className="rounded-lg bg-white p-6 shadow-md">
            <h3 className="mb-6 text-xl font-bold text-secondary">
              Contact Information
            </h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-medium">Address</h4>
                <p className="text-gray-600">
                  {contactDetails.contactInfo.address}
                </p>
              </div>
              <div>
                <h4 className="font-medium">Email</h4>
                <p className="text-gray-600">
                  {contactDetails.contactInfo.email}
                </p>
              </div>
              <div>
                <h4 className="font-medium">Phone</h4>
                <p className="text-gray-600">
                  {contactDetails.contactInfo.phone}
                </p>
              </div>
              <div>
                <h4 className="font-medium">Business Hours</h4>
                <p className="text-gray-600">
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
