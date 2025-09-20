import React, { useState, useEffect } from 'react';
import { FaBriefcase, FaHome, FaShield, FaUsers, FaGavel, FaFileContract, FaCheckCircle, FaArrowRight } from 'react-icons/fa';
import axios from 'axios';

const Services = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await axios.get('/api/services');
        setServices(response.data.data);
      } catch (error) {
        console.error('Hizmetler yüklenirken hata:', error);
        // Fallback data
        setServices([
          {
            id: 1,
            title: 'Ticaret Hukuku',
            description: 'Şirket kuruluşu, ortaklık anlaşmaları, ticari sözleşmeler ve ticaret hukuku danışmanlığı',
            icon: 'briefcase',
            features: [
              'Şirket kuruluşu ve tescil işlemleri',
              'Ortaklık anlaşmaları',
              'Ticari sözleşmeler',
              'Ticaret sicil işlemleri',
              'Ticari uyuşmazlıklar'
            ]
          },
          {
            id: 2,
            title: 'Aile Hukuku',
            description: 'Boşanma, velayet, nafaka ve aile hukuku ile ilgili tüm konularda hukuki destek',
            icon: 'family',
            features: [
              'Boşanma davaları',
              'Velayet ve kişisel ilişki',
              'Nafaka davaları',
              'Mal rejimi anlaşmaları',
              'Aile içi şiddet koruma'
            ]
          },
          {
            id: 3,
            title: 'Ceza Hukuku',
            description: 'Ceza davalarında savunma, suç duyurusu ve ceza hukuku danışmanlığı',
            icon: 'shield',
            features: [
              'Ceza davalarında savunma',
              'Suç duyurusu ve şikayet',
              'Trafik cezaları',
              'İcra ve iflas suçları',
              'Beyaz yaka suçları'
            ]
          },
          {
            id: 4,
            title: 'Gayrimenkul Hukuku',
            description: 'Tapu işlemleri, kira sözleşmeleri, inşaat hukuku ve gayrimenkul uyuşmazlıkları',
            icon: 'home',
            features: [
              'Tapu işlemleri',
              'Kira sözleşmeleri',
              'İnşaat hukuku',
              'Kat mülkiyeti',
              'Gayrimenkul uyuşmazlıkları'
            ]
          },
          {
            id: 5,
            title: 'İş Hukuku',
            description: 'İş sözleşmeleri, işten çıkarma, iş kazaları ve iş hukuku danışmanlığı',
            icon: 'work',
            features: [
              'İş sözleşmeleri',
              'İşten çıkarma davaları',
              'İş kazaları',
              'Mobbing davaları',
              'Toplu iş sözleşmeleri'
            ]
          },
          {
            id: 6,
            title: 'Miras Hukuku',
            description: 'Miras paylaşımı, vasiyetname, miras reddi ve miras hukuku danışmanlığı',
            icon: 'inheritance',
            features: [
              'Miras paylaşımı',
              'Vasiyetname düzenleme',
              'Miras reddi',
              'Miras davaları',
              'Miras vergisi'
            ]
          }
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  const getIcon = (iconName) => {
    const icons = {
      briefcase: FaBriefcase,
      family: FaUsers,
      shield: FaShield,
      home: FaHome,
      work: FaGavel,
      inheritance: FaFileContract
    };
    return icons[iconName] || FaBriefcase;
  };

  const getIconColor = (index) => {
    const colors = [
      'bg-blue-100 text-blue-600',
      'bg-pink-100 text-pink-600',
      'bg-red-100 text-red-600',
      'bg-green-100 text-green-600',
      'bg-purple-100 text-purple-600',
      'bg-yellow-100 text-yellow-600'
    ];
    return colors[index % colors.length];
  };

  if (loading) {
    return (
      <div className="pt-20 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Hizmetler yükleniyor...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-primary-100 py-20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Hizmetlerimiz
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Tüm hukuk alanlarında profesyonel danışmanlık hizmetleri sunuyoruz. 
              Uzman ekibimizle en iyi çözümleri üretiyoruz.
            </p>
          </div>
        </div>
      </section>

      {/* Hizmetler */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {services.map((service, index) => {
              const IconComponent = getIcon(service.icon);
              const iconColor = getIconColor(index);
              
              return (
                <div key={service.id} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 group">
                  <div className="flex items-start space-x-6">
                    <div className={`w-16 h-16 ${iconColor} rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent size={24} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed mb-6">
                        {service.description}
                      </p>
                      
                      <div className="space-y-3">
                        <h4 className="font-semibold text-gray-900 mb-3">Hizmet Kapsamı:</h4>
                        <ul className="space-y-2">
                          {service.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-center space-x-3">
                              <FaCheckCircle className="text-green-500 flex-shrink-0" size={16} />
                              <span className="text-gray-700 text-sm">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="mt-6 pt-6 border-t border-gray-200">
                        <button className="btn-primary inline-flex items-center space-x-2 group">
                          <span>Detaylı Bilgi</span>
                          <FaArrowRight className="group-hover:translate-x-1 transition-transform" size={14} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Neden Bizi Seçmelisiniz */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Neden Bizi Seçmelisiniz?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hukuki sorunlarınızda profesyonel destek almak için neden bizi tercih etmelisiniz?
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <FaUsers className="text-primary-600" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Uzman Ekip</h3>
              <p className="text-gray-600">
                Alanında uzman, deneyimli avukatlardan oluşan ekibimizle 
                en kaliteli hizmeti sunuyoruz.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <FaShield className="text-primary-600" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Güvenilirlik</h3>
              <p className="text-gray-600">
                15+ yıllık deneyimimizle güvenilir hizmet anlayışımızı 
                müvekkillerimize kanıtladık.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <FaGavel className="text-primary-600" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Başarı Oranı</h3>
              <p className="text-gray-600">
                500+ başarılı dava ile yüksek başarı oranımızla 
                müvekkillerimizin haklarını koruyoruz.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* İletişim CTA */}
      <section className="py-20 bg-primary-600">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Hukuki Danışmanlık İhtiyacınız mı Var?
            </h2>
            <p className="text-xl text-primary-100 mb-8">
              Uzman ekibimizle hukuki sorunlarınızda yanınızdayız. 
              İlk danışmanlık ücretsizdir.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-primary-600 font-medium py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors">
                Ücretsiz Danışmanlık
              </button>
              <button className="border-2 border-white text-white font-medium py-3 px-8 rounded-lg hover:bg-white hover:text-primary-600 transition-colors">
                Randevu Al
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
