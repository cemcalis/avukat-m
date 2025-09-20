import React from 'react';
import { FaGavel, FaUsers, FaTrophy, FaClock } from 'react-icons/fa';

const Stats = () => {
  const stats = [
    {
      icon: FaGavel,
      number: '500+',
      label: 'Başarılı Dava',
      description: 'Çözülen hukuki uyuşmazlık'
    },
    {
      icon: FaUsers,
      number: '1000+',
      label: 'Mutlu Müvekkil',
      description: 'Memnun müşteri sayısı'
    },
    {
      icon: FaTrophy,
      number: '15+',
      label: 'Yıl Deneyim',
      description: 'Hukuk alanında tecrübe'
    },
    {
      icon: FaClock,
      number: '24/7',
      label: 'Destek',
      description: 'Kesintisiz hizmet'
    }
  ];

  return (
    <section className="bg-white py-16">
      <div className="container-custom">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary-600 transition-colors duration-300">
                <stat.icon className="text-primary-600 group-hover:text-white transition-colors duration-300" size={24} />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                {stat.number}
              </div>
              <div className="text-lg font-semibold text-gray-700 mb-1">
                {stat.label}
              </div>
              <div className="text-sm text-gray-500">
                {stat.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
