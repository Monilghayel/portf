import React from 'react';

const certificates = [
  {
    title: "Frontend - HackerRank",
    url: "https://drive.google.com/file/d/1DtO4r2bAVRm3ahDI-UOWf85VWOsEyv7j/view?usp=drive_link"
  },
  {
    title: "CPP - Spoken tutorial | IIT Bombay",
    url: "https://drive.google.com/file/d/1-wMB7XV_9BdMKKMNi77JK19CZ6rfDDCC/view?usp=drive_link"
  },
  {
    title: "Advanced CPP -Spoken tutorial | IIT Bombay",
    url: "https://drive.google.com/file/d/1NgGEj3LJdGqCNKp85Kh77K-kyGmK9raL/view?usp=drive_link",
  },
  {
    title: "Javascript - Spoken tutorial | IIT Bombay",
    url: "https://drive.google.com/file/d/1TPDk2-xk-MSRLvA48ZvTdG8zDH6A6Zbp/view?usp=drive_link",
  },
  {
    title: "Python - Spoken tutorial | IIT Bombay",
    url: "https://drive.google.com/file/d/1yB9LMQrumRhNh4R1SumjWkiRcA3813ic/view?usp=drive_link",
  },
  {
    title: "RDBMS - Spoken tutorial | IIT Bombay",
    url: "https://drive.google.com/file/d/1QKdXYQySxwPmspKoMBtm5DBQ4ZIeRlwZ/view?usp=drive_link",
  },
  {
    title: "Email Etiquettes - Tata Consultancy Services",
    url: "https://drive.google.com/file/d/1C-CI-bZB_CyKEbWihFe25xiwLHcLrbK9/view?usp=drive_link",
  },
  {
    title: "C - Spoken tutorial | IIT Bombay",
    url: "https://drive.google.com/file/d/1_UmmLKEBM6sgPBvqVs7bLMei0CLa_r-K/view?usp=drive_link",
  },
  {
    title: "PHP and MySQL - Spoken tutorial | IIT Bombay",
    url: "https://drive.google.com/file/d/1L9onq3YmBIwbdnspMKvDwflwmPx-CurF/view?usp=drive_link",
  },
  {
    title: "Arduino - Spoken tutorial | IIT Bombay",
    url: "https://drive.google.com/file/d/1HLNxGih9TxI8YdJQbne5ez9Pk7Hoj7Tc/view?usp=drive_link",
  },
  {
    title: "Communication Skills - Tata Consultancy Services",
    url: "https://drive.google.com/file/d/FILE_ID_11/view?usp=sharing",
  },
  {
    title: "HTML Certification - Spoken tutorial | IIT Bombay",
    url: "https://drive.google.com/file/d/18keyv7b2R8x2MP-zukLyaZ2fidu4GjNq/view?usp=drive_link",
  },
  {
    title: "Linux Certification - Tata Consultancy Services",
    url: "https://drive.google.com/file/d/1vEgb9L_GMqHVsjuQiLiPKzIGApCPlAYi/view?usp=drive_linkg",
  },
  {
    title: "Intro to SS - Tata Consultancy Services",
    url: "https://drive.google.com/file/d/1vEPCWUxvOPiWu3fQg4Fyy30YVKekRbl_/view?usp=drive_link",
  },
  {
    title: "Intro to Computer - Spoken tutorial | IIT Bombay",
    url: "https://drive.google.com/file/d/1XluojsqsWr47T1clJVHYp-sAeRNH1lHZ/view?usp=drive_link",
  },
];

const getLogoUrl = (title) => {
  if (title.includes('Spoken tutorial | IIT Bombay')) {
    return 'https://spoken-tutorial.org/media/user/1107017/1107017.png';
  }
  if (title.includes('Tata Consultancy Services')) {
    return 'https://resources.ripplematch.com/hubfs/Tata%20Consultancy%20Services-1.png';
  }
  if (title.includes('HackerRank')) {
    return 'https://upload.wikimedia.org/wikipedia/commons/6/65/HackerRank_logo.png';
  }
  return 'https://cdn-icons-png.flaticon.com/512/337/337946.png'; // generic certificate icon
};

const Certificates = () => (
  <section id="certificates" className="py-20 ">
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-serif mb-8 animate-slide-in-left">Certificates</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {certificates.map((cert, idx) => (
          <div key={cert.title} className="mb-8 flex items-start gap-4 animate-fade-in-up" style={{ animationDelay: `${0.2 + idx * 0.1}s` }}>
            <div className="flex-shrink-0">
              <img src={getLogoUrl(cert.title)} alt="logo" className="w-20 h-20 object-contain bg-white rounded-full p-2 border shadow transition-all duration-300 hover:scale-110" />
            </div>
            <div>
              <div className="font-bold transition-all duration-300 hover:text-accent">{cert.title}</div>
              <div className="mt-2 flex gap-4 items-center">
                <a href={cert.url} target="_blank" rel="noopener noreferrer" className="inline-block bg-accent text-white text-xs font-semibold px-3 py-1 rounded-full border border-accent underline transition-all duration-300 hover:scale-105 hover:translate-y-[-1px]">View Certificate</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Certificates; 