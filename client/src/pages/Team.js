import React, { useState, useEffect } from 'react';
import { FaLinkedin, FaEnvelope, FaPhone, FaGraduationCap, FaAward, FaLanguage } from 'react-icons/fa';
import axios from 'axios';

const Team = () => {
  const [team, setTeam] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedMember, setSelectedMember] = useState(null);

  useEffect(() => {
    const fetchTeam = async () => {
      try {
        const response = await axios.get('/api/team');
        setTeam(response.data.data);
      } catch (error) {
        console.error('Ekip bilgileri yüklenirken hata:', error);
        // Fallback data
        setTeam([
          {
            id: 1,
            name: 'Dr. Mehmet Yılmaz',
            title: 'Kurucu Ortak & Baş Avukat',
            specialization: 'Ticaret Hukuku, Şirketler Hukuku',
            experience: '15+ yıl',
            education: 'İstanbul Üniversitesi Hukuk Fakültesi',
            languages: ['Türkçe', 'İngilizce', 'Almanca'],
            bio: 'Ticaret hukuku alanında uzmanlaşmış, 15 yıllık deneyime sahip avukat. Büyük şirketlerin hukuki danışmanlığını yürütmektedir.',
            achievements: [
              '500+ başarılı dava',
              'Ticaret Hukuku Uzmanı',
              'İstanbul Barosu Üyesi'
            ]
          },
          {
            id: 2,
            name: 'Av. Ayşe Demir',
            title: 'Ortak Avukat',
            specialization: 'Aile Hukuku, Ceza Hukuku',
            experience: '12+ yıl',
            education: 'Ankara Üniversitesi Hukuk Fakültesi',
            languages: ['Türkçe', 'İngilizce'],
            bio: 'Aile hukuku ve ceza hukuku alanlarında uzmanlaşmış, hassas konularda deneyimli avukat.',
            achievements: [
              '300+ aile hukuku davası',
              'Aile Hukuku Uzmanı',
              'Ankara Barosu Üyesi'
            ]
          },
          {
            id: 3,
            name: 'Av. Can Özkan',
            title: 'Kıdemli Avukat',
            specialization: 'Gayrimenkul Hukuku, İş Hukuku',
            experience: '8+ yıl',
            education: 'Marmara Üniversitesi Hukuk Fakültesi',
            languages: ['Türkçe', 'İngilizce', 'Fransızca'],
            bio: 'Gayrimenkul ve iş hukuku alanlarında uzman, müvekkillerine kapsamlı hukuki destek sağlar.',
            achievements: [
              '200+ gayrimenkul davası',
              'İş Hukuku Uzmanı',
              'İstanbul Barosu Üyesi'
            ]
          },
          {
            id: 4,
            name: 'Av. Zeynep Kaya',
            title: 'Avukat',
            specialization: 'Miras Hukuku, Medeni Hukuk',
            experience: '5+ yıl',
            education: 'Galatasaray Üniversitesi Hukuk Fakültesi',
            languages: ['Türkçe', 'İngilizce', 'Arapça'],
            bio: 'Miras hukuku ve medeni hukuk alanlarında uzmanlaşmış, genç ve dinamik avukat.',
            achievements: [
              '150+ miras davası',
              'Medeni Hukuk Uzmanı',
              'İstanbul Barosu Üyesi'
            ]
          }
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchTeam();
  }, []);

  if (loading) {
    return (
      <div className="pt-20 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Ekip bilgileri yükleniyor...</p>
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
              Ekibimiz
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Alanında uzman, deneyimli avukatlardan oluşan ekibimizle 
              müvekkillerimize en kaliteli hizmeti sunuyoruz.
            </p>
          </div>
        </div>
      </section>

      {/* Ekip Üyeleri */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member) => (
              <div 
                key={member.id} 
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group cursor-pointer"
                onClick={() => setSelectedMember(member)}
              >
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
                  <p className="text-primary-600 font-semibold mb-3">
                    {member.title}
                  </p>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {member.bio}
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
                    Detaylı Profil
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ekip İstatistikleri */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Ekip İstatistikleri
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ekibimizin gücü ve deneyimi
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary-600 mb-2">15+</div>
              <div className="text-lg font-semibold text-gray-700">Yıl Ortalama Deneyim</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary-600 mb-2">4</div>
              <div className="text-lg font-semibold text-gray-700">Uzman Avukat</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary-600 mb-2">6</div>
              <div className="text-lg font-semibold text-gray-700">Hukuk Alanı</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary-600 mb-2">100%</div>
              <div className="text-lg font-semibold text-gray-700">Müvekkil Memnuniyeti</div>
            </div>
          </div>
        </div>
      </section>

      {/* Modal - Detaylı Profil */}
      {selectedMember && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-8">
              <div className="flex justify-between items-start mb-6">
                <h2 className="text-2xl font-bold text-gray-900">
                  {selectedMember.name}
                </h2>
                <button
                  onClick={() => setSelectedMember(null)}
                  className="text-gray-400 hover:text-gray-600 text-2xl"
                >
                  ×
                </button>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Pozisyon</h3>
                  <p className="text-primary-600">{selectedMember.title}</p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Uzmanlık Alanları</h3>
                  <p className="text-gray-700">{selectedMember.specialization}</p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Eğitim</h3>
                  <div className="flex items-center space-x-2">
                    <FaGraduationCap className="text-primary-600" size={16} />
                    <span className="text-gray-700">{selectedMember.education}</span>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Diller</h3>
                  <div className="flex items-center space-x-2">
                    <FaLanguage className="text-primary-600" size={16} />
                    <span className="text-gray-700">{selectedMember.languages.join(', ')}</span>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Hakkında</h3>
                  <p className="text-gray-700 leading-relaxed">{selectedMember.bio}</p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Başarılar</h3>
                  <ul className="space-y-2">
                    {selectedMember.achievements.map((achievement, index) => (
                      <li key={index} className="flex items-center space-x-2">
                        <FaAward className="text-yellow-500" size={16} />
                        <span className="text-gray-700">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex space-x-4 pt-6 border-t border-gray-200">
                  <button className="btn-primary flex-1">
                    <FaPhone className="mr-2" size={14} />
                    İletişime Geç
                  </button>
                  <button className="btn-secondary flex-1">
                    <FaEnvelope className="mr-2" size={14} />
                    Email Gönder
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Team;
