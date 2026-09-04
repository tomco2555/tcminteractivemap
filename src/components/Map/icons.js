import L from 'leaflet';

const iconCache = {};

function makeIcon(url, size, anchor, popupAnchor) {
  if (!iconCache[url]) {
    iconCache[url] = L.icon({ iconUrl: url, iconSize: size, iconAnchor: anchor, popupAnchor });
  }
  return iconCache[url];
}

function makeDivIcon(html, className, size, anchor) {
  return L.divIcon({ html, className, iconSize: size, iconAnchor: anchor, popupAnchor: [0, -size[1]] });
}

export function getContainerIcon(imgFolder, id) {
  return makeIcon(`/img/${imgFolder}/${id}_container.png`, [32, 38], [16, 38], [0, -30]);
}

export function getEventIcon(imgFolder, id) {
  return makeIcon(`/img/${imgFolder}/${id}_event.png`, [35, 45], [17.5, 45], [0, -35]);
}

export const collectibleIcon = makeIcon('/img/Misc/collectible.png', [20, 23], [10, 23], [0, -18]);
export const photoOpIcon     = makeIcon('/img/Misc/photo_op.png',   [34, 27], [17, 27], [0, -22]);

export const featIcons = {
  escape:    makeIcon('/img/Misc/escape.png',    [35, 45], [17.5, 45], [0, -35]),
  slalom:    makeIcon('/img/Misc/slalom.png',    [35, 45], [17.5, 45], [0, -35]),
  speedtrap: makeIcon('/img/Misc/speedtrap.png', [35, 45], [17.5, 45], [0, -35]),
  // drift has no dedicated image — fallback to speedtrap
  drift:     makeIcon('/img/Misc/speedtrap.png', [35, 45], [17.5, 45], [0, -35]),
  long_jump: makeIcon('/img/Misc/long_jump.png', [35, 45], [17.5, 45], [0, -35]),
  bullseye:  makeIcon('/img/Misc/bullseye.png',  [35, 45], [17.5, 45], [0, -35]),
};

export const miscIcons = {
  mf_grounds:   makeIcon('/img/Misc/motorfest_grounds.png', [41, 38], [20.5, 38], [0, -30]),
  grand_race:   makeIcon('/img/Misc/grand_race.png',         [58, 50], [29, 50], [0, -35]),
  demo_royale:  makeIcon('/img/Misc/demo_royale.png',        [52, 50], [26, 50], [0, -35]),
  achievement:  makeIcon('/img/Misc/achievement.png',        [30, 40], [15, 40], [0, -30]),
  treasure:     makeIcon('/img/Misc/treasure.png',           [28, 40], [14, 40], [0, -30]),
};

export const challengeIcons = {
  start:     makeDivIcon('<div class="chal-icon chal-start">S</div>',     '', [28, 28], [14, 28]),
  finish:    makeDivIcon('<div class="chal-icon chal-finish">F</div>',    '', [28, 28], [14, 28]),
  challenge: makeDivIcon('<div class="chal-icon chal-challenge">C</div>', '', [28, 28], [14, 28]),
};
