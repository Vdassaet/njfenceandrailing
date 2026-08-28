import { useState, useEffect, useRef, useCallback, memo } from 'react';
import { useLocation } from 'react-router-dom';

type Album = {
  title: string;
  description: string;
  images: string[];
};

const fencesAlbums: Album[] = [
  {
    title: "Vinyl Fences",
    description: "Low-maintenance and durable vinyl fencing for lasting privacy and aesthetic appeal.",
    images: [
      '/images/vinyl fence/3563098f17672a7672e7426712fe5b25.jpg',
      '/images/vinyl fence/b942172dad401d958453de8cb4a741ad.jpg',
      '/images/vinyl fence/f2d060d2fcfe502ce965f3fbd7b14686.jpg'
    ]
  },
  {
    title: "Aluminum Fences",
    description: "Elegant and sturdy aluminum fences that provide premium security without sacrificing your view.",
    images: [
      '/images/aluminum fences/39562273cc2544956a69fe8ac00a1d79.jpg',
      '/images/aluminum fences/762babe79f4ad360ab86b27a930dc4a5.jpg',
      '/images/aluminum fences/87e5ba3df5e272f80ec69807a3bc7136.jpg'
    ]
  },
  {
    title: "Chainlink Fences",
    description: "Cost-effective, reliable chainlink solutions for both residential and commercial perimeters.",
    images: [
      '/images/chainlink fence/6851c0ae780c42069983ac19308a074b.jpg',
      '/images/chainlink fence/d52cb6604e09442fe2131cd206cf4b42.jpg',
      '/images/chainlink fence/f7a9e0b766f3b1a1fb3776f56dd41ab2.jpg',
      '/images/chainlink fence/s1.png.jpg'
    ]
  }
];

const railingsAlbums: Album[] = [
  {
    title: "Aluminum Railings",
    description: "Modern and weather-resistant aluminum railings perfect for decks, balconies, and stairs.",
    images: [
      '/images/aluminum railing/1.jpg',
      '/images/aluminum railing/2.jpg',
      '/images/aluminum railing/3.jpg',
      '/images/aluminum railing/4.jpg',
      '/images/aluminum railing/6.jpg',
      '/images/aluminum railing/8.jpg',
      '/images/aluminum railing/10.jpg',
      '/images/aluminum railing/11.jpg',
      '/images/aluminum railing/12.jpg',
      '/images/aluminum railing/2c4db562c583a796a2c024d849fefa4e.jpg',
      '/images/aluminum railing/4f8c841c865e5e8828555d5446627e2b.jpg',
      '/images/aluminum railing/5397794e5a982fb260e324c45b5febca.jpg',
      '/images/aluminum railing/5b9a84c80fc4c0619782beef6054dcf3.jpg',
      '/images/aluminum railing/a1f6da3c772cc8be1a2039230018958d.jpg',
      '/images/aluminum railing/c27f00f67f3c66b82dd1af5480dd38a0.jpg'
    ]
  },
  {
    title: "Metal Railings",
    description: "Custom wrought iron and metal railings crafted for exceptional strength and timeless design.",
    images: [
      '/images/Metal railings/13.jpg',
      '/images/Metal railings/14.jpg',
      '/images/Metal railings/029f84754d0610355a1da3d198d27c8d.jpg',
      '/images/Metal railings/26e49a78162ad2ce3b327ab6cd52b6c1.jpg',
      '/images/Metal railings/4053ca8d5727e6a282deed2c4fb77d6b.jpg',
      '/images/Metal railings/40646ee3c7014d3aadbc52ecf5396f4a.jpg',
      '/images/Metal railings/58a06a64e70ad9b5b6930f0e5752b951.jpg',
      '/images/Metal railings/6980567e01f075096f9b8a1e635d49d8.jpg',
      '/images/Metal railings/7f11886230dd432458a2f74390a227ba.jpg',
      '/images/Metal railings/8da22e38a8120cc4712036bf68fb7d99.jpg',
      '/images/Metal railings/cbd1aeaeb0e1a767886582eb999d6813.jpg'
    ]
  },
  {
    title: "PVC Railings",
    description: "Clean, classic, and completely maintenance-free PVC railing systems.",
    images: [
      '/images/pvc railing/f29b4a64fae6ca6c511dd265c8f88a84.jpg',
      '/images/pvc railing/pvc1.png',
      '/images/pvc railing/pvc2.png',
      '/images/pvc railing/pvc3.png'
    ]
  }
];

