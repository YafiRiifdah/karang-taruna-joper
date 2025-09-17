import React from 'react';
import { Users, MapPin, Phone, Mail, Instagram, Facebook, Twitter, Heart } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { name: 'Tentang Kami', href: '#about' },
    { name: 'Program Kegiatan', href: '#activities' },
    { name: 'Struktur Organisasi', href: '#members' },
    { name: 'Hubungi Kami', href: '#contact' }
  ];

  const programs = [
    'Bimbingan Belajar Gratis',
    'Pelatihan Kewirausahaan',
    'Gotong Royong Lingkungan',
    'Lomba Olahraga Kampung'
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-warm-gray-dark text-white">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Organization Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-coral to-accent rounded-full flex items-center justify-center">
                <Users className="w-7 h-7 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">Karang Taruna</h3>
                <p className="text-white/80">Mojo Gubeng</p>
              </div>
            </div>
            
            <p className="text-white/80 leading-relaxed mb-6 max-w-md">
              Organisasi kepemudaan yang berkomitmen mengembangkan potensi pemuda 
              dan berkontribusi aktif dalam pembangunan masyarakat yang sejahtera.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-coral flex-shrink-0" />
                <span className="text-white/80 text-sm">
                  RT 04 RW 13, Kel. Mojo, Kec. Gubeng, Surabaya
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-coral flex-shrink-0" />
                <span className="text-white/80 text-sm">+62 812-3456-7890</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-coral flex-shrink-0" />
                <span className="text-white/80 text-sm">karangtaruna.mojo@gmail.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Navigasi</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-white/80 hover:text-coral transition-colors text-sm"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Program Unggulan</h4>
            <ul className="space-y-3">
              {programs.map((program, index) => (
                <li key={index} className="text-white/80 text-sm">
                  {program}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social Media & Copyright */}
        <div className="border-t border-white/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-6 mb-4 md:mb-0">
              <span className="text-white/80 text-sm">Ikuti Kami:</span>
              <div className="flex space-x-4">
                <a href="#" className="text-white/80 hover:text-pink-400 transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="text-white/80 hover:text-blue-400 transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="text-white/80 hover:text-sky-400 transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </div>
            
            <div className="flex items-center text-white/80 text-sm">
              <span>Dibuat dengan</span>
              <Heart className="w-4 h-4 text-coral mx-1" />
              <span>untuk masyarakat © 2024</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;