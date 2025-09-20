import React from 'react';
import { FaUsers, FaAward, FaShieldAlt, FaGavel, FaCheckCircle, FaQuoteLeft } from 'react-icons/fa';

const About = () => {
  const values = [
    {
      icon: FaShieldAlt,
      title: 'Güvenilirlik',
      description: 'Müvekkillerimizin güvenini kazanmak için etik değerlere bağlı kalıyoruz.'
    },
    {
      icon: FaAward,
      title: 'Kalite',
      description: 'En yüksek kalitede hukuki hizmet sunmak için sürekli kendimizi geliştiriyoruz.'
    },
    {
      icon: FaUsers,
      title: 'Müvekkil Odaklılık',
      description: 'Müvekkillerimizin çıkarlarını her zaman ön planda tutuyoruz.'
    },
    {
      icon: FaGavel,
      title: 'Adalet',
      description: 'Adalet ve hakkaniyet ilkeleri doğrultusunda hareket ediyoruz.'
    }
  ];

  const achievements = [
    { number: '500+', label: 'Başarılı Dava' },
    { number: '1000+', label: 'Mutlu Müvekkil' },
    { number: '15+', label: 'Yıl Deneyim' },
    { number: '50+', label: 'Uzman Avukat' }
  ];

  const team = [
    {
      name: 'Dr. Mehmet Yılmaz',
      title: 'Kurucu Ortak & Baş Avukat',
      experience: '15+ yıl',
      specialization: 'Ticaret Hukuku'
    },
    {
      name: 'Av. Ayşe Demir',
      title: 'Ortak Avukat',
      experience: '12+ yıl',
      specialization: 'Aile Hukuku'
    },
    {
      name: 'Av. Can Özkan',
      title: 'Kıdemli Avukat',
      experience: '8+ yıl',
      specialization: 'Gayrimenkul Hukuku'
    },
    {
      name: 'Av. Zeynep Kaya',
      title: 'Avukat',
      experience: '5+ yıl',
      specialization: 'Miras Hukuku'
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-primary-100 py-20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Hakkımızda
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              2008 yılından beri hukuk alanında faaliyet gösteren büromuz, 
              müvekkillerimize en kaliteli hukuki danışmanlık hizmetlerini sunmaktadır.
            </p>
          </div>
        </div>
      </section>

      {/* Misyon & Vizyon */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Misyonumuz</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Adalet ve hakkaniyet ilkeleri doğrultusunda, müvekkillerimize en iyi hukuki hizmeti sunmak. 
                Her türlü hukuki sorunda yanlarında olarak, en doğru çözümleri üretmek ve onların haklarını 
                en etkili şekilde korumak.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Müvekkil memnuniyetini ön planda tutan anlayışımızla, etik değerlere bağlı kalarak 
                sürekli gelişim gösteren bir hukuk bürosu olmak.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Vizyonumuz</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Türkiye'nin önde gelen hukuk bürolarından biri olmak ve hukuk alanında 
                yenilikçi yaklaşımlarla öncü olmak.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Teknolojiyi etkin kullanarak, müvekkillerimize daha hızlı ve kaliteli hizmet sunmak. 
                Hukuk alanında sürekli eğitim ve gelişim ile uzmanlığımızı artırmak.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Değerlerimiz */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Değerlerimiz
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Çalışma prensiplerimizi oluşturan temel değerlerimiz
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary-600 transition-colors duration-300">
                  <value.icon className="text-primary-600 group-hover:text-white transition-colors duration-300" size={32} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Başarılarımız */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Başarılarımız
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              15+ yıllık deneyimimizle elde ettiğimiz başarılar
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-primary-600 mb-2">
                  {achievement.number}
                </div>
                <div className="text-lg font-semibold text-gray-700">
                  {achievement.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ekibimiz */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Ekibimiz
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Alanında uzman, deneyimli avukatlardan oluşan ekibimiz
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 text-center group hover:shadow-xl transition-shadow duration-300">
                <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary-600 transition-colors duration-300">
                  <span className="text-2xl font-bold text-primary-600 group-hover:text-white transition-colors duration-300">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {member.name}
                </h3>
                <p className="text-primary-600 font-semibold mb-2">
                  {member.title}
                </p>
                <p className="text-sm text-gray-600 mb-2">
                  {member.specialization}
                </p>
                <p className="text-sm text-gray-500">
                  {member.experience} deneyim
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Müvekkil Yorumu */}
      <section className="py-20 bg-primary-600">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <FaQuoteLeft className="text-primary-200 mx-auto mb-6" size={48} />
            <blockquote className="text-2xl md:text-3xl font-medium text-white mb-8 leading-relaxed">
              "Avukat Bürosu ile çalışmak gerçekten harika bir deneyimdi. 
              Profesyonel yaklaşımları ve hızlı çözüm üretme yetenekleri sayesinde 
              hukuki sorunlarımı kolayca çözdük."
            </blockquote>
            <div className="text-primary-100">
              <p className="text-lg font-semibold">Ahmet Yılmaz</p>
              <p className="text-sm">ABC Şirketi Genel Müdürü</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
