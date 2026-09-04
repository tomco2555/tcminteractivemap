# Dev Mode Guide — TCM Interactive Map

## Enabling dev mode

Add `?dev` to the URL:

```
http://localhost:5173/?dev
```

This mounts the **Dev Panel** in the top-right corner of the map. It only exists in dev mode — it's never shown to regular visitors.

## The panel

- **⚙ Dev — Coordinate Picker** header, with a **?** button (opens this guide) and a **▲/▼** button to minimize/expand the panel.
- **"Click adds:"** — choose the point type *before* clicking the map. Every click after that drops a new point of that type at the clicked coordinate.
- Each point shows up two places at once: as a row in the panel list, and as a colored, numbered pin on the map itself.
- **Drag a pin** on the map to nudge its position — the panel list (and the coordinates in the copied JSON) update to match. No need to delete and re-click to fix placement.
- **✕** on a row removes that point.
- **Clear** wipes the whole list.
- The list is saved to your browser's local storage, so refreshing the page or Vite hot-reloading doesn't lose your work. Use **Clear** once you've copied everything out.

## Point types and their fields

Each type maps to a specific file/array in `public/`. Types with extra fields have a **▸ fields** toggle on their row to expand a small form.

### Event
→ `events` array in `public/data/playlists/{id}.json`
Fields: name, number (e.g. `1/9`), type (Race, Outrun, …), weather (type-in with suggestions), car, category, xp, bucks.

**Checkpoints (optional track):** expand an event's fields and use **+ add via map click**, then click the map to drop checkpoint pins one at a time (first click = start, last = finish) — click the button again to stop adding. Checkpoints show up as small numbered pins (`S` / number / `F`), separate from the main event pin, and are draggable to fine-tune placement. **✕** on a checkpoint row removes it. Leave the list empty to skip — events without checkpoints work exactly as before (just the info toast, no track drawn).

### Feat
→ `feats` array in the same playlist file
Fields: type — dropdown of `speedtrap` / `slalom` / `escape` / `drift` / `long_jump` / `bullseye` / `buoy_smashing` (this also drives the `featType` label, filled in automatically), location, objective, xp, bucks.

### Photo Op
→ `photoOps` array
Fields: name, requirements — type one requirement per line; exported as a JSON array.

### Collectible
→ `collectibles` array
Fields: challenge only. (Collectibles don't have their own `name` field in the data.)

### Container
→ the single `container` object per playlist (not an array)
No extra fields — just the coordinate.

### Misc
→ `public/data/misc.json`
Generic name-only capture. `misc.json` actually has 5 differently-shaped groups (`mf_grounds`, `demo_royale`, `grand_race`, `achievements`, `treasure`), so you'll need to hand-adjust the copied JSON to fit whichever group you're adding to.

### Challenge
→ `public/challenges.json`
Fields: name, plus an icon dropdown (Start / Finish / Challenge) in place of the type badge.

### Region
→ `public/data/regions.json`
Fields: name only.

### Rival
→ `public/data/rivals.json`
Fields:
- **Gang Group** — free text with suggestions (`clawblades`, `diamond_fangs`, `quickwhiskers`, `nightstalkers`, `chiefs`, `mysterious_driver`). This tells you which top-level key in `rivals.json` to paste the entry under — it's exported as a `group` field in the copied JSON as a hint, but that key doesn't exist in the real file, so delete it once you've sorted the entry into place.
- **Gang (display)** — auto-fills based on the group you typed, but stays editable. This is the actual `gang` value written into the file (chiefs, for example, keep their original gang's name here rather than "Chiefs").
- rivalCar, chaseRestriction, raceRestriction.

## Copying data out

- **Copy JSON** copies every point currently in the list as one array, each already shaped to match its own type.
- The preview pane at the bottom of the panel always shows exactly what will be copied.
- If you mix multiple types in one session (e.g. events and feats), the array will contain differently-shaped objects — split them into their respective files by hand.

## Tips

- Zoom in before placing points — precision matters, and the base map image is large.
- Pins are colored by type (same colors used for search-result badges), so a busy cluster stays readable.
- Toggle sidebar layers on/off while in dev mode to see existing markers for context before adding new ones nearby.

---

## Editing existing data — `?dev-edit`

Add `?dev-edit` to the URL to edit points that are **already** in the data files (as opposed to `?dev`, which only adds new ones):

```
http://localhost:5173/?dev-edit
```

This mounts the **Dev Edit** panel in the top-right corner (both modes can be active together via `?dev&dev-edit` — the edit panel shifts left to make room).

### Choosing what to edit

Pick a **Source** first, then a sub-selector:

- **Playlist** → pick the playlist, then a **Category**: Container (single point), Events, Feats, Photo Ops, or Collectibles.
- **Misc** → pick a group (`mf_grounds`, `demo_royale`, `grand_race`, `achievements`, `treasure`).
- **Rivals** → pick a gang group.
- **Challenges** → pick a challenge by name.
- **Regions** → no sub-selector, just the one flat list.

The panel shows exactly which file the data comes from (e.g. `→ public/data/playlists/mij.json`) — that's the file you'll replace once you're done.

### Editing

- Every point in the selected category shows up as a numbered, colored, **draggable** pin on the map and as a row in the list. Drag a pin to move it; the row's lat/lng inputs update to match (and you can also type exact numbers directly into those inputs).
- Click a row's name button to expand it and edit every field the point has (name, xp, requirements, whatever that type stores) — array-type fields (like Photo Op requirements) use a textarea, one line per entry.
- **Every event** gets a **checkpoints** sub-list at the bottom of its expanded fields (starts empty if the event has none yet): each checkpoint shows as a `S` / number / `F` row with its lat/lng and a **✕** to remove it, plus draggable pins on the map (only while that event's row is expanded) to nudge placement. **+ add at map center** appends a new checkpoint at whatever the map is currently centered on — drag it into place afterward. An event with zero checkpoints saves exactly as before (no `checkpoints` key written).
- **+ field** on an expanded row adds a new custom key/value pair; **✕** next to a field removes it, **✕** on the row removes the whole point.
- **+ Add new** appends a fresh point at the current map center, copying the field shape (keys, blanked out) of the first point already in the list.
- **Reset** discards all local edits and reloads straight from the fetched data.

### Saving

- **Copy JSON** / **Save JSON** produce the **entire target file**, not just the edited category — untouched parts of the file (other categories, top-level `id`/`name`/`imgFolder`, etc.) are preserved as-is.
- Replace the real file in `public/` with what you copied/downloaded, then refresh the page (without `?dev-edit`) to see it live.
- Edits made in this panel are **not** persisted anywhere until you save — switching Source/Category or reloading the page discards them.
- Tip: toggle off the corresponding sidebar layer while editing so the real markers don't visually clutter the draggable edit-pins for the same points.
