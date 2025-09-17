import React, { useState } from 'react';
import { MapPin, Info } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const MapComponent = () => {
  const [mapboxToken, setMapboxToken] = useState('');
  const [showTokenInput, setShowTokenInput] = useState(true);

  const karangTarunaLocation = {
    lat: -7.2879,
    lng: 112.7936,
    address: "Jojoran 1 Perintis 3, Jojoran 3 Perintis, Jojoran 3 Perintis Dalam, RT 04 RW 13, Kelurahan Mojo, Kecamatan Gubeng, Surabaya"
  };

  const handleTokenSubmit = () => {
    if (mapboxToken.trim()) {
      setShowTokenInput(false);
      // Initialize map with the token
      initializeMap();
    }
  };

  const initializeMap = () => {
    // This would initialize the actual Mapbox map
    // For now, we'll show a placeholder
  };

  if (showTokenInput) {
    return (
      <div className="w-full h-96 flex items-center justify-center bg-warm-gray rounded-xl">
        <Card className="p-6 max-w-md mx-auto">
          <div className="text-center mb-4">
            <MapPin className="w-12 h-12 text-coral mx-auto mb-2" />
            <h3 className="text-lg font-semibold">Peta Lokasi Karang Taruna</h3>
            <p className="text-sm text-muted-foreground mt-2">
              Untuk menampilkan peta interaktif, silakan masukkan Mapbox token Anda
            </p>
          </div>
          <div className="space-y-3">
            <Input
              type="text"
              placeholder="Masukkan Mapbox Public Token"
              value={mapboxToken}
              onChange={(e) => setMapboxToken(e.target.value)}
            />
            <Button 
              onClick={handleTokenSubmit} 
              className="w-full bg-coral hover:bg-coral-dark"
            >
              Tampilkan Peta
            </Button>
            <div className="text-xs text-muted-foreground">
              <Info className="w-4 h-4 inline mr-1" />
              Dapatkan token gratis di{' '}
              <a 
                href="https://mapbox.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-coral hover:underline"
              >
                mapbox.com
              </a>
            </div>
          </div>
        </Card>
      </div>
    );
  }

  return (
    <div className="w-full h-96 bg-warm-gray rounded-xl flex items-center justify-center">
      <div className="text-center">
        <MapPin className="w-16 h-16 text-coral mx-auto mb-4" />
        <h3 className="text-xl font-semibold mb-2">Lokasi Karang Taruna</h3>
        <p className="text-muted-foreground max-w-md">
          {karangTarunaLocation.address}
        </p>
        <Button 
          className="mt-4"
          onClick={() => window.open(`https://maps.google.com/?q=${karangTarunaLocation.lat},${karangTarunaLocation.lng}`, '_blank')}
        >
          Buka di Google Maps
        </Button>
      </div>
    </div>
  );
};

export default MapComponent;