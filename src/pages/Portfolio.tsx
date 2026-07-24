import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const fencesImages = [
  '3563098f17672a7672e7426712fe5b25.jpg',
  '762babe79f4ad360ab86b27a930dc4a5.jpg',
  '87e5ba3df5e272f80ec69807a3bc7136.jpg',
  'b942172dad401d958453de8cb4a741ad.jpg',
  'f29b4a64fae6ca6c511dd265c8f88a84.jpg',
  'f2d060d2fcfe502ce965f3fbd7b14686.jpg',
  '../chainlink fence/6851c0ae780c42069983ac19308a074b.jpg',
  '../chainlink fence/d52cb6604e09442fe2131cd206cf4b42.jpg',
  '../chainlink fence/f7a9e0b766f3b1a1fb3776f56dd41ab2.jpg',
  '../chainlink fence/s1.png.jpg'
];

const railingsImages = [
  '029f84754d0610355a1da3d198d27c8d.jpg',
  '26e49a78162ad2ce3b327ab6cd52b6c1.jpg',
  '2c4db562c583a796a2c024d849fefa4e.jpg',
  '4053ca8d5727e6a282deed2c4fb77d6b.jpg',
  '40646ee3c7014d3aadbc52ecf5396f4a.jpg',
  '4f8c841c865e5e8828555d5446627e2b.jpg',
  '5397794e5a982fb260e324c45b5febca.jpg',
  '58a06a64e70ad9b5b6930f0e5752b951.jpg',
  '5b9a84c80fc4c0619782beef6054dcf3.jpg',
  '6980567e01f075096f9b8a1e635d49d8.jpg',
  '7f11886230dd432458a2f74390a227ba.jpg',
  '8da22e38a8120cc4712036bf68fb7d99.jpg',
  'a1f6da3c772cc8be1a2039230018958d.jpg',
  'c27f00f67f3c66b82dd1af5480dd38a0.jpg',
  'cbd1aeaeb0e1a767886582eb999d6813.jpg'
];

const weldingImages = [
  '9819a169669b5905c58a35991c57e9f6.webp',
  'aeee0835dbad26f1b3e1eadf852374ba.jpg'
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

  const currentImages = activeTab === 'fences' ? fencesImages : activeTab === 'railings' ? railingsImages : weldingImages;
  const currentPath = activeTab === 'fences' ? '/images/fences/' : activeTab === 'railings' ? '/images/railings/' : '/images/mobile welding repair/';

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
        <div className="flex justify-center gap-4 mb-12">
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

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentImages.map((img, index) => (
            <div key={index} className="group relative aspect-square bg-surface-container-high overflow-hidden border border-outline-variant">
              <img 
                src={`${currentPath}${img}`} 
                alt={`${activeTab} portfolio item ${index + 1}`}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-background/0 group-hover:bg-background/40 transition-colors duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
