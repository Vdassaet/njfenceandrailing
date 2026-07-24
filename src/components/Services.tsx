

import { useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';

export default function Services() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <>
      {/* Railing Services Section */}
      <section id="railings" className="py-section-padding-desktop bg-background scroll-mt-24">
        <div className="max-w-container-max mx-auto px-gutter">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <h2 className="text-label-bold font-label-bold text-primary uppercase tracking-[0.3em] mb-2">Architectural Excellence</h2>
              <p className="text-headline-lg font-headline-lg text-on-surface">Custom Railing Solutions</p>
            </div>
            <p className="text-body-md font-body-md text-on-surface-variant max-w-sm">
              Engineered for safety and designed for elegance, our railings are the perfect finishing touch for any upscale property.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Service Card 1 */}
            <Link to="/portfolio" state={{ activeTab: 'railings' }} className="group relative aspect-[4/5] bg-surface-container-high overflow-hidden border border-outline-variant block cursor-pointer">
              <img 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                alt="Close-up of a sleek, black powder-coated aluminum railing" 
                src="/images/railings/40646ee3c7014d3aadbc52ecf5396f4a.jpg" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="bg-background/90 backdrop-blur-sm border-l-4 border-primary p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="text-headline-md font-headline-md text-primary mb-2 uppercase">Custom Railing</h3>
                  <p className="text-label-bold font-label-bold text-on-surface-variant uppercase tracking-widest">Aluminum and Metal</p>
                </div>
              </div>
            </Link>
            {/* Service Card 2 */}
            <Link to="/portfolio" state={{ activeTab: 'railings' }} className="group relative aspect-[4/5] bg-surface-container-high overflow-hidden border border-outline-variant block cursor-pointer">
              <img 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                alt="Professional installation of a metal fence panel" 
                src="/images/railings/26e49a78162ad2ce3b327ab6cd52b6c1.jpg" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="bg-background/90 backdrop-blur-sm border-l-4 border-primary p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="text-headline-md font-headline-md text-primary mb-2 uppercase">Repair and Reinstallation</h3>
                  <p className="text-label-bold font-label-bold text-on-surface-variant uppercase tracking-widest">Expert Maintenance</p>
                </div>
              </div>
            </Link>
            {/* Service Card 3 */}
            <Link to="/portfolio" state={{ activeTab: 'railings' }} className="group relative aspect-[4/5] bg-surface-container-high overflow-hidden border border-outline-variant block cursor-pointer">
              <img 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                alt="A pristine white PVC railing system" 
                src="/images/railings/8da22e38a8120cc4712036bf68fb7d99.jpg" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="bg-background/90 backdrop-blur-sm border-l-4 border-primary p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="text-headline-md font-headline-md text-primary mb-2 uppercase">PVC Railing</h3>
                  <p className="text-label-bold font-label-bold text-on-surface-variant uppercase tracking-widest">Durable Vinyl</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Fence Services Section */}
      <section id="fences" className="py-section-padding-desktop bg-surface-dim scroll-mt-24">
        <div className="max-w-container-max mx-auto px-gutter">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <h2 className="text-label-bold font-label-bold text-primary uppercase tracking-[0.3em] mb-2">Security & Privacy</h2>
              <p className="text-headline-lg font-headline-lg text-on-surface">Premium Fence Installation</p>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Service Card 1 */}
            <div className="bg-surface-container-high border border-outline-variant overflow-hidden group">
              <div className="aspect-video overflow-hidden">
                <img 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                  alt="A modern horizontal slat aluminum fence in dark charcoal" 
                  src="/images/fences/3563098f17672a7672e7426712fe5b25.jpg" 
                />
              </div>
              <div className="p-8">
                <h3 className="text-headline-md font-headline-md text-primary uppercase mb-2">Vinyl Fences</h3>
                <p className="text-body-md text-on-surface-variant mb-6">Weather-resistant vinyl fencing available in multiple colors and heights.</p>
                <Link className="inline-flex items-center gap-2 text-primary font-label-bold text-label-bold uppercase tracking-widest hover:gap-4 transition-all" to="/portfolio" state={{ activeTab: 'fences' }}>
                  View Details <span className="material-symbols-outlined">chevron_right</span>
                </Link>
              </div>
            </div>
            {/* Service Card 2 */}
            <div className="bg-surface-container-high border border-outline-variant overflow-hidden group">
              <div className="aspect-video overflow-hidden">
                <img 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                  alt="A long stretch of high-quality white PVC privacy fencing" 
                  src="/images/fences/762babe79f4ad360ab86b27a930dc4a5.jpg" 
                />
              </div>
              <div className="p-8">
                <h3 className="text-headline-md font-headline-md text-primary uppercase mb-2">Aluminum Fence</h3>
                <p className="text-body-md text-on-surface-variant mb-6">Durable and elegant aluminum fencing available in multiple styles and heights.</p>
                <Link className="inline-flex items-center gap-2 text-primary font-label-bold text-label-bold uppercase tracking-widest hover:gap-4 transition-all" to="/portfolio" state={{ activeTab: 'fences' }}>
                  View Details <span className="material-symbols-outlined">chevron_right</span>
                </Link>
              </div>
            </div>
            {/* Service Card 3 */}
            <div className="bg-surface-container-high border border-outline-variant overflow-hidden group">
              <div className="aspect-video overflow-hidden">
                <img 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                  alt="A black vinyl-coated chainlink fence securing a commercial property boundary" 
                  src="/images/chainlink fence/s1.png.jpg" 
                />
              </div>
              <div className="p-8">
                <h3 className="text-headline-md font-headline-md text-primary uppercase mb-2">Chainlink Fence</h3>
                <p className="text-body-md text-on-surface-variant mb-6">Cost-effective security solutions for residential and commercial perimeters.</p>
                <Link className="inline-flex items-center gap-2 text-primary font-label-bold text-label-bold uppercase tracking-widest hover:gap-4 transition-all" to="/portfolio" state={{ activeTab: 'fences' }}>
                  View Details <span className="material-symbols-outlined">chevron_right</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Mobile Welding & Repair Section */}
      <section id="repairs" className="py-section-padding-desktop bg-background scroll-mt-24">
        <div className="max-w-container-max mx-auto px-gutter">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <h2 className="text-label-bold font-label-bold text-primary uppercase tracking-[0.3em] mb-2">On-Site Solutions</h2>
              <p className="text-headline-lg font-headline-lg text-on-surface">Mobile Welding & Repair</p>
            </div>
            <p className="text-body-md font-body-md text-on-surface-variant max-w-sm">
              Fast, reliable, and professional on-site welding repairs for all your metal fencing, gates, and railing needs.
            </p>
          </div>
          <div className="grid md:grid-cols-1 gap-8">
            <div className="bg-surface-container-high border border-outline-variant overflow-hidden group flex flex-col md:flex-row">
              <div className="md:w-1/2 grid grid-cols-2 gap-1 overflow-hidden">
                <img 
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110" 
                  alt="Mobile Welding Repair Project 1" 
                  src="/images/mobile welding repair/9819a169669b5905c58a35991c57e9f6.webp" 
                />
                <img 
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110" 
                  alt="Mobile Welding Repair Project 2" 
                  src="/images/mobile welding repair/aeee0835dbad26f1b3e1eadf852374ba.jpg" 
                />
              </div>
              <div className="p-8 md:w-1/2 flex flex-col justify-center">
                <h3 className="text-headline-md font-headline-md text-primary uppercase mb-2">Emergency & Scheduled Repairs</h3>
                <p className="text-body-md text-on-surface-variant mb-6">Our mobile welding units come fully equipped to handle everything from broken gate hinges to severely damaged metal sections, ensuring your property remains secure without the hassle of dismantling.</p>
                <div className="flex flex-wrap gap-6">
                  <Link className="inline-flex items-center gap-2 text-primary font-label-bold text-label-bold uppercase tracking-widest hover:gap-4 transition-all" to="/contact">
                    Request a Repair <span className="material-symbols-outlined">build</span>
                  </Link>
                  <Link className="inline-flex items-center gap-2 text-on-surface-variant font-label-bold text-label-bold uppercase tracking-widest hover:gap-4 hover:text-primary transition-all" to="/portfolio" state={{ activeTab: 'welding' }}>
                    View Portfolio <span className="material-symbols-outlined">chevron_right</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
