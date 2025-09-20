import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaCheckCircle, FaUsers, FaAward, FaShieldAlt } from 'react-icons/fa';

const AboutPreview = () => {
  const features = [
    {
      icon: FaUsers,
      title: 'Uzman Ekip',
      description: 'Alanında uzman avukatlardan oluşan deneyimli ekibimiz'
    },
    {
      icon: FaAward,
      title: 'Kaliteli Hizmet',
      description: 'Müvekkillerimize en yüksek kalitede hukuki danışmanlık'
    },
    {
      icon: FaShieldAlt,
      title: 'Güvenilirlik',
      description: '15+ yıllık deneyimimizle güvenilir hizmet anlayışı'
    }
  ];

  return (
    <section className="bg-gray-50 py-20">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Sol taraf - İçerik */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Hakkımızda
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                2008 yılından beri hukuk alanında faaliyet gösteren büromuz, 
                müvekkillerimize en kaliteli hukuki danışmanlık hizmetlerini sunmaktadır. 
                Uzman ekibimizle tüm hukuk alanlarında profesyonel çözümler üretiyoruz.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Müvekkil memnuniyetini ön planda tutan anlayışımızla, 
                her türlü hukuki sorunda yanınızdayız. Deneyimli avukatlarımız, 
                güncel hukuki gelişmeleri takip ederek en doğru çözümleri sunar.
              </p>
            </div>

            {/* Özellikler */}
            <div className="space-y-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <feature.icon className="text-primary-600" size={18} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/hakkimizda"
                className="btn-primary inline-flex items-center space-x-2 group"
              >
                <span>Daha Fazla Bilgi</span>
                <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/iletisim"
                className="btn-secondary inline-flex items-center space-x-2"
              >
                <span>İletişime Geç</span>
              </Link>
            </div>
          </div>

          {/* Sağ taraf - Görsel */}
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <div className="space-y-6">
                <div className="text-center">
                  <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl">⚖️</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Misyonumuz</h3>
                  <p className="text-gray-600">
                    Adalet ve hakkaniyet ilkeleri doğrultusunda, 
                    müvekkillerimize en iyi hukuki hizmeti sunmak.
                  </p>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg">
                    <FaCheckCircle className="text-green-500 flex-shrink-0" size={20} />
                    <span className="text-gray-700">Etik değerlere bağlılık</span>
                  </div>
                  <div className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg">
                    <FaCheckCircle className="text-green-500 flex-shrink-0" size={20} />
                    <span className="text-gray-700">Müvekkil odaklı yaklaşım</span>
                  </div>
                  <div className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg">
                    <FaCheckCircle className="text-green-500 flex-shrink-0" size={20} />
                    <span className="text-gray-700">Sürekli gelişim</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;
