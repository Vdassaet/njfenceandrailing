import { useState, useEffect } from 'react';
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

export default function Portfolio() {
  const location = useLocation();
  const initialTab = location.state?.activeTab || 'fences';
  const [activeTab, setActiveTab] = useState<'fences' | 'railings' | 'welding'>(initialTab);

  useEffect(() => {
    if (location.state?.activeTab) {
      setActiveTab(location.state.activeTab);
    }
  }, [location.state]);

  const currentAlbums = activeTab === 'fences' 
    ? fencesAlbums 
    : activeTab === 'railings' 
      ? railingsAlbums 
      : weldingAlbums;

  return (
    <main className="py-section-padding-desktop bg-background min-h-screen">
      <div className="max-w-container-max mx-auto px-gutter">
        <div className="text-center mb-16">
          <h1 className="text-display-lg font-display-lg text-on-surface mb-4">Our <span className="text-primary">Portfolio</span></h1>
          <p className="text-body-lg font-body-lg text-on-surface-variant max-w-2xl mx-auto">
            Browse our completed projects. From high-security commercial chainlink to elegant residential custom aluminum railings, we deliver excellence on every job.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center gap-4 mb-16">
          <button 
            onClick={() => setActiveTab('fences')}
            className={`px-8 py-3 font-label-bold text-label-bold uppercase tracking-widest border transition-all ${activeTab === 'fences' ? 'bg-primary text-on-primary border-primary' : 'bg-transparent text-on-surface border-outline-variant hover:border-primary/50'}`}
          >
            Fences
          </button>
          <button 
            onClick={() => setActiveTab('railings')}
            className={`px-8 py-3 font-label-bold text-label-bold uppercase tracking-widest border transition-all ${activeTab === 'railings' ? 'bg-primary text-on-primary border-primary' : 'bg-transparent text-on-surface border-outline-variant hover:border-primary/50'}`}
          >
            Railings
          </button>
          <button 
            onClick={() => setActiveTab('welding')}
            className={`px-8 py-3 font-label-bold text-label-bold uppercase tracking-widest border transition-all ${activeTab === 'welding' ? 'bg-primary text-on-primary border-primary' : 'bg-transparent text-on-surface border-outline-variant hover:border-primary/50'}`}
          >
            Welding & Repair
          </button>
        </div>

        {/* Albums List */}
        <div className="space-y-20">
          {currentAlbums.map((album, albumIndex) => (
            <section key={albumIndex} className="animate-in fade-in slide-in-from-bottom-8 duration-700">
              <div className="mb-8 border-b border-outline-variant pb-4">
                <h2 className="text-headline-md font-headline-md text-primary uppercase mb-2">{album.title}</h2>
                <p className="text-body-lg text-on-surface-variant max-w-3xl">{album.description}</p>
              </div>
              
              {/* Gallery Grid for this Album */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {album.images.map((img, imgIndex) => {
                  const isVideo = img.endsWith('.mp4');
                  return (
                    <div key={imgIndex} className="group relative aspect-square bg-surface-container-high overflow-hidden border border-outline-variant shadow-sm hover:shadow-md transition-shadow">
                      {isVideo ? (
                        <video 
                          src={img} 
                          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                          autoPlay muted loop playsInline
                        />
                      ) : (
                        <img 
                          src={img} 
                          alt={`${album.title} portfolio item ${imgIndex + 1}`}
                          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                          loading="lazy"
                        />
                      )}
                      <div className="absolute inset-0 bg-background/0 group-hover:bg-background/20 transition-colors duration-300"></div>
                    </div>
                  );
                })}
              </div>
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}
