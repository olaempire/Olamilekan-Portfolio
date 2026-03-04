import { motion } from "framer-motion";
import skaterGif from "@/assets/REAL SKATE.gif";

export default function Skater() {
  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        height: '110px',
        zIndex: 10,
        overflow: 'hidden',
        borderTop: '4px solid hsl(var(--foreground))',
      }}
    >
      <motion.div
        animate={{ x: ['-120px', 'calc(100vw + 120px)'] }}
        transition={{
          duration: window.innerWidth < 768 ? 4 : 8,
          repeat: Infinity,
          ease: 'linear',
        }}
        style={{
          position: 'absolute',
          bottom: '-20px',
          left: 0,
          zIndex: 10,
        }}
      >
        <img
          src={skaterGif}
          alt="Skater"
          style={{
            width: '120px',
            height: '120px',
            objectFit: 'contain',
            mixBlendMode: 'screen',
          }}
        />
      </motion.div>
    </div>
  );
}