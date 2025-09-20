import React from 'react';
import { Link } from 'react-router-dom';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaArrowRight } from 'react-icons/fa';

const ContactPreview = () => {
  const contactInfo = [
    {
      icon: FaPhone,
      title: 'Telefon',
      details: ['+90 (212) 555 0123', '+90 (212) 555 0124'],
      description: '7/24 acil durum hattı'
    },
    {
      icon: FaEnvelope,
      title: 'Email',
      details: ['info@avukatburosu.com', 'danismanlik@avukatburosu.com'],
      description: 'Hızlı yanıt garantisi'
    },
    {
      icon: FaMapMarkerAlt,
      title: 'Adres',
      details: ['Levent Mahallesi, Büyükdere Caddesi', 'No: 123, Kat: 5, Beşiktaş/İstanbul'],
      description: 'Merkezi konum'
    },
    {
      icon: FaClock,
      title: 'Çalışma Saatleri',
      details: ['Pazartesi - Cuma: 09:00 - 18:00', 'Cumartesi: 09:00 - 13:00'],
      description: 'Acil durumlar için 7/24'
    }
  ];

  return (
    <section className="bg-primary-600 py-20">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            İletişime Geçin
          </h2>
          <p className="text-xl text-primary-100 max-w-3xl mx-auto">
            Hukuki sorunlarınız için profesyonel destek almak istiyorsanız, 
            bizimle iletişime geçmekten çekinmeyin.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {contactInfo.map((info, index) => (
            <div key={index} className="text-center group">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-white/30 transition-colors duration-300">
                <info.icon className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                {info.title}
              </h3>
              <div className="space-y-1 mb-2">
                {info.details.map((detail, i) => (
                  <p key={i} className="text-primary-100 text-sm">
                    {detail}
                  </p>
                ))}
              </div>
              <p className="text-primary-200 text-xs">
                {info.description}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Hemen İletişime Geçin
              </h3>
              <p className="text-gray-600 leading-relaxed mb-8">
                Hukuki sorunlarınızda profesyonel destek almak için bizimle iletişime geçin. 
                İlk danışmanlık ücretsizdir ve gizlilik garantisi altındadır.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                  <span className="text-gray-700">Ücretsiz ilk danışmanlık</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                  <span className="text-gray-700">Gizlilik garantisi</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                  <span className="text-gray-700">Hızlı yanıt garantisi</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                  <span className="text-gray-700">Uzman avukat desteği</span>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <Link
                to="/iletisim"
                className="w-full btn-primary inline-flex items-center justify-center space-x-2 group"
              >
                <span>İletişim Formu</span>
                <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <a
                href="tel:+902125550123"
                className="w-full btn-secondary inline-flex items-center justify-center space-x-2"
              >
                <FaPhone />
                <span>Hemen Ara</span>
              </a>
              
              <a
                href="mailto:info@avukatburosu.com"
                className="w-full btn-secondary inline-flex items-center justify-center space-x-2"
              >
                <FaEnvelope />
                <span>Email Gönder</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPreview;
