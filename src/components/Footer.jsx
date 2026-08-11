import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiHeart, FiCode } from 'react-icons/fi';
import { SiKaggle, SiGoogleplay } from 'react-icons/si';

const socials = [
  { href: 'https://github.com/mferitb', icon: <FiGithub />, label: 'GitHub' },
  { href: 'https://linkedin.com/', icon: <FiLinkedin />, label: 'LinkedIn' },
  { href: 'https://kaggle.com/', icon: <SiKaggle />, label: 'Kaggle' },
  { href: 'https://play.google.com/store/apps/developer?id=your-developer-name', icon: <SiGoogleplay />, label: 'Play Store' },
  { href: 'mailto:your@email.com', icon: <FiMail />, label: 'Email' },
];

const navLinks = [
  { href: '#hero', label: 'Hakkımda' },
  { href: '#skills', label: 'Yetenekler' },
  { href: '#projects', label: 'Projeler' },
  { href: '#contact', label: 'İletişim' },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer style={{ position: 'relative', overflow: 'hidden' }}>
      {/* Top gradient divider */}
      <div style={{
        height: 1,
        background: 'linear-gradient(90deg, transparent, #76ABAE 30%, #FF5722 60%, transparent)',
        opacity: 0.4,
      }} />

      {/* Main footer body */}
      <div style={{
        background: 'rgba(0,0,0,0.3)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        padding: '52px 0 32px',
        position: 'relative',
      }}>
        {/* Subtle background glow */}
        <div style={{
          position: 'absolute',
          bottom: '-60px',
          left: '50%',
          transform: 'translateX(-50%)',
          width: 500,
          height: 200,
          background: 'radial-gradient(ellipse, rgba(118,171,174,0.06) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />

        <div className="container" style={{ position: 'relative' }}>
          {/* Top row */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: 40,
            marginBottom: 44,
          }}>
            {/* Brand column */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              <motion.a
                href="#hero"
                style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 10 }}
                whileHover={{ scale: 1.03 }}
              >
                <div style={{
                  width: 38,
                  height: 38,
                  borderRadius: 9,
                  background: 'linear-gradient(135deg, #FF5722, #76ABAE)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontWeight: 700,
                  fontSize: 14,
                  color: '#F5F5F5',
                  boxShadow: '0 4px 14px rgba(255,87,34,0.3)',
                }}>
                  MF
                </div>
                <span style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontWeight: 700,
                  fontSize: 17,
                  color: '#F5F5F5',
                  letterSpacing: '-0.3px',
                }}>
                  Ferit<span style={{ color: '#FF5722' }}>.</span>dev
                </span>
              </motion.a>

              <p style={{
                fontSize: 13,
                color: 'rgba(245,245,245,0.45)',
                lineHeight: 1.65,
                maxWidth: 220,
              }}>
                Mobil & web uygulamalar geliştiren, yapay zeka entegrasyonlarında deneyimli bir yazılım geliştirici.
              </p>

              {/* Social icons */}
              <div style={{ display: 'flex', gap: 10, marginTop: 4 }}>
                {socials.map((s) => (
                  <motion.a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    whileHover={{ scale: 1.18, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    style={{
                      width: 38,
                      height: 38,
                      borderRadius: '50%',
                      background: 'rgba(255,255,255,0.05)',
                      border: '1px solid rgba(118,171,174,0.2)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'rgba(245,245,245,0.7)',
                      fontSize: 16,
                      textDecoration: 'none',
                      transition: 'all 0.3s ease',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = 'rgba(255,87,34,0.15)';
                      e.currentTarget.style.borderColor = '#FF5722';
                      e.currentTarget.style.color = '#FF5722';
                      e.currentTarget.style.boxShadow = '0 6px 18px rgba(255,87,34,0.2)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
                      e.currentTarget.style.borderColor = 'rgba(118,171,174,0.2)';
                      e.currentTarget.style.color = 'rgba(245,245,245,0.7)';
                      e.currentTarget.style.boxShadow = 'none';
                    }}
                  >
                    {s.icon}
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Navigation column */}
            <div>
              <p style={{
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: '1.5px',
                textTransform: 'uppercase',
                color: '#FF5722',
                marginBottom: 18,
              }}>
                Navigasyon
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    style={{
                      fontSize: 13,
                      color: 'rgba(245,245,245,0.5)',
                      textDecoration: 'none',
                      fontWeight: 500,
                      transition: 'color 0.2s ease, padding-left 0.2s ease',
                      display: 'inline-block',
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.color = '#F5F5F5';
                      e.target.style.paddingLeft = '6px';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.color = 'rgba(245,245,245,0.5)';
                      e.target.style.paddingLeft = '0px';
                    }}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>

            {/* Contact column */}
            <div>
              <p style={{
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: '1.5px',
                textTransform: 'uppercase',
                color: '#76ABAE',
                marginBottom: 18,
              }}>
                İletişim
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                {[
                  { label: 'GitHub', href: 'https://github.com/mferitb' },
                  { label: 'LinkedIn', href: 'https://linkedin.com/' },
                  { label: 'your@email.com', href: 'mailto:your@email.com' },
                ].map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      fontSize: 13,
                      color: 'rgba(245,245,245,0.5)',
                      textDecoration: 'none',
                      fontWeight: 500,
                      transition: 'color 0.2s ease',
                    }}
                    onMouseEnter={(e) => (e.target.style.color = '#76ABAE')}
                    onMouseLeave={(e) => (e.target.style.color = 'rgba(245,245,245,0.5)')}
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Divider */}
          <div style={{
            height: 1,
            background: 'linear-gradient(90deg, transparent, rgba(118,171,174,0.15) 20%, rgba(118,171,174,0.15) 80%, transparent)',
            marginBottom: 24,
          }} />

          {/* Bottom row */}
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: 12,
          }}>
            <p style={{ fontSize: 12, color: 'rgba(245,245,245,0.3)' }}>
              © {year} Mehmet Ferit Bilen — Tüm hakları saklıdır.
            </p>
            <p style={{ fontSize: 12, color: 'rgba(245,245,245,0.25)', display: 'flex', alignItems: 'center', gap: 5 }}>
              <FiCode style={{ color: '#76ABAE' }} />
              <span>React</span>
              <span style={{ color: 'rgba(255,255,255,0.15)' }}>+</span>
              <span>Framer Motion</span>
              <span style={{ color: 'rgba(255,255,255,0.15)' }}>ile yapıldı</span>
              <FiHeart style={{ color: '#FF5722', marginLeft: 2 }} />
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
