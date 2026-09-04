import { useEffect, useRef } from 'react';
import { useMap } from 'react-leaflet';
import L from 'leaflet';
import { getContainerIcon, getEventIcon, collectibleIcon, photoOpIcon, featIcons } from './icons';

function addMarker(latlng, icon, toastData, tooltipText, group, onMarkerClick, map, isSharedPoint) {
  const m = L.marker(latlng, { icon });
  m.on('click', () => onMarkerClick(toastData));
  if (tooltipText) m.bindTooltip(tooltipText, { direction: 'top', offset: [0, -12], className: 'map-tooltip' });
  m.addTo(group);
  if (isSharedPoint) {
    map.setView(latlng, Math.max(map.getZoom(), 0), { animate: false });
    m.openTooltip();
    onMarkerClick(toastData);
  }
  return m;
}

export default function PlaylistLayer({ data, filters, sharedPointId, onMarkerClick }) {
  const map = useMap();
  const layersRef = useRef({});

  useEffect(() => {
    if (!data) return;

    const { id, name, imgFolder,
            container, events = [], feats = [],
            photoOps = [], collectibles = [] } = data;

    const containerIcon = getContainerIcon(imgFolder, id);
    const eventIcon     = getEventIcon(imgFolder, id);

    const groups = {
      container:    L.featureGroup(),
      events:       L.featureGroup(),
      feats:        L.featureGroup(),
      photo_ops:    L.featureGroup(),
      collectibles: L.featureGroup(),
    };

    if (container && (!sharedPointId || sharedPointId === `playlist:${id}:container`)) {
      addMarker([container.lat, container.lng], containerIcon, {
        type: 'container',
        name,
        subtitle: 'Container',
        pointId: `playlist:${id}:container`,
      }, `${name} Container`, groups.container, onMarkerClick, map, sharedPointId === `playlist:${id}:container`);
    }

    events.forEach((ev) => {
      const pointId = `playlist:${id}:event:${ev.lat},${ev.lng}`;
      if (sharedPointId && sharedPointId !== pointId) return;
      addMarker([ev.lat, ev.lng], eventIcon, {
        type: 'event',
        name: ev.name,
        subtitle: `${name} · ${ev.number}`,
        fields: [
          { label: 'Event type', value: ev.type },
          { label: 'Weather',    value: ev.weather },
          { label: 'Car',        value: ev.car },
          { label: 'Category',   value: ev.category },
        ],
        xp:    ev.xp,
        bucks: ev.bucks,
        checkpoints: ev.checkpoints,
        pointId,
      }, ev.name, groups.events, onMarkerClick, map, sharedPointId === pointId);
    });

    feats.forEach((feat) => {
      const pointId = `playlist:${id}:feat:${feat.lat},${feat.lng}`;
      if (sharedPointId && sharedPointId !== pointId) return;
      const icon = featIcons[feat.type] || featIcons.speedtrap;
      addMarker([feat.lat, feat.lng], icon, {
        type: 'feat',
        name: `${name} Feats — ${feat.location}`,
        subtitle: `Feat · ${feat.featType}`,
        fields: [
          { label: 'Objective', value: feat.objective },
        ],
        xp:    feat.xp,
        bucks: feat.bucks,
        pointId,
      }, `${feat.location} — ${feat.featType}`, groups.feats, onMarkerClick, map, sharedPointId === pointId);
    });

    photoOps.forEach((photo) => {
      const pointId = `playlist:${id}:photo:${photo.lat},${photo.lng}`;
      if (sharedPointId && sharedPointId !== pointId) return;
      addMarker([photo.lat, photo.lng], photoOpIcon, {
        type: 'photoOp',
        name: photo.name,
        subtitle: `Photo Op · ${name}`,
        requirements: photo.requirements || [],
        pointId,
      }, photo.name, groups.photo_ops, onMarkerClick, map, sharedPointId === pointId);
    });

    collectibles.forEach((col) => {
      const pointId = `playlist:${id}:collectible:${col.lat},${col.lng}`;
      if (sharedPointId && sharedPointId !== pointId) return;
      addMarker([col.lat, col.lng], collectibleIcon, {
        type: 'collectible',
        name,
        subtitle: `Collectible · ${col.challenge}`,
        pointId,
      }, `${col.challenge} (Collectible)`, groups.collectibles, onMarkerClick, map, sharedPointId === pointId);
    });

    layersRef.current = groups;

    return () => {
      Object.values(groups).forEach(g => g.remove());
      layersRef.current = {};
    };
  }, [data, map, onMarkerClick, sharedPointId]);

  useEffect(() => {
    const groups = layersRef.current;
    if (!groups || Object.keys(groups).length === 0) return;

    const playlistOn = data ? filters.playlists[data.id] : false;

    Object.entries(groups).forEach(([type, group]) => {
      const activityOn = filters.activities[type] ?? true;
      if (sharedPointId ? group.getLayers().length > 0 : playlistOn && activityOn) {
        group.addTo(map);
      } else {
        group.remove();
      }
    });
  }, [filters, map, data]);

  return null;
}
