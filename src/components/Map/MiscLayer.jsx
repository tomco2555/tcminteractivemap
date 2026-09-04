import { useEffect, useRef } from 'react';
import { useMap } from 'react-leaflet';
import L from 'leaflet';
import { miscIcons } from './icons';

const MISC_CONFIG = {
  mf_grounds:   { icon: 'mf_grounds',  label: 'Motorfest Grounds', type: 'Car Meet' },
  demo_royale:  { icon: 'demo_royale', label: 'Demo Royale',        type: 'Starting Place' },
  grand_race:   { icon: 'grand_race',  label: 'Grand Race',         type: 'Starting Place' },
  achievements: { icon: 'achievement', label: 'Achievement',        type: 'Achievement' },
  treasure:     { icon: 'treasure',    label: 'Treasure',           type: 'Treasure Location' },
};

export default function MiscLayer({
  miscData,
  rivalsData,
  filters,
  sharedPointId,
  onMarkerClick,
}) {
  const map = useMap();
  const groupsRef = useRef({});

  useEffect(() => {
    const groups = {};

    if (miscData) {
      Object.entries(MISC_CONFIG).forEach(([key, cfg]) => {
        const markers = miscData[key] || [];
        const group = L.featureGroup();
        markers.forEach((m) => {
          const pointId = `misc:${key}:${m.lat},${m.lng}`;
          if (sharedPointId && sharedPointId !== pointId) return;
          const marker = L.marker([m.lat, m.lng], { icon: miscIcons[cfg.icon] })
            .bindTooltip(m.name || cfg.label, {
              direction: "top",
              offset: [0, -12],
              className: "map-tooltip",
            })
            .addTo(group);

          marker.on("click", () => {
            onMarkerClick({
              type: key === "treasure" ? "container" : "misc",
              name: m.name || cfg.label,
              subtitle: cfg.type,
              pointId,
            });
          });
          if (sharedPointId === pointId) {
            map.setView([m.lat, m.lng], Math.max(map.getZoom(), 0), { animate: false });
            marker.openTooltip();
            onMarkerClick({
              type: key === "treasure" ? "container" : "misc",
              name: m.name || cfg.label,
              subtitle: cfg.type,
              pointId,
            });
          }
        });
        groups[key] = group;
      });
    }

    if (rivalsData) {
      Object.entries(rivalsData).forEach(([key, markers]) => {
        const group = L.featureGroup();
        markers.forEach((m) => {
          const pointId = `rival:${key}:${m.lat},${m.lng}`;
          if (sharedPointId && sharedPointId !== pointId) return;
          const label = m.name ? `${m.name} (${m.gang || key})` : m.gang || key;
          const marker = L.marker([m.lat, m.lng], {
            icon: miscIcons.achievement,
          })
            .bindTooltip(label, {
              direction: "top",
              offset: [0, -12],
              className: "map-tooltip",
            })
            .addTo(group);

          marker.on("click", () => {
            onMarkerClick({
              type: "rival",
              name: m.name || key,
              subtitle: `Rival · ${m.gang || key}`,
              pointId,
            });
          });
          if (sharedPointId === pointId) {
            map.setView([m.lat, m.lng], Math.max(map.getZoom(), 0), { animate: false });
            marker.openTooltip();
            onMarkerClick({ type: "rival", name: m.name || key, subtitle: `Rival · ${m.gang || key}`, pointId });
          }
        });
        groups[`rival_${key}`] = group;
      });
    }

    groupsRef.current = groups;
    return () => {
      Object.values(groups).forEach((g) => g.remove());
      groupsRef.current = {};
    };
  }, [miscData, rivalsData, map, onMarkerClick, sharedPointId]);

  useEffect(() => {
    const groups = groupsRef.current;
    if (!groups) return;

    Object.entries(groups).forEach(([key, group]) => {
      let visible = false;
      if (sharedPointId) {
        visible = group.getLayers().length > 0;
      } else if (key.startsWith("rival_")) {
        const rivalKey = key.replace("rival_", "");
        visible = filters.rivals[rivalKey] ?? false;
      } else {
        visible = filters.misc[key] ?? false;
      }
      if (visible) {
        group.addTo(map);
      } else {
        group.remove();
      }
    });
  }, [filters, map]);

  return null;
}
