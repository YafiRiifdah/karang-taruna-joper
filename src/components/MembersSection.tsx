import React from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { User, Mail, Phone, Award } from 'lucide-react';

const MembersSection = () => {
  const leadership = [
    {
      name: "Ahmad Rizki Pratama",
      position: "Ketua",
      division: "Pengurus Inti",
      experience: "3 Tahun",
      achievements: "Penghargaan Pemuda Berprestasi 2023",
      contact: "ahmad.rizki@email.com"
    },
    {
      name: "Siti Nurhaliza",
      position: "Wakil Ketua",
      division: "Pengurus Inti", 
      experience: "2 Tahun",
      achievements: "Koordinator Program Sosial Terbaik",
      contact: "siti.nurhaliza@email.com"
    },
    {
      name: "Budi Santoso",
      position: "Sekretaris",
      division: "Pengurus Inti",
      experience: "2 Tahun",
      achievements: "Pengelola Administrasi Teladan",
      contact: "budi.santoso@email.com"
    },
    {
      name: "Dewi Kartika",
      position: "Bendahara",
      division: "Pengurus Inti",
      experience: "2 Tahun",
      achievements: "Pengelola Keuangan Transparan",
      contact: "dewi.kartika@email.com"
    }
  ];

  const divisions = [
    {
      name: "Divisi Pendidikan",
      head: "Fajar Nugroho",
      members: 8,
      programs: ["Bimbel Gratis", "Pelatihan Komputer", "Workshop Literasi"],
      description: "Mengelola program-program pendidikan dan pengembangan skill"
    },
    {
      name: "Divisi Sosial",
      head: "Rina Suryani",
      members: 10,
      programs: ["Bakti Sosial", "Santunan Yatim", "Bantuan Bencana"],
      description: "Menjalankan kegiatan sosial dan kepedulian masyarakat"
    },
    {
      name: "Divisi Lingkungan",
      head: "Eko Prasetyo",
      members: 12,
      programs: ["Gotong Royong", "Penanaman Pohon", "Bank Sampah"],
      description: "Fokus pada pelestarian dan kebersihan lingkungan"
    },
    {
      name: "Divisi Olahraga",
      head: "Dian Permata",
      members: 15,
      programs: ["Turnamen Kampung", "Senam Rutin", "Liga Futsal"],
      description: "Mengembangkan minat dan bakat olahraga pemuda"
    },
    {
      name: "Divisi Seni Budaya",
      head: "Arif Wijaya",
      members: 7,
      programs: ["Festival Seni", "Pertunjukan Musik", "Pameran Karya"],
      description: "Melestarikan dan mengembangkan seni budaya lokal"
    },
    {
      name: "Divisi Ekonomi",
      head: "Maya Sari",
      members: 9,
      programs: ["Pelatihan Wirausaha", "UMKM Binaan", "Koperasi Pemuda"],
      description: "Mengembangkan potensi ekonomi dan kewirausahaan"
    }
  ];

  return (
    <section className="section-padding bg-warm-gray">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Struktur <span className="text-gradient">Organisasi</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Tim solid yang berdedikasi untuk mengembangkan potensi pemuda dan 
            melayani kepentingan masyarakat dengan penuh tanggung jawab.
          </p>
        </div>

        {/* Leadership */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-12">Pengurus Inti</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {leadership.map((leader, index) => (
              <Card key={index} className="p-6 text-center card-hover bg-white group">
                <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-coral to-accent rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <User className="w-10 h-10 text-white" />
                </div>
                
                <h4 className="text-xl font-semibold mb-2">{leader.name}</h4>
                <Badge className="mb-3 bg-coral text-white">{leader.position}</Badge>
                
                <div className="space-y-2 text-sm text-muted-foreground mb-4">
                  <div className="flex items-center justify-center">
                    <Award className="w-4 h-4 mr-2 text-gold" />
                    {leader.experience}
                  </div>
                </div>
                
                <p className="text-xs text-muted-foreground leading-relaxed mb-4">
                  {leader.achievements}
                </p>
                
                <div className="flex items-center justify-center text-xs text-coral">
                  <Mail className="w-3 h-3 mr-1" />
                  {leader.contact}
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Divisions */}
        <div>
          <h3 className="text-3xl font-bold text-center mb-12">Divisi & Bidang Kerja</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {divisions.map((division, index) => (
              <Card key={index} className="p-6 card-hover bg-white">
                <div className="flex items-start justify-between mb-4">
                  <h4 className="text-lg font-semibold flex-1">{division.name}</h4>
                  <Badge variant="outline" className="text-xs">
                    {division.members} Anggota
                  </Badge>
                </div>
                
                <div className="mb-4">
                  <div className="flex items-center text-sm text-muted-foreground mb-2">
                    <User className="w-4 h-4 mr-2 text-coral" />
                    <span className="font-medium">Ketua: {division.head}</span>
                  </div>
                </div>
                
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  {division.description}
                </p>
                
                <div>
                  <h5 className="text-sm font-medium mb-2 text-coral">Program Utama:</h5>
                  <div className="flex flex-wrap gap-1">
                    {division.programs.map((program, programIndex) => (
                      <Badge 
                        key={programIndex} 
                        variant="secondary" 
                        className="text-xs bg-coral/10 text-coral"
                      >
                        {program}
                      </Badge>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="bg-white p-6 rounded-xl">
            <div className="text-3xl font-bold text-coral mb-2">50+</div>
            <div className="text-sm text-muted-foreground">Total Anggota</div>
          </div>
          <div className="bg-white p-6 rounded-xl">
            <div className="text-3xl font-bold text-gold mb-2">6</div>
            <div className="text-sm text-muted-foreground">Divisi Aktif</div>
          </div>
          <div className="bg-white p-6 rounded-xl">
            <div className="text-3xl font-bold text-accent mb-2">25+</div>
            <div className="text-sm text-muted-foreground">Program Rutin</div>
          </div>
          <div className="bg-white p-6 rounded-xl">
            <div className="text-3xl font-bold text-coral-light mb-2">100%</div>
            <div className="text-sm text-muted-foreground">Komitmen</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MembersSection;