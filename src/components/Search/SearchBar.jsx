import { useState, useMemo, useRef } from 'react';

export const TYPE_COLORS = {
  event:      '#3498db',
  feat:       '#9b59b6',
  photoOp:    '#e67e22',
  collectible:'#1abc9c',
  container:  '#cc0000',
  misc:       '#f1c40f',
  rival:      '#e74c3c',
  challenge:  '#2ecc71',
  region:     '#95a5a6',
};

function buildSearchIndex(playlistData, miscData, rivalsData, challengesData, regions) {
  const items = [];

  Object.values(playlistData).forEach(playlist => {
    const { id, name, container, events = [], feats = [], photoOps = [], collectibles = [] } = playlist;

    if (container) {
      items.push({ label: `${name} Container`, sub: name, lat: container.lat, lng: container.lng, type: 'container', zoom: 2 });
    }
    events.forEach(ev => {
      items.push({ label: ev.name || '', sub: `${name} · ${ev.number || ''}`, lat: ev.lat, lng: ev.lng, type: 'event', zoom: 2 });
    });
    feats.forEach(feat => {
      items.push({ label: feat.name || feat.location || feat.featType || '', sub: `${name} · ${feat.featType || 'Feat'}`, lat: feat.lat, lng: feat.lng, type: 'feat', zoom: 2 });
    });
    photoOps.forEach(photo => {
      items.push({ label: photo.name || '', sub: `${name} · Photo Op`, lat: photo.lat, lng: photo.lng, type: 'photoOp', zoom: 2 });
    });
    collectibles.forEach(col => {
      const label = col.name || col.challenge || '';
      items.push({ label, sub: `${name} · Collectible`, lat: col.lat, lng: col.lng, type: 'collectible', zoom: 2 });
    });
  });

  if (miscData) {
    const MISC_LABELS = { mf_grounds: 'Motorfest Grounds', demo_royale: 'Demo Royale', grand_race: 'Grand Race', achievements: 'Achievement', treasure: 'Treasure' };
    Object.entries(miscData).forEach(([key, markers]) => {
      markers.forEach(m => {
        items.push({ label: m.name || MISC_LABELS[key] || key, sub: MISC_LABELS[key] || key, lat: m.lat, lng: m.lng, type: 'misc', zoom: 2 });
      });
    });
  }

  if (rivalsData) {
    Object.entries(rivalsData).forEach(([gang, markers]) => {
      markers.forEach(m => {
        items.push({ label: m.name || gang, sub: `${m.gang || gang} · Rival`, lat: m.lat, lng: m.lng, type: 'rival', zoom: 2 });
      });
    });
  }

  if (challengesData) {
    Object.entries(challengesData).forEach(([challengeName, waypoints]) => {
      if (waypoints.length > 0) {
        const start = waypoints.find(w => w.icon === 'start') || waypoints[0];
        items.push({ label: challengeName, sub: 'Challenge', lat: start.lat, lng: start.lng, type: 'challenge', zoom: 1 });
      }
    });
  }

  if (regions) {
    regions.forEach(r => {
      items.push({ label: r.name, sub: 'Region', lat: r.lat, lng: r.lng, type: 'region', zoom: 0 });
    });
  }

  return items;
}

export default function SearchBar({ playlistData, miscData, rivalsData, challengesData, regions, flyTo }) {
  const [query, setQuery] = useState('');
  const [open, setOpen] = useState(false);
  const inputRef = useRef(null);

  const index = useMemo(
    () => buildSearchIndex(playlistData, miscData || {}, rivalsData || {}, challengesData || {}, regions || []),
    [playlistData, miscData, rivalsData, challengesData, regions]
  );

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (q.length < 2) return [];
    return index.filter(item => {
      const label = item.label ? String(item.label).toLowerCase() : '';
      const sub = item.sub ? String(item.sub).toLowerCase() : '';
      return label.includes(q) || sub.includes(q);
    }).slice(0, 12);
  }, [query, index]);

  function handleSelect(item) {
    flyTo(item.lat, item.lng, item.zoom);
    setQuery(item.label);
    setOpen(false);
    inputRef.current?.blur();
  }

  function handleKeyDown(e) {
    if (e.key === 'Escape') { setOpen(false); inputRef.current?.blur(); }
  }

  return (
    <div className="sb-search">
      <div className="sb-search-inner">
        <svg className="sb-search-icon" width="13" height="13" viewBox="0 0 13 13" fill="none" stroke="currentColor" strokeWidth="1.8">
          <circle cx="5.5" cy="5.5" r="4" />
          <line x1="8.5" y1="8.5" x2="12" y2="12" />
        </svg>
        <input
          ref={inputRef}
          type="text"
          className="sb-search-input"
          placeholder="Search events, regions, challenges…"
          value={query}
          onChange={e => { setQuery(e.target.value); setOpen(true); }}
          onFocus={() => setOpen(true)}
          onBlur={() => setTimeout(() => setOpen(false), 150)}
          onKeyDown={handleKeyDown}
        />
        {query && (
          <button className="sb-search-clear" onClick={() => { setQuery(''); setOpen(false); inputRef.current?.focus(); }}>✕</button>
        )}
      </div>
      {open && results.length > 0 && (
        <div className="sb-search-results">
          {results.map((item, i) => (
            <button key={i} className="sb-search-result" onMouseDown={() => handleSelect(item)}>
              <span className="sb-search-badge" style={{ background: TYPE_COLORS[item.type] || '#555' }}>{item.type}</span>
              <span className="sb-search-text">
                <span className="sb-search-label">{item.label}</span>
                <span className="sb-search-sub">{item.sub}</span>
              </span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
