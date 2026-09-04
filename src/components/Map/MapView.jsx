import { useEffect, useRef } from 'react';
import { MapContainer, ImageOverlay, ZoomControl, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

import PlaylistLayer from "./PlaylistLayer";
import MiscLayer from "./MiscLayer";
import ChallengeLayer from "./ChallengeLayer";
import RegionLayer from "./RegionLayer";
import TrackLayer from "./TrackLayer";
import DevCoordinatePicker from "../Dev/DevCoordinatePicker";
import DevEditPanel from "../Dev/DevEditPanel";
import { PLAYLISTS } from "../../data/playlistConfig";

const IS_DEV_MODE = new URLSearchParams(window.location.search).has("dev");
const IS_DEV_EDIT_MODE = new URLSearchParams(window.location.search).has("dev-edit");

const BOUNDS = [
  [0, 0],
  [3579, 6707],
];
const EXPANDED_BOUNDS = [
  [-3000, -4000],
  [6579, 10707],
];

function MapSetup() {
  const map = useMap();
  useEffect(() => {
    map.setMaxBounds(EXPANDED_BOUNDS);
    map.createPane("challenges");
    map.getPane("challenges").style.zIndex = 600;
    map.createPane("challenges-popup");
    map.getPane("challenges-popup").style.zIndex = 700;
    map.createPane("regions");
    map.getPane("regions").style.zIndex = 450;
    map.getPane("regions").style.pointerEvents = "none";
    map.createPane("track");
    map.getPane("track").style.zIndex = 620;
  }, [map]);
  return null;
}

function MapController({ onMapReady }) {
  const map = useMap();
  const cbRef = useRef(onMapReady);
  cbRef.current = onMapReady;
  useEffect(() => { cbRef.current(map); }, [map]);
  return null;
}

export default function MapView({
  playlistData,
  miscData,
  rivalsData,
  challengesData,
  regionsData,
  filters,
  sharedPointId,
  activeChallenge,
  activeTrack,
  onMarkerClick,
  onMapReady,
}) {
  return (
    <MapContainer
      id="map"
      crs={L.CRS.Simple}
      minZoom={-4}
      maxZoom={4}
      zoomSnap={0.25}
      attributionControl={false}
      zoomControl={false}
      bounds={BOUNDS}
      style={{
        height: "100%",
        width: "100%",
        position: "absolute",
        background: "#C9DCD8",
      }}
    >
      <MapSetup />
      <MapController onMapReady={onMapReady} />
      <ZoomControl position="bottomright" />
      <ImageOverlay url="/img/oahu_maui.webp" bounds={BOUNDS} />

      <RegionLayer regions={regionsData} visible={filters.regions && !sharedPointId} />

      {PLAYLISTS.map((p) => (
        <PlaylistLayer
          key={p.id}
          data={playlistData[p.id] || null}
          filters={filters}
          sharedPointId={sharedPointId}
          onMarkerClick={onMarkerClick}
        />
      ))}

      <MiscLayer
        miscData={miscData}
        rivalsData={rivalsData}
        filters={filters}
        sharedPointId={sharedPointId}
        onMarkerClick={onMarkerClick}
      />

      <ChallengeLayer
        challengesData={challengesData}
        activeChallenge={activeChallenge}
        sharedPointId={sharedPointId}
        onMarkerClick={onMarkerClick}
      />

      <TrackLayer track={activeTrack} />

      {IS_DEV_MODE && <DevCoordinatePicker />}
      {IS_DEV_EDIT_MODE && (
        <DevEditPanel
          playlistData={playlistData}
          miscData={miscData}
          rivalsData={rivalsData}
          challengesData={challengesData}
          regionsData={regionsData}
          offsetRight={IS_DEV_MODE ? 384 : 0}
        />
      )}
    </MapContainer>
  );
}
