import L from 'leaflet';
import { useEffect, useRef, useState } from 'react';
import { useMap, useMapEvents } from 'react-leaflet';
import { TYPE_COLORS } from '../Search/SearchBar';
import DevHelpModal from './DevHelpModal';

const STORAGE_KEY = 'tcm-dev-picker-points';

const POINT_TYPES = [
  { value: 'event',       label: 'Event' },
  { value: 'feat',        label: 'Feat' },
  { value: 'photoOp',     label: 'Photo Op' },
  { value: 'collectible', label: 'Collectible' },
  { value: 'container',   label: 'Container' },
  { value: 'misc',        label: 'Misc' },
  { value: 'challenge',   label: 'Challenge' },
  { value: 'region',      label: 'Region' },
  { value: 'rival',       label: 'Rival' },
];

const CHALLENGE_ICONS = [
  { value: 'start',     label: 'Start' },
  { value: 'finish',    label: 'Finish' },
  { value: 'challenge', label: 'Challenge' },
];

const FEAT_TYPES = [
  { value: 'speedtrap',     label: 'Speedtrap' },
  { value: 'slalom',        label: 'Slalom' },
  { value: 'escape',        label: 'Escape' },
  { value: 'drift',         label: 'Drift' },
  { value: 'long_jump',     label: 'Long Jump' },
  { value: 'bullseye',      label: 'Bullseye' },
  { value: 'buoy_smashing', label: 'Buoy Smashing' },
];

const WEATHER_OPTIONS = ['Dawn', 'Sunrise', 'Morning', 'Midday', 'Afternoon', 'Sunset', 'Dusk', 'Night', 'Overcast', 'Sunny', 'TBD'];

const RIVAL_GROUPS = [
  { value: 'clawblades',        label: 'Clawblades' },
  { value: 'diamond_fangs',     label: 'Diamond Fangs' },
  { value: 'quickwhiskers',     label: 'Quickwhiskers' },
  { value: 'nightstalkers',     label: 'Nightstalkers' },
  { value: 'chiefs',            label: 'Chiefs' },
  { value: 'mysterious_driver', label: 'Mysterious Driver' },
];

const RIVAL_GROUP_GANG = {
  clawblades: 'Clawblades',
  diamond_fangs: 'Diamond Fangs',
  quickwhiskers: 'Quickwhiskers',
  nightstalkers: 'Nightstalkers',
  chiefs: '',
  mysterious_driver: 'The Chase Squad',
};

// Field schemas for point types whose target JSON needs more than lat/lng/name.
// Types not listed here (container, misc, region, challenge) keep the plain name/icon inputs.
const FIELD_SCHEMAS = {
  event: [
    { key: 'name',     label: 'Name' },
    { key: 'number',   label: 'Number (e.g. 1/9)' },
    { key: 'type',     label: 'Type (Race, Outrun…)' },
    { key: 'weather',  label: 'Weather', list: WEATHER_OPTIONS },
    { key: 'car',      label: 'Car' },
    { key: 'category', label: 'Category' },
    { key: 'xp',       label: 'XP' },
    { key: 'bucks',    label: 'Bucks' },
  ],
  feat: [
    { key: 'type',      label: 'Feat Type', select: FEAT_TYPES },
    { key: 'location',  label: 'Location' },
    { key: 'objective', label: 'Objective' },
    { key: 'xp',        label: 'XP' },
    { key: 'bucks',     label: 'Bucks' },
  ],
  photoOp: [
    { key: 'name',         label: 'Name' },
    { key: 'requirements', label: 'Requirements (one per line)', textarea: true },
  ],
  collectible: [
    { key: 'challenge', label: 'Challenge' },
  ],
  rival: [
    { key: 'group',             label: 'Gang Group', list: RIVAL_GROUPS.map(g => g.value) },
    { key: 'name',              label: 'Name' },
    { key: 'gang',              label: 'Gang (display)' },
    { key: 'rivalCar',          label: 'Rival Car' },
    { key: 'chaseRestriction',  label: 'Chase Restriction' },
    { key: 'raceRestriction',   label: 'Race Restriction' },
  ],
};

