import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiGithub, FiArrowRight } from 'react-icons/fi';
import { projects } from '../data/projects';

function ProjectCard({ project, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.55, delay: index * 0.07, ease: 'easeOut' }}
      whileHover={{ y: -8 }}
      style={{
        background: 'rgba(255,255,255,0.03)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        border: `1px solid rgba(118, 171, 174, 0.2)`,
        borderRadius: 20,
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
        cursor: 'default',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = project.accent + '60';
        e.currentTarget.style.boxShadow = `0 24px 50px rgba(0,0,0,0.35), 0 0 30px ${project.accent}15`;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = 'rgba(118,171,174,0.2)';
        e.currentTarget.style.boxShadow = 'none';
      }}
    >
      {/* Project visual header */}
      <div
        style={{
          height: 160,
          background: `linear-gradient(135deg, rgba(48,56,65,1) 0%, rgba(48,56,65,0.6) 100%)`,
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
        }}
      >
        {/* Gradient overlay */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: `radial-gradient(circle at 30% 40%, ${project.accent}25 0%, transparent 65%)`,
          }}
        />
        {/* Grid pattern */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage:
              'linear-gradient(rgba(118,171,174,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(118,171,174,0.06) 1px, transparent 1px)',
            backgroundSize: '30px 30px',
          }}
        />
        {/* Project number */}
        <div
          style={{
            position: 'absolute',
            top: 16,
            left: 20,
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: 11,
            fontWeight: 700,
            color: project.accent,
            letterSpacing: '2px',
            opacity: 0.8,
          }}
        >
          PROJECT_{String(index + 1).padStart(2, '0')}
        </div>
        {/* Emoji icon */}
        <span style={{ fontSize: 52, position: 'relative', zIndex: 1, filter: 'drop-shadow(0 4px 12px rgba(0,0,0,0.4))' }}>
          {project.emoji}
        </span>
        {/* Accent bar bottom */}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: 2,
            background: `linear-gradient(90deg, ${project.accent}, transparent)`,
          }}
        />
      </div>

      {/* Content */}
      <div style={{ padding: '22px 24px', flex: 1, display: 'flex', flexDirection: 'column', gap: 14 }}>
        <h3
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontWeight: 700,
            fontSize: 17,
            color: '#F5F5F5',
            lineHeight: 1.3,
          }}
        >
          {project.title}
        </h3>
        <p
          style={{
            fontSize: 13.5,
            color: 'rgba(245,245,245,0.6)',
            lineHeight: 1.65,
            flex: 1,
          }}
        >
          {project.description}
        </p>

        {/* Tags */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginTop: 4 }}>
          {project.tags.map((tag) => (
            <span key={tag} className="tag-chip">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="projects" className="section" style={{ background: 'rgba(0,0,0,0.15)' }}>
      <div className="container">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: 60 }}
        >
          <span
            style={{
              color: '#FF5722',
              fontSize: 12,
              fontWeight: 600,
              letterSpacing: '2px',
              textTransform: 'uppercase',
              display: 'block',
              marginBottom: 12,
            }}
          >
            Portföyüm
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
            Projelerim
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
            Farklı teknoloji alanlarında geliştirdiğim projelerin bir seçkisi.
            Her biri gerçek bir problemi çözüyor.
          </p>
        </motion.div>

        {/* Projects grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
            gap: 24,
          }}
        >
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{ textAlign: 'center', marginTop: 56 }}
        >
          <p style={{ fontSize: 14, color: 'rgba(245,245,245,0.45)', marginBottom: 20 }}>
            Bunlar sadece öne çıkan projelerim — daha fazlası GitHub'da.
          </p>
          <motion.a
            href="https://github.com/mferitb"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.97 }}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 10,
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(118,171,174,0.3)',
              color: '#F5F5F5',
              padding: '14px 28px',
              borderRadius: 10,
              textDecoration: 'none',
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 600,
              fontSize: 15,
              transition: 'all 0.3s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(255,87,34,0.1)';
              e.currentTarget.style.borderColor = '#FF5722';
              e.currentTarget.style.color = '#FF5722';
              e.currentTarget.style.boxShadow = '0 12px 30px rgba(255,87,34,0.2)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(255,255,255,0.04)';
              e.currentTarget.style.borderColor = 'rgba(118,171,174,0.3)';
              e.currentTarget.style.color = '#F5F5F5';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            <FiGithub style={{ fontSize: 18 }} />
            Diğer Projelerimi GitHub'da Gör
            <FiArrowRight style={{ fontSize: 15 }} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
