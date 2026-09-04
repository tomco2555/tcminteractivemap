import { useState, useCallback, useEffect } from 'react';
import { PLAYLISTS, ACTIVITIES, MISC_ITEMS, RIVALS_ITEMS } from '../data/playlistConfig';

const STORAGE_KEY = 'tcm-map-filters';

function buildDefaultState() {
  const playlists = {};
  PLAYLISTS.forEach(p => { playlists[p.filterKey] = true; });

  const activities = {};
  ACTIVITIES.forEach(a => { activities[a.id] = true; });

  const misc = {};
  MISC_ITEMS.forEach(m => { misc[m.id] = true; });

  const rivals = {};
  RIVALS_ITEMS.forEach(r => { rivals[r.id] = false; });

  return { playlists, activities, misc, rivals, regions: true };
}

function buildInitialState() {
  const defaults = buildDefaultState();
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      const parsed = JSON.parse(saved);
      return {
        playlists:  { ...defaults.playlists,  ...parsed.playlists },
        activities: { ...defaults.activities, ...parsed.activities },
        misc:       { ...defaults.misc,       ...parsed.misc },
        rivals:     { ...defaults.rivals,     ...parsed.rivals },
        regions:    parsed.regions ?? defaults.regions,
      };
    }
  } catch {}
  return defaults;
}

export function useFilters() {
  const [filters, setFilters] = useState(buildInitialState);

  useEffect(() => {
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(filters)); } catch {}
  }, [filters]);

  const togglePlaylist = useCallback((key) => {
    setFilters(prev => ({
      ...prev,
      playlists: { ...prev.playlists, [key]: !prev.playlists[key] },
    }));
  }, []);

  const toggleActivity = useCallback((key) => {
    setFilters(prev => ({
      ...prev,
      activities: { ...prev.activities, [key]: !prev.activities[key] },
    }));
  }, []);

  const toggleMisc = useCallback((key) => {
    setFilters(prev => ({
      ...prev,
      misc: { ...prev.misc, [key]: !prev.misc[key] },
    }));
  }, []);

  const toggleRival = useCallback((key) => {
    setFilters(prev => ({
      ...prev,
      rivals: { ...prev.rivals, [key]: !prev.rivals[key] },
    }));
  }, []);

  const toggleRegions = useCallback(() => {
    setFilters(prev => ({ ...prev, regions: !prev.regions }));
  }, []);

  const setAllPlaylists = useCallback((value) => {
    setFilters(prev => {
      const playlists = {};
      Object.keys(prev.playlists).forEach(k => { playlists[k] = value; });
      return { ...prev, playlists };
    });
  }, []);

  const hideAll = useCallback(() => {
    setFilters(prev => {
      const playlists = {};
      Object.keys(prev.playlists).forEach(k => { playlists[k] = false; });
      const activities = {};
      Object.keys(prev.activities).forEach(k => { activities[k] = false; });
      const misc = {};
      Object.keys(prev.misc).forEach(k => { misc[k] = false; });
      return { ...prev, playlists, activities, misc };
    });
  }, []);

  const showAll = useCallback(() => {
    setFilters(prev => {
      const playlists = {};
      Object.keys(prev.playlists).forEach(k => { playlists[k] = true; });
      const activities = {};
      Object.keys(prev.activities).forEach(k => { activities[k] = true; });
      const misc = {};
      Object.keys(prev.misc).forEach(k => { misc[k] = true; });
      return { ...prev, playlists, activities, misc };
    });
  }, []);

  const toggleSection = useCallback((section) => {
    setFilters(prev => {
      const group = prev[section];
      const anyOn = Object.values(group).some(Boolean);
      const updated = {};
      Object.keys(group).forEach(k => { updated[k] = !anyOn; });
      return { ...prev, [section]: updated };
    });
  }, []);

  return {
    filters,
    togglePlaylist,
    toggleActivity,
    toggleMisc,
    toggleRival,
    toggleRegions,
    setAllPlaylists,
    hideAll,
    showAll,
    toggleSection,
  };
}
