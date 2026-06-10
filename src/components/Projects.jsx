import { motion, useMotionValue, useTransform } from 'framer-motion';
import { useRef } from 'react';

const projects = [
  {
    id: 'terra',
    title: 'The TERRA',
    subtitle: 'GYM & HEALTHY CAFÉ',
    year: '2024',
    description: 'A two-story gym and healthy café situated within an educational area, serving as a hub for wellness, fitness, and social interaction. Inspired by modern industrial style with exposed brick walls and extensive landscape elements.',
    color: '#3A6132',
    accentColor: '#C3F301',
    emoji: '🏋️',
  },
  {
    id: 'playbook',
    title: 'The Playbook Library',
    subtitle: 'LIBRARY AND LITERATURE GARDEN',
    year: '2024',
    description: 'A mini library and children\'s literacy park designed to foster a love for reading. Features a distinctive façade inspired by stacked books with vibrant combination creating a playful and welcoming atmosphere.',
    color: '#0F2E5A',
    accentColor: '#C3F301',
    emoji: '📚',
  },
  {
    id: 'linea',
    title: 'Linea Verde',
    subtitle: 'SUSTAINABLE ARCHITECTURE',
    year: '2024',
    description: 'A sustainable design project integrating natural greenery into built form. A harmonious blend of biophilic design principles with contemporary architectural language creating a verdant living environment.',
    color: '#1a3a2a',
    accentColor: '#B4E00F',
    emoji: '🌿',
  },
  {
    id: 'warmy',
    title: 'Warmy Bedroom',
    subtitle: 'INTERIOR DESIGN',
    year: '2023',
    description: 'An interior design project focused on creating a warm, cozy bedroom environment. The design balances aesthetic appeal with functional comfort, using warm tones and natural materials.',
    color: '#2d1f0f',
    accentColor: '#C3F301',
    emoji: '🛏️',
  },
];

