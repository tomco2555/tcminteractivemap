# Developer Guide — TCM Interactive Map

## Quick start

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # production build → dist/
```

---

## Adding a new playlist

**Step 1 — Create the data file**

Create `public/data/playlists/{id}.json`. Copy the schema below and fill it in.
Use the in-map coordinate picker (see bottom of this doc) to get exact coordinates.

```json
{
  "id": "my_playlist",
  "name": "My Playlist",
  "imgFolder": "MyPlaylist",
  "container": { "lat": 1234.5, "lng": 5678.9 },
  "events": [
    {
      "lat": 1234.5,
      "lng": 5678.9,
      "name": "Event Name",
      "number": "1/5",
      "type": "Race",
      "weather": "Sunrise",
      "car": "Some Car",
      "category": "Street Tier 2",
      "xp": "8,400",
      "bucks": "15,750",
      "checkpoints": [
        { "lat": 1234.5, "lng": 5678.9 },
        { "lat": 1245.0, "lng": 5690.0 },
        { "lat": 1260.0, "lng": 5705.0 }
      ]
    }
  ],
  "feats": [
    {
      "lat": 1234.5,
      "lng": 5678.9,
      "type": "escape",
      "location": "Location Name",
      "featType": "Escape",
      "objective": "690 m",
      "xp": "2,880",
      "bucks": "5,400"
    }
  ],
  "photoOps": [
    {
      "lat": 1234.5,
      "lng": 5678.9,
      "name": "Photo Name",
      "requirements": ["Requirement 1", "Requirement 2"]
    }
  ],
  "collectibles": [
    {
      "lat": 1234.5,
      "lng": 5678.9,
      "challenge": "Challenge Name"
    }
  ]
}
```

**Feat types:** `escape` | `slalom` | `speedtrap` | `drift`

**Event checkpoints (optional):** if an event has a `checkpoints` array (2+ points, first = start, last = finish), clicking that event's marker also draws the full track on the map as a dashed line with a pin at each point, and the info toast stays open (no auto-close) until you dismiss it. Events without `checkpoints` behave as before — just the info toast, auto-closing after a few seconds. Both dev tools (`?dev` and `?dev-edit`) can add/drag/remove checkpoints without hand-editing JSON — see **[DEV_MODE_GUIDE.md](./DEV_MODE_GUIDE.md)**.

**Step 2 — Add icons**

Put the playlist icon images in `public/img/{imgFolder}/`:
- `{id}_container.png` — 64×75px
- `{id}_event.png` — 35×45px

**Step 3 — Register the playlist**

Add one line to `src/data/playlistConfig.js`:

```js
{ id: 'my_playlist', name: 'My Playlist', filterKey: 'my_playlist' },
```

That's it — the filter checkbox, map layer, and popup rendering are all automatic.

---

## Adding a new challenge

Challenges have two parts: the waypoint markers (coordinates) and the description shown in the sidebar.

**Part A — Waypoint data** (`public/challenges.json`)

Add a new key with an array of waypoints:

```json
"My Challenge Name": [
  { "lat": 1234.5, "lng": 5678.9, "name": "Start Location", "icon": "start" },
  { "lat": 2345.6, "lng": 6789.0, "name": "End Location",   "icon": "finish" }
]
```

**Icon types:** `start` | `finish` | `challenge`

**Part B — Sidebar description** (`src/data/challengesMeta.json`)

Find the matching playlist group (or add a new one) and add:

```json
{
  "key": "My Challenge Name",
  "label": "My Challenge Label",
  "descriptionHtml": "Drive from <b>LOCATION A</b> to <b>LOCATION B</b>",
  "vehicle": "Some Car Model"
}
```

The `key` must exactly match the key in `challenges.json`.
If the playlist doesn't exist yet as a group, add a new entry at the end of the array:

```json
{
  "playlist": "My Playlist",
  "challenges": [ ... ]
}
```

---

## Editing misc markers

**File:** `public/data/misc.json`

Groups: `mf_grounds`, `demo_royale`, `grand_race`, `achievements`, `treasure`

```json
{
  "grand_race": [
    { "lat": 1234.5, "lng": 5678.9, "name": "Grand Race Start" },
    { "lat": 2345.6, "lng": 6789.0, "name": "Grand Race Start 2" }
  ]
}
```

---

## Editing rival markers

**File:** `public/data/rivals.json`

Groups: `clawblades`, `diamond_fangs`, `quickwhiskers`, `nightstalkers`, `chiefs`, `mysterious_driver`

```json
{
  "clawblades": [
    { "lat": 1234.5, "lng": 5678.9, "name": "Clawblades Location" }
  ]
}
```

---

## In-map coordinate picker (Dev Tool)

Open the map with `?dev` in the URL:

```
http://localhost:5173/?dev
```

This enables a **Dev Panel** in the top-right corner for placing points (events, feats, photo ops, collectibles, containers, misc, challenges, regions, rivals) directly on the map and exporting them as ready-to-paste JSON.

See **[DEV_MODE_GUIDE.md](./DEV_MODE_GUIDE.md)** for the full walkthrough — or click the **?** button in the Dev Panel itself while `?dev` is active.

---

## Editing existing data (Dev Tool)

Open the map with `?dev-edit` in the URL:

```
http://localhost:5173/?dev-edit
```

This enables a **Dev Edit** panel for editing points that are already in the data — pick a playlist/category (or misc group, rival gang, challenge, or region), edit fields, drag pins to reposition them, then **Copy JSON** / **Save JSON** to get the full updated file back out.

See the **"Editing existing data"** section of **[DEV_MODE_GUIDE.md](./DEV_MODE_GUIDE.md)** for the full walkthrough.

---

## File map

| What to change | File |
|---|---|
| Add/remove a playlist | `src/data/playlistConfig.js` |
| Playlist marker data | `public/data/playlists/{id}.json` |
| Challenge waypoints | `public/challenges.json` |
| Challenge descriptions | `src/data/challengesMeta.json` |
| Misc markers | `public/data/misc.json` |
| Rival markers | `public/data/rivals.json` |
| Marker icons logic | `src/components/Map/icons.js` |
| Popup HTML templates | `src/components/Map/PlaylistLayer.jsx` |
| Event checkpoint track rendering | `src/components/Map/TrackLayer.jsx` |
| Toast auto-close / track-open behavior | `src/components/Toast/MarkerToast.jsx` |
| Sidebar layout | `src/components/Sidebar/Sidebar.jsx` |
| Filter state logic | `src/hooks/useFilters.js` |
| Countdown date | `src/components/Sidebar/CountdownTimer.jsx` |
