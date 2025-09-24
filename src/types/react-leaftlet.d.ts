// src/types/react-leaflet.d.ts
declare module "react-leaflet" {
  import * as React from "react";
  import * as L from "leaflet";

  export interface MapContainerProps extends React.HTMLAttributes<HTMLDivElement> {
    center: L.LatLngExpression;
    zoom?: number;
    scrollWheelZoom?: boolean;
    className?: string;
    whenCreated?: (map: L.Map) => void;
    children?: React.ReactNode;
  }
  export const MapContainer: React.FC<MapContainerProps>;

  export interface TileLayerProps {
    url: string;
    attribution?: string;
    children?: React.ReactNode;
  }
  export const TileLayer: React.FC<TileLayerProps>;

  export interface MarkerProps {
    position: L.LatLngExpression;
    children?: React.ReactNode;
  }
  export const Marker: React.FC<MarkerProps>;

  export interface PopupProps {
    children?: React.ReactNode;
  }
  export const Popup: React.FC<PopupProps>;

  export interface LayersControlProps extends React.HTMLAttributes<HTMLDivElement> {
    position?: "topright" | "topleft" | "bottomright" | "bottomleft";
    children?: React.ReactNode;
  }

  export interface BaseLayerProps {
    name?: string;
    checked?: boolean;
    children?: React.ReactNode;
  }
  export interface OverlayProps {
    name?: string;
    checked?: boolean;
    children?: React.ReactNode;
  }

  export const LayersControl: React.FC<LayersControlProps> & {
    BaseLayer: React.FC<BaseLayerProps>;
    Overlay: React.FC<OverlayProps>;
  };

  // <-- Tambahkan hook useMap di sini
  export function useMap(): L.Map;
}
