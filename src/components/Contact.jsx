import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiSend, FiMapPin, FiPhone } from 'react-icons/fi';

const socials = [
  { icon: <FiGithub />, label: 'GitHub', href: 'https://github.com/', title: 'GitHub Profili' },
  { icon: <FiLinkedin />, label: 'LinkedIn', href: 'https://linkedin.com/', title: 'LinkedIn Profili' },
  { icon: <FiMail />, label: 'E-posta', href: 'mailto:your@email.com', title: 'E-posta Gönder' },
];

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [focused, setFocused] = useState(null);

  const handleChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: 64 }}
        >
          <span
            style={{
              color: '#76ABAE',
              fontSize: 12,
              fontWeight: 600,
              letterSpacing: '2px',
              textTransform: 'uppercase',
              display: 'block',
              marginBottom: 12,
            }}
          >
            Benimle Çalışın
          </span>
          <h2
            className="section-title centered"
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: 'clamp(32px, 5vw, 48px)',
              fontWeight: 700,
              color: '#F5F5F5',
              letterSpacing: '-1px',
            }}
          >
            İletişime Geçin
          </h2>
          <p
            style={{
              color: 'rgba(245,245,245,0.55)',
              fontSize: 15,
              marginTop: 20,
              maxWidth: 480,
              margin: '20px auto 0',
              lineHeight: 1.65,
            }}
          >
            Bir projeniz mi var? Birlikte çalışmak mı istiyorsunuz? Mesajınızı bırakın,
            en kısa sürede dönüş yapayım.
          </p>
        </motion.div>

        {/* Two-column layout */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: 48,
            alignItems: 'start',
          }}
        >
          {/* Left: Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: 22,
                fontWeight: 700,
                color: '#F5F5F5',
                marginBottom: 16,
              }}
            >
              Hadi Konuşalım
            </h3>
            <p style={{ color: 'rgba(245,245,245,0.6)', lineHeight: 1.7, fontSize: 14, marginBottom: 36 }}>
              Yeni projeler, freelance fırsatları ya da sadece merhaba demek için —
              gelen kutum her zaman açık. Size yardımcı olabiliyorsam haberdar edin!
            </p>

            {/* Contact info tiles */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14, marginBottom: 36 }}>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 14,
                  padding: '14px 18px',
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(118,171,174,0.15)',
                  borderRadius: 10,
                }}
              >
                <span style={{ color: '#76ABAE', fontSize: 18 }}><FiMapPin /></span>
                <span style={{ color: 'rgba(245,245,245,0.7)', fontSize: 14 }}>Türkiye</span>
              </div>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 14,
                  padding: '14px 18px',
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(118,171,174,0.15)',
                  borderRadius: 10,
                }}
              >
                <span style={{ color: '#76ABAE', fontSize: 18 }}><FiMail /></span>
                <span style={{ color: 'rgba(245,245,245,0.7)', fontSize: 14 }}>your@email.com</span>
              </div>
            </div>

            {/* Socials */}
            <div>
              <p style={{ color: 'rgba(245,245,245,0.4)', fontSize: 12, fontWeight: 600, letterSpacing: '1.5px', textTransform: 'uppercase', marginBottom: 14 }}>
                Sosyal Medya
              </p>
              <div style={{ display: 'flex', gap: 12 }}>
                {socials.map((s) => (
                  <motion.a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={s.title}
                    className="social-icon"
                    whileHover={{ scale: 1.15 }}
                    whileTap={{ scale: 0.9 }}
                    aria-label={s.label}
                  >
                    {s.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <form
              onSubmit={handleSubmit}
              style={{
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(118,171,174,0.18)',
                borderRadius: 20,
                padding: '32px 28px',
                display: 'flex',
                flexDirection: 'column',
                gap: 18,
              }}
            >
              <div>
                <label style={{ display: 'block', fontSize: 12, fontWeight: 600, color: 'rgba(245,245,245,0.55)', letterSpacing: '0.8px', marginBottom: 8 }}>
                  ADINIZ
                </label>
                <input
                  id="contact-name"
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  onFocus={() => setFocused('name')}
                  onBlur={() => setFocused(null)}
                  placeholder="Adınız Soyadınız"
                  required
                  className="form-input"
                />
              </div>
              <div>
                <label style={{ display: 'block', fontSize: 12, fontWeight: 600, color: 'rgba(245,245,245,0.55)', letterSpacing: '0.8px', marginBottom: 8 }}>
                  E-POSTA
                </label>
                <input
                  id="contact-email"
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  onFocus={() => setFocused('email')}
                  onBlur={() => setFocused(null)}
                  placeholder="ornek@email.com"
                  required
                  className="form-input"
                />
              </div>
              <div>
                <label style={{ display: 'block', fontSize: 12, fontWeight: 600, color: 'rgba(245,245,245,0.55)', letterSpacing: '0.8px', marginBottom: 8 }}>
                  MESAJINIZ
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  onFocus={() => setFocused('message')}
                  onBlur={() => setFocused(null)}
                  placeholder="Projenizi veya isteğinizi kısaca açıklayın..."
                  required
                  rows={5}
                  className="form-input"
                  style={{ resize: 'vertical', minHeight: 120 }}
                />
              </div>

              <motion.button
                id="contact-submit"
                type="submit"
                className="btn-primary"
                style={{ width: '100%', justifyContent: 'center', marginTop: 4 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
              >
                {submitted ? (
                  <>✓ Mesaj Gönderildi!</>
                ) : (
                  <>
                    <FiSend />
                    Mesaj Gönder
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
