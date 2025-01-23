import Hero from '../components/home/Hero';
import Features from '../components/home/Features';
import Services from '../components/home/Services';
import FeaturedProjects from '../components/home/FeaturedProjects';
import KeyFigures from '../components/home/KeyFigures';
import About from '../components/home/About';
import FAQ from '../components/home/FAQ';
import Clients from '../components/home/Clients';
import BlogPreview from '../components/home/BlogPreview';

export default function Home() {
  return (
    <div className="bg-gray-50 overflow-x-hidden">
      <Hero />
      <Features />
      <Services />
      <FeaturedProjects />
      <KeyFigures />
      <About />
      <FAQ />
      <Clients />
      <BlogPreview />
    </div>
  );
}