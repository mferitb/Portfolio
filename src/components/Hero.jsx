import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const PARTICLE_COUNT = 60;

function ParticleCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animId;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const particles = Array.from({ length: PARTICLE_COUNT }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 1.5 + 0.3,
      dx: (Math.random() - 0.5) * 0.4,
      dy: (Math.random() - 0.5) * 0.4,
      alpha: Math.random() * 0.5 + 0.1,
      color: Math.random() > 0.5 ? '255,87,34' : '118,171,174',
    }));

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${p.color},${p.alpha})`;
        ctx.fill();
        p.x += p.dx;
        p.y += p.dy;
        if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.dy *= -1;
      });
      animId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        inset: 0,
        zIndex: 0,
        pointerEvents: 'none',
        opacity: 0.6,
      }}
    />
  );
}

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
};

export default function Hero() {
  return (
    <section
      id="hero"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background orbs */}
      <div
        className="orb orb-orange"
        style={{ top: '-100px', right: '-50px', animation: 'float 6s ease-in-out infinite' }}
      />
      <div
        className="orb orb-teal"
        style={{ bottom: '-80px', left: '-80px', animation: 'float 8s ease-in-out infinite reverse' }}
      />

      {/* Particles */}
      <ParticleCanvas />

      {/* Grid overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage:
            'linear-gradient(rgba(118,171,174,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(118,171,174,0.04) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
          zIndex: 0,
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 1, paddingTop: 80 }}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          style={{ maxWidth: 720 }}
        >
          {/* Badge */}
          <motion.div variants={itemVariants}>
            <span
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                background: 'rgba(255,87,34,0.1)',
                border: '1px solid rgba(255,87,34,0.3)',
                color: '#FF5722',
                padding: '6px 16px',
                borderRadius: 50,
                fontSize: 12,
                fontWeight: 600,
                letterSpacing: '1px',
                textTransform: 'uppercase',
                marginBottom: 24,
              }}
            >
              <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#FF5722', display: 'inline-block', animation: 'blink 1.5s ease-in-out infinite' }} />
              Yazılım Geliştirici — Çalışmaya Açık
            </span>
          </motion.div>

          {/* Main heading */}
          <motion.h1
            variants={itemVariants}
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: 'clamp(42px, 7vw, 80px)',
              fontWeight: 700,
              lineHeight: 1.08,
              color: '#F5F5F5',
              letterSpacing: '-2px',
              marginBottom: 24,
            }}
          >
            Merhaba, Ben{' '}
            <span className="gradient-text">Mehmet Ferit</span>
            <span style={{ color: '#FF5722' }}>.</span>
          </motion.h1>

          {/* Sub heading */}
          <motion.p
            variants={itemVariants}
            style={{
              fontSize: 'clamp(16px, 2.5vw, 19px)',
              lineHeight: 1.7,
              color: 'rgba(245,245,245,0.7)',
              marginBottom: 42,
              maxWidth: 560,
            }}
          >
            Mobil ve web uygulamalar geliştiren, yapay zeka entegrasyonlarıyla ürünleri zenginleştiren
            bir yazılım geliştiriciyim. Temiz kod, güçlü mimari ve kullanıcı odaklı
            deneyimler oluşturmak benim tutkum.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            style={{ display: 'flex', gap: 16, flexWrap: 'wrap', alignItems: 'center' }}
          >
            <motion.a
              href="#projects"
              className="btn-primary"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
            >
              <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v18m0 0h10a2 2 0 0 0 2-2V9M9 21H5a2 2 0 0 1-2-2V9m0 0h18" />
              </svg>
              Projelerimi Gör
            </motion.a>
            <motion.a
              href="#contact"
              className="btn-secondary"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
            >
              <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M3 8l7.89 5.26a2 2 0 0 0 2.22 0L21 8M5 19h14a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2z" />
              </svg>
              İletişime Geç
            </motion.a>
          </motion.div>

          {/* Stats row */}
          <motion.div
            variants={itemVariants}
            style={{
              display: 'flex',
              gap: 40,
              marginTop: 64,
              paddingTop: 40,
              borderTop: '1px solid rgba(118,171,174,0.15)',
              flexWrap: 'wrap',
            }}
          >
            {[
              { value: '20+', label: 'Tamamlanan Proje' },
              { value: '4+', label: 'Teknoloji Alanı' },
              { value: '4+', label: 'Yıl Yazılım Geliştirme Deneyimi' },
            ].map((stat) => (
              <div key={stat.label}>
                <div
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: 36,
                    fontWeight: 700,
                    color: '#FF5722',
                    lineHeight: 1,
                  }}
                >
                  {stat.value}
                </div>
                <div style={{ fontSize: 13, color: 'rgba(245,245,245,0.5)', marginTop: 4, fontWeight: 500 }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        style={{
          position: 'absolute',
          bottom: 32,
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 8,
          zIndex: 1,
        }}
      >
        <span style={{ fontSize: 11, color: 'rgba(245,245,245,0.35)', letterSpacing: '2px', textTransform: 'uppercase' }}>
          Aşağı Kaydır
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          style={{
            width: 24,
            height: 38,
            border: '2px solid rgba(118,171,174,0.3)',
            borderRadius: 12,
            display: 'flex',
            justifyContent: 'center',
            paddingTop: 6,
          }}
        >
          <div style={{ width: 4, height: 8, background: '#FF5722', borderRadius: 2 }} />
        </motion.div>
      </motion.div>
    </section>
  );
}
