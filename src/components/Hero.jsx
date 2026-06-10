import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { useRef } from 'react';
import profileImage from '../assets/image.png';

// Wave Y-offsets per huruf (px) — positif = turun, negatif = naik
const LETTERS = [
  { char: 'P', yOffset: 50 },
  { char: 'O', yOffset: 18 },
  { char: 'R', yOffset: -16 },
  { char: 'T', yOffset: -48 },
  { char: 'O', yOffset: -36 },
  { char: 'F', yOffset: -46 },
  { char: 'O', yOffset: -38 },
  { char: 'L', yOffset: -8 },
  { char: 'I', yOffset: 22 },
  { char: 'O', yOffset: 44 },
];

// Bar vertikal sisi kiri/kanan
function VerticalBars({ side }) {
  const isLeft = side === 'left';
  const heights = [18, 32, 50, 68, 85, 68, 50, 32, 18];

  return (
    <div style={{
      position: 'absolute',
      top: 0, bottom: 0,
      [isLeft ? 'left' : 'right']: 0,
      width: '90px',
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: isLeft ? 'flex-start' : 'flex-end',
      gap: '4px',
      padding: isLeft ? '0 0 0 4px' : '0 4px 0 0',
      zIndex: 4,
      pointerEvents: 'none',
    }}>
      {heights.map((h, i) => {
        const delay = isLeft
          ? 0.1 + i * 0.06
          : 0.1 + (heights.length - 1 - i) * 0.06;
        return (
          <motion.div
            key={i}
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 1.1, delay, ease: [0.33, 1, 0.68, 1] }}
            style={{
              width: '10px',
              height: `${h}%`,
              transformOrigin: 'bottom',
              background: `linear-gradient(to top, rgba(35,105,55,0.95), rgba(15,50,90,0.2))`,
              borderRadius: '4px 4px 0 0',
              flexShrink: 0,
            }}
          />
        );
      })}
    </div>
  );
}

