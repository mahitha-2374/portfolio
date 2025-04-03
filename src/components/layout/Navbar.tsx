
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Handle scroll events to change navbar appearance
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
      
      // Update active section based on scroll position
      const sections = document.querySelectorAll('section[id]');
      sections.forEach(section => {
        const sectionTop = (section as HTMLElement).offsetTop - 100;
        const sectionHeight = (section as HTMLElement).offsetHeight;
        const sectionId = section.getAttribute('id');
        
        if (
          window.scrollY >= sectionTop &&
          window.scrollY < sectionTop + sectionHeight &&
          sectionId
        ) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll to section when nav item is clicked
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // Adjust as needed for your layout
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out px-4 py-3',
        isScrolled
          ? 'bg-white/80 backdrop-blur-md shadow-sm'
          : 'bg-transparent'
      )}
    >
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            className="text-xl font-bold text-foreground transition-colors hover:text-primary"
          >
            <span className="font-mono">{'<'}</span>
            <span className="text-primary">Mahitha</span>
            <span className="font-mono">{'/>'}</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex md:items-center md:space-x-6">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.href.substring(1));
                }}
                className={cn(
                  'nav-link text-sm',
                  activeSection === item.href.substring(1)
                    ? 'text-primary font-medium after:scale-x-100 after:origin-bottom-left'
                    : ''
                )}
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Resume Button (Desktop) */}
          <div className="hidden md:block">
            <a
              href="https://drive.google.com/file/d/1wwT3X51ApTrGa8J64RJ9zCNpBF0Ovvr1/view?usp=sharing" // Add link to your resume
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-sm py-2"
            >
              Resume
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={cn(
          'fixed inset-0 top-[57px] z-40 bg-white/90 backdrop-blur-lg transition-transform duration-300 ease-in-out md:hidden',
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        <nav className="flex flex-col items-center justify-center h-full space-y-8 py-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(item.href.substring(1));
              }}
              className={cn(
                'text-lg font-medium transition-colors',
                activeSection === item.href.substring(1)
                  ? 'text-primary'
                  : 'text-foreground hover:text-primary'
              )}
            >
              {item.name}
            </a>
          ))}
          <a
            href="https://drive.google.com/file/d/1wwT3X51ApTrGa8J64RJ9zCNpBF0Ovvr1/view?usp=sharing" // Add link to your resume
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary mt-4"
          >
            Resume
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;