import React from 'react';
import { Link } from 'react-router-dom';
import { FaPhone, FaCalendarAlt, FaArrowRight } from 'react-icons/fa';

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-primary-50 to-primary-100 min-h-screen flex items-center">
      {/* Arka plan deseni */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%230ea5e9" fill-opacity="0.05"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50"></div>
      
      <div className="container-custom section-padding relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Sol taraf - İçerik */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Profesyonel
                <span className="gradient-text block">Hukuki Danışmanlık</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                15+ yıllık deneyimimizle, hukuki sorunlarınızda yanınızdayız. 
                Uzman ekibimizle en iyi çözümleri sunuyoruz.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/iletisim"
                className="btn-primary inline-flex items-center justify-center space-x-2 group"
              >
                <span>Ücretsiz Danışmanlık</span>
                <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/hakkimizda"
                className="btn-secondary inline-flex items-center justify-center space-x-2"
              >
                <span>Hakkımızda</span>
              </Link>
            </div>

            {/* İletişim bilgileri */}
            <div className="flex flex-col sm:flex-row gap-6 pt-8 border-t border-gray-200">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center">
                  <FaPhone className="text-white" size={18} />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Acil Durum</p>
                  <p className="font-semibold text-gray-900">+90 (212) 555 0123</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center">
                  <FaCalendarAlt className="text-white" size={18} />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Randevu</p>
                  <p className="font-semibold text-gray-900">Online Randevu</p>
                </div>
              </div>
            </div>
          </div>

          {/* Sağ taraf - Görsel */}
          <div className="relative">
            <div className="relative z-10">
              <div className="bg-white rounded-2xl shadow-2xl p-8">
                <div className="space-y-6">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-3xl">⚖️</span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Hukuki Uzmanlık</h3>
                    <p className="text-gray-600">Tüm hukuk alanlarında profesyonel hizmet</p>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-4 bg-gray-50 rounded-lg">
                      <div className="text-2xl font-bold text-primary-600">500+</div>
                      <div className="text-sm text-gray-600">Başarılı Dava</div>
                    </div>
                    <div className="text-center p-4 bg-gray-50 rounded-lg">
                      <div className="text-2xl font-bold text-primary-600">15+</div>
                      <div className="text-sm text-gray-600">Yıl Deneyim</div>
                    </div>
                    <div className="text-center p-4 bg-gray-50 rounded-lg">
                      <div className="text-2xl font-bold text-primary-600">1000+</div>
                      <div className="text-sm text-gray-600">Mutlu Müvekkil</div>
                    </div>
                    <div className="text-center p-4 bg-gray-50 rounded-lg">
                      <div className="text-2xl font-bold text-primary-600">24/7</div>
                      <div className="text-sm text-gray-600">Destek</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Dekoratif elementler */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary-200 rounded-full opacity-50"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary-100 rounded-full opacity-30"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
