import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaBriefcase, FaHome, FaShield, FaUsers, FaGavel, FaFileContract } from 'react-icons/fa';

const ServicesPreview = () => {
  const services = [
    {
      icon: FaBriefcase,
      title: 'Ticaret Hukuku',
      description: 'Şirket kuruluşu, ortaklık anlaşmaları ve ticari sözleşmeler',
      color: 'bg-blue-100 text-blue-600'
    },
    {
      icon: FaUsers,
      title: 'Aile Hukuku',
      description: 'Boşanma, velayet, nafaka ve aile hukuku danışmanlığı',
      color: 'bg-pink-100 text-pink-600'
    },
    {
      icon: FaShield,
      title: 'Ceza Hukuku',
      description: 'Ceza davalarında savunma ve suç duyurusu',
      color: 'bg-red-100 text-red-600'
    },
    {
      icon: FaHome,
      title: 'Gayrimenkul Hukuku',
      description: 'Tapu işlemleri, kira sözleşmeleri ve inşaat hukuku',
      color: 'bg-green-100 text-green-600'
    },
    {
      icon: FaGavel,
      title: 'İş Hukuku',
      description: 'İş sözleşmeleri, işten çıkarma ve iş kazaları',
      color: 'bg-purple-100 text-purple-600'
    },
    {
      icon: FaFileContract,
      title: 'Miras Hukuku',
      description: 'Miras paylaşımı, vasiyetname ve miras davaları',
      color: 'bg-yellow-100 text-yellow-600'
    }
  ];

  return (
    <section className="bg-white py-20">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Hizmetlerimiz
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Tüm hukuk alanlarında profesyonel danışmanlık hizmetleri sunuyoruz. 
            Uzman ekibimizle en iyi çözümleri üretiyoruz.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 group hover:-translate-y-1">
              <div className={`w-16 h-16 ${service.color} rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                {service.description}
              </p>
              <div className="flex items-center text-primary-600 font-medium group-hover:text-primary-700 transition-colors">
                <span>Detaylı Bilgi</span>
                <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={14} />
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            to="/hizmetler"
            className="btn-primary inline-flex items-center space-x-2 group"
          >
            <span>Tüm Hizmetleri Görüntüle</span>
            <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;
