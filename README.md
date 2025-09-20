# Avukat Bürosu Web Sitesi

Profesyonel avukat bürosu için modern ve responsive web sitesi. React frontend ve Node.js backend kullanılarak geliştirilmiştir.

## 🚀 Özellikler

### Frontend (React)

- **Modern Tasarım**: Tailwind CSS ile profesyonel ve responsive tasarım
- **React Router**: Sayfa yönlendirme ve navigasyon
- **Responsive**: Tüm cihazlarda mükemmel görünüm
- **Animasyonlar**: Framer Motion ile smooth animasyonlar
- **İkonlar**: React Icons ile zengin ikon kütüphanesi

### Backend (Node.js)

- **Express.js**: Hızlı ve güvenilir API sunucusu
- **CORS**: Cross-origin istekleri için güvenlik
- **Rate Limiting**: API güvenliği için istek sınırlaması
- **Helmet**: HTTP güvenlik başlıkları
- **Nodemailer**: Email gönderimi için

### Sayfalar

- **Ana Sayfa**: Hero section, hizmetler önizleme, ekip tanıtımı
- **Hakkımızda**: Misyon, vizyon, değerler, ekip bilgileri
- **Hizmetler**: Tüm hukuk alanları ve detaylı açıklamalar
- **Ekip**: Avukat profilleri ve uzmanlık alanları
- **İletişim**: İletişim formu, randevu sistemi, harita

## 🛠️ Kurulum

### Gereksinimler

- Node.js (v14 veya üzeri)
- npm veya yarn

### Adımlar

1. **Projeyi klonlayın**

```bash
git clone <repository-url>
cd avukat-burosu-website
```

2. **Tüm bağımlılıkları yükleyin**

```bash
npm run install-all
```

3. **Environment dosyasını oluşturun**

```bash
# server klasöründe .env dosyası oluşturun
cd server
cp .env.example .env
```

4. **Environment değişkenlerini düzenleyin**

```bash
# server/.env dosyasını düzenleyin
NODE_ENV=development
PORT=5000
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
```

5. **Uygulamayı başlatın**

```bash
# Ana dizinde
npm run dev
```

Bu komut hem frontend (port 3000) hem de backend (port 5000) sunucularını başlatacaktır.

## 📁 Proje Yapısı

```
avukat-burosu-website/
├── client/                 # React frontend
│   ├── public/
│   ├── src/
│   │   ├── components/     # React bileşenleri
│   │   ├── pages/         # Sayfa bileşenleri
│   │   ├── App.js         # Ana uygulama
│   │   └── index.js       # Giriş noktası
│   ├── package.json
│   └── tailwind.config.js
├── server/                # Node.js backend
│   ├── routes/           # API rotaları
│   ├── index.js          # Ana sunucu dosyası
│   └── package.json
├── package.json          # Ana proje dosyası
└── README.md
```

## 🔧 Geliştirme

### Frontend Geliştirme

```bash
cd client
npm start
```

### Backend Geliştirme

```bash
cd server
npm run dev
```

### Production Build

```bash
npm run build
```

## 📧 Email Yapılandırması

Email gönderimi için Gmail SMTP kullanılmaktadır:

1. Gmail hesabınızda 2FA'yı etkinleştirin
2. Uygulama şifresi oluşturun
3. `.env` dosyasında `EMAIL_USER` ve `EMAIL_PASS` değişkenlerini güncelleyin

## 🎨 Tasarım Sistemi

### Renkler

- **Primary**: Mavi tonları (#0ea5e9)
- **Secondary**: Gri tonları (#64748b)
- **Accent**: Yeşil, kırmızı, mor tonları

### Tipografi

- **Başlıklar**: Playfair Display (serif)
- **Metin**: Inter (sans-serif)

### Bileşenler

- **Butonlar**: Primary, Secondary, Ghost varyantları
- **Kartlar**: Hover efektleri ile
- **Formlar**: Modern input tasarımları

## 📱 Responsive Tasarım

- **Mobile**: 320px - 768px
- **Tablet**: 768px - 1024px
- **Desktop**: 1024px+

## 🚀 Deployment

### Frontend (Netlify/Vercel)

```bash
cd client
npm run build
# build klasörünü deploy edin
```

### Backend (Heroku/Railway)

```bash
cd server
# Heroku CLI ile deploy edin
```

## 📄 Lisans

MIT License - Detaylar için LICENSE dosyasına bakın.

## 🤝 Katkıda Bulunma

1. Fork yapın
2. Feature branch oluşturun (`git checkout -b feature/amazing-feature`)
3. Commit yapın (`git commit -m 'Add amazing feature'`)
4. Push yapın (`git push origin feature/amazing-feature`)
5. Pull Request oluşturun

## 📞 İletişim

- **Email**: info@avukatburosu.com
- **Telefon**: +90 (212) 555 0123
- **Adres**: Levent Mahallesi, Büyükdere Caddesi, No: 123, Kat: 5, Beşiktaş/İstanbul

---

**Not**: Bu proje eğitim amaçlı geliştirilmiştir. Gerçek kullanım için güvenlik önlemlerini artırın ve production ortamında test edin.
