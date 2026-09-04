import { useEffect, useRef } from 'react';
import { useMap } from 'react-leaflet';
import L from 'leaflet';

export default function TrackLayer({ track }) {
  const map = useMap();
  const groupRef = useRef(null);

  useEffect(() => {
    groupRef.current = L.featureGroup({ pane: 'track' }).addTo(map);
    return () => { groupRef.current.remove(); groupRef.current = null; };
  }, [map]);

  useEffect(() => {
    const group = groupRef.current;
    if (!group) return;
    group.clearLayers();

    if (!track || track.length < 2) return;

    const latlngs = track.map(p => [p.lat, p.lng]);

    L.polyline(latlngs, {
      pane: 'track',
      color: '#3498db',
      weight: 3,
      opacity: 0.9,
      dashArray: '6 6',
    }).addTo(group);

    track.forEach((p, i) => {
      const isStart = i === 0;
      const isFinish = i === track.length - 1;
      const color = isStart ? '#2ecc71' : isFinish ? '#e74c3c' : '#3498db';
      const label = isStart ? 'Start' : isFinish ? 'Finish' : `Checkpoint ${i}`;

      L.circleMarker([p.lat, p.lng], {
        pane: 'track',
        radius: isStart || isFinish ? 7 : 5,
        color: '#fff',
        weight: 2,
        fillColor: color,
        fillOpacity: 1,
      })
        .bindTooltip(label, { direction: 'top', offset: [0, -8], className: 'map-tooltip' })
        .addTo(group);
    });
  }, [track]);

  return null;
}
