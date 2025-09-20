const express = require('express');
const nodemailer = require('nodemailer');
const router = express.Router();

// Email transporter (gerçek kullanım için .env dosyasından alınmalı)
const transporter = nodemailer.createTransporter({
  host: process.env.EMAIL_HOST || 'smtp.gmail.com',
  port: process.env.EMAIL_PORT || 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER || 'test@example.com',
    pass: process.env.EMAIL_PASS || 'test-password'
  }
});

// İletişim formu gönderimi
router.post('/send', async (req, res) => {
  try {
    const { name, email, phone, subject, message } = req.body;

    // Validasyon
    if (!name || !email || !message) {
      return res.status(400).json({ 
        success: false, 
        message: 'Ad, email ve mesaj alanları zorunludur' 
      });
    }

    // Email içeriği
    const mailOptions = {
      from: process.env.EMAIL_USER || 'test@example.com',
      to: process.env.EMAIL_USER || 'test@example.com',
      subject: `İletişim Formu: ${subject || 'Genel Soru'}`,
      html: `
        <h2>Yeni İletişim Formu Mesajı</h2>
        <p><strong>Ad:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Telefon:</strong> ${phone || 'Belirtilmemiş'}</p>
        <p><strong>Konu:</strong> ${subject || 'Genel Soru'}</p>
        <p><strong>Mesaj:</strong></p>
        <p>${message}</p>
        <hr>
        <p><em>Bu mesaj web sitesi iletişim formundan gönderilmiştir.</em></p>
      `
    };

    // Email gönder (development modunda simüle edilir)
    if (process.env.NODE_ENV === 'production') {
      await transporter.sendMail(mailOptions);
    } else {
      console.log('Development modu - Email gönderilmedi:', mailOptions);
    }

    res.json({ 
      success: true, 
      message: 'Mesajınız başarıyla gönderildi. En kısa sürede size dönüş yapacağız.' 
    });

  } catch (error) {
    console.error('Email gönderme hatası:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Mesaj gönderilirken bir hata oluştu. Lütfen tekrar deneyin.' 
    });
  }
});

// Randevu talebi
router.post('/appointment', async (req, res) => {
  try {
    const { name, email, phone, date, time, service, message } = req.body;

    if (!name || !email || !phone || !date) {
      return res.status(400).json({ 
        success: false, 
        message: 'Ad, email, telefon ve tarih alanları zorunludur' 
      });
    }

    const mailOptions = {
      from: process.env.EMAIL_USER || 'test@example.com',
      to: process.env.EMAIL_USER || 'test@example.com',
      subject: `Randevu Talebi: ${name}`,
      html: `
        <h2>Yeni Randevu Talebi</h2>
        <p><strong>Ad:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Telefon:</strong> ${phone}</p>
        <p><strong>Tarih:</strong> ${date}</p>
        <p><strong>Saat:</strong> ${time || 'Belirtilmemiş'}</p>
        <p><strong>Hizmet:</strong> ${service || 'Genel Danışmanlık'}</p>
        <p><strong>Mesaj:</strong></p>
        <p>${message || 'Mesaj yok'}</p>
        <hr>
        <p><em>Bu randevu talebi web sitesi üzerinden gönderilmiştir.</em></p>
      `
    };

    if (process.env.NODE_ENV === 'production') {
      await transporter.sendMail(mailOptions);
    } else {
      console.log('Development modu - Randevu talebi:', mailOptions);
    }

    res.json({ 
      success: true, 
      message: 'Randevu talebiniz alındı. Size en kısa sürede dönüş yapacağız.' 
    });

  } catch (error) {
    console.error('Randevu talebi hatası:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Randevu talebi gönderilirken bir hata oluştu.' 
    });
  }
});

module.exports = router;
