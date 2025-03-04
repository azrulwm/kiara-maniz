'use client';

import { useState } from 'react';

const Faq = () => {
  const faqDetails = {
    header: 'Frequently Asked Questions',
    questions: [
      {
        question: `What is the main focus of Kiara Maniz's Training and Development service?`,
        answer:
          'Our Training and Development service is centered around investing in your workforce. We design and deliver tailored training programs that aim to enhance skills, boost productivity, and contribute to long-term employee satisfaction.',
      },
      {
        question:
          'How do you customize training programs to meet the specific needs of our organization?',
        answer:
          'We take a personalized approach to training and development. Our team collaborates closely with your organization to understand its unique needs, challenges, and goals. Based on this understanding, we design training modules that are tailored to address specific skill gaps and align with your industry and organizational objectives.',
      },
      {
        question:
          'What types of skills and competencies can be addressed through your training programs?',
        answer: `Our training programs cover a wide range of skills and competencies, including technical skills, leadership development, communication skills, problem-solving, and industry-specific expertise. Whether it's enhancing existing skills or developing new ones, we create programs that align with the evolving needs of your workforce and industry.`,
      },
      {
        question:
          'How do you ensure that training programs are engaging and effective for participants?',
        answer:
          'We prioritize the effectiveness of our training programs. Our modules are designed to be interactive, engaging, and aligned with adult learning principles. We incorporate a variety of training methods, such as workshops, simulations, and hands-on activities, to ensure that participants not only gain knowledge but also can apply it in real-world scenarios.',
      },
      {
        question:
          'How do you measure the effectiveness of your training programs?',
        answer:
          'We use a combination of quantitative and qualitative metrics to measure the effectiveness of our training programs. This may include participant feedback, assessments, post-training performance evaluations, and key performance indicators aligned with the goals of the training initiative.',
      },
    ],
  };

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-section">
      <div className="container mx-auto px-4 py-8 md:px-32 md:py-16">
        <h1 className="mb-6 text-center text-2xl font-extrabold text-secondary md:mb-10 md:text-3xl">
          {faqDetails.header}
        </h1>
        <div className="mx-auto max-w-[840px] space-y-3 md:space-y-4">
          {faqDetails.questions.map((faq, index) => (
            <div key={index} className="rounded-xl border-2 border-secondary">
              <button
                className="flex w-full items-center justify-between px-4 py-4 md:px-6 md:py-8"
                onClick={() => toggleAccordion(index)}
              >
                <span className="text-left text-base font-medium md:text-lg">
                  {faq.question}
                </span>
                <span
                  className={`ml-2 transform text-xl text-secondary transition-transform duration-500 md:text-2xl ${
                    activeIndex === index ? 'rotate-180' : ''
                  }`}
                >
                  ▼
                </span>
              </button>
              {activeIndex === index && (
                <div className="px-4 pb-4 pt-2 text-sm text-gray-600 md:px-6 md:text-base">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faq;
