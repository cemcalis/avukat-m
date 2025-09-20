import React from 'react';
import { FaQuoteLeft, FaStar } from 'react-icons/fa';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Ahmet Yılmaz',
      company: 'ABC Şirketi',
      position: 'Genel Müdür',
      content: 'Ticaret hukuku konularında çok profesyonel bir hizmet aldık. Sorunlarımızı hızlı ve etkili bir şekilde çözdüler. Kesinlikle tavsiye ederim.',
      rating: 5,
      image: '/images/testimonials/ahmet-yilmaz.jpg'
    },
    {
      name: 'Fatma Demir',
      company: 'Bireysel Müvekkil',
      position: 'Ev Hanımı',
      content: 'Boşanma sürecimde çok destek oldular. Hem hukuki hem de psikolojik olarak yanımda olduklarını hissettim. Çok teşekkür ederim.',
      rating: 5,
      image: '/images/testimonials/fatma-demir.jpg'
    },
    {
      name: 'Mehmet Özkan',
      company: 'XYZ İnşaat',
      position: 'Sahibi',
      content: 'Gayrimenkul projelerimizde hukuki danışmanlık aldık. Çok detaylı ve profesyonel bir çalışma yaptılar. Projelerimiz sorunsuz ilerledi.',
      rating: 5,
      image: '/images/testimonials/mehmet-ozkan.jpg'
    }
  ];

  return (
    <section className="bg-white py-20">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Müvekkil Yorumları
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Müvekkillerimizin deneyimleri ve memnuniyetleri bizim için en değerli geri bildirimlerdir.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-primary-600 font-bold text-lg">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.position}</p>
                  <p className="text-sm text-gray-500">{testimonial.company}</p>
                </div>
              </div>
              
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-400" size={16} />
                ))}
              </div>
              
              <div className="relative">
                <FaQuoteLeft className="text-primary-200 absolute -top-2 -left-2" size={24} />
                <p className="text-gray-700 leading-relaxed pl-6">
                  "{testimonial.content}"
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-primary-50 rounded-xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Siz de Müvekkillerimiz Arasında Yer Alın
            </h3>
            <p className="text-gray-600 mb-6">
              Hukuki sorunlarınızda profesyonel destek almak için bizimle iletişime geçin. 
              İlk danışmanlık ücretsizdir.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary">
                Ücretsiz Danışmanlık
              </button>
              <button className="btn-secondary">
                Randevu Al
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
