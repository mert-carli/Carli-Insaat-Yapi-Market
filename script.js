// WhatsApp numarası
const whatsappNumber = '905333841859';

// WhatsApp mesajı oluştur ve gönder
function sendWhatsAppMessage(productName) {
  const message = `Merhaba, ${productName} hakkında bilgi almak istiyorum.`;
  const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
  window.open(url, '_blank');
}

// Loading Screen
window.addEventListener('load', function() {
  const loadingScreen = document.getElementById('loading-screen');
  setTimeout(() => {
    loadingScreen.classList.add('hidden');
  }, 1000);
});

// Scroll Animations (AOS - Animate On Scroll)
function initScrollAnimations() {
  const animateElements = document.querySelectorAll('[data-aos]');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('aos-animate');
      }
    });
  }, { threshold: 0.1 });
  
  animateElements.forEach(el => observer.observe(el));
}

// Counter Animation
function animateCounter(element) {
  const target = parseInt(element.getAttribute('data-target'));
  const duration = 2000;
  const step = target / (duration / 16);
  let current = 0;
  
  const timer = setInterval(() => {
    current += step;
    if (current >= target) {
      element.textContent = target + '+';
      clearInterval(timer);
    } else {
      element.textContent = Math.floor(current) + '+';
    }
  }, 16);
}

// Stats Counter on Scroll
function initStatsCounter() {
  const statsSection = document.querySelector('.stats-section');
  if (!statsSection) return;
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const counters = entry.target.querySelectorAll('.stat-number[data-target]');
        counters.forEach(counter => {
          if (!counter.classList.contains('counted')) {
            counter.classList.add('counted');
            animateCounter(counter);
          }
        });
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });
  
  observer.observe(statsSection);
}

// Parallax Effect for Hero
function initParallax() {
  window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    if (hero && scrolled < window.innerHeight) {
      hero.style.transform = `translateY(${scrolled * 0.5}px)`;
      hero.style.opacity = 1 - (scrolled / 500);
    }
  });
}

// Smooth Scroll Enhancement
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href !== '#' && href.length > 1) {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          const offset = 70;
          const targetPosition = target.offsetTop - offset;
          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });
        }
      }
    });
  });
}

