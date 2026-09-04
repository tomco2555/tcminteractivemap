// Full list of playlists in display order.
// id: matches the JSON filename in /public/data/playlists/{id}.json
// filterKey: the checkbox id used in filter state
// icon: event marker image used as sidebar thumbnail
export const PLAYLISTS = [
  { id: 'mij', name: 'Made in Japan Vol.1', filterKey: 'mij', icon: '/img/MIJ/mij_event.png' },
  { id: 'mij2', name: 'Made in Japan Vol.2', filterKey: 'mij2', icon: '/img/MIJ2/mij2_event.png' },
  { id: 'de', name: 'Drift Experience Vol.1', filterKey: 'de', icon: '/img/Drift/de_event.png' },
  { id: 'de2', name: 'Drift Experience Vol.2', filterKey: 'de2', icon: '/img/Drift2/de2_event.png' },
  { id: 'oa', name: 'Off-Roading Addict Vol.1', filterKey: 'oa', icon: '/img/OffAdd/oa_event.png' },
  { id: 'oa2', name: 'Off-Roading Addict Vol.2', filterKey: 'oa2', icon: '/img/OffAdd2/oa2_event.png' },
  { id: 'hst', name: 'Hawaii Scenic Tour', filterKey: 'hst', icon: '/img/HST/hst_event.png' },
  { id: 'am', name: 'American Muscle: AMustang Tribute', filterKey: 'am', icon: '/img/AM/am_event.png' },
  { id: 'porsche', name: 'A Porsche Story: 911 Legacy', filterKey: 'porsche', icon: '/img/Porsche/porsche_event.png' },
  { id: 'dm', name: 'Rule the Streets by Donut Media', filterKey: 'dm', icon: '/img/Donut_Media/dm_event.png' },
  { id: 'mauiex', name: 'Maui Expeditions', filterKey: 'mauiex', icon: '/img/MauiEx/mauiex_event.png' },
  { id: 'lch', name: 'Luxury Chronicles: Europe', filterKey: 'lch', icon: '/img/LuxuryChronicles/lch_event.png' },
  { id: 'vg', name: 'Vintage Garage', filterKey: 'vg', icon: '/img/VG/vg_event.png' },
  { id: 'al', name: 'Automobili Lamborghini', filterKey: 'al', icon: '/img/AL/al_event.png' },
  { id: 'motorsports', name: 'Motorsports', filterKey: 'motorsports', icon: '/img/Motorsports/motorsports_event.png' },
  { id: 'eo', name: 'Electric Odyssey', filterKey: 'eo', icon: '/img/EleOdy/eo_event.png' },
  { id: 'dc', name: 'Dream Cars by Supercar Blondie', filterKey: 'dc', icon: '/img/DreamCars/dc_event.png' },
  { id: 'bl', name: 'Bike Lovers', filterKey: 'bl', icon: '/img/BikeLovers/bl_event.png' },
  { id: 'lbwk', name: 'Liberty Walk: A signature', filterKey: 'lbwk', icon: '/img/LBWK/lbwk_event.png' },
  { id: 'ons', name: "Ocean'N Sky", filterKey: 'ons', icon: '/img/ONS/ons_event.png' },
  { id: 'gym', name: 'Gymkhana Grid Masters', filterKey: 'gym', icon: '/img/Gymkhana/gym_event.png' },
  { id: 'ha', name: 'Hollywood Action!', filterKey: 'ha', icon: '/img/HA/ha_event.png' },
  { id: 'dvl', name: 'Donk vs Lowrider', filterKey: 'dvl', icon: '/img/DvL/dvl_event_d.png' },
  { id: 'tcs', name: 'The Chase Squad', filterKey: 'tcs', icon: '/img/ChaseSquad/tcs_event.png' },
  { id: 'rb', name: 'Red Bull Speed Clash', filterKey: 'rb', icon: '/img/RedBull_SC/rb_event.png' },
  { id: 'rb2', name: 'Red Bull Wild Ride', filterKey: 'rb2', icon: '/img/RedBull_WR/rb2_event.png' },
  { id: 'ferrari', name: 'Ferrari Supercars', filterKey: 'ferrari', icon: '/img/Ferrari/ferrari_event.png' },
  { id: 'streetriders', name: 'Street Riders', filterKey: 'streetriders', icon: '/img/StreetRiders/streetriders_event.png' },
  { id: 'bmw', name: 'BMW', filterKey: 'bmw', icon: '/img/BMW/bmw_event.png' },
  { id: 'nascar', name: 'Nascar Motorfert Tour', filterKey: 'nascar', icon: '/img/Nascar/nascar_event.png' },
  { id: 'rcfrenzy', name: 'RC Frenzy', filterKey: 'rcfrenzy', icon: '/img/RCFrenzy/rcfrenzy_event.png' },
  { id: 'latenightshow', name: 'Late Night Show', filterKey: 'latenightshow', icon: '/img/LateNightShow/latenightshow_event.png' },
  { id: 'hawaigrandtour', name: 'Hawaii Grand Tour', filterKey: 'hawaigrandtour', icon: '/img/HawaiiGrandTour/hawaigrandtour_event.png' },
];

export const PLAYLIST_ICON_BY_NAME = Object.fromEntries(
  PLAYLISTS.map(p => [p.name, p.icon])
);

export const ACTIVITIES = [
  { id: 'events', label: 'Events' },
  { id: 'collectibles', label: 'Collectibles' },
  { id: 'photo_ops', label: 'Photo Ops' },
  { id: 'feats', label: 'Feats' },
  { id: 'container', label: 'Container' },
];

export const MISC_ITEMS = [
  { id: 'grand_race', label: 'Grand Race' },
  { id: 'demo_royale', label: 'Demo Royale' },
  { id: 'mf_grounds', label: 'Motorfest Grounds' },
  { id: 'treasure', label: 'Treasure Locations' },
  { id: 'achievements', label: 'Achievements' },
];

export const RIVALS_ITEMS = [
  { id: 'clawblades', label: 'Clawblades' },
  { id: 'diamond_fangs', label: 'Diamond Fangs' },
  { id: 'quickwhiskers', label: 'Quickwhiskers' },
  { id: 'nightstalkers', label: 'Nightstalkers' },
  { id: 'chiefs', label: 'Chiefs' },
  { id: 'mysterious_driver', label: 'Mysterious Driver' },
  { id: 'take_down_omni', label: 'Take Down OMNI' },
  { id: 'clarence_bishop_iii', label: 'Clarence Bishop III' },
  { id: 'the_ace', label: 'The Ace' },
  { id: 'unveilings_phazr_secrets', label: 'Unveilings Phazr`s secrets' },
  { id: 'the_qween', label: 'The Qween' },
];
