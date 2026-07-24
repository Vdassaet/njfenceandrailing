import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path: string) => {
    return location.pathname === path ? 'text-primary border-b-2 border-primary pb-1' : 'text-on-surface-variant hover:text-primary';
  };

  return (
    <header className={`border-b border-outline-variant shadow-md docked full-width top-0 sticky z-50 transition-all ${scrolled ? 'bg-background/95 backdrop-blur-md' : 'bg-background'}`}>
      <div className="flex justify-between items-center max-w-container-max mx-auto px-gutter py-4">
        <Link to="/" className="text-headline-md font-headline-md font-black text-primary uppercase tracking-tighter">
          NJ Fence and Railing
        </Link>
        <nav className="hidden md:flex items-center gap-8">
          <Link className={`font-bold transition-colors duration-300 ${isActive('/services')}`} to="/services">Services</Link>
          <Link className={`font-bold transition-colors duration-300 ${isActive('/portfolio')}`} to="/portfolio">Portfolio</Link>
          <Link className={`font-bold transition-colors duration-300 ${isActive('/reviews')}`} to="/reviews">Reviews</Link>
          <Link className={`font-bold transition-colors duration-300 ${isActive('/contact')}`} to="/contact">Contact</Link>
        </nav>
        <Link to="/contact" className="bg-primary text-on-primary px-6 py-2 rounded-none font-label-bold text-label-bold uppercase tracking-widest hover:brightness-110 active:scale-95 transition-all inline-block">
          Get a Quote
        </Link>
      </div>
    </header>
  );
}
