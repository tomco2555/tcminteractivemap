import { useState } from 'react';

function ChallengeItem({ challenge, isActive, onSelect }) {
  return (
    <div className="challenges_submenu_item">
      <button
        type="button"
        className={`accordion_submenu${isActive ? ' accordion_submenu_active' : ''}`}
        onClick={() => onSelect(isActive ? null : challenge.key)}
      >
        {challenge.label}
      </button>
      <div
        className="challenge_details"
        style={{ maxHeight: isActive ? '200px' : '0' }}
      >
        {/* biome-ignore lint/security/noDangerouslySetInnerHtml: static data from our own JSON */}
        <span dangerouslySetInnerHTML={{ __html: challenge.descriptionHtml }} />
        <br />
        <span><b>Vehicle:</b> {challenge.vehicle}</span>
      </div>
    </div>
  );
}

function PlaylistGroup({ group, activeKey, onSelect, icon }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="accordion_item">
      <button
        type="button"
        className={`accordion_menu${open ? ' active' : ''}`}
        onClick={() => setOpen(o => !o)}
      >
        {icon && <img src={icon} alt="" className="accordion_menu_icon" />}
        {group.playlist}
      </button>
      <div
        className="challenges_submenu"
        style={{ maxHeight: open ? '2000px' : '0' }}
      >
        {group.challenges.map(ch => (
          <ChallengeItem
            key={ch.key}
            challenge={ch}
            isActive={activeKey === ch.key}
            onSelect={onSelect}
          />
        ))}
      </div>
    </div>
  );
}

export default function ChallengeAccordion({ challengesMeta, onChallengeSelect, activeKey, iconByPlaylist }) {
  if (!challengesMeta || challengesMeta.length === 0) {
    return <div style={{ padding: '10px', color: '#888', fontSize: '13px' }}>Loading challenges…</div>;
  }

  return (
    <div className="events" id="challenges_menu">
      <div className="event_header">
        <span className="header">Challenges</span>
      </div>
      {challengesMeta.map(group => (
        <PlaylistGroup
          key={group.playlist}
          group={group}
          activeKey={activeKey}
          onSelect={onChallengeSelect}
          icon={iconByPlaylist?.[group.playlist]}
        />
      ))}
    </div>
  );
}
