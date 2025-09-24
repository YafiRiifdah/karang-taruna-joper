// src/components/LocationSection.tsx
import React, { useRef, useEffect, useState } from "react";
import {
  MapContainer as LeafletMap,
  TileLayer,
  Marker,
  Popup,
  LayersControl,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L, { LatLngExpression } from "leaflet";

import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock, Navigation, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

// Fix default icon supaya marker muncul di build
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

// Komponen MapController untuk animasi
function MapController({ center }: { center: LatLngExpression }) {
  const mapRef = useRef<L.Map | null>(null);

  useEffect(() => {
    if (mapRef.current) {
      setTimeout(() => {
        mapRef.current?.flyTo(center, 16, {
          duration: 2,
          easeLinearity: 0.1,
        });
      }, 500);
    }
  }, [center]);

  return null;
}

export default function LocationSection(): JSX.Element {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Alamat",
      content: "Jl. Mojo Gubeng No. 123, Gubeng, Surabaya, Jawa Timur 60281",
      link: "https://maps.google.com/?q=-7.2756,112.7379",
    },
    {
      icon: Phone,
      title: "Telepon",
      content: "+62 812-3456-7890",
      link: "tel:+6281234567890",
    },
    {
      icon: Mail,
      title: "Email",
      content: "karangtaruna.mojogubeng@gmail.com",
      link: "mailto:karangtaruna.mojogubeng@gmail.com",
    },
    {
      icon: Clock,
      title: "Jam Operasional",
      content: "Senin - Jumat: 09:00 - 17:00 WIB",
      link: "#",
    },
  ];

  const position: LatLngExpression = [-7.2756, 112.7379]; // Surabaya coordinates
  const { BaseLayer } = LayersControl;

  return (
    <section id="location" className="section-padding bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-coral rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-coral-light rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 animate-fade-up">
          <div className="inline-flex items-center gap-2 bg-coral/10 text-coral px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Navigation className="w-4 h-4" />
            Temukan Kami
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6 leading-tight">
            Lokasi & Kontak
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Bergabunglah dengan kami untuk membangun masyarakat yang lebih baik. 
            Kami siap berkolaborasi dan berdiskusi dengan Anda.
          </p>
        </div>

        {/* Contact Info */}
        <div className="max-w-4xl mx-auto mb-12 animate-fade-up">
          <h3 className="text-2xl font-bold text-foreground text-center mb-8">
            Informasi Kontak
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {contactInfo.map((info, index) => (
              <Card key={index} className="card-hover hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-coral to-coral-light rounded-lg flex items-center justify-center flex-shrink-0">
                      <info.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">{info.title}</h4>
                      <p className="text-muted-foreground leading-relaxed">{info.content}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Map Section */}
        <div className="animate-fade-up">
          <h3 className="text-2xl font-bold text-foreground text-center mb-8">
            Peta Lokasi
          </h3>

          <Card className="overflow-hidden max-w-4xl mx-auto">
            <CardContent className="p-0">
              <div className="h-96 w-full">
                <LeafletMap center={position} zoom={15} scrollWheelZoom={false} className="h-96 w-full rounded-lg">
                  <LayersControl position="topright">
                    {/* Street Mode */}
                    <BaseLayer checked name="Street">
                      <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                      />
                    </BaseLayer>

                    {/* Satellite Mode */}
                    <BaseLayer name="Satellite">
                      <TileLayer
                        url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
                        attribution="Tiles © Esri"
                      />
                    </BaseLayer>

                    {/* Dark Mode */}
                    <BaseLayer name="Dark Mode">
                      <TileLayer
                        url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
                        attribution="&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors"
                      />
                    </BaseLayer>

                    {/* Light Mode */}
                    <BaseLayer name="Light Mode">
                      <TileLayer
                        url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
                        attribution="&copy; OpenStreetMap contributors"
                      />
                    </BaseLayer>
                  </LayersControl>

                  <Marker position={position}>
                    <Popup>
                      <div className="p-2">
                        <h3 className="font-bold">Karang Taruna Mojo Gubeng</h3>
                        <p>Sekretariat Karang Taruna</p>
                      </div>
                    </Popup>
                  </Marker>
                </LeafletMap>
              </div>
            </CardContent>
          </Card>

          <div className="mt-6 flex gap-4 justify-center">
            <Button
              variant="outline"
              className="border-coral text-coral hover:bg-coral hover:text-white"
              onClick={() =>
                window.open("https://maps.google.com/?q=-7.2756,112.7379", "_blank")
              }
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              Buka di Google Maps
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
