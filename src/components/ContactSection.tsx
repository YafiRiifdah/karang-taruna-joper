import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { MapPin, Phone, Mail, Clock, Send, Instagram, Facebook, Twitter } from 'lucide-react';
import MapComponent from './MapComponent';

const ContactSection = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Alamat",
      content: "Jojoran 1 Perintis 3, Jojoran 3 Perintis, Jojoran 3 Perintis Dalam",
      subcontent: "RT 04 RW 13, Kel. Mojo, Kec. Gubeng, Surabaya"
    },
    {
      icon: Phone,
      title: "Telepon",
      content: "+62 812-3456-7890",
      subcontent: "WhatsApp tersedia"
    },
    {
      icon: Mail,
      title: "Email",
      content: "karangtaruna.mojo@gmail.com",
      subcontent: "Respon dalam 24 jam"
    },
    {
      icon: Clock,
      title: "Jam Operasional",
      content: "Senin - Sabtu: 16:00 - 21:00",
      subcontent: "Minggu: 08:00 - 12:00"
    }
  ];

  const socialMedia = [
    { icon: Instagram, name: "Instagram", handle: "@karangtaruna_mojo", color: "text-pink-500" },
    { icon: Facebook, name: "Facebook", handle: "Karang Taruna Mojo", color: "text-blue-500" },
    { icon: Twitter, name: "Twitter", handle: "@kt_mojo", color: "text-sky-500" }
  ];

  return (
    <section className="section-padding">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Hubungi <span className="text-gradient">Kami</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Punya pertanyaan atau ingin bergabung? Jangan ragu untuk menghubungi kami. 
            Tim kami siap membantu dan menjawab semua pertanyaan Anda.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Form */}
          <Card className="p-8">
            <h3 className="text-2xl font-bold mb-6">Kirim Pesan</h3>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">Nama Lengkap</label>
                  <Input placeholder="Masukkan nama lengkap" />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Email</label>
                  <Input type="email" placeholder="nama@email.com" />
                </div>
              </div>
              
              <div>
                <label className="text-sm font-medium mb-2 block">Nomor WhatsApp</label>
                <Input placeholder="+62 812-3456-7890" />
              </div>
              
              <div>
                <label className="text-sm font-medium mb-2 block">Subjek</label>
                <Input placeholder="Pilih subjek pesan" />
              </div>
              
              <div>
                <label className="text-sm font-medium mb-2 block">Pesan</label>
                <Textarea 
                  placeholder="Tulis pesan Anda di sini..." 
                  className="min-h-32"
                />
              </div>
              
              <Button className="w-full bg-coral hover:bg-coral-dark">
                <Send className="w-4 h-4 mr-2" />
                Kirim Pesan
              </Button>
            </form>
          </Card>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold mb-6">Informasi Kontak</h3>
            
            {contactInfo.map((info, index) => (
              <Card key={index} className="p-6 card-hover">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-coral to-accent rounded-lg flex items-center justify-center flex-shrink-0">
                    <info.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">{info.title}</h4>
                    <p className="text-muted-foreground mb-1">{info.content}</p>
                    <p className="text-sm text-muted-foreground">{info.subcontent}</p>
                  </div>
                </div>
              </Card>
            ))}

            {/* Social Media */}
            <Card className="p-6">
              <h4 className="font-semibold mb-4">Media Sosial</h4>
              <div className="space-y-3">
                {socialMedia.map((social, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <social.icon className={`w-5 h-5 ${social.color}`} />
                    <div>
                      <div className="font-medium">{social.name}</div>
                      <div className="text-sm text-muted-foreground">{social.handle}</div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>

        {/* Map Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8">Lokasi Kami</h3>
          <MapComponent />
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-coral to-accent rounded-2xl p-8 md:p-12 text-white">
          <h3 className="text-3xl font-bold mb-4">Bergabunglah Dengan Kami!</h3>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Mari bersama-sama membangun generasi muda yang kreatif, produktif, 
            dan berkontribusi untuk kemajuan masyarakat.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-coral hover:bg-gray-100">
              Daftar Sekarang
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-coral"
            >
              Download Brosur
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;