function ProjectCard({ project, index }) {
  const cardRef = useRef(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useTransform(mouseY, [-100, 100], [8, -8]);
  const rotateY = useTransform(mouseX, [-100, 100], [-8, 8]);

  const handleMouseMove = (e) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    mouseX.set(e.clientX - centerX);
    mouseY.set(e.clientY - centerY);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.div
      id={`project-card-${project.id}`}
      ref={cardRef}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ type: 'spring', stiffness: 60, damping: 20, delay: index * 0.12 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        perspective: '1000px',
        cursor: 'pointer',
      }}
    >
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
          borderRadius: '20px',
          overflow: 'hidden',
          background: `linear-gradient(145deg, ${project.color}cc, #0C1E2C)`,
          border: '1px solid rgba(255,255,255,0.08)',
          boxShadow: '0 20px 60px rgba(0,0,0,0.4)',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
        }}
        whileHover={{ boxShadow: `0 30px 80px rgba(0,0,0,0.5), 0 0 30px ${project.accentColor}20` }}
        transition={{ duration: 0.3 }}
      >
        {/* Image area */}
        <div style={{
          height: '220px',
          background: `linear-gradient(135deg, ${project.color} 0%, #0C1E2C 100%)`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          overflow: 'hidden',
        }}>
          {/* Placeholder for project image */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '12px',
            zIndex: 1,
          }}>
            <span style={{ fontSize: '56px' }}>{project.emoji}</span>
            <p style={{
              fontFamily: "'Kdam Thmor Pro', sans-serif",
              fontSize: '12px',
              color: 'rgba(255,255,255,0.5)',
            }}>Project Image Coming Soon</p>
          </div>

          {/* Year badge */}
          <div style={{
            position: 'absolute',
            top: '16px',
            right: '16px',
            padding: '4px 12px',
            background: `${project.accentColor}22`,
            border: `1px solid ${project.accentColor}55`,
            borderRadius: '20px',
            color: project.accentColor,
            fontFamily: "'Kdam Thmor Pro', sans-serif",
            fontSize: '12px',
            letterSpacing: '0.1em',
          }}>
            {project.year}
          </div>
        </div>

        {/* Content */}
        <div style={{ padding: '28px', flex: 1, display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <div>
            <p style={{
              fontFamily: "'Kdam Thmor Pro', sans-serif",
              fontSize: '11px',
              color: project.accentColor,
              letterSpacing: '0.2em',
              marginBottom: '8px',
            }}>
              {project.subtitle}
            </p>
            <h3 style={{
              fontFamily: "'Kdam Thmor Pro', sans-serif",
              fontSize: 'clamp(20px, 2.5vw, 28px)',
              fontWeight: 400,
              color: '#F3F4F6',
              letterSpacing: '0.05em',
              lineHeight: 1.2,
            }}>
              {project.title}
            </h3>
          </div>

          <p style={{
            fontFamily: "'Kdam Thmor Pro', sans-serif",
            fontSize: '14px',
            color: '#8D9DAC',
            lineHeight: 1.7,
            letterSpacing: '0.03em',
            flex: 1,
          }}>
            {project.description}
          </p>

          {/* Read More button */}
          <motion.button
            id={`project-read-${project.id}`}
            whileHover={{
              background: `linear-gradient(180deg, ${project.accentColor} 0%, rgba(78,118,44,0.7) 100%)`,
              color: '#0C1E2C',
            }}
            whileTap={{ scale: 0.97 }}
            style={{
              alignSelf: 'flex-start',
              padding: '10px 24px',
              background: 'rgba(195,243,1,0.08)',
              border: `1px solid ${project.accentColor}44`,
              borderRadius: '10px',
              fontFamily: "'Kdam Thmor Pro', sans-serif",
              fontSize: '14px',
              color: project.accentColor,
              cursor: 'pointer',
              letterSpacing: '0.1em',
              transition: 'all 0.3s',
            }}
          >
            READ MORE →
          </motion.button>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section
      id="projects"
      style={{
        background: 'linear-gradient(90deg, #0C1E2C 0%, #0F2E5A 48.56%, #3A6132 99.52%)',
        padding: 'clamp(60px, 8vw, 120px) 0',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Top line */}
      <div style={{
        position: 'absolute',
        top: 0, left: 0, right: 0,
        height: '2px',
        background: 'linear-gradient(90deg, transparent, rgba(195,243,1,0.4), transparent)',
      }} />

      <div className="container">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: '60px' }}
        >
          <p style={{
            fontFamily: "'Kdam Thmor Pro', sans-serif",
            fontSize: '13px',
            color: '#C3F301',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            marginBottom: '12px',
          }}>Architectural Work</p>
          <h2 style={{
            fontFamily: "'Kdam Thmor Pro', sans-serif",
            fontSize: 'clamp(32px, 5vw, 56px)',
            fontWeight: 400,
            background: 'linear-gradient(91.8deg, #8D9DAC 24.51%, #F3F4F6 79.58%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            letterSpacing: '0.1em',
          }}>
            MY PROJECT
          </h2>
        </motion.div>

        {/* Architectural category */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          style={{ marginBottom: '32px' }}
        >
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
            marginBottom: '24px',
          }}>
            <span style={{
              fontFamily: "'Kdam Thmor Pro', sans-serif",
              fontSize: '14px',
              color: '#C3F301',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
            }}>
              ARCHITECTURAL
            </span>
            <div style={{ flex: 1, height: '1px', background: 'rgba(195,243,1,0.2)' }} />
          </div>
        </motion.div>

        {/* Projects grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '24px',
        }}>
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>

      <div style={{
        position: 'absolute',
        bottom: 0, left: 0, right: 0,
        height: '2px',
        background: 'linear-gradient(90deg, transparent, rgba(195,243,1,0.3), transparent)',
      }} />
    </section>
  );
}
