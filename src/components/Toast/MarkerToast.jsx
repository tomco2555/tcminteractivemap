import { useEffect, useState, useRef } from 'react';
import { createShareUrl } from '../../utils/sharedPoint';

const TYPE_COLORS = {
  event:       '#3498db',
  feat:        '#9b59b6',
  photoOp:     '#e67e22',
  collectible: '#27ae60',
  container:   '#e74c3c',
  misc:        '#95a5a6',
  rival:       '#c0392b',
  challenge:   '#f39c12',
};

const AUTO_CLOSE_MS = 7000;

export default function MarkerToast({ data, onClose }) {
  const [visible, setVisible]   = useState(false);
  const [progress, setProgress] = useState(100);
  const [copied, setCopied]     = useState(false);
  const timerRef  = useRef(null);
  const startRef  = useRef(null);

  const hasTrack = data?.checkpoints && data.checkpoints.length > 1;

  const copyShareLink = async () => {
    if (!data?.pointId) return;
    try {
      await navigator.clipboard.writeText(createShareUrl(data.pointId));
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      window.prompt('Copy this link:', createShareUrl(data.pointId));
    }
  };

  useEffect(() => {
    if (!data) { setVisible(false); return; }
    setVisible(true);
    setProgress(100);

    clearInterval(timerRef.current);
    if (hasTrack) return;

    startRef.current = Date.now();
    timerRef.current = setInterval(() => {
      const elapsed = Date.now() - startRef.current;
      const pct = Math.max(0, 100 - (elapsed / AUTO_CLOSE_MS) * 100);
      setProgress(pct);
      if (pct <= 0) {
        clearInterval(timerRef.current);
        setVisible(false);
        setTimeout(onClose, 300);
      }
    }, 50);

    return () => clearInterval(timerRef.current);
  }, [data, hasTrack]);

  if (!data) return null;

  const color = TYPE_COLORS[data.type] || '#555';

  return (
    <div
      style={{
        ...styles.toast,
        transform: visible
          ? "translateX(-50%) translateY(0)"
          : "translateX(-50%) translateY(120%)",
        opacity: visible ? 1 : 0,
      }}
    >
      {/* Progress bar */}
      {!hasTrack && (
        <div
          style={{
            ...styles.progressBar,
            width: `${progress}%`,
            background: color,
          }}
        />
      )}

      {/* Header */}
      <div style={styles.header}>
        <span style={{ ...styles.typeBadge, background: color }}>
          {data.type?.toUpperCase()}
        </span>
        <span style={styles.title}>{data.name}</span>
        <button
          type="button"
          style={styles.closeBtn}
          onClick={() => {
            setVisible(false);
            setTimeout(onClose, 300);
          }}
        >
          ✕
        </button>
      </div>

      {/* Subtitle */}
      {data.subtitle && <div style={styles.subtitle}>{data.subtitle}</div>}

      {data.pointId && (
        <div style={styles.shareRow}>
          <button type="button" style={styles.shareBtn} onClick={copyShareLink}>
            {copied ? 'Link copied' : 'Copy share link'}
          </button>
        </div>
      )}

      {/* Fields */}
      {data.fields && data.fields.length > 0 && (
        <div style={styles.fields}>
          {data.fields.map((f, i) => (
            <div key={i} style={styles.field}>
              <span style={styles.fieldLabel}>{f.label}</span>
              <span style={styles.fieldValue}>{f.value}</span>
            </div>
          ))}
        </div>
      )}

      {/* Rewards */}
      {(data.xp || data.bucks) && (
        <div style={styles.rewards}>
          {data.xp && (
            <span style={styles.reward}>
              <img
                src="/img/Misc/blue_xp.png"
                style={styles.rewardIcon}
                alt=""
              />
              {data.xp}
            </span>
          )}
          {data.bucks && (
            <span style={styles.reward}>
              <img src="/img/Misc/bucks.png" style={styles.rewardIcon} alt="" />
              {data.bucks}
            </span>
          )}
        </div>
      )}

      {/* Requirements list */}
      {data.requirements && data.requirements.length > 0 && (
        <div style={styles.reqList}>
          {data.requirements.map((r, i) => (
            <div key={i} style={styles.reqItem}>
              · {r}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

const styles = {
  toast: {
    position: 'fixed',
    bottom: '24px',
    left: '50%',
    transform: 'translateX(-50%) translateY(0)',
    zIndex: 10000,
    width: 'min(420px, calc(100vw - 48px))',
    background: '#111',
    border: '1px solid #333',
    borderRadius: '10px',
    overflow: 'hidden',
    boxShadow: '0 8px 32px rgba(0,0,0,0.8)',
    transition: 'transform 0.3s cubic-bezier(0.4,0,0.2,1), opacity 0.3s ease',
    fontFamily: 'Arial, sans-serif',
    color: '#ddd',
  },
  progressBar: {
    height: '3px',
    transition: 'width 0.05s linear',
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    padding: '12px 14px 8px',
  },
  typeBadge: {
    fontSize: '10px',
    fontWeight: 'bold',
    padding: '2px 7px',
    borderRadius: '4px',
    color: 'white',
    letterSpacing: '0.8px',
    flexShrink: 0,
  },
  title: {
    flex: 1,
    fontWeight: 'bold',
    fontSize: '15px',
    color: 'white',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
  },
  closeBtn: {
    background: 'none',
    border: 'none',
    color: '#666',
    cursor: 'pointer',
    fontSize: '14px',
    padding: '0 2px',
    flexShrink: 0,
    lineHeight: 1,
  },
  subtitle: {
    padding: '0 14px 8px',
    fontSize: '12px',
    color: '#888',
    fontStyle: 'italic',
  },
  shareRow: {
    padding: '0 14px 10px',
  },
  shareBtn: {
    width: '100%',
    padding: '7px 10px',
    border: '1px solid #3c78a7',
    borderRadius: '5px',
    background: '#18334a',
    color: '#dceeff',
    cursor: 'pointer',
    fontSize: '12px',
    fontWeight: 'bold',
  },
  fields: {
    padding: '4px 14px 8px',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '4px 12px',
  },
  field: {
    display: 'flex',
    flexDirection: 'column',
  },
  fieldLabel: {
    fontSize: '10px',
    color: '#666',
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
  },
  fieldValue: {
    fontSize: '13px',
    color: '#ccc',
  },
  rewards: {
    display: 'flex',
    gap: '16px',
    padding: '8px 14px 12px',
    borderTop: '1px solid #1e1e1e',
  },
  reward: {
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
    fontSize: '14px',
    fontWeight: 'bold',
    color: '#eee',
  },
  rewardIcon: {
    height: '20px',
    width: 'auto',
  },
  reqList: {
    padding: '6px 14px 12px',
    borderTop: '1px solid #1e1e1e',
  },
  reqItem: {
    fontSize: '12px',
    color: '#aaa',
    lineHeight: '1.6',
  },
};
