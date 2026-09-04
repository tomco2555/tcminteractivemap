import { useState, useEffect } from 'react';

// Update this date for each new season
const NEXT_SEASON_DATE = Date.UTC(2026, 3, 1, 8); // April 1 2026 as placeholder

export default function CountdownTimer() {
  const [text, setText] = useState('');

  useEffect(() => {
    function tick() {
      const now = Date.now();
      const diff = NEXT_SEASON_DATE - now;
      if (diff <= 0) {
        setText('New season just dropped!');
        return;
      }
      const d = Math.floor(diff / (1000 * 60 * 60 * 24));
      const h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const s = Math.floor((diff % (1000 * 60)) / 1000);
      setText(`Next season in: ${d}d ${h}h ${m}m ${s}s`);
    }
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return <span id="countdown_next_season">{text}</span>;
}
