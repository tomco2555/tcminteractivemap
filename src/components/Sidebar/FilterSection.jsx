import { useState } from "react";

export default function FilterSection({ title, items, checked, onToggle, onToggleAll }) {
  const [collapsed, setCollapsed] = useState(false);

  const activeCount = items.filter(item => checked[item.id]).length;

  return (
    <div className="sb-section">
      <div
        className="sb-section-header"
        onClick={() => setCollapsed(c => !c)}
      >
        <span className="sb-section-title">{title}</span>
        <span className="sb-section-meta">
          <span className="sb-section-badge">{activeCount}/{items.length}</span>
          <button
            type="button"
            className="sb-section-toggle"
            onClick={e => { e.stopPropagation(); onToggleAll?.(); }}
          >
            {activeCount > 0 ? 'hide' : 'show'}
          </button>
        </span>
        <span className={`sb-section-chevron${collapsed ? '' : ' open'}`}>▼</span>
      </div>

      {!collapsed && (
        <div className="sb-items">
          {items.map(item => (
            <label key={item.id} className={`sb-chip${checked[item.id] ? ' active' : ''}`}>
              <input
                type="checkbox"
                checked={!!checked[item.id]}
                onChange={() => onToggle(item.id)}
              />
              {item.icon
                ? <img src={item.icon} alt="" className="sb-chip-icon" />
                : <span className="sb-chip-dot" />
              }
              <span className="sb-chip-label">{item.label || item.name}</span>
            </label>
          ))}
        </div>
      )}
    </div>
  );
}
