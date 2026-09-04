import { useEffect, useRef } from 'react';
import { useMap } from 'react-leaflet';
import L from 'leaflet';

export default function RegionLayer({ regions, visible = true }) {
  const map = useMap();
  const markersRef = useRef([]);

  useEffect(() => {
    if (!visible || !regions || regions.length === 0) return;

    const markers = regions.map(r => {
      const icon = L.divIcon({
        className: 'region-label',
        html: `<span>${r.name}</span>`,
        iconSize: null,
        iconAnchor: [0, 0],
      });
      return L.marker([r.lat, r.lng], { icon, interactive: false, pane: 'regions' }).addTo(map);
    });

    markersRef.current = markers;
    return () => {
      markers.forEach(m => m.remove());
      markersRef.current = [];
    };
  }, [regions, map, visible]);

  return null;
}
