import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ActivitiesSection from '@/components/ActivitiesSection';
import MembersSection from '@/components/MembersSection';
import NewsSection from '@/components/NewsSection';
import LocationSection from '@/components/LocationSection';
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

      <section id="news">
        <NewsSection />
      </section>
      
      <section id="location">
        <LocationSection />
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
