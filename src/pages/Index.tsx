import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ActivitiesSection from '@/components/ActivitiesSection';
import MembersSection from '@/components/MembersSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <section id="home">
        <HeroSection />
      </section>
      
      <section id="about">
        <AboutSection />
      </section>
      
      <section id="activities">
        <ActivitiesSection />
      </section>
      
      <section id="members">
        <MembersSection />
      </section>
      
      <section id="contact">
        <ContactSection />
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
