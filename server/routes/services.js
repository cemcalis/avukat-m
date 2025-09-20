const express = require('express');
const router = express.Router();

// Hizmetler verisi
const services = [
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
];

// Tüm hizmetleri getir
router.get('/', (req, res) => {
  res.json({
    success: true,
    data: services
  });
});

// Belirli bir hizmeti getir
router.get('/:id', (req, res) => {
  const serviceId = parseInt(req.params.id);
  const service = services.find(s => s.id === serviceId);
  
  if (!service) {
    return res.status(404).json({
      success: false,
      message: 'Hizmet bulunamadı'
    });
  }
  
  res.json({
    success: true,
    data: service
  });
});

module.exports = router;
