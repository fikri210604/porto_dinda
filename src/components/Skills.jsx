import { motion } from 'framer-motion';

// Graphic design gallery images (placeholders)
const graphicDesignItems = [
  { id: 'gd1', org: 'Kominfo', label: 'Social Media Design', rows: 2, emoji: '📣' },
  { id: 'gd2', org: 'Himatur', label: 'Event Poster', rows: 1, emoji: '🎪' },
  { id: 'gd3', org: 'FOSSI', label: 'Organization Feed', rows: 1, emoji: '🌱' },
  { id: 'gd4', org: 'Kominfo', label: 'Campaign Visual', rows: 1, emoji: '📢' },
  { id: 'gd5', org: 'Himatur', label: 'Infographic', rows: 2, emoji: '📊' },
  { id: 'gd6', org: 'FOSSI', label: 'Instagram Content', rows: 1, emoji: '📱' },
  { id: 'gd7', org: 'Kominfo', label: 'Brand Identity', rows: 1, emoji: '🎨' },
  { id: 'gd8', org: 'Himatur', label: 'Digital Artwork', rows: 1, emoji: '🖼️' },
  { id: 'gd9', org: 'FOSSI', label: 'Publication Design', rows: 1, emoji: '📰' },
];

const skillRows = [
  {
    direction: 'left',
    skills: 'AutoCAD · SketchUp · Lumion · Revit · ArchiCAD · Rhino · Grasshopper · Enscape · V-Ray · 3ds Max · Chief Architect · Vectorworks · AutoCAD · SketchUp · Lumion · Revit · ArchiCAD · Rhino · Grasshopper · Enscape · V-Ray · 3ds Max',
  },
  {
    direction: 'right',
    skills: 'Photoshop · Illustrator · CorelDraw · Canva · Figma · InDesign · Lightroom · Procreate · GIMP · Affinity Designer · Photoshop · Illustrator · CorelDraw · Canva · Figma · InDesign · Lightroom · Procreate · GIMP · Affinity Designer',
  },
  {
    direction: 'left',
    skills: 'Content Creation · Social Media Management · Visual Communication · Brand Identity · Motion Graphics · Video Editing · Storyboarding · Color Theory · Typography · Layout Design · Content Creation · Social Media Management · Visual Communication',
  },
];

const experienceData = [
  {
    id: 'exp1',
    role: 'Architecture Laboratory Assistant',
    org: 'Architecture Faculty — Universitas Lampung',
    period: '2024 — Present',
    description: 'Assisted students with architectural design software and technical drawing. Conducted laboratory sessions and provided guidance on project development.',
  },
  {
    id: 'exp2',
    role: 'Secretary of Media Information',
    org: 'FOSSI — Faculty of Engineering',
    period: '2023 — 2024',
    description: 'Led the digital media and communication division. Managed social media content strategy, designed visual assets, and coordinated organizational communications.',
  },
  {
    id: 'exp3',
    role: 'Head of Communication Division',
    org: 'Himatur — Architecture Student Association',
    period: '2022 — 2023',
    description: 'Directed creative communications for the architecture student body. Oversaw publication design and maintained consistent brand identity across all platforms.',
  },
];

