import { motion } from 'framer-motion';

const softwareSkills = [
  { name: 'AutoCAD', icon: '📐' },
  { name: 'SketchUp', icon: '📦' },
  { name: 'Lumion', icon: '🌿' },
  { name: 'Revit', icon: '🏗️' },
  { name: 'Photoshop', icon: '🎨' },
  { name: 'Illustrator', icon: '✏️' },
  { name: 'CorelDraw', icon: '🖌️' },
  { name: 'Canva', icon: '🖼️' },
  { name: 'Figma', icon: '🔷' },
  { name: 'Microsoft Office', icon: '💼' },
  { name: 'CapCut', icon: '🎬' },
  { name: 'Premiere Pro', icon: '🎞️' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: 'spring', stiffness: 70, damping: 18 },
  },
};

export default function About() {
  return (
    <section
      id="about"
      style={{
        background: 'linear-gradient(90deg, #0C1E2C 0%, #0F2E5A 48.56%, #3A6132 99.52%)',
        padding: 'clamp(60px, 8vw, 120px) 0',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Decorative top border */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: '2px',
        background: 'linear-gradient(90deg, transparent, rgba(195,243,1,0.5), transparent)',
      }} />

      <div className="container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '60px',
            alignItems: 'start',
          }}
        >
          {/* Left — Photo placeholder */}
          <motion.div
            variants={itemVariants}
            style={{
              position: 'relative',
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <div style={{
              width: 'clamp(240px, 30vw, 340px)',
              aspectRatio: '3/4',
              borderRadius: '20px',
              background: 'linear-gradient(145deg, #1a3a5c 0%, #2d4f30 100%)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '16px',
              border: '1px solid rgba(195,243,1,0.2)',
              boxShadow: '0 20px 60px rgba(0,0,0,0.4)',
              overflow: 'hidden',
            }}>
              <div style={{ fontSize: '60px' }}>🏛️</div>
              <p style={{
                fontFamily: "'Kdam Thmor Pro', sans-serif",
                fontSize: '14px',
                color: '#8D9DAC',
                textAlign: 'center',
              }}>Photo DINN.png<br />Coming Soon</p>
            </div>

            {/* Accent decoration */}
            <div style={{
              position: 'absolute',
              bottom: '-16px',
              left: '16px',
              width: '120px',
              height: '4px',
              background: 'linear-gradient(90deg, #C3F301, transparent)',
              borderRadius: '2px',
            }} />
          </motion.div>

          {/* Right — Bio + Skills */}
          <div>
            {/* Section title */}
            <motion.div variants={itemVariants}>
              <p style={{
                fontFamily: "'Kdam Thmor Pro', sans-serif",
                fontSize: '13px',
                color: '#C3F301',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                marginBottom: '12px',
              }}>About Me</p>
              <h2 style={{
                fontFamily: "'Kdam Thmor Pro', sans-serif",
                fontSize: 'clamp(28px, 4vw, 48px)',
                fontWeight: 400,
                background: 'linear-gradient(91.8deg, #8D9DAC 24.51%, #F3F4F6 79.58%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                lineHeight: 1.2,
                marginBottom: '24px',
                letterSpacing: '0.05em',
              }}>
                Adinda Muthia<br />Hanifah
              </h2>
            </motion.div>

            <motion.div variants={itemVariants}>
              <p style={{
                fontFamily: "'Kdam Thmor Pro', sans-serif",
                fontSize: 'clamp(15px, 1.8vw, 18px)',
                color: '#C4C4C4',
                lineHeight: 1.8,
                letterSpacing: '0.04em',
                marginBottom: '32px',
              }}>
                I'm an architecture student and multi-disciplinary designer at
                <span style={{ color: '#F3F4F6' }}> Universitas Lampung</span>. My work bridges the precision of architectural design with the creativity of graphic communication — from spatial planning to visual storytelling.
              </p>
            </motion.div>

            {/* Software Skills Grid */}
            <motion.div variants={itemVariants}>
              <p style={{
                fontFamily: "'Kdam Thmor Pro', sans-serif",
                fontSize: '14px',
                color: '#8D9DAC',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                marginBottom: '20px',
              }}>
                Software Skills
              </p>
              <motion.div
                variants={containerVariants}
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fill, minmax(76px, 1fr))',
                  gap: '12px',
                }}
              >
                {softwareSkills.map((skill, i) => (
                  <motion.div
                    key={skill.name}
                    id={`skill-${skill.name.toLowerCase().replace(/\s+/g, '-')}`}
                    variants={itemVariants}
                    whileHover={{ y: -6, scale: 1.05 }}
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      gap: '6px',
                      padding: '12px 8px',
                      borderRadius: '12px',
                      background: 'rgba(255,255,255,0.04)',
                      border: '1px solid rgba(255,255,255,0.08)',
                      cursor: 'default',
                      transition: 'background 0.2s',
                    }}
                  >
                    <span style={{ fontSize: '22px' }}>{skill.icon}</span>
                    <span style={{
                      fontFamily: "'Kdam Thmor Pro', sans-serif",
                      fontSize: '9px',
                      color: '#8D9DAC',
                      textAlign: 'center',
                      letterSpacing: '0.05em',
                      lineHeight: 1.3,
                    }}>
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Bottom decorative border */}
      <div style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: '2px',
        background: 'linear-gradient(90deg, transparent, rgba(195,243,1,0.3), transparent)',
      }} />
    </section>
  );
}
