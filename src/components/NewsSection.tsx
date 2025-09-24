import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, Eye, Users } from 'lucide-react';

const NewsSection = () => {
  const news = [
    {
      id: 1,
      title: 'Kegiatan Bakti Sosial di Kelurahan Mojo',
      excerpt: 'Karang Taruna Mojo Gubeng mengadakan bakti sosial berupa pembagian sembako kepada warga kurang mampu di RT 04 RW 13.',
      date: '2024-03-15',
      category: 'Sosial',
      image: '/src/assets/activities-karang-taruna.jpg',
      views: 234,
      participants: 25
    },
    {
      id: 2,
      title: 'Pelatihan Keterampilan Digital untuk Pemuda',
      excerpt: 'Program pelatihan komputer dan digital marketing untuk pemuda karang taruna dalam rangka meningkatkan kemampuan di era digital.',
      date: '2024-03-10',
      category: 'Pendidikan',
      image: '/src/assets/hero-karang-taruna.jpg',
      views: 189,
      participants: 30
    },
    {
      id: 3,
      title: 'Gotong Royong Pembersihan Lingkungan',
      excerpt: 'Kegiatan rutin mingguan membersihkan lingkungan RT 04 RW 13 bersama warga untuk menjaga kebersihan dan kenyamanan lingkungan.',
      date: '2024-03-08',
      category: 'Lingkungan',
      image: '/src/assets/activities-karang-taruna.jpg',
      views: 156,
      participants: 18
    },
    {
      id: 4,
      title: 'Peringatan Hari Kemerdekaan Indonesia',
      excerpt: 'Berbagai lomba dan kegiatan dalam rangka memperingati HUT RI ke-78 dengan antusias bersama seluruh warga RT 04 RW 13.',
      date: '2024-08-17',
      category: 'Acara',
      image: '/src/assets/hero-karang-taruna.jpg',
      views: 298,
      participants: 45
    },
    {
      id: 5,
      title: 'Workshop Kewirausahaan Pemuda',
      excerpt: 'Menghadirkan narasumber ahli untuk memberikan pelatihan kewirausahaan kepada pemuda karang taruna agar dapat mandiri secara ekonomi.',
      date: '2024-02-28',
      category: 'Ekonomi',
      image: '/src/assets/activities-karang-taruna.jpg',
      views: 167,
      participants: 22
    },
    {
      id: 6,
      title: 'Rapat Koordinasi Bulanan Pengurus',
      excerpt: 'Evaluasi program kerja bulan sebelumnya dan perencanaan kegiatan bulan mendatang untuk meningkatkan kinerja organisasi.',
      date: '2024-02-25',
      category: 'Organisasi',
      image: '/src/assets/hero-karang-taruna.jpg',
      views: 89,
      participants: 12
    }
  ];

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      'Sosial': 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200',
      'Pendidikan': 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
      'Lingkungan': 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-200',
      'Acara': 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200',
      'Ekonomi': 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200',
      'Organisasi': 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200'
    };
    return colors[category] || 'bg-gray-100 text-gray-800';
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('id-ID', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <section className="section-padding bg-warm-gray">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 animate-fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-6 leading-relaxed pb-2">
            Berita & Kegiatan
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ikuti perkembangan terbaru kegiatan dan program Karang Taruna Mojo Gubeng
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {news.map((item, index) => (
            <Card 
              key={item.id} 
              className="card-hover bg-card border-0 shadow-soft overflow-hidden group animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4">
                  <Badge className={getCategoryColor(item.category)}>
                    {item.category}
                  </Badge>
                </div>
              </div>

              <CardHeader className="pb-3">
                <CardTitle className="text-lg leading-tight line-clamp-2 group-hover:text-primary transition-colors">
                  {item.title}
                </CardTitle>
              </CardHeader>

              <CardContent className="pt-0">
                <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3 mb-4">
                  {item.excerpt}
                </p>
                
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    <span>{formatDate(item.date)}</span>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-1">
                      <Eye className="w-3 h-3" />
                      <span>{item.views}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="w-3 h-3" />
                      <span>{item.participants}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="btn-hero">
            Lihat Semua Berita
          </button>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;