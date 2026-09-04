import guideRaw from '../../../DEV_MODE_GUIDE.md?raw';

function renderLine(line, i) {
  if (line.startsWith('### ')) return <h4 key={i} style={styles.h4}>{line.slice(4)}</h4>;
  if (line.startsWith('## '))  return <h3 key={i} style={styles.h3}>{line.slice(3)}</h3>;
  if (line.startsWith('# '))   return <h2 key={i} style={styles.h2}>{line.slice(2)}</h2>;
  if (line.trim() === '---')   return <hr key={i} style={styles.hr} />;
  if (line.startsWith('- '))   return <div key={i} style={styles.bullet}>• {line.slice(2)}</div>;
  if (line.trim() === '')      return <div key={i} style={{ height: '8px' }} />;
  return <p key={i} style={styles.p}>{line}</p>;
}

export default function DevHelpModal({ onClose }) {
  const lines = guideRaw.split('\n');

  return (
    <div style={styles.overlay} onClick={onClose}>
      <div style={styles.modal} onClick={e => e.stopPropagation()} role="dialog">
        <div style={styles.header}>
          <span style={styles.title}>⚙ Dev Mode Guide</span>
          <button type="button" style={styles.closeBtn} onClick={onClose}>✕</button>
        </div>
        <div style={styles.body}>
          {lines.map(renderLine)}
        </div>
      </div>
    </div>
  );
}

const styles = {
  overlay: {
    position: 'fixed',
    inset: 0,
    background: 'rgba(0,0,0,0.6)',
    zIndex: 10000,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  modal: {
    background: '#111',
    border: '1px solid #cc0000',
    borderRadius: '8px',
    width: 'min(640px, 90vw)',
    maxHeight: '80vh',
    display: 'flex',
    flexDirection: 'column',
    fontFamily: 'monospace',
    color: '#ddd',
    boxShadow: '0 4px 20px rgba(0,0,0,0.8)',
    overflow: 'hidden',
  },
  header: {
    background: '#cc0000',
    padding: '8px 12px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexShrink: 0,
  },
  title: {
    fontWeight: 'bold',
    fontSize: '14px',
    color: 'white',
    letterSpacing: '0.5px',
  },
  closeBtn: {
    background: 'none',
    border: 'none',
    color: 'white',
    cursor: 'pointer',
    fontSize: '14px',
  },
  body: {
    padding: '14px 18px',
    overflowY: 'auto',
    fontSize: '12px',
    lineHeight: 1.5,
  },
  h2: { color: '#fff', fontSize: '17px', margin: '4px 0 8px' },
  h3: { color: '#ff8888', fontSize: '14px', margin: '14px 0 6px', borderBottom: '1px solid #333', paddingBottom: '4px' },
  h4: { color: '#cc6600', fontSize: '12.5px', margin: '10px 0 4px' },
  p: { margin: '2px 0', color: '#ccc' },
  bullet: { margin: '2px 0 2px 8px', color: '#ccc' },
  hr: { border: 'none', borderTop: '1px solid #333', margin: '10px 0' },
};
