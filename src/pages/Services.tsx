import ServicesSection from '../components/Services';
import CtaSection from '../components/CtaSection';

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-background pt-16">
      <div className="text-center mb-8 px-gutter">
        <h1 className="text-display-lg font-display-lg text-on-surface mb-4">Our <span className="text-primary">Services</span></h1>
        <p className="text-body-lg font-body-lg text-on-surface-variant max-w-2xl mx-auto">
          Comprehensive fencing and railing solutions for residential and commercial properties.
        </p>
      </div>
      <ServicesSection />
      <CtaSection />
    </main>
  );
}