function GraphicCard({ item, index }) {
  return (
    <motion.div
      id={`graphic-${item.id}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ delay: index * 0.06, duration: 0.5 }}
      whileHover={{ scale: 1.03, y: -4 }}
      style={{
        borderRadius: '12px',
        overflow: 'hidden',
        background: 'linear-gradient(145deg, #1a2e40, #0d1f2e)',
        border: '1px solid rgba(255,255,255,0.06)',
        filter: 'drop-shadow(4px 6px 5px rgba(0,0,0,0.8))',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '10px',
        padding: '20px',
        cursor: 'default',
        aspectRatio: item.rows === 2 ? '1/1.6' : '1/1',
      }}
    >
      <span style={{ fontSize: '32px' }}>{item.emoji}</span>
      <p style={{
        fontFamily: "'Kdam Thmor Pro', sans-serif",
        fontSize: '11px',
        color: '#C3F301',
        letterSpacing: '0.15em',
        textTransform: 'uppercase',
        textAlign: 'center',
      }}>{item.org}</p>
      <p style={{
        fontFamily: "'Kdam Thmor Pro', sans-serif",
        fontSize: '12px',
        color: '#8D9DAC',
        textAlign: 'center',
      }}>{item.label}</p>
    </motion.div>
  );
}

function MarqueeTicker({ text, direction }) {
  const duration = 30;
  return (
    <div style={{ overflow: 'hidden', width: '100%', position: 'relative' }}>
      <motion.div
        style={{ display: 'flex', whiteSpace: 'nowrap', gap: '0' }}
        animate={{ x: direction === 'left' ? ['0%', '-50%'] : ['-50%', '0%'] }}
        transition={{ duration, ease: 'linear', repeat: Infinity }}
      >
        {/* Duplicate for seamless loop */}
        <span style={{
          fontFamily: "'Kdam Thmor Pro', sans-serif",
          fontSize: 'clamp(14px, 1.5vw, 18px)',
          color: '#8D9DAC',
          letterSpacing: '0.08em',
          padding: '10px 0',
          display: 'inline-block',
          minWidth: '200%',
        }}>
          {text} &nbsp;&nbsp;&nbsp;&nbsp; {text}
        </span>
      </motion.div>
    </div>
  );
}

function ExperienceItem({ exp, index }) {
  return (
    <motion.div
      id={`exp-${exp.id}`}
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ delay: index * 0.15, duration: 0.6 }}
      style={{ paddingBottom: '40px', position: 'relative' }}
    >
      {/* Animated timeline line */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.15 + 0.3, duration: 0.8 }}
        style={{
          transformOrigin: 'left',
          height: '2px',
          background: 'linear-gradient(90deg, #C3F301, rgba(58,97,50,0.3))',
          marginBottom: '20px',
          borderRadius: '1px',
        }}
      />

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '20px', flexWrap: 'wrap' }}>
        <div style={{ flex: 1 }}>
          <h3 style={{
            fontFamily: "'Kdam Thmor Pro', sans-serif",
            fontSize: 'clamp(16px, 2vw, 22px)',
            color: '#F3F4F6',
            fontWeight: 400,
            letterSpacing: '0.05em',
            marginBottom: '6px',
          }}>
            {exp.role}
          </h3>
          <p style={{
            fontFamily: "'Kdam Thmor Pro', sans-serif",
            fontSize: '14px',
            color: '#C3F301',
            letterSpacing: '0.08em',
            marginBottom: '10px',
          }}>
            {exp.org}
          </p>
          <p style={{
            fontFamily: "'Kdam Thmor Pro', sans-serif",
            fontSize: '14px',
            color: '#8D9DAC',
            lineHeight: 1.7,
            letterSpacing: '0.03em',
          }}>
            {exp.description}
          </p>
        </div>
        <div style={{
          padding: '6px 14px',
          background: 'rgba(195,243,1,0.08)',
          border: '1px solid rgba(195,243,1,0.2)',
          borderRadius: '20px',
          color: '#C3F301',
          fontFamily: "'Kdam Thmor Pro', sans-serif",
          fontSize: '12px',
          letterSpacing: '0.1em',
          whiteSpace: 'nowrap',
        }}>
          {exp.period}
        </div>
      </div>
    </motion.div>
  );
}

export default function Skills() {
  return (
    <>
      {/* GRAPHIC DESIGN SECTION */}
      <section
        id="graphic-design"
        style={{
          background: 'linear-gradient(90deg, #0C1E2C 0%, #0F2E5A 48.56%, #3A6132 99.52%)',
          padding: 'clamp(60px, 8vw, 120px) 0',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div style={{
          position: 'absolute', top: 0, left: 0, right: 0, height: '2px',
          background: 'linear-gradient(90deg, transparent, rgba(195,243,1,0.4), transparent)',
        }} />

        <div className="container">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{ marginBottom: '48px' }}
          >
            <p style={{ fontFamily: "'Kdam Thmor Pro', sans-serif", fontSize: '13px', color: '#C3F301', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '12px' }}>
              Visual Communication
            </p>
            <h2 style={{
              fontFamily: "'Kdam Thmor Pro', sans-serif",
              fontSize: 'clamp(28px, 4vw, 48px)',
              fontWeight: 400,
              background: 'linear-gradient(91.8deg, #8D9DAC 24.51%, #F3F4F6 79.58%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              letterSpacing: '0.1em',
            }}>
              GRAPHIC DESIGN
            </h2>
          </motion.div>

          {/* Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))',
            gap: '16px',
          }}>
            {graphicDesignItems.map((item, i) => (
              <GraphicCard key={item.id} item={item} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* SKILLS MARQUEE SECTION */}
      <section
        id="skills"
        style={{
          background: 'linear-gradient(90deg, #0C1E2C 0%, #0F2E5A 48.56%, #3A6132 99.52%)',
          padding: 'clamp(40px, 6vw, 80px) 0',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div style={{
          position: 'absolute', top: 0, left: 0, right: 0, height: '2px',
          background: 'linear-gradient(90deg, transparent, rgba(195,243,1,0.4), transparent)',
        }} />

        <div style={{ marginBottom: '32px', textAlign: 'center' }}>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{
              fontFamily: "'Kdam Thmor Pro', sans-serif",
              fontSize: 'clamp(28px, 4vw, 48px)',
              fontWeight: 400,
              background: 'linear-gradient(91.8deg, #8D9DAC 24.51%, #F3F4F6 79.58%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              letterSpacing: '0.1em',
              marginBottom: '8px',
            }}
          >
            SKILLS
          </motion.h2>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          {skillRows.map((row, i) => (
            <div
              key={i}
              style={{
                borderTop: '1px solid rgba(195,243,1,0.1)',
                borderBottom: '1px solid rgba(195,243,1,0.1)',
                padding: '4px 0',
              }}
            >
              <MarqueeTicker text={row.skills} direction={row.direction} />
            </div>
          ))}
        </div>

        <div style={{
          position: 'absolute', bottom: 0, left: 0, right: 0, height: '2px',
          background: 'linear-gradient(90deg, transparent, rgba(195,243,1,0.3), transparent)',
        }} />
      </section>

      {/* EXPERIENCES SECTION */}
      <section
        id="experiences"
        style={{
          background: 'linear-gradient(90deg, #0C1E2C 0%, #0F2E5A 48.56%, #3A6132 99.52%)',
          padding: 'clamp(60px, 8vw, 120px) 0',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div style={{
          position: 'absolute', top: 0, left: 0, right: 0, height: '2px',
          background: 'linear-gradient(90deg, transparent, rgba(195,243,1,0.4), transparent)',
        }} />

        <div className="container">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{ marginBottom: '60px' }}
          >
            <p style={{ fontFamily: "'Kdam Thmor Pro', sans-serif", fontSize: '13px', color: '#C3F301', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '12px' }}>
              Professional Track
            </p>
            <h2 style={{
              fontFamily: "'Kdam Thmor Pro', sans-serif",
              fontSize: 'clamp(28px, 4vw, 48px)',
              fontWeight: 400,
              background: 'linear-gradient(91.8deg, #8D9DAC 24.51%, #F3F4F6 79.58%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              letterSpacing: '0.1em',
            }}>
              EXPERIENCES
            </h2>
          </motion.div>

          {experienceData.map((exp, i) => (
            <ExperienceItem key={exp.id} exp={exp} index={i} />
          ))}
        </div>

        <div style={{
          position: 'absolute', bottom: 0, left: 0, right: 0, height: '2px',
          background: 'linear-gradient(90deg, transparent, rgba(195,243,1,0.3), transparent)',
        }} />
      </section>
    </>
  );
}
