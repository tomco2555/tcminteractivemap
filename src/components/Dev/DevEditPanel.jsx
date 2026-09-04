import L from 'leaflet';
import { useEffect, useRef, useState } from 'react';
import { useMap } from 'react-leaflet';
import { TYPE_COLORS } from '../Search/SearchBar';
import { PLAYLISTS, MISC_ITEMS, RIVALS_ITEMS } from '../../data/playlistConfig';
import DevHelpModal from './DevHelpModal';

const SOURCES = [
  { value: 'playlist',   label: 'Playlist' },
  { value: 'misc',       label: 'Misc' },
  { value: 'rivals',     label: 'Rivals' },
  { value: 'challenges', label: 'Challenges' },
  { value: 'regions',    label: 'Regions' },
];

const PLAYLIST_CATEGORIES = [
  { value: 'container',    label: 'Container (single)' },
  { value: 'events',       label: 'Events' },
  { value: 'feats',        label: 'Feats' },
  { value: 'photoOps',     label: 'Photo Ops' },
  { value: 'collectibles', label: 'Collectibles' },
];

const PLAYLIST_TYPE_FOR_CATEGORY = {
  container: 'container',
  events: 'event',
  feats: 'feat',
  photoOps: 'photoOp',
  collectibles: 'collectible',
};

function pinColor(source, category) {
  if (source === 'playlist') return TYPE_COLORS[PLAYLIST_TYPE_FOR_CATEGORY[category]] || '#888';
  if (source === 'misc') return TYPE_COLORS.misc;
  if (source === 'rivals') return TYPE_COLORS.rival;
  if (source === 'challenges') return TYPE_COLORS.challenge;
  if (source === 'regions') return TYPE_COLORS.region;
  return '#888';
}

function toItem(raw, idx) {
  const { lat, lng, ...rest } = raw;
  const fields = Object.entries(rest).map(([key, value]) => {
    if (key === 'checkpoints' && Array.isArray(value)) {
      return { key, kind: 'checkpoints', value: value.map(cp => ({ lat: cp.lat, lng: cp.lng })) };
    }
    if (Array.isArray(value)) return { key, kind: 'array', value: value.join('\n') };
    if (typeof value === 'boolean') return { key, kind: 'boolean', value };
    if (typeof value === 'number') return { key, kind: 'number', value: String(value) };
    return { key, kind: 'string', value: value == null ? '' : String(value) };
  });
  return { id: `raw-${idx}-${Math.random().toString(36).slice(2, 7)}`, lat, lng, fields, expanded: false };
}

function toRaw(item) {
  const obj = { lat: item.lat, lng: item.lng };
  item.fields.forEach(f => {
    if (!f.key) return;
    if (f.kind === 'checkpoints') {
      if (f.value.length > 0) obj[f.key] = f.value.map(cp => ({ lat: cp.lat, lng: cp.lng }));
    } else if (f.kind === 'array') {
      obj[f.key] = f.value.split('\n').map(s => s.trim()).filter(Boolean);
    } else if (f.kind === 'boolean') {
      obj[f.key] = !!f.value;
    } else if (f.kind === 'number') {
      const n = Number(f.value);
      obj[f.key] = f.value === '' || Number.isNaN(n) ? f.value : n;
    } else {
      obj[f.key] = f.value;
    }
  });
  return obj;
}

function itemLabel(item, i) {
  const named = item.fields.find(f => (f.key === 'name' || f.key === 'location') && f.value);
  return named ? String(named.value) : `#${i + 1}`;
}

