import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const TeamPreview = () => {
  const teamMembers = [
    {
      name: 'Dr. Mehmet Yılmaz',
      title: 'Kurucu Ortak & Baş Avukat',
      specialization: 'Ticaret Hukuku',
      experience: '15+ yıl',
      image: '/images/team/mehmet-yilmaz.jpg',
      description: 'Ticaret hukuku alanında uzmanlaşmış, 15 yıllık deneyime sahip avukat.'
    },
    {
      name: 'Av. Ayşe Demir',
      title: 'Ortak Avukat',
      specialization: 'Aile Hukuku',
      experience: '12+ yıl',
      image: '/images/team/ayse-demir.jpg',
      description: 'Aile hukuku ve ceza hukuku alanlarında uzmanlaşmış, hassas konularda deneyimli avukat.'
    },
    {
      name: 'Av. Can Özkan',
      title: 'Kıdemli Avukat',
      specialization: 'Gayrimenkul Hukuku',
      experience: '8+ yıl',
      image: '/images/team/can-ozkan.jpg',
      description: 'Gayrimenkul ve iş hukuku alanlarında uzman, müvekkillerine kapsamlı hukuki destek sağlar.'
    }
  ];

  return (
    <section className="bg-gray-50 py-20">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Ekibimiz
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Alanında uzman, deneyimli avukatlardan oluşan ekibimizle 
            müvekkillerimize en kaliteli hizmeti sunuyoruz.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
              <div className="relative">
                <div className="w-full h-64 bg-gradient-to-br from-primary-100 to-primary-200 flex items-center justify-center">
                  <div className="w-24 h-24 bg-primary-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-2xl font-bold">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                </div>
                <div className="absolute top-4 right-4 flex space-x-2">
                  <button className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-primary-600 hover:text-white transition-colors">
                    <FaLinkedin size={14} />
                  </button>
                  <button className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-primary-600 hover:text-white transition-colors">
                    <FaEnvelope size={14} />
                  </button>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {member.name}
                </h3>
                <p className="text-primary-600 font-semibold mb-2">
                  {member.title}
                </p>
                <p className="text-gray-600 text-sm mb-4">
                  {member.description}
                </p>
                
                <div className="space-y-2 mb-6">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Uzmanlık:</span>
                    <span className="text-gray-700 font-medium">{member.specialization}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Deneyim:</span>
                    <span className="text-gray-700 font-medium">{member.experience}</span>
                  </div>
                </div>
                
                <button className="w-full bg-primary-50 text-primary-600 font-medium py-2 px-4 rounded-lg hover:bg-primary-600 hover:text-white transition-colors">
                  Profili Görüntüle
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            to="/ekip"
            className="btn-primary inline-flex items-center space-x-2 group"
          >
            <span>Tüm Ekibi Görüntüle</span>
            <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TeamPreview;
