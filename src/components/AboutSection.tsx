import React from 'react';
import { Card } from '@/components/ui/card';
import { Target, Heart, Users, Lightbulb } from 'lucide-react';

const AboutSection = () => {
  const values = [
    {
      icon: Target,
      title: "Tujuan",
      description: "Memberdayakan pemuda untuk aktif dalam pembangunan masyarakat dan mengembangkan potensi diri."
    },
    {
      icon: Heart,
      title: "Kepedulian",
      description: "Menumbuhkan rasa kepedulian terhadap sesama dan lingkungan sekitar melalui berbagai kegiatan sosial."
    },
    {
      icon: Users,
      title: "Kebersamaan",
      description: "Membangun solidaritas dan kerjasama antar pemuda untuk mencapai tujuan bersama."
    },
    {
      icon: Lightbulb,
      title: "Inovasi",
      description: "Mengembangkan kreativitas dan inovasi dalam setiap program dan kegiatan organisasi."
    }
  ];

  return (
    <section className="section-padding bg-warm-gray">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Tentang <span className="text-gradient">Karang Taruna</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Karang Taruna adalah organisasi sosial kemasyarakatan sebagai wadah dan sarana 
            pengembangan setiap anggota masyarakat yang tumbuh dan berkembang atas dasar 
            kesadaran dan tanggung jawab sosial dari, oleh dan untuk masyarakat.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {values.map((value, index) => (
            <Card key={index} className="p-6 text-center card-hover bg-white">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-coral to-accent rounded-full flex items-center justify-center">
                <value.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{value.description}</p>
            </Card>
          ))}
        </div>

        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-6">Visi & Misi</h3>
              
              <div className="mb-8">
                <h4 className="text-xl font-semibold text-coral mb-3">Visi</h4>
                <p className="text-muted-foreground leading-relaxed">
                  Menjadi organisasi kepemudaan yang unggul dalam mengembangkan potensi 
                  pemuda dan berkontribusi aktif dalam pembangunan masyarakat yang sejahtera.
                </p>
              </div>

              <div>
                <h4 className="text-xl font-semibold text-coral mb-3">Misi</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-coral rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Mengembangkan kreativitas dan keterampilan pemuda
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-coral rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Melaksanakan program-program sosial kemasyarakatan
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-coral rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Menjalin kerjasama dengan berbagai pihak
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-coral rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Menjadi wadah aspirasi dan kreativitas pemuda
                  </li>
                </ul>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-gradient-to-br from-coral/10 to-accent/10 p-6 rounded-xl">
                <h4 className="text-lg font-semibold mb-2">Wilayah Kerja</h4>
                <p className="text-muted-foreground text-sm">
                  RT 04 RW 13<br/>
                  Kelurahan Mojo<br/>
                  Kecamatan Gubeng<br/>
                  Surabaya, Jawa Timur
                </p>
              </div>

              <div className="bg-gradient-to-br from-gold/10 to-coral/10 p-6 rounded-xl">
                <h4 className="text-lg font-semibold mb-2">Tahun Berdiri</h4>
                <p className="text-muted-foreground text-sm">
                  Didirikan pada tahun 2019 dengan semangat membangun generasi muda yang berprestasi.
                </p>
              </div>

              <div className="bg-gradient-to-br from-accent/10 to-gold/10 p-6 rounded-xl">
                <h4 className="text-lg font-semibold mb-2">Fokus Kegiatan</h4>
                <p className="text-muted-foreground text-sm">
                  Pendidikan, Sosial, Lingkungan, Kewirausahaan, dan Pengembangan Talenta Pemuda.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;