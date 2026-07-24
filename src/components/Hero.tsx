

export default function Hero() {
  return (
    <section className="relative min-h-[819px] flex items-center overflow-hidden bg-surface-container-lowest">
      <div className="absolute inset-0 z-0">
        <img 
          className="w-full h-full object-cover opacity-80" 
          alt="Luxury estate with custom metal railings" 
          src="/images/hero_background.png" 
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/40 to-transparent"></div>
      </div>
      <div className="relative z-10 max-w-container-max mx-auto px-gutter w-full grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 border border-primary/30 bg-primary/5 text-primary rounded-none">
            <span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
            <span className="font-label-bold text-label-bold uppercase tracking-[0.2em]">Top Rated in New Jersey</span>
          </div>
          <h1 className="text-display-lg font-display-lg text-on-surface">
            Precision Crafted <br />
            <span className="text-primary">Fencing & Railing</span>
          </h1>
          <p className="text-body-lg font-body-lg text-on-surface-variant max-w-lg">
            Elevate your property's security and aesthetic with NJ's premier architectural Aluminum, metal and PVC solutions. Built for durability, designed for prestige.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-primary text-on-primary px-10 py-5 rounded-none font-label-bold text-label-bold uppercase tracking-widest metallic-glow hover:brightness-110 active:scale-95 transition-all flex items-center justify-center gap-3">
              Get a Free ESTIMATE<span className="material-symbols-outlined">arrow_forward</span>
            </button>
            <div className="flex flex-col justify-center">
              <div className="flex text-primary">
                {[1, 2, 3, 4, 5].map((i) => (
                  <span key={i} className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                ))}
              </div>
              <span className="text-label-bold font-label-bold text-on-surface-variant uppercase tracking-tighter">+ Satisfied Clients</span>
            </div>
          </div>
        </div>
        <div className="hidden md:block bg-surface-container-high border border-outline-variant p-10 metallic-glow relative">
          <div className="absolute -top-4 -right-4 w-24 h-24 border-t-2 border-r-2 border-primary"></div>
          <div className="space-y-6">
            <h3 className="text-headline-md font-headline-md text-primary uppercase">Quick Contact</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-surface-variant flex items-center justify-center border border-outline-variant">
                  <span className="material-symbols-outlined text-primary">call</span>
                </div>
                <div>
                  <p className="text-label-bold text-on-surface-variant uppercase">Call Us Today</p>
                  <p className="text-headline-md font-headline-md text-on-surface tracking-tight">(973) 819-8186</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-surface-variant flex items-center justify-center border border-outline-variant">
                  <span className="material-symbols-outlined text-primary">mail</span>
                </div>
                <div>
                  <p className="text-label-bold text-on-surface-variant uppercase">Email Us</p>
                  <p className="text-body-md font-body-md text-on-surface">njfenceandrailing@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-surface-variant flex items-center justify-center border border-outline-variant">
                  <span className="material-symbols-outlined text-primary">location_on</span>
                </div>
                <div>
                  <p className="text-label-bold text-on-surface-variant uppercase">Our Reach</p>
                  <p className="text-body-md font-body-md text-on-surface">Serving New Jersey & Surrounding Areas</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
