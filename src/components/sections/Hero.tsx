import { ArrowDown } from 'lucide-react';
import { useMouseParallax } from '@/utils/animations';

const Hero = () => {
  const mouseParallax = useMouseParallax(0.03);

  // Scroll to about section
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center py-16 px-4 overflow-hidden"
    >
      {/* Background elements */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-10" 
        style={{ 
          backgroundImage: 'radial-gradient(circle at 20% 20%, rgba(67, 137, 255, 0.8) 0%, rgba(0, 0, 0, 0) 40%), radial-gradient(circle at 80% 80%, rgba(67, 137, 255, 0.8) 0%, rgba(0, 0, 0, 0) 40%)',
          transform: `translate3d(${mouseParallax.x * 20}px, ${mouseParallax.y * 20}px, 0)`,
        }}
      />

      {/* Content */}
      <div className="text-center z-10 max-w-4xl mx-auto">
        <div className="mb-3 inline-block animate-fade-in">
          <img 
            src="https://ik.imagekit.io/mahitha/Screenshot%202025-03-20%20165936.png?updatedAt=1742470200037"
            alt="Avatar"
            className="w-16 md:w-20 lg:w-24 mb-4 mx-auto"
          />
          <span className="px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium">
            Full Stack Developer
          </span>
        </div>
        
        <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-6 animate-fade-in flex items-center justify-center gap-4">
          Hi, I'm{" "}
          <span className="text-primary relative inline-block">
            Namdigam Mahitha Chowdary
            <span className="absolute -bottom-1 left-0 w-full h-1 bg-primary/30 rounded-full"></span>
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 animate-fade-in">
          Crafting cool code, and turning ideas into reality.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8 animate-fade-in">
          <a
            href="#contact"
            className="btn-primary w-full sm:w-auto"
          >
            Get in touch
          </a>
          <a
            href="#projects"
            className="btn-outline w-full sm:w-auto"
          >
            View my work
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToAbout}
        className="scroll-indicator"
        aria-label="Scroll to about section"
      >
        <span className="text-muted-foreground text-sm mb-2">Scroll</span>
        <ArrowDown className="w-4 h-4 text-primary mb-2" />
        <div className="scroll-indicator-line"></div>
      </button>
    </section>
  );
};

export default Hero;