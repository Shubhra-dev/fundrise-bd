import { useRef } from 'react';
import {
  MapContainer,
  TileLayer,
  ZoomControl,
  CircleMarker,
  Tooltip,
  LayersControl,
  Pane,
  useMap,
} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

function Recenter({ center }) {
  const map = useMap();
  map.setView(center);
  return null;
}

export default function OsmMap({
  center = [28.6762, -81.5119], // Apopka, FL
  zoom = 12,
  height = '360px',
  showMarker = true,
  markerLabel = 'Selected location',
  className = '',
}) {
  const wrapRef = useRef(null);

  const openInOSM = () => {
    const [lat, lon] = center;
    const url = `https://www.openstreetmap.org/?mlat=${lat}&mlon=${lon}#map=${zoom}/${lat}/${lon}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const toggleFullscreen = () => {
    const el = wrapRef.current;
    if (!document.fullscreenElement) {
      el?.requestFullscreen?.();
    } else {
      document.exitFullscreen?.();
    }
  };

  return (
    <div
      ref={wrapRef}
      className={`relative rounded-xl overflow-hidden shadow-sm ${className}`}
      style={{ height }}
    >
      {/* overlay action buttons */}
      <div className="absolute z-[500] right-3 top-3 flex gap-2">
        <button
          onClick={toggleFullscreen}
          className="rounded-md bg-white/90 border border-gray-200 px-3 py-1.5 text-xs shadow hover:bg-white"
          title="Fullscreen"
        >
          Fullscreen
        </button>
        <button
          onClick={openInOSM}
          className="rounded-md bg-white/90 border border-gray-200 px-3 py-1.5 text-xs shadow hover:bg-white"
          title="Open in OpenStreetMap"
        >
          Open in OSM
        </button>
      </div>

      <MapContainer
        center={center}
        zoom={zoom}
        className="h-full w-full"
        zoomControl={false}
        scrollWheelZoom={true}
        attributionControl={true}
      >
        {/* Base layers with labels */}
        <LayersControl position="bottomleft">
          <LayersControl.BaseLayer checked name="OSM Standard (labels)">
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
          </LayersControl.BaseLayer>

          {/* Carto Light: separate labels layer so text floats above geometry */}
          <LayersControl.BaseLayer name="Carto Light (floating labels)">
            <>
              <TileLayer
                url="https://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}{r}.png"
                attribution='&copy; OSM &copy; <a href="https://carto.com/attributions">CARTO</a>'
              />
              <Pane name="labels" style={{ zIndex: 450, pointerEvents: 'none' }}>
                <TileLayer url="https://{s}.basemaps.cartocdn.com/light_only_labels/{z}/{x}/{y}{r}.png" />
              </Pane>
            </>
          </LayersControl.BaseLayer>

          <LayersControl.BaseLayer name="Carto Dark (floating labels)">
            <>
              <TileLayer url="https://{s}.basemaps.cartocdn.com/dark_nolabels/{z}/{x}/{y}{r}.png" />
              <Pane name="labels-dark" style={{ zIndex: 450, pointerEvents: 'none' }}>
                <TileLayer url="https://{s}.basemaps.cartocdn.com/dark_only_labels/{z}/{x}/{y}{r}.png" />
              </Pane>
            </>
          </LayersControl.BaseLayer>
        </LayersControl>

        <ZoomControl position="topleft" />

        {showMarker && (
          <CircleMarker
            center={center}
            radius={7}
            pathOptions={{ color: '#A1352C', fillColor: '#C44', fillOpacity: 0.9 }}
          >
            {/* Always-visible marker label (optional) */}
            {markerLabel && (
              <Tooltip permanent direction="top" offset={[0, -8]}>
                {markerLabel}
              </Tooltip>
            )}
          </CircleMarker>
        )}

        <Recenter center={center} />
      </MapContainer>
    </div>
  );
}
