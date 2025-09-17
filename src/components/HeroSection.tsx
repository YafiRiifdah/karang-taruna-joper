import React from 'react';
import { Button } from '@/components/ui/button';
import { Users, Heart, Star } from 'lucide-react';
import heroImage from '@/assets/hero-karang-taruna.jpg';

const HeroSection = () => {
  const scrollToActivities = () => {
    const element = document.querySelector('#activities');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
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
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="animate-typing block text-gradient">
              Karang Taruna Mojo Gubeng
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-gray-200 leading-relaxed">
            Organisasi kepemudaan yang berkomitmen membangun generasi muda yang kreatif, 
            produktif, dan berkontribusi untuk kemajuan masyarakat.
          </p>

          <div className="flex justify-center items-center mb-12">
            <Button 
              size="lg" 
              className="bg-orange-500 hover:bg-orange-600 text-white border-2 border-orange-400 hover:border-orange-500 animate-bounce-button transition-all duration-300"
              onClick={scrollToActivities}
            >
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