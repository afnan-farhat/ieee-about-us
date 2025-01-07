"use client";

import React, { useState } from 'react';
import './app.css';
import { FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';

type Language = 'en' | 'ar';

const content: Record<Language, { aboutUsTitle: string; aboutUsText: string; membersTitle: string; footerText: string }> = {
  en: {
    aboutUsTitle: '< About Us',
    aboutUsText: `IEEE Student Clubs are chapters of the IEEE Foundation and constitute part of the
      global IEEE network. It consists mainly of electrical, electronic, and computer
      engineering and science students. IEEE Student Clubs exist in universities and
      institutes around the world, and local branches of the clubs organize events,
      lectures, workshops, competitions, technical projects, social activities, and other
      activities aimed at achieving the goals of the IEEE Foundation.`,
    membersTitle: '< Members',
    footerText: 'IEEE © 2025 | Powered by IEEE',
  },
  ar: {
    aboutUsTitle: '  عن النادي < ',
    aboutUsText: `نوادي الطلاب IEEE هي فروع لمؤسسة IEEE وتشكل جزءًا من شبكة IEEE العالمية.
      تتألف بشكل أساسي من طلاب الهندسة الكهربائية والإلكترونية وعلوم الكمبيوتر.
      تتواجد نوادي الطلاب IEEE في الجامعات والمعاهد حول العالم، حيث تنظم الفروع المحلية
      أحداثًا ومحاضرات وورش عمل ومسابقات ومشاريع تقنية وأنشطة اجتماعية تهدف إلى تحقيق
      أهداف مؤسسة IEEE.`,
    membersTitle: 'الأعضاء < ',
    footerText: 'IEEE © 2025 | بدعم من IEEE',
  },
};

function Home() {
  const [language, setLanguage] = useState<Language>('en');
  const [activePage, setActivePage] = useState<string>("about");
  const currentContent = content[language];

  return (
    <div className={language === 'ar' ? 'text-right' : 'text-left'}>
      <title>IEEE - KAU Female Branch</title>

      <link href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" rel="stylesheet" />
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Cairo" />

      <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="container">
          <a className="navbar-brand" href="#">
            <img src="ieee-logo.png" alt="IEEE Logo" className="logo-image" />
          </a>

          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className={`nav-item ${activePage === 'home' ? 'active' : ''}`}>
                <a className="nav-link" href="#" onClick={() => setActivePage('home')}>
                  {language === 'en' ? 'Home' : 'الرئيسية'}
                </a>
              </li>
              <li className={`nav-item ${activePage === 'explore' ? 'active' : ''}`}>
                <a className="nav-link" href="#" onClick={() => setActivePage('explore')}>
                  {language === 'en' ? 'Explore' : 'استكشف'}
                </a>
              </li>
              <li className={`nav-item ${activePage === 'news' ? 'active' : ''}`}>
                <a className="nav-link" href="#" onClick={() => setActivePage('news')}>
                  {language === 'en' ? 'News' : 'الأخبار'}
                </a>
              </li>
              <li className={`nav-item ${activePage === 'about' ? 'active' : ''}`}>
                <a className="nav-link" href="#" onClick={() => setActivePage('about')}>
                  {language === 'en' ? 'About Us' : 'عن النادي'}
                </a>
              </li>
              <li className={`nav-item ${activePage === 'join' ? 'active' : ''}`}>
                <a className="nav-link" href="#" onClick={() => setActivePage('join')}>
                  {language === 'en' ? 'Join Us' : 'انضم إلينا'}
                </a>
              </li>
              <li className={`nav-item ${activePage === 'contact' ? 'active' : ''}`}>
                <a className="nav-link" href="#" onClick={() => setActivePage('contact')}>
                  {language === 'en' ? 'Contact' : 'تواصل'}
                </a>
              </li>
            </ul>

            <div className="ml-3">
              <button
                className={`btn-language ${language === 'ar' ? 'active-language' : ''}`}
                onClick={() => setLanguage('ar')}
              >
                AR
              </button>
              <button
                className={`btn-language ${language === 'en' ? 'active-language' : ''}`}
                onClick={() => setLanguage('en')}
              >
                EN
              </button>
            </div>
          </div>
        </div>
      </nav>

      <main>
        <div className="content">
          <h2 className="title">{currentContent.aboutUsTitle}</h2>
          <div className="container mt-4">
            <div className="row align-items-start gap-4">
              {language === 'ar' ? (
                <>
                  <div className="col-md-6 text-left">
                    <img src="aboutus-image.png" alt="About Us" className="img-fluid about-us-image" />
                  </div>
                  <div className="col-md-6">
                    <p>{currentContent.aboutUsText}</p>
                  </div>
                </>
              ) : (
                <>
                  <div className="col-md-6">
                    <p>{currentContent.aboutUsText}</p>
                  </div>
                  <div className="col-md-6 text-right">
                    <img src="aboutus-image.png" alt="About Us" className="img-fluid about-us-image" />
                  </div>
                </>
              )}
            </div>
          </div>

          <br />
          <h2 className="title">{currentContent.membersTitle}</h2>
          <img src="member.png" alt="Members" className="members-image" />
        </div>
      </main>

      <nav className="navbar navbar-expand-lg navbar-dark bottom-bar">
        <div className="container">
          <div className="logo-column">
            <a className="navbar-brand" href="#">
              <img src="ieee-logo.png" alt="IEEE Logo" className="logo-image-buttombar" />
            </a>
          </div>
          <div className="follow-us-column">
            <div className="follow-us">
              <p>{language === 'en' ? 'Follow Us' : 'تابعنا'}</p>
              <div className="social-icons">
                <FaLinkedin className="social-icon" />
                <FaTwitter className="social-icon" />
                <FaInstagram className="social-icon" />
              </div>
            </div>
          </div>
          <div className="empty-column"></div>
        </div>
      </nav>

      <footer className="footer">
        <p>{currentContent.footerText}</p>
      </footer>

      <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
      <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js"></script>
      <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
    </div>
  );
}

export default Home;
