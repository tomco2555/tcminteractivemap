import { useState, useEffect } from 'react';
import { PLAYLISTS } from '../data/playlistConfig';

export function useMapData() {
  const [playlistData, setPlaylistData] = useState({});
  const [miscData, setMiscData] = useState(null);
  const [rivalsData, setRivalsData] = useState(null);
  const [challengesData, setChallengesData] = useState(null);
  const [regionsData, setRegionsData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchAll() {
      const playlistResults = await Promise.allSettled(
        PLAYLISTS.map(p =>
          fetch(`/data/playlists/${p.id}.json`)
            .then(r => r.ok ? r.json() : null)
            .catch(() => null)
        )
      );

      const loaded = {};
      playlistResults.forEach((result, i) => {
        if (result.status === 'fulfilled' && result.value) {
          loaded[PLAYLISTS[i].id] = result.value;
        }
      });

      const [misc, rivals, challenges, regions] = await Promise.allSettled([
        fetch('/data/misc.json').then(r => r.ok ? r.json() : null).catch(() => null),
        fetch('/data/rivals.json').then(r => r.ok ? r.json() : null).catch(() => null),
        fetch('/challenges.json').then(r => r.ok ? r.json() : null).catch(() => null),
        fetch('/data/regions.json').then(r => r.ok ? r.json() : null).catch(() => null),
      ]);

      setPlaylistData(loaded);
      setMiscData(misc.status === 'fulfilled' ? misc.value : null);
      setRivalsData(rivals.status === 'fulfilled' ? rivals.value : null);
      setChallengesData(challenges.status === 'fulfilled' ? challenges.value : null);
      setRegionsData(regions.status === 'fulfilled' ? regions.value : null);
      setLoading(false);
    }

    fetchAll();
  }, []);

  return { playlistData, miscData, rivalsData, challengesData, regionsData, loading };
}
