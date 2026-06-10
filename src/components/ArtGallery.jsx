import { motion } from 'framer-motion';

const artItems = [
  { id: 'art1', title: 'Architectural Sketch — Museum Lampung', type: 'Pencil Sketch', emoji: '🏛️', width: 2, height: 1 },
  { id: 'art2', title: 'Cat Art', type: 'Digital Illustration', emoji: '🐱', width: 1, height: 2 },
  { id: 'art3', title: 'Dot by Dot', type: 'Mixed Media', emoji: '✏️', width: 1, height: 1 },
  { id: 'art4', title: 'Kopi Nako — Architectural Drawing', type: 'Technical Illustration', emoji: '☕', width: 1, height: 1 },
  { id: 'art5', title: 'Auto2000 Wayhalim', type: 'Architectural Drawing', emoji: '🚗', width: 1, height: 2 },
  { id: 'art6', title: 'Kajang Architecture Study', type: 'Watercolor Sketch', emoji: '🏘️', width: 1, height: 1 },
  { id: 'art7', title: 'Portrait Study', type: 'Realistic Drawing', emoji: '👤', width: 1, height: 1 },
  { id: 'art8', title: 'VRKL Architecture', type: 'Digital Render', emoji: '🏗️', width: 2, height: 1 },
  { id: 'art9', title: 'Nature Sketch', type: 'Pencil Sketch', emoji: '🌿', width: 1, height: 1 },
  { id: 'art10', title: 'Abstract Composition', type: 'Mixed Media', emoji: '🎨', width: 1, height: 1 },
];

const galleryContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.2 },
  },
};

const imageItemVariants = {
  hidden: { y: 40, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: 'spring', stiffness: 60, damping: 15 },
  },
};

function ArtItem({ item, index }) {
  const isWide = item.width === 2;
  const isTall = item.height === 2;

  return (
    <motion.div
      id={`art-${item.id}`}
      variants={imageItemVariants}
      whileHover={{ scale: 1.03, zIndex: 10 }}
      style={{
        gridColumn: isWide ? 'span 2' : 'span 1',
        gridRow: isTall ? 'span 2' : 'span 1',
        borderRadius: '14px',
        overflow: 'hidden',
        background: 'linear-gradient(145deg, #1a2e40 0%, #0d1820 100%)',
        boxShadow: '2px 2px 7px 1px rgba(176, 222, 12, 0.5), 10px 10px 6px rgba(0, 0, 0, 0.7)',
        border: '1px solid rgba(195,243,1,0.15)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '10px',
        padding: '20px',
        cursor: 'default',
        minHeight: isTall ? '280px' : '140px',
        position: 'relative',
      }}
    >
      <span style={{ fontSize: isTall || isWide ? '48px' : '32px' }}>{item.emoji}</span>
      <div style={{ textAlign: 'center' }}>
        <p style={{
          fontFamily: "'Kdam Thmor Pro', sans-serif",
          fontSize: isWide ? '14px' : '11px',
          color: '#F3F4F6',
          letterSpacing: '0.05em',
          lineHeight: 1.4,
          marginBottom: '4px',
        }}>{item.title}</p>
        <p style={{
          fontFamily: "'Kdam Thmor Pro', sans-serif",
          fontSize: '10px',
          color: '#C3F301',
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
        }}>{item.type}</p>
      </div>

      {/* Neon glow accent */}
      <div style={{
        position: 'absolute',
        inset: 0,
        borderRadius: '14px',
        background: 'radial-gradient(ellipse at center, rgba(195,243,1,0.03) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />
    </motion.div>
  );
}

export default function ArtGallery() {
  return (
    <section
      id="art-gallery"
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
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: '48px' }}
        >
          <p style={{
            fontFamily: "'Kdam Thmor Pro', sans-serif",
            fontSize: '13px',
            color: '#C3F301',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            marginBottom: '12px',
          }}>
            Manual & Digital Art
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
            MY ART GALLERY
          </h2>
        </motion.div>

        {/* Bento grid */}
        <motion.div
          variants={galleryContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gridAutoRows: '140px',
            gap: '16px',
          }}
        >
          {artItems.map((item, i) => (
            <ArtItem key={item.id} item={item} index={i} />
          ))}
        </motion.div>
      </div>

      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0, height: '2px',
        background: 'linear-gradient(90deg, transparent, rgba(195,243,1,0.3), transparent)',
      }} />
    </section>
  );
}
