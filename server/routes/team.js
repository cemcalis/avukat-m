const express = require('express');
const router = express.Router();

// Ekip üyeleri verisi
const team = [
  {
    id: 1,
    name: 'Dr. Mehmet Yılmaz',
    title: 'Kurucu Ortak & Baş Avukat',
    specialization: 'Ticaret Hukuku, Şirketler Hukuku',
    experience: '15+ yıl',
    education: 'İstanbul Üniversitesi Hukuk Fakültesi',
    languages: ['Türkçe', 'İngilizce', 'Almanca'],
    image: '/images/team/mehmet-yilmaz.jpg',
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
    image: '/images/team/ayse-demir.jpg',
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
    image: '/images/team/can-ozkan.jpg',
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
    image: '/images/team/zeynep-kaya.jpg',
    bio: 'Miras hukuku ve medeni hukuk alanlarında uzmanlaşmış, genç ve dinamik avukat.',
    achievements: [
      '150+ miras davası',
      'Medeni Hukuk Uzmanı',
      'İstanbul Barosu Üyesi'
    ]
  }
];

// Tüm ekip üyelerini getir
router.get('/', (req, res) => {
  res.json({
    success: true,
    data: team
  });
});

// Belirli bir ekip üyesini getir
router.get('/:id', (req, res) => {
  const memberId = parseInt(req.params.id);
  const member = team.find(m => m.id === memberId);
  
  if (!member) {
    return res.status(404).json({
      success: false,
      message: 'Ekip üyesi bulunamadı'
    });
  }
  
  res.json({
    success: true,
    data: member
  });
});

module.exports = router;