const weldingAlbums: Album[] = [
  {
    title: "Mobile Welding Repair",
    description: "On-site professional welding and repair services to restore the structural integrity of your metalwork.",
    images: [
      '/videos/mobile_welding.mp4',
      '/images/mobile welding repair/9819a169669b5905c58a35991c57e9f6.webp',
      '/images/mobile welding repair/aeee0835dbad26f1b3e1eadf852374ba.jpg'
    ]
  }
];

type Category = 'All' | 'Fences' | 'Railings' | 'Welding & Repair';

type ProjectItem = {
  id: string;
  url: string;
  isVideo: boolean;
  title: string;
  category: Category;
  description: string;
};

// Flatten all data into a single array of items
const allProjects: ProjectItem[] = [];
let idCounter = 0;

const processAlbums = (albums: Album[], categoryName: Category) => {
  albums.forEach(album => {
    album.images.forEach(img => {
      allProjects.push({
        id: `proj-${idCounter++}`,
        url: img,
        isVideo: img.endsWith('.mp4'),
        title: album.title,
        category: categoryName,
        description: album.description
      });
    });
  });
};

processAlbums(fencesAlbums, 'Fences');
processAlbums(railingsAlbums, 'Railings');
processAlbums(weldingAlbums, 'Welding & Repair');

