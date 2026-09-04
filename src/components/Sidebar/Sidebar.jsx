import { useState, useRef, useEffect } from 'react';
import FilterSection from './FilterSection';
import ChallengeAccordion from './ChallengeAccordion';
import SearchBar from '../Search/SearchBar';
import { PLAYLISTS, ACTIVITIES, MISC_ITEMS, RIVALS_ITEMS, PLAYLIST_ICON_BY_NAME } from '../../data/playlistConfig';

function getSidebarWidth() {
  const w = window.innerWidth;
  if (w <= 500) return '85%';
  if (w <= 900) return '60%';
  return '30%';
}

export default function Sidebar({
  filters,
  onTogglePlaylist,
  onToggleActivity,
  onToggleMisc,
  onToggleRival,
  onToggleRegions,
  onToggleSection,
  onHideAll,
  onShowAll,
  challengesMode,
  onToggleChallengesMode,
  challengesMeta,
  onChallengeSelect,
  activeChallenge,
  playlistData,
  miscData,
  rivalsData,
  challengesData,
  regionsData,
  flyTo,
}) {
  const [closed, setClosed] = useState(false);
  const sidebarRef = useRef(null);

  const anyVisible =
    Object.values(filters.playlists).some(Boolean) ||
    Object.values(filters.activities).some(Boolean) ||
    Object.values(filters.misc).some(Boolean);

  useEffect(() => {
    if (sidebarRef.current) {
      sidebarRef.current.style.width = closed ? "0" : getSidebarWidth();
    }
  }, [closed]);

  useEffect(() => {
    function handleResize() {
      if (!closed && sidebarRef.current) {
        sidebarRef.current.style.width = getSidebarWidth();
      }
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [closed]);

  const playlistItems = PLAYLISTS.map((p) => ({
    id: p.filterKey,
    label: p.name,
    icon: p.icon,
  }));

  return (
    <div
      id="left_sidebar"
      ref={sidebarRef}
      style={{ width: getSidebarWidth() }}
    >
      <div id="filters_sidebar" className={closed ? "close_filters" : ""}>
        {/* Logo */}
        <div className="sb-logo">
          <img src="/img/tcm_logo.webp" alt="TCM Logo" />
          <p className="sb-logo-title">THE CREW MOTORFEST INTERACTIVE MAP</p>
          <p className="sb-logo-sub">created by Tomco</p>
          <p className="sb-logo-sub">
            Starting season 9 maintained by <br /> Sanekx Arcs and SnowLeopard
          </p>
        </div>

        {/* Search */}
        <SearchBar
          playlistData={playlistData}
          miscData={miscData}
          rivalsData={rivalsData}
          challengesData={challengesData}
          regions={regionsData}
          flyTo={flyTo}
        />

        {/* Settings bar */}
        <div className="sb-settings">
          <div className="sb-setting-row">
            <span className="sb-setting-label">Challenges</span>
            <label className="sb-switch">
              <input
                type="checkbox"
                checked={challengesMode}
                onChange={onToggleChallengesMode}
              />
              <span className="sb-slider" />
            </label>
          </div>
          <div className="sb-setting-row">
            <span className="sb-setting-label">Region Labels</span>
            <label className="sb-switch">
              <input
                type="checkbox"
                checked={filters.regions}
                onChange={onToggleRegions}
              />
              <span className="sb-slider" />
            </label>
          </div>
          <div className="sb-setting-row" style={{ padding: "6px 8px" }}>
            <button
              type="button"
              className={`sb-toggle-btn ${anyVisible ? "sb-toggle-hide" : "sb-toggle-show"}`}
              onClick={anyVisible ? onHideAll : onShowAll}
            >
              {anyVisible ? (
                <>
                  <svg
                    aria-hidden="true"
                    width="13"
                    height="13"
                    viewBox="0 0 13 13"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    <circle cx="6.5" cy="6.5" r="5" />
                    <line x1="3.5" y1="6.5" x2="9.5" y2="6.5" />
                  </svg>{" "}
                  Hide all markers
                </>
              ) : (
                <>
                  <svg
                    aria-hidden="true"
                    width="13"
                    height="13"
                    viewBox="0 0 13 13"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    <circle cx="6.5" cy="6.5" r="5" />
                    <line x1="6.5" y1="3.5" x2="6.5" y2="9.5" />
                    <line x1="3.5" y1="6.5" x2="9.5" y2="6.5" />
                  </svg>{" "}
                  Show all markers
                </>
              )}
            </button>
          </div>
        </div>

        {/* Challenges accordion */}
        {challengesMode && (
          <ChallengeAccordion
            challengesMeta={challengesMeta}
            onChallengeSelect={onChallengeSelect}
            activeKey={activeChallenge}
            iconByPlaylist={PLAYLIST_ICON_BY_NAME}
          />
        )}

        <FilterSection
          title="Playlists"
          items={playlistItems}
          checked={filters.playlists}
          onToggle={onTogglePlaylist}
          onToggleAll={() => onToggleSection("playlists")}
        />
        <FilterSection
          title="Activities"
          items={ACTIVITIES.map((a) => ({ id: a.id, label: a.label }))}
          checked={filters.activities}
          onToggle={onToggleActivity}
          onToggleAll={() => onToggleSection("activities")}
        />
        <FilterSection
          title="Misc"
          items={MISC_ITEMS.map((m) => ({ id: m.id, label: m.label }))}
          checked={filters.misc}
          onToggle={onToggleMisc}
          onToggleAll={() => onToggleSection("misc")}
        />
        <FilterSection
          title="Rivals"
          items={RIVALS_ITEMS.map((r) => ({ id: r.id, label: r.label }))}
          checked={filters.rivals}
          onToggle={onToggleRival}
          onToggleAll={() => onToggleSection("rivals")}
        />

        <div className="sb-links">
          <b>Other useful stuff</b>
          <br />
          <a
            href="https://docs.google.com/spreadsheets/d/1_YaAbpwQyw2B3wnyGUfvueYsEjxkSVaUobXkF5H1woc/edit?usp=sharing"
            target="_blank"
            rel="noreferrer"
          >
            Vanity List
          </a>
        </div>
      </div>

      <div id="close" className={closed ? "move_button" : ""}>
        <button
          type="button"
          id="close_btn"
          onClick={() => setClosed((c) => !c)}
        >
          {closed ? "›" : "‹"}
        </button>
      </div>
    </div>
  );
}