function featTypeLabel(type) {
  const match = FEAT_TYPES.find(f => f.value === type);
  if (match) return match.label;
  return type ? type.split('_').map(w => w[0].toUpperCase() + w.slice(1)).join(' ') : '';
}

function buildEntry(p) {
  const { lat, lng, type, name, icon, fields = {} } = p;

  if (type === 'region') return { name: fields.name || name || '', lat, lng };

  if (type === 'challenge') {
    const base = { lat, lng };
    const n = fields.name || name;
    if (n) base.name = n;
    base.icon = icon || 'start';
    return base;
  }

  if (type === 'event') {
    const entry = {
      lat, lng,
      name: fields.name || '',
      number: fields.number || '',
      type: fields.type || '',
      weather: fields.weather || '',
      car: fields.car || '',
      category: fields.category || '',
      xp: fields.xp || '',
      bucks: fields.bucks || '',
    };
    if (fields.checkpoints && fields.checkpoints.length > 0) {
      entry.checkpoints = fields.checkpoints.map(cp => ({ lat: cp.lat, lng: cp.lng }));
    }
    return entry;
  }

  if (type === 'feat') {
    return {
      lat, lng,
      type: fields.type || '',
      location: fields.location || '',
      featType: featTypeLabel(fields.type || ''),
      objective: fields.objective || '',
      xp: fields.xp || '',
      bucks: fields.bucks || '',
    };
  }

  if (type === 'photoOp') {
    return {
      lat, lng,
      name: fields.name || '',
      requirements: (fields.requirements || '').split('\n').map(s => s.trim()).filter(Boolean),
    };
  }

  if (type === 'collectible') {
    return { lat, lng, challenge: fields.challenge || '' };
  }

  if (type === 'rival') {
    return {
      group: fields.group || 'clawblades',
      lat, lng,
      name: fields.name || '',
      gang: fields.gang || '',
      rivalCar: fields.rivalCar || '',
      chaseRestriction: fields.chaseRestriction || '',
      raceRestriction: fields.raceRestriction || '',
    };
  }

  // container, misc
  const base = { lat, lng };
  if (name) base.name = name;
  return base;
}

function loadStoredPoints() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) return JSON.parse(saved);
  } catch {}
  return [];
}

function MapClickHandler({ onMapClick }) {
  useMapEvents({
    click(e) {
      onMapClick(e.latlng);
    },
  });
  return null;
}

