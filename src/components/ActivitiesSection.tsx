import React from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar, Users, MapPin, ArrowRight } from 'lucide-react';
import activitiesImage from '@/assets/activities-karang-taruna.jpg';

const ActivitiesSection = () => {
  const activities = [
    {
      title: "Gotong Royong Lingkungan",
      description: "Kegiatan bersih-bersih lingkungan dan penanaman pohon untuk menjaga kebersihan dan kelestarian lingkungan.",
      schedule: "Setiap Minggu ke-2",
      participants: "30+ Peserta",
      category: "Lingkungan",
      status: "Rutin"
    },
    {
      title: "Pelatihan Kewirausahaan",
      description: "Workshop dan pelatihan untuk mengembangkan jiwa wirausaha pemuda dengan berbagai skill bisnis.",
      schedule: "Bulanan",
      participants: "25+ Peserta",
      category: "Ekonomi",
      status: "Program Unggulan"
    },
    {
      title: "Lomba Olahraga Kampung",
      description: "Turnamen sepak bola, voli, dan badminton untuk mempererat tali silaturahmi antar warga.",
      schedule: "17 Agustus",
      participants: "100+ Peserta",
      category: "Olahraga",
      status: "Tahunan"
    },
    {
      title: "Bimbingan Belajar Gratis",
      description: "Program les gratis untuk anak-anak kurang mampu dalam mata pelajaran dasar.",
      schedule: "Selasa & Kamis",
      participants: "20+ Anak",
      category: "Pendidikan",
      status: "Rutin"
    },
    {
      title: "Bakti Sosial Ramadan",
      description: "Pembagian takjil gratis dan santunan kepada masyarakat kurang mampu selama bulan Ramadan.",
      schedule: "Bulan Ramadan",
      participants: "50+ Penerima",
      category: "Sosial",
      status: "Tahunan"
    },
    {
      title: "Festival Seni Budaya",
      description: "Pameran karya seni, pentas musik, dan pertunjukan budaya lokal untuk melestarikan budaya.",
      schedule: "Desember",
      participants: "200+ Pengunjung",
      category: "Budaya",
      status: "Tahunan"
    }
  ];

  const getCategoryColor = (category: string) => {
    const colors = {
      "Lingkungan": "bg-green-100 text-green-800",
      "Ekonomi": "bg-blue-100 text-blue-800",
      "Olahraga": "bg-orange-100 text-orange-800",
      "Pendidikan": "bg-purple-100 text-purple-800",
      "Sosial": "bg-pink-100 text-pink-800",
      "Budaya": "bg-yellow-100 text-yellow-800"
    };
    return colors[category as keyof typeof colors] || "bg-gray-100 text-gray-800";
  };

  return (
    <section className="section-padding">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Program & <span className="text-gradient">Kegiatan</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Berbagai program dan kegiatan yang kami laksanakan untuk mengembangkan potensi 
            pemuda dan memberikan manfaat bagi masyarakat sekitar.
          </p>
        </div>

        {/* Featured Image */}
        <div className="mb-16 relative rounded-2xl overflow-hidden">
          <img 
            src={activitiesImage} 
            alt="Kegiatan Karang Taruna" 
            className="w-full h-64 md:h-80 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
            <div className="p-8 text-white">
              <h3 className="text-2xl font-bold mb-2">Kegiatan Bersama Masyarakat</h3>
              <p className="text-gray-200">Membangun kebersamaan melalui berbagai program komunitas</p>
            </div>
          </div>
        </div>

        {/* Activities Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {activities.map((activity, index) => (
            <Card key={index} className="p-6 card-hover group">
              <div className="flex justify-between items-start mb-4">
                <Badge className={getCategoryColor(activity.category)}>
                  {activity.category}
                </Badge>
                <Badge variant="outline" className="text-xs">
                  {activity.status}
                </Badge>
              </div>

              <h3 className="text-xl font-semibold mb-3 group-hover:text-coral transition-colors">
                {activity.title}
              </h3>
              
              <p className="text-muted-foreground mb-4 leading-relaxed">
                {activity.description}
              </p>

              <div className="space-y-2 mb-6">
                <div className="flex items-center text-sm text-muted-foreground">
                  <Calendar className="w-4 h-4 mr-2 text-coral" />
                  {activity.schedule}
                </div>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Users className="w-4 h-4 mr-2 text-coral" />
                  {activity.participants}
                </div>
              </div>

              <Button variant="ghost" className="w-full group-hover:bg-coral group-hover:text-white transition-colors">
                Selengkapnya
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-coral to-accent rounded-2xl p-8 md:p-12 text-white">
          <h3 className="text-3xl font-bold mb-4">Ingin Bergabung Dalam Kegiatan?</h3>
          <p className="text-xl mb-8 text-white/90">
            Ikuti berbagai program menarik kami dan berkontribusi untuk kemajuan masyarakat.
          </p>
          <Button size="lg" variant="secondary" className="bg-white text-coral hover:bg-gray-100">
            <Users className="mr-2 h-5 w-5" />
            Hubungi Kami Sekarang
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ActivitiesSection;