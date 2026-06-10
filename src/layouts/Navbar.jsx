import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const navLinks = [
  { label: 'PROJECT', href: '#projects' },
  { label: 'SKILLS', href: '#skills' },
  { label: 'EXPERIENCES', href: '#experiences' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.nav
      id="navbar"
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      style={{
        position: 'fixed',
        top: '20px',
        left: '0',
        right: '0',
        margin: '0 auto',
        width: 'calc(100% - 80px)',
        maxWidth: '1300px',
        zIndex: 1000,
        background: 'linear-gradient(90deg, rgba(91,114,135,0.45) 0%, rgba(234,236,241,0.35) 100%)',
        backdropFilter: 'blur(14px)',
        WebkitBackdropFilter: 'blur(14px)',
        borderRadius: '50px',
        border: '1px solid rgba(255,255,255,0.12)',
        padding: '12px 32px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        boxShadow: scrolled
          ? '0 8px 32px rgba(0,0,0,0.35)'
          : '0 2px 12px rgba(0,0,0,0.15)',
        transition: 'box-shadow 0.3s ease',
      }}
    >
      {/* Brand — left side */}
      <motion.a
        href="/"
        id="brand-logo"
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.97 }}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          cursor: 'pointer',
          textDecoration: 'none',
          flexShrink: 0,
        }}
      >
        {/* Logo circle with portrait placeholder */}
        <div style={{
          width: '38px',
          height: '38px',
          borderRadius: '50%',
          background: 'linear-gradient(135deg, #2a4a3e 0%, #1a2d40 100%)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          border: '2px solid rgba(195,243,1,0.5)',
          overflow: 'hidden',
          flexShrink: 0,
          fontSize: '18px',
        }}>🏛️</div>

        <span style={{
          fontFamily: "'League Gothic', sans-serif",
          fontSize: '28px',
          lineHeight: '1',
          letterSpacing: '0.08em',
          color: '#FFFFFF',
          fontWeight: 400,
          whiteSpace: 'nowrap',
        }}>
          A'MtHanf
        </span>
      </motion.a>

      {/* Right side — nav links + CTA */}
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: '8px',
      }}>
        {/* Nav links */}
        <div style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          gap: '4px',
          marginRight: '12px',
        }}>
          {navLinks.map((link) => (
            <motion.a
              key={link.label}
              id={`nav-${link.label.toLowerCase()}`}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.95 }}
              style={{
                fontFamily: "'Kdam Thmor Pro', sans-serif",
                fontSize: '15px',
                fontWeight: 400,
                letterSpacing: '0.06em',
                cursor: 'pointer',
                padding: '8px 14px',
                borderRadius: '20px',
                color: '#E9E9E9',
                textDecoration: 'none',
                display: 'block',
                transition: 'background 0.2s',
              }}
            >
              {link.label}
            </motion.a>
          ))}
        </div>

        {/* CONTACT ME CTA Button */}
        <motion.a
          href="mailto:adindamuthia@email.com"
          id="nav-contact-btn"
          whileHover={{
            scale: 1.06,
            boxShadow: '0 0 28px rgba(195,243,1,0.55)',
          }}
          whileTap={{ scale: 0.96 }}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '10px 22px',
            background: 'linear-gradient(180deg, #C3F109 0%, #5a8a1f 100%)',
            borderRadius: '24px',
            fontFamily: "'Kdam Thmor Pro', sans-serif",
            fontSize: '14px',
            fontWeight: 500,
            color: '#0C1E2C',
            cursor: 'pointer',
            whiteSpace: 'nowrap',
            textDecoration: 'none',
            boxShadow: '0 0 16px rgba(195,243,1,0.3)',
            letterSpacing: '0.06em',
          }}
        >
          CONTACT ME
        </motion.a>
      </div>
    </motion.nav>
  );
}