// Sayfa yüklendiğinde
document.addEventListener('DOMContentLoaded', function() {
  
  // Initialize all animations
  initScrollAnimations();
  initStatsCounter();
  initParallax();
  initSmoothScroll();
  
  // Kartvizit flip animasyonu
  const businessCard = document.getElementById('businessCard');
  if (businessCard) {
    businessCard.addEventListener('click', function() {
      this.classList.toggle('flipped');
    });
  }
  
  // Hamburger menü
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');
  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });
    
    // Menü linklerine tıklanınca menüyü kapat
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('active');
      });
    });
  }

  // Tüm ürün butonlarına event listener ekle
  const productButtons = document.querySelectorAll('[data-product]');
  productButtons.forEach(button => {
    button.addEventListener('click', function() {
      const productName = this.getAttribute('data-product');
      sendWhatsAppMessage(productName);
    });
  });

  // Hero bölümündeki WhatsApp butonu
  const whatsappCta = document.getElementById('whatsapp-cta');
  if (whatsappCta) {
    whatsappCta.addEventListener('click', function(e) {
      e.preventDefault();
      const message = 'Merhaba, ürünleriniz hakkında bilgi almak istiyorum.';
      const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
      window.open(url, '_blank');
    });
  }

  // Yüzen WhatsApp butonu
  const whatsappFloat = document.getElementById('whatsapp-float');
  if (whatsappFloat) {
    whatsappFloat.addEventListener('click', function(e) {
      e.preventDefault();
      const message = 'Merhaba, iletişime geçmek istiyorum.';
      const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
      window.open(url, '_blank');
    });
  }

  // İletişim formundan WhatsApp ile gönder
  const contactWhats = document.getElementById('contactWhats');
  if (contactWhats) {
    contactWhats.addEventListener('click', function(e) {
      e.preventDefault();
      const form = document.getElementById('contactForm');
      const name = form.querySelector('[name="name"]').value;
      const phone = form.querySelector('[name="phone"]').value;
      const product = form.querySelector('[name="product"]')?.value || '';
      const messageText = form.querySelector('[name="message"]').value;
      
      if (name && phone) {
        let message = `Merhaba Mehmet Usta,\n\n👤 İsim: ${name}\n📱 Telefon: ${phone}`;
        if (product) message += `\n🛒 Ürün/Hizmet: ${product}`;
        if (messageText) message += `\n💬 Mesaj: ${messageText}`;
        
        const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
        window.open(url, '_blank');
        form.reset();
      } else {
        alert('Lütfen isim ve telefon alanlarını doldurunuz.');
      }
    });
  }

  // Normal form gönderimi
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const name = this.querySelector('[name="name"]').value;
      const phone = this.querySelector('[name="phone"]').value;
      const product = this.querySelector('[name="product"]')?.value || '';
      const messageText = this.querySelector('[name="message"]').value;
      
      if (name && phone) {
        let message = `Merhaba Mehmet Usta,\n\n👤 İsim: ${name}\n📱 Telefon: ${phone}`;
        if (product) message += `\n🛒 Ürün/Hizmet: ${product}`;
        if (messageText) message += `\n💬 Mesaj: ${messageText}`;
        
        const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
        window.open(url, '_blank');
        this.reset();
        alert('✅ Mesajınız WhatsApp üzerinden gönderildi!');
      } else {
        alert('Lütfen zorunlu alanları doldurunuz.');
      }
    });
  }

  // Smooth scroll
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href !== '#' && href.length > 1) {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
          // Mobil menüyü kapat
          if (navLinks) navLinks.classList.remove('active');
        }
      }
    });
  });

  // Progress Bar
  const progressBar = document.getElementById('progress-bar');
  window.addEventListener('scroll', () => {
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const scrollPercent = (scrollTop / (documentHeight - windowHeight)) * 100;
    
    if (progressBar) {
      progressBar.style.width = scrollPercent + '%';
    }
  });

  // Scroll to Top Button
  const scrollTopBtn = document.getElementById('scroll-top');
  if (scrollTopBtn) {
    window.addEventListener('scroll', () => {
      if (window.pageYOffset > 300) {
        scrollTopBtn.classList.add('visible');
      } else {
        scrollTopBtn.classList.remove('visible');
      }
    });

    scrollTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  // Language Selector
  const langButtons = document.querySelectorAll('.lang-btn');
  const translations = {
    tr: {
      hero_title: 'Gaziantep\'in Yapı Gücü',
      hero_desc: 'Hazır beton, kum, demir, çimento, mantolama ve anahtar teslim tadilat hizmetleri.',
      products_btn: 'Ürün Kataloğu',
      whatsapp_btn: 'WhatsApp ile Sipariş',
      products_title: 'Ürün Kategorileri',
      products_subtitle: 'Hızlıca arayın veya WhatsApp\'tan sipariş verin.',
      services_title: 'Hizmetlerimiz',
      services_subtitle: 'Profesyonel ekibimizle sunduğumuz kapsamlı hizmetler',
      contact_title: 'Bize Ulaşın',
      contact_subtitle: '7/24 WhatsApp üzerinden hızlı ulaşım ve sipariş imkanı',
      stats_projects: 'Tamamlanmış Proje',
      stats_experience: 'Yıllık Tecrübe',
      stats_clients: 'Mutlu Müşteri',
      stats_support: 'Destek',
      price_btn: 'Fiyat Sor',
      service_cat1: 'İç Mekân Tadilat & Uygulamalar',
      service_cat2: 'Dış Cephe & Yapı Uygulamaları',
      service_cat3: 'Peyzaj & Dış Alan Düzenleme',
      service_cat4: 'Diğer Hizmetler',
      service_cat5: 'İnşaat Malzemeleri Temini',
      cta_title: 'Aklınızdaki Proje İçin Ücretsiz Keşif',
      cta_desc: 'Deneyimli ekibimiz tüm tadilat ve inşaat ihtiyaçlarınız için yanınızda',
      cta_btn: 'Hemen Teklif Al',
      contact_phone: 'Telefon',
      contact_whatsapp: 'WhatsApp',
      contact_email: 'Email',
      contact_address: 'Adres',
      contact_whatsapp_link: 'Hemen Mesaj Gönder',
      contact_whatsapp_desc: 'Anında yanıt alın',
      contact_phone_person: 'Mehmet Metin Çarlı',
      contact_email_desc: '24 saat içinde dönüş',
      contact_address_text: 'Gaziantep',
      contact_address_desc: 'Şantiyenize teslimat',
      form_title: 'Hızlı Teklif Alın',
      form_desc: 'İhtiyacınız olan malzeme ve hizmet için hemen teklif isteyin. En kısa sürede size dönüş yapalım.',
      form_submit: 'Teklif İste',
      form_whatsapp: 'WhatsApp ile Gönder'
    },
    en: {
      hero_title: 'Gaziantep\'s Construction Power',
      hero_desc: 'Ready-mixed concrete, sand, steel, cement, insulation and turnkey renovation services.',
      products_btn: 'Product Catalog',
      whatsapp_btn: 'Order via WhatsApp',
      products_title: 'Product Categories',
      products_subtitle: 'Search quickly or order via WhatsApp.',
      services_title: 'Our Services',
      services_subtitle: 'Comprehensive services we offer with our professional team',
      contact_title: 'Contact Us',
      contact_subtitle: '24/7 quick access and ordering via WhatsApp',
      stats_projects: 'Completed Projects',
      stats_experience: 'Years of Experience',
      stats_clients: 'Happy Clients',
      stats_support: 'Support',
      price_btn: 'Ask Price',
      service_cat1: 'Interior Renovation & Applications',
      service_cat2: 'Exterior Facade & Building Applications',
      service_cat3: 'Landscaping & Outdoor Arrangement',
      service_cat4: 'Other Services',
      service_cat5: 'Construction Materials Supply',
      cta_title: 'Free Inspection for Your Project',
      cta_desc: 'Our experienced team is with you for all your renovation and construction needs',
      cta_btn: 'Get Quote Now',
      contact_phone: 'Phone',
      contact_whatsapp: 'WhatsApp',
      contact_email: 'Email',
      contact_address: 'Address',
      contact_whatsapp_link: 'Send Message Now',
      contact_whatsapp_desc: 'Get instant response',
      contact_phone_person: 'Mehmet Metin Çarlı',
      contact_email_desc: 'Response within 24 hours',
      contact_address_text: 'Gaziantep',
      contact_address_desc: 'Delivery to your site',
      form_title: 'Get Quick Quote',
      form_desc: 'Request a quote for the materials and services you need. We will get back to you as soon as possible.',
      form_submit: 'Request Quote',
      form_whatsapp: 'Send via WhatsApp'
    }
  };

  langButtons.forEach(btn => {
    btn.addEventListener('click', function() {
      const lang = this.getAttribute('data-lang');
      
      // Update active state
      langButtons.forEach(b => b.classList.remove('active'));
      this.classList.add('active');
      
      // Update text content
      const texts = translations[lang];
      
      // Hero section
      document.querySelector('.hero-text h1').textContent = texts.hero_title;
      document.querySelector('.hero-text p').textContent = texts.hero_desc;
      document.querySelector('.btn.primary').textContent = texts.products_btn;
      document.getElementById('whatsapp-cta').textContent = texts.whatsapp_btn;
      
      // Stats section
      const statLabels = document.querySelectorAll('.stat-label');
      if (statLabels[0]) statLabels[0].textContent = texts.stats_projects;
      if (statLabels[1]) statLabels[1].textContent = texts.stats_experience;
      if (statLabels[2]) statLabels[2].textContent = texts.stats_clients;
      if (statLabels[3]) statLabels[3].textContent = texts.stats_support;
      
      // Section titles and subtitles
      const urunlerSection = document.getElementById('urunler');
      if (urunlerSection) {
        urunlerSection.querySelector('h2').textContent = texts.products_title;
        urunlerSection.querySelector('.muted').textContent = texts.products_subtitle;
      }
      
      const hizmetlerSection = document.getElementById('hizmetler');
      if (hizmetlerSection) {
        hizmetlerSection.querySelector('h2').textContent = texts.services_title;
        hizmetlerSection.querySelectorAll('.muted')[0].textContent = texts.services_subtitle;
      }
      
      const iletisimSection = document.getElementById('iletisim');
      if (iletisimSection) {
        iletisimSection.querySelector('h2').textContent = texts.contact_title;
        iletisimSection.querySelector('.muted').textContent = texts.contact_subtitle;
      }
      
      // Product buttons
      document.querySelectorAll('.btn.small').forEach(btn => {
        btn.textContent = texts.price_btn;
      });
      
      // Service categories
      const serviceCats = document.querySelectorAll('.category-header h3');
      if (serviceCats[0]) serviceCats[0].textContent = texts.service_cat1;
      if (serviceCats[1]) serviceCats[1].textContent = texts.service_cat2;
      if (serviceCats[2]) serviceCats[2].textContent = texts.service_cat3;
      if (serviceCats[3]) serviceCats[3].textContent = texts.service_cat4;
      if (serviceCats[4]) serviceCats[4].textContent = texts.service_cat5;
      
      // CTA Banner
      const ctaBanner = document.querySelector('.cta-banner');
      if (ctaBanner) {
        ctaBanner.querySelector('h3').textContent = texts.cta_title;
        ctaBanner.querySelector('p').textContent = texts.cta_desc;
        ctaBanner.querySelector('.btn').textContent = texts.cta_btn;
      }
      
      // Contact cards
      const contactCards = document.querySelectorAll('.contact-card h3');
      if (contactCards[0]) contactCards[0].textContent = texts.contact_phone;
      if (contactCards[1]) contactCards[1].textContent = texts.contact_whatsapp;
      if (contactCards[2]) contactCards[2].textContent = texts.contact_email;
      if (contactCards[3]) contactCards[3].textContent = texts.contact_address;
      
      const contactLinks = document.querySelectorAll('.contact-card .contact-link');
      if (contactLinks[1]) contactLinks[1].textContent = texts.contact_whatsapp_link;
      if (contactLinks[3]) contactLinks[3].textContent = texts.contact_address_text;
      
      const smallTexts = document.querySelectorAll('.contact-card .small-text');
      if (smallTexts[0]) smallTexts[0].textContent = texts.contact_phone_person;
      if (smallTexts[1]) smallTexts[1].textContent = texts.contact_whatsapp_desc;
      if (smallTexts[2]) smallTexts[2].textContent = texts.contact_email_desc;
      if (smallTexts[3]) smallTexts[3].textContent = texts.contact_address_desc;
      
      // Contact form
      const formInfo = document.querySelector('.form-info');
      if (formInfo) {
        formInfo.querySelector('h3').textContent = texts.form_title;
        formInfo.querySelector('p').textContent = texts.form_desc;
      }
      
      const formActions = document.querySelector('.form-actions');
      if (formActions) {
        formActions.querySelectorAll('.btn')[0].textContent = texts.form_submit;
        formActions.querySelectorAll('.btn')[1].textContent = texts.form_whatsapp;
      }
      
      // Store preference
      localStorage.setItem('preferred-lang', lang);
    });
  });

  // Clear any saved language and always start with TR
  localStorage.removeItem('preferred-lang');

});