export default function DevEditPanel({ playlistData, miscData, rivalsData, challengesData, regionsData, offsetRight = 0 }) {
  const map = useMap();
  const panelRef    = useRef(null);
  const pinGroupRef = useRef(null);
  const checkpointGroupRef = useRef(null);

  const [source, setSource]           = useState('playlist');
  const [playlistId, setPlaylistId]   = useState(PLAYLISTS[0].id);
  const [category, setCategory]       = useState('events');
  const [miscGroup, setMiscGroup]     = useState(MISC_ITEMS[0].id);
  const [rivalGroup, setRivalGroup]   = useState(RIVALS_ITEMS[0].id);
  const [challengeKey, setChallengeKey] = useState('');
  const [items, setItems]             = useState([]);
  const [minimized, setMinimized]     = useState(false);
  const [showHelp, setShowHelp]       = useState(false);
  const [copied, setCopied]           = useState(false);

  useEffect(() => {
    if (panelRef.current) L.DomEvent.disableClickPropagation(panelRef.current);
  }, []);

  // Default to the first available challenge once challenge data loads.
  useEffect(() => {
    if (!challengeKey && challengesData) {
      const keys = Object.keys(challengesData);
      if (keys.length) setChallengeKey(keys[0]);
    }
  }, [challengesData, challengeKey]);

  function getRawItems() {
    if (source === 'playlist') {
      const data = playlistData[playlistId];
      if (!data) return [];
      if (category === 'container') return data.container ? [data.container] : [];
      return data[category] || [];
    }
    if (source === 'misc') return (miscData && miscData[miscGroup]) || [];
    if (source === 'rivals') return (rivalsData && rivalsData[rivalGroup]) || [];
    if (source === 'challenges') return (challengesData && challengesData[challengeKey]) || [];
    if (source === 'regions') return regionsData || [];
    return [];
  }

  // Reload the working set whenever the selected source/category changes (or its data arrives).
  useEffect(() => {
    setItems(getRawItems().map(toItem));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [source, playlistId, category, miscGroup, rivalGroup, challengeKey, playlistData, miscData, rivalsData, challengesData, regionsData]);

  // Draggable pins mirroring the current working set.
  useEffect(() => {
    pinGroupRef.current = L.featureGroup().addTo(map);
    return () => { pinGroupRef.current.remove(); pinGroupRef.current = null; };
  }, [map]);

  useEffect(() => {
    const group = pinGroupRef.current;
    if (!group) return;
    group.clearLayers();

    const color = pinColor(source, category);
    items.forEach((item, i) => {
      const icon = L.divIcon({
        className: 'dev-pin',
        html: `<div class="dev-pin-dot" style="background:${color}">${i + 1}</div>`,
        iconSize: [22, 22],
        iconAnchor: [11, 11],
      });
      const marker = L.marker([item.lat, item.lng], { icon, draggable: true })
        .bindTooltip(itemLabel(item, i), { direction: 'top', offset: [0, -12], className: 'map-tooltip' })
        .addTo(group);

      marker.on('dragend', () => {
        const ll = marker.getLatLng();
        const lat = parseFloat(ll.lat.toFixed(6));
        const lng = parseFloat(ll.lng.toFixed(6));
        setItems(prev => prev.map(p => p.id === item.id ? { ...p, lat, lng } : p));
      });
      marker.on('click', () => {
        setItems(prev => prev.map(p => p.id === item.id ? { ...p, expanded: !p.expanded } : p));
      });
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [items, source, category]);

  // Draggable pins for expanded events' checkpoints (smaller, separate group).
  useEffect(() => {
    checkpointGroupRef.current = L.featureGroup().addTo(map);
    return () => { checkpointGroupRef.current.remove(); checkpointGroupRef.current = null; };
  }, [map]);

  useEffect(() => {
    const group = checkpointGroupRef.current;
    if (!group) return;
    group.clearLayers();

    if (!(source === 'playlist' && category === 'events')) return;

    items.forEach(item => {
      if (!item.expanded) return;
      const fieldIdx = item.fields.findIndex(f => f.kind === 'checkpoints');
      if (fieldIdx === -1) return;
      const checkpoints = item.fields[fieldIdx].value;

      checkpoints.forEach((cp, cpIdx) => {
        const label = cpIdx === 0 ? 'S' : cpIdx === checkpoints.length - 1 ? 'F' : String(cpIdx);
        const icon = L.divIcon({
          className: 'dev-pin',
          html: `<div class="dev-pin-dot dev-pin-checkpoint" style="background:${pinColor(source, category)}">${label}</div>`,
          iconSize: [16, 16],
          iconAnchor: [8, 8],
        });
        const marker = L.marker([cp.lat, cp.lng], { icon, draggable: true }).addTo(group);
        marker.on('dragend', () => {
          const ll = marker.getLatLng();
          updateCheckpoint(item.id, cpIdx, parseFloat(ll.lat.toFixed(6)), parseFloat(ll.lng.toFixed(6)));
        });
      });
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [items, source, category]);

  function addCheckpoint(itemId) {
    const center = map.getCenter();
    const lat = parseFloat(center.lat.toFixed(6));
    const lng = parseFloat(center.lng.toFixed(6));
    setItems(prev => prev.map(p => {
      if (p.id !== itemId) return p;
      const idx = p.fields.findIndex(f => f.kind === 'checkpoints');
      if (idx === -1) {
        return { ...p, fields: [...p.fields, { key: 'checkpoints', kind: 'checkpoints', value: [{ lat, lng }] }] };
      }
      return { ...p, fields: p.fields.map((f, i) => i !== idx ? f : { ...f, value: [...f.value, { lat, lng }] }) };
    }));
  }

  function removeCheckpoint(itemId, cpIdx) {
    setItems(prev => prev.map(p => {
      if (p.id !== itemId) return p;
      const idx = p.fields.findIndex(f => f.kind === 'checkpoints');
      if (idx === -1) return p;
      return { ...p, fields: p.fields.map((f, i) => i !== idx ? f : { ...f, value: f.value.filter((_, j) => j !== cpIdx) }) };
    }));
  }

  function updateCheckpoint(itemId, cpIdx, lat, lng) {
    setItems(prev => prev.map(p => {
      if (p.id !== itemId) return p;
      const idx = p.fields.findIndex(f => f.kind === 'checkpoints');
      if (idx === -1) return p;
      return {
        ...p,
        fields: p.fields.map((f, i) => i !== idx ? f : {
          ...f,
          value: f.value.map((cp, j) => j === cpIdx ? { lat, lng } : cp),
        }),
      };
    }));
  }

  function updateLatLng(id, key, value) {
    const n = parseFloat(value);
    if (Number.isNaN(n)) return;
    setItems(prev => prev.map(p => p.id === id ? { ...p, [key]: n } : p));
  }

  function setItemToCenter(itemId) {
    const center = map.getCenter();
    const lat = parseFloat(center.lat.toFixed(6));
    const lng = parseFloat(center.lng.toFixed(6));
    setItems(prev => prev.map(p => p.id === itemId ? { ...p, lat, lng } : p));
  }

  function updateFieldValue(itemId, idx, value) {
    setItems(prev => prev.map(p => p.id !== itemId ? p : {
      ...p,
      fields: p.fields.map((f, i) => i === idx ? { ...f, value } : f),
    }));
  }

  function updateFieldKey(itemId, idx, key) {
    setItems(prev => prev.map(p => p.id !== itemId ? p : {
      ...p,
      fields: p.fields.map((f, i) => i === idx ? { ...f, key } : f),
    }));
  }

  function removeField(itemId, idx) {
    setItems(prev => prev.map(p => p.id !== itemId ? p : {
      ...p,
      fields: p.fields.filter((_, i) => i !== idx),
    }));
  }

  function addField(itemId) {
    setItems(prev => prev.map(p => p.id !== itemId ? p : {
      ...p,
      fields: [...p.fields, { key: '', kind: 'string', value: '', custom: true }],
    }));
  }

  function toggleExpanded(itemId) {
    setItems(prev => prev.map(p => p.id === itemId ? { ...p, expanded: !p.expanded } : p));
  }

  function removeItem(itemId) {
    setItems(prev => prev.filter(p => p.id !== itemId));
  }

  function addItem() {
    if (source === 'playlist' && category === 'container' && items.length >= 1) return;
    const center = map.getCenter();
    const template = (items[0]?.fields || []).map(f => ({
      ...f,
      value: f.kind === 'boolean' ? false : f.kind === 'checkpoints' ? [] : '',
    }));
    setItems(prev => [...prev, {
      id: `new-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
      lat: parseFloat(center.lat.toFixed(6)),
      lng: parseFloat(center.lng.toFixed(6)),
      fields: template,
      expanded: true,
    }]);
  }

  function resetItems() {
    if (!window.confirm('Discard local edits and reload from the loaded data?')) return;
    setItems(getRawItems().map(toItem));
  }

  function buildFullJson() {
    if (source === 'playlist') {
      const data = playlistData[playlistId] || { id: playlistId };
      if (category === 'container') {
        return { ...data, container: items[0] ? toRaw(items[0]) : undefined };
      }
      return { ...data, [category]: items.map(toRaw) };
    }
    if (source === 'misc') return { ...(miscData || {}), [miscGroup]: items.map(toRaw) };
    if (source === 'rivals') return { ...(rivalsData || {}), [rivalGroup]: items.map(toRaw) };
    if (source === 'challenges') return { ...(challengesData || {}), [challengeKey]: items.map(toRaw) };
    if (source === 'regions') return items.map(toRaw);
    return null;
  }

  function targetFileName() {
    if (source === 'playlist') return `${playlistId}.json`;
    if (source === 'misc') return 'misc.json';
    if (source === 'rivals') return 'rivals.json';
    if (source === 'challenges') return 'challenges.json';
    return 'regions.json';
  }

  function targetFilePath() {
    if (source === 'playlist') return `public/data/playlists/${playlistId}.json`;
    if (source === 'misc') return 'public/data/misc.json';
    if (source === 'rivals') return 'public/data/rivals.json';
    if (source === 'challenges') return 'public/challenges.json';
    return 'public/data/regions.json';
  }

  function buildJsonText() {
    return JSON.stringify(buildFullJson(), null, 2);
  }

  function copyJson() {
    navigator.clipboard.writeText(buildJsonText()).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }

  function saveJson() {
    const blob = new Blob([buildJsonText()], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = targetFileName();
    a.click();
    URL.revokeObjectURL(url);
  }

  return (
    <>
      {!minimized && (
        <svg
          width="28"
          height="28"
          viewBox="0 0 28 28"
          style={styles.centerReticle}
          aria-hidden="true"
        >
          <circle cx="14" cy="14" r="6" fill="none" stroke="#ff3b30" strokeWidth="2" />
          <line x1="14" y1="0" x2="14" y2="8" stroke="#ff3b30" strokeWidth="2" />
          <line x1="14" y1="20" x2="14" y2="28" stroke="#ff3b30" strokeWidth="2" />
          <line x1="0" y1="14" x2="8" y2="14" stroke="#ff3b30" strokeWidth="2" />
          <line x1="20" y1="14" x2="28" y2="14" stroke="#ff3b30" strokeWidth="2" />
        </svg>
      )}

      <div ref={panelRef} style={{ ...styles.panel, right: `${12 + offsetRight}px` }} role="dialog">
        <div style={styles.header}>
          <span style={styles.headerTitle}>✎ Dev — Edit Existing Data</span>
          <div style={styles.headerBtns}>
            <button type="button" style={styles.helpBtn} onClick={() => setShowHelp(true)} title="Open dev mode guide">?</button>
            <button type="button" style={styles.minimizeBtn} onClick={() => setMinimized(m => !m)}>
              {minimized ? '▼' : '▲'}
            </button>
          </div>
        </div>

        {!minimized && (
          <>
            {/* Source selection */}
            <div style={styles.selectBlock}>
              <div style={styles.selectRow}>
                <span style={styles.label}>Source:</span>
                <select style={styles.select} value={source} onChange={e => setSource(e.target.value)}>
                  {SOURCES.map(s => <option key={s.value} value={s.value}>{s.label}</option>)}
                </select>
              </div>

              {source === 'playlist' && (
                <>
                  <div style={styles.selectRow}>
                    <span style={styles.label}>Playlist:</span>
                    <select style={styles.select} value={playlistId} onChange={e => setPlaylistId(e.target.value)}>
                      {PLAYLISTS.map(p => <option key={p.id} value={p.id}>{p.name}</option>)}
                    </select>
                  </div>
                  <div style={styles.selectRow}>
                    <span style={styles.label}>Category:</span>
                    <select style={styles.select} value={category} onChange={e => setCategory(e.target.value)}>
                      {PLAYLIST_CATEGORIES.map(c => <option key={c.value} value={c.value}>{c.label}</option>)}
                    </select>
                  </div>
                </>
              )}

              {source === 'misc' && (
                <div style={styles.selectRow}>
                  <span style={styles.label}>Group:</span>
                  <select style={styles.select} value={miscGroup} onChange={e => setMiscGroup(e.target.value)}>
                    {MISC_ITEMS.map(m => <option key={m.id} value={m.id}>{m.label}</option>)}
                  </select>
                </div>
              )}

              {source === 'rivals' && (
                <div style={styles.selectRow}>
                  <span style={styles.label}>Gang:</span>
                  <select style={styles.select} value={rivalGroup} onChange={e => setRivalGroup(e.target.value)}>
                    {RIVALS_ITEMS.map(r => <option key={r.id} value={r.id}>{r.label}</option>)}
                  </select>
                </div>
              )}

              {source === 'challenges' && (
                <div style={styles.selectRow}>
                  <span style={styles.label}>Challenge:</span>
                  <select style={styles.select} value={challengeKey} onChange={e => setChallengeKey(e.target.value)}>
                    {Object.keys(challengesData || {}).map(k => <option key={k} value={k}>{k}</option>)}
                  </select>
                </div>
              )}

              <div style={styles.targetInfo}>→ {targetFilePath()}</div>
            </div>

            {/* Items list */}
            <div style={styles.pointsList}>
              {items.length === 0 && (
                <div style={styles.empty}>No points loaded — pick a source above, or add a new one.</div>
              )}
              {items.map((item, i) => (
                <div key={item.id} style={styles.pointBlock}>
                  <div style={styles.pointRow}>
                    <span style={{ ...styles.pointIndex, color: pinColor(source, category) }}>{i + 1}</span>
                    <input
                      style={styles.coordInput}
                      value={item.lat}
                      onChange={e => updateLatLng(item.id, 'lat', e.target.value)}
                    />
                    <input
                      style={styles.coordInput}
                      value={item.lng}
                      onChange={e => updateLatLng(item.id, 'lng', e.target.value)}
                    />
                    <button
                      type="button"
                      style={styles.centerBtn}
                      title="Set to map center"
                      onClick={() => setItemToCenter(item.id)}
                    >
                      ⌖
                    </button>
                    <button type="button" style={styles.expandBtn} onClick={() => toggleExpanded(item.id)}>
                      {item.expanded ? `▾ ${itemLabel(item, i)}` : `▸ ${itemLabel(item, i)}`}
                    </button>
                    <button type="button" style={styles.removeBtn} onClick={() => removeItem(item.id)}>✕</button>
                  </div>

                  {item.expanded && (
                    <div style={styles.fieldsBlock}>
                      {item.fields.map((f, idx) => (
                        f.kind === 'checkpoints' ? null : (
                          <div key={`${f.key || 'field'}-${idx}`} style={styles.fieldRow}>
                            {f.custom ? (
                              <input
                                style={{ ...styles.fieldInput, ...styles.fieldKeyInput }}
                                placeholder="key…"
                                value={f.key}
                                onChange={e => updateFieldKey(item.id, idx, e.target.value)}
                              />
                            ) : (
                              <span style={styles.fieldLabel}>{f.key}</span>
                            )}

                            {f.kind === 'array' ? (
                              <textarea
                                style={{ ...styles.fieldInput, ...styles.fieldTextarea }}
                                value={f.value}
                                onChange={e => updateFieldValue(item.id, idx, e.target.value)}
                              />
                            ) : f.kind === 'boolean' ? (
                              <input
                                type="checkbox"
                                checked={!!f.value}
                                onChange={e => updateFieldValue(item.id, idx, e.target.checked)}
                              />
                            ) : (
                              <input
                                style={styles.fieldInput}
                                value={f.value}
                                onChange={e => updateFieldValue(item.id, idx, e.target.value)}
                              />
                            )}
                            <button type="button" style={styles.removeBtn} onClick={() => removeField(item.id, idx)}>✕</button>
                          </div>
                        )
                      ))}

                      {source === 'playlist' && category === 'events' && (() => {
                        const checkpoints = item.fields.find(f => f.kind === 'checkpoints')?.value || [];
                        return (
                          <div style={styles.checkpointsBlock}>
                            <div style={styles.checkpointsHeader}>
                              <span style={styles.fieldLabel}>checkpoints ({checkpoints.length})</span>
                              <button type="button" style={styles.smallBtn} onClick={() => addCheckpoint(item.id)}>
                                + add at map center
                              </button>
                            </div>
                            {checkpoints.map((cp, cpIdx) => (
                              <div key={cpIdx} style={styles.checkpointRow}>
                                <span style={styles.checkpointIndex}>
                                  {cpIdx === 0 ? 'S' : cpIdx === checkpoints.length - 1 ? 'F' : cpIdx}
                                </span>
                                <span style={styles.pointCoords}>{cp.lat}, {cp.lng}</span>
                                <button
                                  type="button"
                                  style={styles.removeBtn}
                                  onClick={() => removeCheckpoint(item.id, cpIdx)}
                                >
                                  ✕
                                </button>
                              </div>
                            ))}
                          </div>
                        );
                      })()}

                      <button type="button" style={styles.addFieldBtn} onClick={() => addField(item.id)}>+ field</button>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Actions */}
            <div style={styles.actions}>
              <div style={styles.actionsRow}>
                <button type="button" style={styles.btn} onClick={addItem}>+ Add new</button>
                <button type="button" style={styles.btn} onClick={resetItems}>Reset</button>
              </div>
              <div style={styles.actionsRow}>
                <button
                  type="button"
                  style={{ ...styles.btn, ...(copied ? styles.btnSuccess : {}) }}
                  onClick={copyJson}
                  disabled={items.length === 0}
                >
                  {copied ? '✓ Copied!' : 'Copy JSON'}
                </button>
                <button type="button" style={styles.btn} onClick={saveJson} disabled={items.length === 0}>
                  Save JSON
                </button>
              </div>
            </div>
          </>
        )}
      </div>

      {showHelp && <DevHelpModal onClose={() => setShowHelp(false)} />}
    </>
  );
}

const styles = {
  centerReticle: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    zIndex: 1000,
    pointerEvents: 'none',
    opacity: 0.85,
    filter: 'drop-shadow(0 0 2px rgba(0,0,0,0.9))',
  },
  panel: {
    position: 'fixed',
    top: '12px',
    zIndex: 9999,
    background: '#111',
    border: '1px solid #1e6fd9',
    borderRadius: '8px',
    width: '360px',
    maxHeight: '80vh',
    display: 'flex',
    flexDirection: 'column',
    fontFamily: 'monospace',
    fontSize: '12px',
    color: '#ddd',
    boxShadow: '0 4px 20px rgba(0,0,0,0.8)',
    overflow: 'hidden',
  },
  header: {
    background: '#1e6fd9',
    padding: '6px 10px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexShrink: 0,
  },
  headerTitle: {
    fontWeight: 'bold',
    fontSize: '13px',
    color: 'white',
    letterSpacing: '0.5px',
  },
  headerBtns: {
    display: 'flex',
    alignItems: 'center',
    gap: '2px',
  },
  helpBtn: {
    background: 'rgba(255,255,255,0.15)',
    border: '1px solid rgba(255,255,255,0.4)',
    color: 'white',
    cursor: 'pointer',
    fontSize: '11px',
    fontWeight: 'bold',
    borderRadius: '50%',
    width: '18px',
    height: '18px',
    lineHeight: 1,
    padding: 0,
  },
  minimizeBtn: {
    background: 'none',
    border: 'none',
    color: 'white',
    cursor: 'pointer',
    fontSize: '14px',
    padding: '0 4px',
  },
  selectBlock: {
    padding: '8px 10px',
    borderBottom: '1px solid #222',
    flexShrink: 0,
    display: 'flex',
    flexDirection: 'column',
    gap: '6px',
  },
  selectRow: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
  },
  label: {
    color: '#888',
    whiteSpace: 'nowrap',
    flex: '0 0 70px',
  },
  select: {
    background: '#222',
    color: '#ddd',
    border: '1px solid #444',
    borderRadius: '4px',
    padding: '3px 6px',
    fontSize: '12px',
    flex: 1,
    minWidth: 0,
  },
  targetInfo: {
    color: '#5b9bd9',
    fontSize: '10px',
    wordBreak: 'break-all',
  },
  pointsList: {
    overflowY: 'auto',
    flex: 1,
    padding: '4px 6px',
    maxHeight: '320px',
  },
  empty: {
    color: '#555',
    textAlign: 'center',
    padding: '16px',
    fontStyle: 'italic',
  },
  pointBlock: {
    borderBottom: '1px solid #1a1a1a',
    padding: '3px 0',
  },
  pointRow: {
    display: 'flex',
    alignItems: 'center',
    gap: '4px',
  },
  pointIndex: {
    minWidth: '18px',
    textAlign: 'right',
    fontWeight: 'bold',
  },
  coordInput: {
    width: '54px',
    background: '#1a1a1a',
    border: '1px solid #333',
    color: '#aad4ff',
    borderRadius: '3px',
    padding: '2px 4px',
    fontSize: '10px',
    fontFamily: 'monospace',
  },
  centerBtn: {
    flexShrink: 0,
    background: '#1a1a1a',
    border: '1px solid #333',
    color: '#5b9bd9',
    borderRadius: '3px',
    width: '20px',
    height: '20px',
    lineHeight: 1,
    padding: 0,
    fontSize: '13px',
    cursor: 'pointer',
  },
  expandBtn: {
    flex: 1,
    background: '#1a1a1a',
    border: '1px solid #333',
    color: '#888',
    borderRadius: '3px',
    padding: '2px 5px',
    fontSize: '10px',
    cursor: 'pointer',
    textAlign: 'left',
    minWidth: 0,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
  },
  removeBtn: {
    background: 'none',
    border: 'none',
    color: '#666',
    cursor: 'pointer',
    fontSize: '11px',
    padding: '0 2px',
    flexShrink: 0,
  },
  fieldsBlock: {
    marginTop: '4px',
    marginLeft: '22px',
    padding: '6px 8px',
    background: '#161616',
    border: '1px solid #262626',
    borderRadius: '4px',
    display: 'flex',
    flexDirection: 'column',
    gap: '4px',
  },
  fieldRow: {
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
  },
  checkpointsBlock: {
    display: 'flex',
    flexDirection: 'column',
    gap: '4px',
    padding: '4px 0',
    borderTop: '1px solid #262626',
    borderBottom: '1px solid #262626',
  },
  checkpointsHeader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: '6px',
  },
  checkpointRow: {
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
  },
  checkpointIndex: {
    minWidth: '14px',
    textAlign: 'right',
    fontSize: '10px',
    fontWeight: 'bold',
    color: '#888',
  },
  pointCoords: {
    color: '#aad4ff',
    flex: '0 0 auto',
    fontSize: '11px',
  },
  smallBtn: {
    background: '#1a1a1a',
    border: '1px solid #333',
    color: '#5b9bd9',
    borderRadius: '3px',
    padding: '2px 6px',
    fontSize: '10px',
    cursor: 'pointer',
    whiteSpace: 'nowrap',
  },
  fieldLabel: {
    color: '#777',
    fontSize: '10px',
    flex: '0 0 100px',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
  },
  fieldKeyInput: {
    flex: '0 0 100px',
  },
  fieldInput: {
    flex: 1,
    background: '#1a1a1a',
    border: '1px solid #333',
    color: '#ddd',
    borderRadius: '3px',
    padding: '2px 5px',
    fontSize: '11px',
    minWidth: 0,
    fontFamily: 'monospace',
  },
  fieldTextarea: {
    resize: 'vertical',
    minHeight: '40px',
  },
  addFieldBtn: {
    alignSelf: 'flex-start',
    background: '#1a1a1a',
    border: '1px solid #333',
    color: '#5b9bd9',
    borderRadius: '3px',
    padding: '2px 8px',
    fontSize: '10px',
    cursor: 'pointer',
  },
  actions: {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
    padding: '8px 10px',
    borderTop: '1px solid #222',
    flexShrink: 0,
  },
  actionsRow: {
    display: 'flex',
    gap: '8px',
  },
  btn: {
    flex: 1,
    background: '#333',
    border: '1px solid #555',
    color: '#ddd',
    borderRadius: '5px',
    padding: '5px 0',
    cursor: 'pointer',
    fontSize: '12px',
    transition: 'background 0.15s',
  },
  btnSuccess: {
    background: '#1a4a1a',
    borderColor: '#2a8a2a',
    color: '#6fdd6f',
  },
};