export default function Hero() {
  const sectionRef = useRef(null);
  const { scrollY } = useScroll();

  const textY = useTransform(scrollY, [0, 600], [0, 70]);
  const textYSpring = useSpring(textY, { stiffness: 40, damping: 15 });

  const photoY = useTransform(scrollY, [0, 600], [0, -35]);
  const photoYSpring = useSpring(photoY, { stiffness: 60, damping: 22 });

  return (
    <section
      id="hero"
      ref={sectionRef}
      style={{
        position: 'relative',
        width: '100%',
        height: '100vh',
        background: 'linear-gradient(110deg, #0C1E2C 0%, #0F2E5A 45%, #1a3d2e 78%, #3A6132 100%)',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {/* Center radial glow */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'radial-gradient(ellipse 60% 55% at 50% 50%, rgba(10,38,72,0.55) 0%, transparent 100%)',
        pointerEvents: 'none', zIndex: 0,
      }} />

      {/* Bar vertikal */}
      <VerticalBars side="left" />
      <VerticalBars side="right" />

      {/* ============================================================
          PORTOFOLIO — full width, tiap huruf di Y berbeda (wave)
          font 15vw × 10 huruf = 150vw → overflow dipotong section
         ============================================================ */}
      <motion.div
        aria-hidden="true"
        style={{
          position: 'absolute',
          left: '2vw',   /* Beri sedikit jarak dari tepi layar */
          right: '2vw',
          /* Posisi vertikal: tengah layar + sedikit ke bawah */
          top: '50%',
          marginTop: '-40px',
          zIndex: 1,
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'flex-end',
          justifyContent: 'space-between',
          pointerEvents: 'none',
          userSelect: 'none',
          y: textYSpring,
        }}
      >
        {LETTERS.map(({ char, yOffset }, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0, y: yOffset + 70 }}
            animate={{ opacity: 1, y: yOffset }}
            transition={{
              duration: 0.95,
              delay: 0.04 + i * 0.055,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
            style={{
              display: 'block',
              fontFamily: "'Kdam Thmor Pro', sans-serif",
              /* Ukuran font disesuaikan agar 10 huruf pas di layar (sekitar 9.5vw) */
              fontSize: 'clamp(50px, 9.5vw, 180px)',
              lineHeight: 0.88,
              fontWeight: 400,
              letterSpacing: 0,
              color: 'rgba(210, 228, 245, 0.86)',
              textShadow: '0 2px 18px rgba(0,0,0,0.3)',
            }}
          >
            {char}
          </motion.span>
        ))}
      </motion.div>

      {/* ============================================================
          FOTO — centered, sekitar 60vh tinggi, TIDAK ada card/box

          CENTERING FIX:
          Gunakan margin: '0 auto' + left/right: 0
          BUKAN left:'50%' + transform:'translateX(-50%)'
          karena Framer Motion 'y' dan CSS transform konflik!
         ============================================================ */}
      <motion.div
        style={{
          position: 'absolute',
          /* Tempatkan foto di tengah-bawah section */
          bottom: 0,
          left: 0,
          right: 0,
          /* Framer Motion y untuk parallax — tidak konflik dengan margin auto */
          y: photoYSpring,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',  /* center horizontal */
          justifyContent: 'flex-end',
          pointerEvents: 'none',
          zIndex: 3,
        }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
          style={{
            position: 'relative',   /* supaya badge bisa position:absolute di dalamnya */
            display: 'inline-block',
          }}
        >
          {/* Lingkaran dekoratif di belakang foto */}
          <div style={{
            position: 'absolute',
            width: '80%',
            aspectRatio: '1',
            borderRadius: '50%',
            border: '1.5px solid rgba(195,243,1,0.2)',
            top: '40%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            zIndex: 0,
            pointerEvents: 'none',
          }} />

          {/* FOTO — penuhi tinggi viewport, tidak ada maxWidth yang membatasi */}
          <img
            src={profileImage.src || profileImage}
            alt="Adinda Muthia Hanifah"
            style={{
              height: '100vh',          /* penuh hingga bawah section */
              width: 'auto',            /* lebar ikut aspect ratio */
              maxWidth: '45vw',         /* batas agar tidak terlalu lebar di layar besar */
              objectFit: 'contain',
              objectPosition: 'bottom center',
              display: 'block',
              position: 'relative',
              zIndex: 1,
            }}
          />

          {/* Name badge — OVERLAY di atas foto, posisi ~70% dari atas (setinggi pinggang/dada) */}
          <motion.div
            initial={{ opacity: 0, x: '-50%', y: '60%' }}
            animate={{ opacity: 1, x: '-50%', y: '0%' }}
            transition={{ delay: 0.85, duration: 0.55, ease: 'easeOut' }}
            style={{
              position: 'absolute',
              /* 70% dari atas = sekitar area pinggang/dada orang */
              top: '70%',
              left: '50%',
              x: '-50%',               /* Framer Motion x, tidak konflik dengan transform */
              zIndex: 5,
              padding: '9px 28px 10px',
              background: 'rgba(18, 34, 55, 0.82)',
              backdropFilter: 'blur(12px)',
              WebkitBackdropFilter: 'blur(12px)',
              border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: '6px',
              boxShadow: '0 4px 24px rgba(0,0,0,0.5)',
              whiteSpace: 'nowrap',
            }}
          >
            <p style={{
              fontFamily: "'Kdam Thmor Pro', sans-serif",
              fontSize: 'clamp(13px, 1.3vw, 17px)',
              color: '#E8EDF3',
              letterSpacing: '0.08em',
              textAlign: 'center',
              margin: 0,
            }}>
              Adinda'Mt Hanf
            </p>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.7 }}
        style={{
          position: 'absolute',
          bottom: '14px',
          /* Center pakai left+right+margin, BUKAN left:50%+transform */
          left: 0, right: 0,
          display: 'flex',
          justifyContent: 'center',
          zIndex: 10,
        }}
      >
        <motion.div
          animate={{ y: [0, 7, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          style={{
            width: '22px', height: '36px',
            border: '2px solid rgba(195,243,1,0.4)',
            borderRadius: '11px',
            display: 'flex',
            justifyContent: 'center',
            paddingTop: '5px',
          }}
        >
          <div style={{
            width: '3px', height: '7px',
            background: '#C3F301',
            borderRadius: '2px',
          }} />
        </motion.div>
      </motion.div>
    </section>
  );
}
