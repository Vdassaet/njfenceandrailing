

export default function CtaSection() {
  return (
    <>
      {/* CTA Mid Section */}
      <section className="py-24 bg-surface-container relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="grid grid-cols-12 h-full">
            <div className="border-r border-primary col-span-1"></div>
            <div className="border-r border-primary col-span-1"></div>
            <div className="border-r border-primary col-span-1"></div>
          </div>
        </div>
        <div className="max-w-container-max mx-auto px-gutter text-center relative z-10">
          <h2 className="text-headline-lg font-headline-lg text-on-surface mb-8">Ready to Secure Your Perimeter?</h2>
          <div className="flex flex-wrap justify-center gap-12 text-on-surface-variant">
            <div className="flex flex-col items-center gap-2">
              <span className="material-symbols-outlined text-primary text-[40px]" style={{ fontVariationSettings: "'FILL' 1" }}>shield</span>
              <span className="font-label-bold text-label-bold uppercase tracking-[0.2em]">Built to Last</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <span className="material-symbols-outlined text-primary text-[40px]" style={{ fontVariationSettings: "'FILL' 1" }}>handshake</span>
              <span className="font-label-bold text-label-bold uppercase tracking-[0.2em]">Honest & Reliable</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <span className="material-symbols-outlined text-primary text-[40px]" style={{ fontVariationSettings: "'FILL' 1" }}>business</span>
              <span className="font-label-bold text-label-bold uppercase tracking-[0.2em]">Residential & Commercial</span>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-section-padding-desktop bg-primary text-on-primary">
        <div className="max-w-container-max mx-auto px-gutter text-center">
          <h2 className="text-display-lg font-display-lg uppercase mb-8">Contact Us Today For Your Free ESTIMATE!</h2>
          <div className="flex flex-col md:flex-row justify-center gap-8 md:gap-16">
            <div className="flex flex-col items-center">
              <p className="text-label-bold font-label-bold uppercase opacity-80 mb-2">Direct Line</p>
              <a className="text-headline-lg font-headline-lg font-black tracking-tighter hover:scale-105 transition-transform" href="tel:9738198186">(973) 819-8186</a>
            </div>
            <div className="w-px h-16 bg-on-primary/20 hidden md:block"></div>
            <div className="flex flex-col items-center">
              <p className="text-label-bold font-label-bold uppercase opacity-80 mb-2">Email Inquiries</p>
              <a className="text-headline-md font-headline-md font-bold tracking-tight hover:underline" href="mailto:njfenceandrailing@gmail.com">njfenceandrailing@gmail.com</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
