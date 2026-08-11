import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  SiPython, SiDart, SiJavascript, SiHtml5,
  SiReact, SiFlutter, SiPostgresql,
  SiFirebase, SiGithub, SiAndroidstudio,
  SiGit,
} from 'react-icons/si';
import { FaLayerGroup, FaRobot, FaDatabase, FaCode } from 'react-icons/fa';
import { DiMsqlServer, DiCss3 } from 'react-icons/di';
import { VscCode } from 'react-icons/vsc';

const skillGroups = [
  {
    category: 'Languages',
    icon: '{ }',
    color: '#FF5722',
    skills: [
      { name: 'Python', icon: <SiPython /> },
      { name: 'Dart', icon: <SiDart /> },
      { name: 'JavaScript', icon: <SiJavascript /> },
      { name: 'HTML5', icon: <SiHtml5 /> },
      { name: 'CSS3', icon: <DiCss3 /> },
    ],
  },
  {
    category: 'Frontend',
    icon: '⟨/⟩',
    color: '#76ABAE',
    skills: [
      { name: 'React', icon: <SiReact /> },
      { name: 'HTML5', icon: <SiHtml5 /> },
      { name: 'CSS3', icon: <DiCss3 /> },
      { name: 'ES6+', icon: <SiJavascript /> },
    ],
  },
  {
    category: 'Mobile',
    icon: '📱',
    color: '#FF5722',
    skills: [
      { name: 'Flutter', icon: <SiFlutter /> },
      { name: 'React Native', icon: <SiReact /> },
    ],
  },
  {
    category: 'Databases',
    icon: '🗄️',
    color: '#76ABAE',
    skills: [
      { name: 'SQL Server', icon: <DiMsqlServer /> },
      { name: 'PostgreSQL', icon: <SiPostgresql /> },
      { name: 'Firebase RT DB', icon: <SiFirebase /> },
      { name: 'Firestore', icon: <SiFirebase /> },
    ],
  },
  {
    category: 'Cloud & BaaS',
    icon: '☁️',
    color: '#FF5722',
    skills: [
      { name: 'Firebase Auth', icon: <SiFirebase /> },
      { name: 'Firestore', icon: <SiFirebase /> },
      { name: 'Cloud Messaging', icon: <SiFirebase /> },
      { name: 'Firebase Hosting', icon: <SiFirebase /> },
    ],
  },
  {
    category: 'AI & APIs',
    icon: '🤖',
    color: '#76ABAE',
    skills: [
      { name: 'AI-Based APIs', icon: <FaRobot /> },
      { name: 'Third-Party APIs', icon: <FaLayerGroup /> },
    ],
  },
  {
    category: 'Tools & Platforms',
    icon: '🛠️',
    color: '#FF5722',
    skills: [
      { name: 'Git', icon: <SiGit /> },
      { name: 'GitHub', icon: <SiGithub /> },
      { name: 'VS Code', icon: <VscCode /> },
      { name: 'Visual Studio', icon: <FaCode /> },
      { name: 'Android Studio', icon: <SiAndroidstudio /> },
    ],
  },
  {
    category: 'Soft Skills',
    icon: '🧩',
    color: '#76ABAE',
    skills: [
      { name: 'Problem Solving', icon: '💡' },
      { name: 'Debugging', icon: '🔍' },
      { name: 'Agile / Scrum', icon: '🔄' },
    ],
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.08, ease: 'easeOut' },
  }),
};

function SkillCard({ group, index }) {
  return (
    <motion.div
      className="glass-card"
      custom={index}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
      style={{
        borderRadius: 16,
        padding: '24px 22px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Top accent line */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: 2,
          background: `linear-gradient(90deg, ${group.color}, transparent)`,
        }}
      />

      {/* Category header */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 18 }}>
        <span style={{ fontSize: 18 }}>{group.icon}</span>
        <span
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontWeight: 600,
            fontSize: 13,
            color: group.color,
            letterSpacing: '0.8px',
            textTransform: 'uppercase',
          }}
        >
          {group.category}
        </span>
      </div>

      {/* Skills */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
        {group.skills.map((skill) => (
          <span key={skill.name} className="skill-badge" style={{ fontSize: 12, padding: '7px 14px' }}>
            <span style={{ fontSize: 14, color: group.color }}>
              {typeof skill.icon === 'string' ? skill.icon : skill.icon}
            </span>
            {skill.name}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="skills" className="section">
      <div className="container">
        {/* Section header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: 60 }}
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
            Teknoloji Stack
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
            Yeteneklerim
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
            Projelerimde fikirleri hayata geçirirken kullandığım güncel teknolojiler ve araçlar.
          </p>
        </motion.div>

        {/* Skills grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: 20,
          }}
        >
          {skillGroups.map((group, i) => (
            <SkillCard key={group.category} group={group} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
