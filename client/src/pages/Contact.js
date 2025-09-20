import React, { useState } from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaPaperPlane, FaCalendarAlt } from 'react-icons/fa';
import axios from 'axios';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [appointmentData, setAppointmentData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    service: '',
    message: ''
  });
  const [activeTab, setActiveTab] = useState('contact');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (activeTab === 'contact') {
      setFormData(prev => ({ ...prev, [name]: value }));
    } else {
      setAppointmentData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    try {
      const endpoint = activeTab === 'contact' ? '/api/contact/send' : '/api/contact/appointment';
      const data = activeTab === 'contact' ? formData : appointmentData;
      
      const response = await axios.post(endpoint, data);
      setMessage(response.data.message);
      
      // Formu temizle
      if (activeTab === 'contact') {
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: ''
        });
      } else {
        setAppointmentData({
          name: '',
          email: '',
          phone: '',
          date: '',
          time: '',
          service: '',
          message: ''
        });
      }
    } catch (error) {
      setMessage('Bir hata oluştu. Lütfen tekrar deneyin.');
      console.error('Form gönderme hatası:', error);
    } finally {
      setLoading(false);
    }
  };

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

  const services = [
    'Ticaret Hukuku',
    'Aile Hukuku',
    'Ceza Hukuku',
    'Gayrimenkul Hukuku',
    'İş Hukuku',
    'Miras Hukuku',
    'Genel Danışmanlık'
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-primary-100 py-20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              İletişim
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Hukuki sorunlarınız için bizimle iletişime geçin. 
              İlk danışmanlık ücretsizdir.
            </p>
          </div>
        </div>
      </section>

      {/* İletişim Bilgileri */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary-600 transition-colors duration-300">
                  <info.icon className="text-primary-600 group-hover:text-white transition-colors duration-300" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {info.title}
                </h3>
                <div className="space-y-1 mb-2">
                  {info.details.map((detail, i) => (
                    <p key={i} className="text-gray-600 text-sm">
                      {detail}
                    </p>
                  ))}
                </div>
                <p className="text-primary-600 text-xs">
                  {info.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* İletişim Formu ve Randevu */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            {/* Tab Butonları */}
            <div className="flex justify-center mb-12">
              <div className="bg-white rounded-lg p-1 shadow-lg">
                <button
                  onClick={() => setActiveTab('contact')}
                  className={`px-8 py-3 rounded-md font-medium transition-colors ${
                    activeTab === 'contact'
                      ? 'bg-primary-600 text-white'
                      : 'text-gray-600 hover:text-primary-600'
                  }`}
                >
                  <FaPaperPlane className="inline mr-2" />
                  İletişim Formu
                </button>
                <button
                  onClick={() => setActiveTab('appointment')}
                  className={`px-8 py-3 rounded-md font-medium transition-colors ${
                    activeTab === 'appointment'
                      ? 'bg-primary-600 text-white'
                      : 'text-gray-600 hover:text-primary-600'
                  }`}
                >
                  <FaCalendarAlt className="inline mr-2" />
                  Randevu Al
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Form */}
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  {activeTab === 'contact' ? 'İletişim Formu' : 'Randevu Talebi'}
                </h2>

                {message && (
                  <div className={`mb-6 p-4 rounded-lg ${
                    message.includes('başarıyla') || message.includes('alındı')
                      ? 'bg-green-100 text-green-700'
                      : 'bg-red-100 text-red-700'
                  }`}>
                    {message}
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Ad Soyad *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={activeTab === 'contact' ? formData.name : appointmentData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        placeholder="Adınız ve soyadınız"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={activeTab === 'contact' ? formData.email : appointmentData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        placeholder="email@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Telefon *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={activeTab === 'contact' ? formData.phone : appointmentData.phone}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        placeholder="+90 (5xx) xxx xx xx"
                      />
                    </div>
                    {activeTab === 'contact' ? (
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Konu
                        </label>
                        <input
                          type="text"
                          name="subject"
                          value={formData.subject}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                          placeholder="Konu başlığı"
                        />
                      </div>
                    ) : (
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Hizmet Türü
                        </label>
                        <select
                          name="service"
                          value={appointmentData.service}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        >
                          <option value="">Hizmet seçin</option>
                          {services.map((service, index) => (
                            <option key={index} value={service}>{service}</option>
                          ))}
                        </select>
                      </div>
                    )}
                  </div>

                  {activeTab === 'appointment' && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Tarih *
                        </label>
                        <input
                          type="date"
                          name="date"
                          value={appointmentData.date}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Saat
                        </label>
                        <input
                          type="time"
                          name="time"
                          value={appointmentData.time}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        />
                      </div>
                    </div>
                  )}

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Mesaj *
                    </label>
                    <textarea
                      name="message"
                      value={activeTab === 'contact' ? formData.message : appointmentData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder={activeTab === 'contact' ? 'Mesajınızı yazın...' : 'Randevu talebiniz hakkında detay verin...'}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {loading ? 'Gönderiliyor...' : (activeTab === 'contact' ? 'Mesaj Gönder' : 'Randevu Talebi Gönder')}
                  </button>
                </form>
              </div>

              {/* Harita ve Ek Bilgiler */}
              <div className="space-y-8">
                {/* Harita */}
                <div className="bg-white rounded-2xl shadow-xl p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Konumumuz</h3>
                  <div className="w-full h-64 bg-gray-200 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <FaMapMarkerAlt className="text-primary-600 mx-auto mb-2" size={32} />
                      <p className="text-gray-600">Harita burada görüntülenecek</p>
                      <p className="text-sm text-gray-500 mt-2">
                        Levent Mahallesi, Büyükdere Caddesi<br />
                        No: 123, Kat: 5, Beşiktaş/İstanbul
                      </p>
                    </div>
                  </div>
                </div>

                {/* Hızlı İletişim */}
                <div className="bg-white rounded-2xl shadow-xl p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-6">Hızlı İletişim</h3>
                  <div className="space-y-4">
                    <a
                      href="tel:+902125550123"
                      className="flex items-center space-x-3 p-4 bg-primary-50 rounded-lg hover:bg-primary-100 transition-colors"
                    >
                      <FaPhone className="text-primary-600" size={20} />
                      <div>
                        <p className="font-semibold text-gray-900">Hemen Ara</p>
                        <p className="text-sm text-gray-600">+90 (212) 555 0123</p>
                      </div>
                    </a>
                    <a
                      href="mailto:info@avukatburosu.com"
                      className="flex items-center space-x-3 p-4 bg-primary-50 rounded-lg hover:bg-primary-100 transition-colors"
                    >
                      <FaEnvelope className="text-primary-600" size={20} />
                      <div>
                        <p className="font-semibold text-gray-900">Email Gönder</p>
                        <p className="text-sm text-gray-600">info@avukatburosu.com</p>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
