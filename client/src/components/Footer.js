import React from 'react';
import { Link } from 'react-router-dom';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary-900 text-white">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo ve açıklama */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">A</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">Avukat Bürosu</h3>
                <p className="text-sm text-gray-400">Hukuki Danışmanlık</p>
              </div>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Profesyonel hukuki danışmanlık hizmetleri ile müvekkillerimize en iyi çözümleri sunuyoruz. 
              Deneyimli ekibimizle yanınızdayız.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                <FaFacebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                <FaTwitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                <FaLinkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                <FaInstagram size={20} />
              </a>
            </div>
          </div>

          {/* Hızlı linkler */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Hızlı Linkler</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Ana Sayfa
                </Link>
              </li>
              <li>
                <Link to="/hakkimizda" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Hakkımızda
                </Link>
              </li>
              <li>
                <Link to="/hizmetler" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Hizmetlerimiz
                </Link>
              </li>
              <li>
                <Link to="/ekip" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Ekibimiz
                </Link>
              </li>
              <li>
                <Link to="/iletisim" className="text-gray-400 hover:text-white transition-colors text-sm">
                  İletişim
                </Link>
              </li>
            </ul>
          </div>

          {/* Hizmetler */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Hizmetlerimiz</h4>
            <ul className="space-y-2">
              <li className="text-gray-400 text-sm">Ticaret Hukuku</li>
              <li className="text-gray-400 text-sm">Aile Hukuku</li>
              <li className="text-gray-400 text-sm">Ceza Hukuku</li>
              <li className="text-gray-400 text-sm">Gayrimenkul Hukuku</li>
              <li className="text-gray-400 text-sm">İş Hukuku</li>
              <li className="text-gray-400 text-sm">Miras Hukuku</li>
            </ul>
          </div>

          {/* İletişim bilgileri */}
          <div>
            <h4 className="text-lg font-semibold mb-4">İletişim</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <FaMapMarkerAlt className="text-primary-400 mt-1 flex-shrink-0" size={16} />
                <div>
                  <p className="text-gray-400 text-sm">
                    Levent Mahallesi, Büyükdere Caddesi<br />
                    No: 123, Kat: 5, Beşiktaş/İstanbul
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <FaPhone className="text-primary-400 flex-shrink-0" size={16} />
                <p className="text-gray-400 text-sm">+90 (212) 555 0123</p>
              </div>
              <div className="flex items-center space-x-3">
                <FaEnvelope className="text-primary-400 flex-shrink-0" size={16} />
                <p className="text-gray-400 text-sm">info@avukatburosu.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Alt çizgi */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} Avukat Bürosu. Tüm hakları saklıdır.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Gizlilik Politikası
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Kullanım Şartları
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
