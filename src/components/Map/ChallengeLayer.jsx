import { useEffect, useRef } from 'react';
import { useMap } from 'react-leaflet';
import L from 'leaflet';
import { challengeIcons } from './icons';

export default function ChallengeLayer({
  challengesData,
  activeChallenge,
  sharedPointId,
  onMarkerClick,
}) {
  const map = useMap();
  const groupRef = useRef(null);

  useEffect(() => {
    if (!groupRef.current) {
      groupRef.current = L.featureGroup({ pane: "challenges" }).addTo(map);
    }
  }, [map]);

  useEffect(() => {
    const group = groupRef.current;
    if (!group) return;

    group.clearLayers();

    if (!challengesData)
      return;

    const challengeKeys = sharedPointId?.startsWith('challenge:')
      ? [sharedPointId.split(':')[1]]
      : activeChallenge ? [activeChallenge] : [];

    challengeKeys.forEach((challengeKey) => {
      const markers = challengesData[challengeKey] || [];
      markers.forEach((m) => {
        const pointId = `challenge:${challengeKey}:${m.lat},${m.lng}`;
        if (sharedPointId && sharedPointId !== pointId) return;
        const icon = challengeIcons[m.icon] || challengeIcons.challenge;
        const marker = L.marker([m.lat, m.lng], { icon, pane: "challenges" })
          .bindTooltip(m.name, {
            direction: "top",
            offset: [0, -12],
            className: "map-tooltip",
          })
          .addTo(group);

        marker.on("click", () => {
          onMarkerClick({
            type: "challenge",
            name: m.name,
            subtitle: `Challenge · ${challengeKey.toUpperCase()}`,
            pointId,
          });
        });

        if (sharedPointId === pointId) {
          map.setView([m.lat, m.lng], Math.max(map.getZoom(), 0), { animate: false });
          marker.openTooltip();
          onMarkerClick({ type: "challenge", name: m.name, subtitle: `Challenge · ${challengeKey.toUpperCase()}`, pointId });
        }
      });
    });
  }, [activeChallenge, challengesData, map, onMarkerClick, sharedPointId]);

  return null;
}
