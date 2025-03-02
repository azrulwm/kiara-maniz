import facebookIcon from '@public/fb-icon.svg';
import tiktokIcon from '@public/tiktok-icon.svg';
import instagramIcon from '@public/instagram-icon.svg';
import footerBgImage from '@public/footer-bg-image.webp';
import Link from 'next/link';
import Image from 'next/image';
import { ROUTES } from '@/config/route';

const Footer = () => {
  const contactUs = {
    title: 'Have questions or need assistance?',
    description:
      'Our dedicated team is here to help. Reach out for personalized support and guidance.',
    link: ROUTES.CONTACT,
  };

  const socialLogos = [
    {
      href: 'https://www.facebook.com',
      logo: facebookIcon,
    },
    {
      href: 'https://www.tiktok.com',
      logo: tiktokIcon,
    },
    {
      href: 'https://www.instagram.com',
      logo: instagramIcon,
    },
  ];

  const copyrightText = [
    {
      text: '© Copyright 2025 All Rights Reserved.',
    },
    {
      text: 'Agensi Pekerjaan Kiara Maniz',
    },
    {
      text: 'No. Lesen : JTKSM 1306',
    },
  ];

  return (
    <div className="relative">
      <Image
        src={footerBgImage}
        alt="Footer Background"
        width={1440}
        height={372}
        className="w-full object-cover"
      />

      {/* Social Logos and Copyright Section */}
      <div className="relative flex h-[500px] flex-col bg-primary">
        {/* Contact Us Box */}
        <div className="absolute -top-20 left-1/2 w-full max-w-[755px] -translate-x-1/2 rounded-xl bg-primary p-8 text-center shadow-xl">
          <h3 className="text-2xl font-bold text-white">{contactUs.title}</h3>
          <p className="mb-7 text-white">{contactUs.description}</p>
          <Link
            href={contactUs.link}
            className="w-[160px] rounded-full bg-secondary px-6 py-2 text-center font-bold text-white transition hover:bg-secondary/90"
          >
            Contact Us
          </Link>
        </div>

        {/* Social Links and Copyright - Using flex for centering */}
        <div className="flex h-full flex-col items-center justify-center gap-8">
          <div className="flex gap-6">
            {socialLogos.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform hover:scale-110"
              >
                <Image
                  src={item.logo}
                  alt="Social Media Icon"
                  width={48}
                  height={48}
                  priority
                  className="object-contain"
                />
              </Link>
            ))}
          </div>

          <div>
            {copyrightText.map((item, index) => (
              <p className="mb-2 text-center text-white" key={index}>
                {item.text}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
