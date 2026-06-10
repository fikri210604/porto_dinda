import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer
      id="footer"
      style={{
        background: 'linear-gradient(180deg, rgba(118, 136, 156, 0.3) 0%, #1a1f26 50%, #0d1118 100%)',
        padding: 'clamp(50px, 7vw, 90px) 0 30px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Top border */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: '2px',
        background: 'linear-gradient(90deg, transparent, rgba(195,243,1,0.5), transparent)',
      }} />

      {/* Decorative geometric — isolated with overflow:hidden on parent */}
      <div style={{
        position: 'absolute',
        bottom: '20px',
        right: '-40px',
        width: '200px',
        height: '200px',
        borderRadius: '50%',
        border: '1px solid rgba(195,243,1,0.08)',
        pointerEvents: 'none',
      }} />

      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '48px',
          marginBottom: '60px',
        }}>
          {/* CTA Block */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 style={{
              fontFamily: "'Kdam Thmor Pro', sans-serif",
              fontSize: 'clamp(28px, 4vw, 48px)',
              fontWeight: 400,
              background: 'linear-gradient(91.8deg, #8D9DAC 24.51%, #F3F4F6 79.58%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              letterSpacing: '0.1em',
              lineHeight: 1.2,
              marginBottom: '16px',
            }}>
              Ready To<br />Collaborate?
            </h2>
            <p style={{
              fontFamily: "'Kdam Thmor Pro', sans-serif",
              fontSize: 'clamp(14px, 1.8vw, 18px)',
              color: '#8D9DAC',
              letterSpacing: '0.05em',
              marginBottom: '32px',
              lineHeight: 1.6,
            }}>
              Feel free to contact me
            </p>

            <motion.a
              href="mailto:adindamuthia@email.com"
              id="footer-contact-btn"
              whileHover={{ scale: 1.06, boxShadow: '0 0 35px rgba(195,243,1,0.5)' }}
              whileTap={{ scale: 0.97 }}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '16px 36px',
                background: 'linear-gradient(180deg, #C3F109 0%, rgba(78, 118, 44, 0.8) 100%)',
                borderRadius: '12px',
                fontFamily: "'Kdam Thmor Pro', sans-serif",
                fontSize: '18px',
                color: '#0C1E2C',
                fontWeight: 700,
                cursor: 'pointer',
                boxShadow: '0 0 20px rgba(195,243,1,0.3)',
                textDecoration: 'none',
                letterSpacing: '0.1em',
              }}
            >
              CONTACT ME
            </motion.a>
          </motion.div>

          {/* Brand info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
              <div style={{
                width: '36px', height: '36px', borderRadius: '50%',
                background: 'linear-gradient(135deg, #C3F301 0%, #3A6132 100%)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '14px', fontWeight: 'bold', color: '#0C1E2C',
              }}>A</div>
              <span style={{
                fontFamily: "'League Gothic', sans-serif",
                fontSize: '28px',
                color: '#FFFFFF',
                letterSpacing: '0.1em',
              }}>A'MtHanf</span>
            </div>

            <p style={{
              fontFamily: "'Kdam Thmor Pro', sans-serif",
              fontSize: '14px',
              color: '#8D9DAC',
              lineHeight: 1.7,
              letterSpacing: '0.03em',
              maxWidth: '280px',
            }}>
              Architecture student and multi-disciplinary designer at Universitas Lampung. Combining technical precision with creative expression.
            </p>

            {/* Tags */}
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginTop: '8px' }}>
              {['Architecture', 'Design', 'Art'].map(tag => (
                <span key={tag} style={{
                  padding: '4px 12px',
                  background: 'rgba(195,243,1,0.08)',
                  border: '1px solid rgba(195,243,1,0.2)',
                  borderRadius: '20px',
                  color: '#C3F301',
                  fontFamily: "'Kdam Thmor Pro', sans-serif",
                  fontSize: '11px',
                  letterSpacing: '0.08em',
                }}>{tag}</span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div style={{
          height: '1px',
          background: 'linear-gradient(90deg, transparent, rgba(195,243,1,0.2), rgba(141,157,172,0.3), transparent)',
          marginBottom: '28px',
        }} />

        {/* Bottom row */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '16px',
          }}
        >
          <p style={{
            fontFamily: "'Kdam Thmor Pro', sans-serif",
            fontSize: '14px',
            color: '#C4C4C4',
            letterSpacing: '0.08em',
          }}>
            Created by Adinda Muthia Hanifah
          </p>

          <div style={{ display: 'flex', gap: '28px', alignItems: 'center' }}>
            {[
              { label: 'LinkedIn', href: 'https://linkedin.com', id: 'footer-linkedin' },
              { label: 'Instagram', href: 'https://instagram.com', id: 'footer-instagram' },
              { label: 'Youtube', href: 'https://youtube.com', id: 'footer-youtube' },
            ].map(link => (
              <motion.a
                key={link.label}
                id={link.id}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ color: '#C3F301', scale: 1.05 }}
                style={{
                  fontFamily: "'Kdam Thmor Pro', sans-serif",
                  fontSize: '15px',
                  color: '#C4C4C4',
                  letterSpacing: '0.08em',
                  cursor: 'pointer',
                  textDecoration: 'none',
                  transition: 'color 0.2s',
                }}
              >
                {link.label}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