export default function DevCoordinatePicker() {
  const map = useMap();
  const [points, setPoints]         = useState(loadStoredPoints);
  const [activeType, setActiveType] = useState('event');
  const [copied, setCopied]         = useState(false);
  const [minimized, setMinimized]   = useState(false);
  const [showHelp, setShowHelp]     = useState(false);
  const [checkpointArmedFor, setCheckpointArmedFor] = useState(null);
  const panelRef                    = useRef(null);
  const pinGroupRef                 = useRef(null);
  const checkpointGroupRef          = useRef(null);

  useEffect(() => {
    if (panelRef.current) {
      L.DomEvent.disableClickPropagation(panelRef.current);
    }
  }, []);

  useEffect(() => {
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(points)); } catch {}
  }, [points]);

  // Draggable map pins mirroring the picked points, so placement can be judged and fine-tuned visually.
  useEffect(() => {
    pinGroupRef.current = L.featureGroup().addTo(map);
    return () => { pinGroupRef.current.remove(); pinGroupRef.current = null; };
  }, [map]);

  useEffect(() => {
    const group = pinGroupRef.current;
    if (!group) return;
    group.clearLayers();

    points.forEach((p, i) => {
      const color = TYPE_COLORS[p.type] || '#888';
      const icon = L.divIcon({
        className: 'dev-pin',
        html: `<div class="dev-pin-dot" style="background:${color}">${i + 1}</div>`,
        iconSize: [22, 22],
        iconAnchor: [11, 11],
      });
      const marker = L.marker([p.lat, p.lng], { icon, draggable: true }).addTo(group);
      marker.on('dragend', () => {
        const ll = marker.getLatLng();
        const lat = parseFloat(ll.lat.toFixed(6));
        const lng = parseFloat(ll.lng.toFixed(6));
        setPoints(prev => prev.map(pt => pt.id === p.id ? { ...pt, lat, lng } : pt));
      });
    });
  }, [points]);

  // Draggable pins for each event's checkpoints, drawn as a separate, smaller-styled group.
  useEffect(() => {
    checkpointGroupRef.current = L.featureGroup().addTo(map);
    return () => { checkpointGroupRef.current.remove(); checkpointGroupRef.current = null; };
  }, [map]);

  useEffect(() => {
    const group = checkpointGroupRef.current;
    if (!group) return;
    group.clearLayers();

    points.forEach(p => {
      if (p.type !== 'event') return;
      const checkpoints = p.fields?.checkpoints || [];
      checkpoints.forEach((cp, idx) => {
        const label = idx === 0 ? 'S' : idx === checkpoints.length - 1 ? 'F' : String(idx);
        const icon = L.divIcon({
          className: 'dev-pin',
          html: `<div class="dev-pin-dot dev-pin-checkpoint" style="background:${TYPE_COLORS.event || '#888'}">${label}</div>`,
          iconSize: [16, 16],
          iconAnchor: [8, 8],
        });
        const marker = L.marker([cp.lat, cp.lng], { icon, draggable: true }).addTo(group);
        marker.on('dragend', () => {
          const ll = marker.getLatLng();
          updateCheckpoint(p.id, idx, parseFloat(ll.lat.toFixed(6)), parseFloat(ll.lng.toFixed(6)));
        });
      });
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [points]);

  function handleMapClick(latlng) {
    const lat = parseFloat(latlng.lat.toFixed(6));
    const lng = parseFloat(latlng.lng.toFixed(6));

    if (checkpointArmedFor) {
      setPoints(prev => prev.map(p => p.id !== checkpointArmedFor ? p : {
        ...p,
        fields: { ...p.fields, checkpoints: [...(p.fields?.checkpoints || []), { lat, lng }] },
      }));
      return;
    }

    setPoints(prev => [
      ...prev,
      {
        id: Date.now(),
        lat,
        lng,
        type: activeType,
        name: '',
        icon: activeType === 'challenge' ? 'start' : undefined,
        fields: FIELD_SCHEMAS[activeType] ? {} : undefined,
        expanded: true,
      },
    ]);
  }

  function armCheckpoints(id) {
    setCheckpointArmedFor(prev => prev === id ? null : id);
  }

  function removeCheckpoint(pointId, idx) {
    setPoints(prev => prev.map(p => p.id !== pointId ? p : {
      ...p,
      fields: { ...p.fields, checkpoints: (p.fields?.checkpoints || []).filter((_, i) => i !== idx) },
    }));
  }

  function updateCheckpoint(pointId, idx, lat, lng) {
    setPoints(prev => prev.map(p => p.id !== pointId ? p : {
      ...p,
      fields: {
        ...p.fields,
        checkpoints: (p.fields?.checkpoints || []).map((cp, i) => i === idx ? { lat, lng } : cp),
      },
    }));
  }

  function updateName(id, name) {
    setPoints(prev => prev.map(p => p.id === id ? { ...p, name } : p));
  }

  function updateIcon(id, icon) {
    setPoints(prev => prev.map(p => p.id === id ? { ...p, icon } : p));
  }

  function updateField(id, key, value) {
    setPoints(prev => prev.map(p => {
      if (p.id !== id) return p;
      const fields = { ...(p.fields || {}), [key]: value };
      if (p.type === 'rival' && key === 'group' && !p.fields?.gang) {
        fields.gang = RIVAL_GROUP_GANG[value] ?? '';
      }
      return { ...p, fields };
    }));
  }

  function toggleExpanded(id) {
    setPoints(prev => prev.map(p => p.id === id ? { ...p, expanded: !p.expanded } : p));
  }

  function removePoint(id) {
    setPoints(prev => prev.filter(p => p.id !== id));
  }

  function buildJson() {
    return JSON.stringify(points.map(buildEntry), null, 2);
  }

  function copyJson() {
    navigator.clipboard.writeText(buildJson()).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }

  function saveJson() {
    const blob = new Blob([buildJson()], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'dev-points.json';
    a.click();
    URL.revokeObjectURL(url);
  }

  return (
    <>
      <MapClickHandler onMapClick={handleMapClick} />

      <div ref={panelRef} style={styles.panel} role="dialog">
        {/* Header */}
        <div style={styles.header}>
          <span style={styles.headerTitle}>⚙ Dev — Coordinate Picker</span>
          <div style={styles.headerBtns}>
            <button type="button" style={styles.helpBtn} onClick={() => setShowHelp(true)} title="Open dev mode guide">?</button>
            <button type="button" style={styles.minimizeBtn} onClick={() => setMinimized(m => !m)}>
              {minimized ? '▼' : '▲'}
            </button>
          </div>
        </div>

        {!minimized && (
          <>
            {/* Type selector */}
            <div style={styles.typeRow}>
              <span style={styles.label}>Click adds:</span>
              <select
                value={activeType}
                onChange={e => setActiveType(e.target.value)}
                style={styles.select}
              >
                {POINT_TYPES.map(t => (
                  <option key={t.value} value={t.value}>{t.label}</option>
                ))}
              </select>
            </div>

            {/* Points list */}
            <div style={styles.pointsList}>
              {points.length === 0 && (
                <div style={styles.empty}>Click the map to add points…</div>
              )}
              {points.map((p, i) => {
                const schema = FIELD_SCHEMAS[p.type];
                return (
                  <div key={p.id} style={styles.pointBlock}>
                    <div style={styles.pointRow}>
                      <span style={{ ...styles.pointIndex, color: TYPE_COLORS[p.type] || '#555' }}>{i + 1}</span>
                      <span style={styles.pointCoords}>
                        {p.lat}, {p.lng}
                      </span>
                      {p.type === 'challenge' ? (
                        <select
                          style={styles.iconSelect}
                          value={p.icon || 'start'}
                          onChange={e => updateIcon(p.id, e.target.value)}
                        >
                          {CHALLENGE_ICONS.map(c => (
                            <option key={c.value} value={c.value}>{c.label}</option>
                          ))}
                        </select>
                      ) : (
                        <span style={styles.pointType}>[{p.type}]</span>
                      )}
                      {!schema && (
                        <input
                          style={styles.nameInput}
                          placeholder="name…"
                          value={p.name}
                          onChange={e => updateName(p.id, e.target.value)}
                        />
                      )}
                      {schema && (
                        <button
                          type="button"
                          style={styles.expandBtn}
                          onClick={() => toggleExpanded(p.id)}
                        >
                          {p.expanded ? '▾ fields' : '▸ fields'}
                        </button>
                      )}
                      <button type="button" style={styles.removeBtn} onClick={() => removePoint(p.id)}>✕</button>
                    </div>

                    {schema && p.expanded && (
                      <div style={styles.fieldsBlock}>
                        {schema.map(f => (
                          <div key={f.key} style={styles.fieldRow}>
                            <span style={styles.fieldLabel}>{f.label}</span>
                            {f.select ? (
                              <select
                                style={styles.fieldInput}
                                value={p.fields?.[f.key] || ''}
                                onChange={e => updateField(p.id, f.key, e.target.value)}
                              >
                                <option value="">—</option>
                                {f.select.map(opt => (
                                  <option key={opt.value} value={opt.value}>{opt.label}</option>
                                ))}
                              </select>
                            ) : f.textarea ? (
                              <textarea
                                style={{ ...styles.fieldInput, ...styles.fieldTextarea }}
                                value={p.fields?.[f.key] || ''}
                                onChange={e => updateField(p.id, f.key, e.target.value)}
                              />
                            ) : (
                              <input
                                style={styles.fieldInput}
                                list={f.list ? `dev-list-${f.key}` : undefined}
                                value={p.fields?.[f.key] || ''}
                                onChange={e => updateField(p.id, f.key, e.target.value)}
                              />
                            )}
                            {f.list && (
                              <datalist id={`dev-list-${f.key}`}>
                                {f.list.map(opt => <option key={opt} value={opt} />)}
                              </datalist>
                            )}
                          </div>
                        ))}

                        {p.type === 'event' && (
                          <div style={styles.checkpointsBlock}>
                            <div style={styles.checkpointsHeader}>
                              <span style={styles.fieldLabel}>
                                Checkpoints ({(p.fields?.checkpoints || []).length})
                              </span>
                              <button
                                type="button"
                                style={{
                                  ...styles.smallBtn,
                                  ...(checkpointArmedFor === p.id ? styles.smallBtnActive : {}),
                                }}
                                onClick={() => armCheckpoints(p.id)}
                              >
                                {checkpointArmedFor === p.id ? '● click map to add…' : '+ add via map click'}
                              </button>
                            </div>
                            {(p.fields?.checkpoints || []).map((cp, idx, arr) => (
                              <div key={idx} style={styles.checkpointRow}>
                                <span style={styles.checkpointIndex}>
                                  {idx === 0 ? 'S' : idx === arr.length - 1 ? 'F' : idx}
                                </span>
                                <span style={styles.pointCoords}>{cp.lat}, {cp.lng}</span>
                                <button
                                  type="button"
                                  style={styles.removeBtn}
                                  onClick={() => removeCheckpoint(p.id, idx)}
                                >
                                  ✕
                                </button>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Actions */}
            <div style={styles.actions}>
              <div style={styles.actionsRow}>
                <button
                  type="button"
                  style={{ ...styles.btn, ...(copied ? styles.btnSuccess : {}) }}
                  onClick={copyJson}
                  disabled={points.length === 0}
                >
                  {copied ? '✓ Copied!' : 'Copy JSON'}
                </button>
                <button
                  type="button"
                  style={styles.btn}
                  onClick={saveJson}
                  disabled={points.length === 0}
                >
                  Save JSON
                </button>
              </div>
              <button
                type="button"
                style={{ ...styles.btn, ...styles.btnDanger }}
                onClick={() => setPoints([])}
                disabled={points.length === 0}
              >
                Clear ({points.length})
              </button>
            </div>
          </>
        )}
      </div>

      {showHelp && <DevHelpModal onClose={() => setShowHelp(false)} />}
    </>
  );
}

const styles = {
  panel: {
    position: 'fixed',
    top: '12px',
    right: '12px',
    zIndex: 9999,
    background: '#111',
    border: '1px solid #cc0000',
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
    background: '#cc0000',
    padding: '6px 10px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    cursor: 'default',
    flexShrink: 0,
  },
  headerTitle: {
    fontWeight: 'bold',
    fontSize: '13px',
    color: 'white',
    letterSpacing: '0.5px',
  },
  minimizeBtn: {
    background: 'none',
    border: 'none',
    color: 'white',
    cursor: 'pointer',
    fontSize: '14px',
    padding: '0 4px',
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
  typeRow: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    padding: '8px 10px',
    borderBottom: '1px solid #222',
    flexShrink: 0,
  },
  label: {
    color: '#888',
    whiteSpace: 'nowrap',
  },
  select: {
    background: '#222',
    color: '#ddd',
    border: '1px solid #444',
    borderRadius: '4px',
    padding: '3px 6px',
    fontSize: '12px',
    flex: 1,
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
  pointCoords: {
    color: '#aad4ff',
    flex: '0 0 auto',
    fontSize: '11px',
  },
  pointType: {
    color: '#cc6600',
    flex: '0 0 auto',
    fontSize: '10px',
  },
  iconSelect: {
    background: '#222',
    color: '#cc6600',
    border: '1px solid #444',
    borderRadius: '3px',
    padding: '1px 3px',
    fontSize: '10px',
    flex: '0 0 auto',
  },
  nameInput: {
    flex: 1,
    background: '#1a1a1a',
    border: '1px solid #333',
    color: '#ddd',
    borderRadius: '3px',
    padding: '2px 5px',
    fontSize: '11px',
    minWidth: 0,
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
    marginTop: '4px',
    paddingTop: '6px',
    borderTop: '1px solid #262626',
    display: 'flex',
    flexDirection: 'column',
    gap: '4px',
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
  smallBtnActive: {
    background: '#1a3a1a',
    borderColor: '#2a8a2a',
    color: '#6fdd6f',
  },
  fieldLabel: {
    color: '#777',
    fontSize: '10px',
    flex: '0 0 110px',
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
  btnDanger: {
    background: '#3a1a1a',
    borderColor: '#aa3333',
    color: '#dd6666',
  },
};