// We need a RevealCard component for the scroll animation
const RevealCard = memo(({ item, onClick, index }: { item: ProjectItem, onClick: () => void, index: number }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.disconnect();
      }
    }, { threshold: 0.1, rootMargin: '50px' });
    
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  // Using a staggered delay based on index for a cascading effect when mounting
  const delay = (index % 12) * 50;

  return (
    <div 
      ref={ref}
      onClick={onClick}
      className={`group cursor-pointer relative aspect-square bg-surface-container-high overflow-hidden rounded-xl border border-outline-variant/30 shadow-sm hover:shadow-lg transition-all duration-700 ease-[cubic-bezier(0.25,0.1,0.25,1)] transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {item.isVideo ? (
        <video src={item.url} className="absolute inset-0 w-full h-full object-cover transition-transform duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:scale-[1.04]" autoPlay muted loop playsInline />
      ) : (
        <img src={item.url} alt={item.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:scale-[1.04]" loading="lazy" />
      )}
      
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-colors duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1)]"></div>
      
      {/* Content */}
      <div className="absolute inset-0 p-6 flex flex-col justify-end opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1)]">
        <span className="text-white/80 font-label-bold text-xs uppercase tracking-[0.2em] mb-2">{item.category}</span>
        <h3 className="text-white font-headline-sm mb-4 leading-tight">{item.title}</h3>
        <div className="flex items-center gap-2 text-white font-label-bold text-sm uppercase tracking-widest mt-auto">
          <span className="material-symbols-outlined text-[18px]">visibility</span>
          View Gallery
        </div>
      </div>
    </div>
  );
});
RevealCard.displayName = 'RevealCard';

// Lightbox Component
const Lightbox = ({ 
  items, 
  initialIndex, 
  onClose 
}: { 
  items: ProjectItem[], 
  initialIndex: number, 
  onClose: () => void 
}) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [touchStart, setTouchStart] = useState(0);

  const item = items[currentIndex];

  const handleNext = useCallback(() => {
    setCurrentIndex(prev => (prev + 1) % items.length);
  }, [items.length]);

  const handlePrev = useCallback(() => {
    setCurrentIndex(prev => (prev - 1 + items.length) % items.length);
  }, [items.length]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [onClose, handleNext, handlePrev]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md animate-in fade-in duration-300">
      {/* Header */}
      <div className="absolute top-0 left-0 right-0 p-4 md:p-8 flex justify-between items-center z-20">
        <div className="text-white">
          <p className="text-sm font-label-bold uppercase tracking-[0.2em] opacity-70">{currentIndex + 1} / {items.length}</p>
        </div>
        <button onClick={onClose} className="w-12 h-12 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors">
          <span className="material-symbols-outlined">close</span>
        </button>
      </div>

      {/* Nav */}
      <button onClick={handlePrev} className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 w-14 h-14 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-20 hidden sm:flex">
        <span className="material-symbols-outlined text-[28px]">chevron_left</span>
      </button>
      <button onClick={handleNext} className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 w-14 h-14 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-20 hidden sm:flex">
        <span className="material-symbols-outlined text-[28px]">chevron_right</span>
      </button>

      {/* Content */}
      <div 
        className="relative w-full h-full flex flex-col items-center justify-center p-4 sm:p-12 md:p-24"
        onTouchStart={e => setTouchStart(e.touches[0].clientX)}
        onTouchEnd={e => {
          const touchEnd = e.changedTouches[0].clientX;
          if (touchStart - touchEnd > 50) handleNext();
          if (touchEnd - touchStart > 50) handlePrev();
        }}
      >
        <div className="relative w-full h-full flex items-center justify-center max-h-[70vh]">
          {item.isVideo ? (
            <video key={item.url} src={item.url} autoPlay controls className="max-w-full max-h-full object-contain shadow-2xl rounded-md animate-in zoom-in-95 duration-300" />
          ) : (
            <img key={item.url} src={item.url} alt={item.title} className="max-w-full max-h-full object-contain shadow-2xl rounded-md animate-in zoom-in-95 duration-300" />
          )}
        </div>
        
        {/* Info */}
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 bg-gradient-to-t from-black via-black/80 to-transparent">
          <div className="max-w-4xl mx-auto text-center animate-in slide-in-from-bottom-4 duration-500">
            <span className="text-primary font-label-bold text-xs uppercase tracking-[0.2em] mb-2 block">{item.category}</span>
            <h2 className="text-white text-2xl md:text-3xl font-light mb-3">{item.title}</h2>
            <p className="text-white/70 text-sm md:text-base font-light tracking-wide max-w-2xl mx-auto">{item.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

const categories: Category[] = ['All', 'Fences', 'Railings', 'Welding & Repair'];

export default function Portfolio() {
  const location = useLocation();
  const initialCategory = location.state?.activeTab 
    ? (location.state.activeTab === 'fences' ? 'Fences' 
       : location.state.activeTab === 'railings' ? 'Railings' 
       : 'Welding & Repair')
    : 'All';

  const [activeCategory, setActiveCategory] = useState<Category>(initialCategory as Category);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  useEffect(() => {
    if (location.state?.activeTab) {
      const cat = location.state.activeTab === 'fences' ? 'Fences' 
       : location.state.activeTab === 'railings' ? 'Railings' 
       : 'Welding & Repair';
      setActiveCategory(cat);
    }
  }, [location.state]);

  const filteredProjects = activeCategory === 'All' 
    ? allProjects 
    : allProjects.filter(p => p.category === activeCategory);

  // Close lightbox when category changes
  useEffect(() => setLightboxIndex(null), [activeCategory]);

  return (
    <main className="py-section-padding-desktop bg-background min-h-screen">
      <div className="max-w-container-max mx-auto px-gutter">
        <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom-8 duration-700">
          <h1 className="text-display-lg font-display-lg text-on-surface mb-4">Our <span className="text-primary">Portfolio</span></h1>
          <p className="text-body-lg font-body-lg text-on-surface-variant max-w-2xl mx-auto">
            Browse our completed projects. From high-security commercial chainlink to elegant residential custom aluminum railings, we deliver excellence on every job.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-16 px-2">
          {categories.map(cat => (
            <button 
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-3 font-label-bold text-label-bold uppercase tracking-widest border transition-all duration-300 rounded-full ${activeCategory === cat ? 'bg-primary text-on-primary border-primary shadow-md' : 'bg-transparent text-on-surface border-outline-variant hover:border-primary/50 hover:bg-surface-container-highest'}`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
          {filteredProjects.map((item, index) => (
            <RevealCard 
              key={`${item.id}-${activeCategory}`} 
              item={item} 
              index={index} 
              onClick={() => setLightboxIndex(index)} 
            />
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <Lightbox 
          items={filteredProjects} 
          initialIndex={lightboxIndex} 
          onClose={() => setLightboxIndex(null)} 
        />
      )}
    </main>
  );
}
