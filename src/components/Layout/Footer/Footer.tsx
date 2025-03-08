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
      href: 'https://www.facebook.com/Agensi.Pekerjaan.Kiara.Maniz',
      logo: facebookIcon,
    },
    {
      href: 'https://www.tiktok.com/@kiaramaniz?_t=ZS-8uQE8uYhBju&_r=1',
      logo: tiktokIcon,
    },
    {
      href: 'https://www.instagram.com/kiaramaniz?igsh=MXV1NXZob3NsODRsaA==',
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
        className="h-[120px] w-full object-cover md:h-auto"
      />

      {/* Social Logos and Copyright Section */}
      <div className="relative flex h-[500px] flex-col bg-primary">
        {/* Contact Us Box */}
        <div className="absolute -top-10 left-1/2 w-full max-w-[300px] -translate-x-1/2 rounded-xl bg-primary p-2 text-center shadow-xl md:-top-20 md:max-w-[755px] md:p-8">
          <h3 className="text-[18px] font-bold text-white md:text-2xl">
            {contactUs.title}
          </h3>
          <p className="mb-2 text-[14px] text-white md:mb-7 md:text-lg">
            {contactUs.description}
          </p>
          <div className="mx-auto mb-2 w-[160px] rounded-full bg-secondary px-6 py-2 text-center text-sm font-bold text-white transition hover:bg-secondary/90 md:text-xl">
            <Link href={contactUs.link}>Contact Us</Link>
          </div>
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
