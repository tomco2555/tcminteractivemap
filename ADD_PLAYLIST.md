# Adding a new playlist

Three things are required for a playlist to show up on the map: marker icons, a data file, and a config entry.

## Step 1 — Add marker icons

Put two images in `public/img/{ImgFolder}/`:

- `{id}_container.png` — 64×75px
- `{id}_event.png` — 35×45px

`{ImgFolder}` is a free-form folder name (e.g. `MyPlaylist`), `{id}` is the short playlist id used everywhere else (e.g. `mp`).

## Step 2 — Create the data file

Create `public/data/playlists/{id}.json` using the empty template below. Use the in-map coordinate picker (`?dev` — see [DEV_MODE_GUIDE.md](./DEV_MODE_GUIDE.md)) to get exact `lat`/`lng` values.

Duplicate the placeholder object inside each array (`events`, `feats`, `photoOps`, `collectibles`) once per real entry, and delete the array entirely if the playlist has none of that type.

**Feat `type` values:** `escape` | `slalom` | `speedtrap` | `drift`

**Event `checkpoints` (optional):** add a `checkpoints` array to an event to draw its full track on the map. First entry is treated as start, last as finish, any in between as checkpoints. Needs at least 2 points to draw; omit the field entirely if the event has no track data — it falls back to the plain info toast. You don't have to hand-write these coordinates — both `?dev` and `?dev-edit` can add/drag/remove checkpoints for you (see [DEV_MODE_GUIDE.md](./DEV_MODE_GUIDE.md)).

```json
"checkpoints": [
  { "lat": 0, "lng": 0 },
  { "lat": 0, "lng": 0 },
  { "lat": 0, "lng": 0 }
]
```

```json
{
  "id": "",
  "name": "",
  "imgFolder": "",
  "container": { "lat": 0, "lng": 0 },
  "events": [
    {
      "lat": 0,
      "lng": 0,
      "name": "",
      "number": "",
      "type": "",
      "weather": "",
      "car": "",
      "category": "",
      "xp": "",
      "bucks": ""
    }
  ],
  "feats": [
    {
      "lat": 0,
      "lng": 0,
      "type": "",
      "location": "",
      "featType": "",
      "objective": "",
      "xp": "",
      "bucks": ""
    }
  ],
  "photoOps": [
    {
      "lat": 0,
      "lng": 0,
      "name": "",
      "requirements": []
    }
  ],
  "collectibles": [
    {
      "lat": 0,
      "lng": 0,
      "challenge": ""
    }
  ]
}
```

## Step 3 — Register the playlist

Add one line to `src/data/playlistConfig.js` (order in the array is display order in the sidebar):

```js
{ id: '', name: '', filterKey: '', icon: '/img/{ImgFolder}/{id}_event.png' },
```

- `id` — matches the JSON filename and the icon folder's `{id}_*` prefix
- `filterKey` — usually the same as `id`; used as the checkbox id in filter state
- `icon` — sidebar thumbnail, same image as the map event marker

That's it — the filter checkbox, map layer, and popup rendering are all automatic once these three steps are done.
