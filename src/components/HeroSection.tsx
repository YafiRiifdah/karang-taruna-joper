import React from 'react';
import { Button } from '@/components/ui/button';
import { Users, Heart, Star } from 'lucide-react';
import heroImage from '@/assets/hero-karang-taruna.jpg';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Karang Taruna Hero" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <div className="animate-fade-up">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-relaxed">
            Karang Taruna
            <span className="block text-gradient leading-relaxed pb-2">Mojo Gubeng</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-gray-200 leading-relaxed">
            Organisasi kepemudaan yang berkomitmen membangun generasi muda yang kreatif, 
            produktif, dan berkontribusi untuk kemajuan masyarakat.
          </p>

          <div className="flex justify-center items-center mb-12">
            <Button size="lg" className="bg-white/20 backdrop-blur-sm text-white border-2 border-white hover:bg-white hover:text-coral transition-all duration-300">
              Lihat Kegiatan
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
            <div className="text-center animate-scale-in">
              <div className="text-4xl font-bold text-coral mb-2">50+</div>
              <div className="text-gray-300">Anggota Aktif</div>
            </div>
            <div className="text-center animate-scale-in">
              <div className="text-4xl font-bold text-gold mb-2">25+</div>
              <div className="text-gray-300">Program Tahunan</div>
            </div>
            <div className="text-center animate-scale-in">
              <div className="text-4xl font-bold text-coral-light mb-2">5+</div>
              <div className="text-gray-300">Tahun Berkarya</div>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default HeroSection;