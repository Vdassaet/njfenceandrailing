

import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-surface-container-highest dark:bg-surface-container-highest border-t border-outline-variant full-width">
      <div className="flex flex-col md:flex-row justify-between items-start max-w-container-max mx-auto px-gutter py-section-padding-mobile md:py-section-padding-desktop gap-12">
        <div className="max-w-md">
          <div className="text-headline-md font-headline-md font-black text-primary uppercase mb-6">
            NJ Fence and Railing
          </div>
          <p className="text-body-md font-body-md text-on-surface-variant mb-8">
            Providing top-tier fencing and railing solutions for the most demanding residential and commercial projects across New Jersey.
          </p>
          <div className="flex gap-4">
            <a className="w-10 h-10 border border-outline-variant flex items-center justify-center hover:bg-primary hover:text-on-primary transition-colors" href="#">
              <span className="material-symbols-outlined text-[20px]">share</span>
            </a>
            <a className="w-10 h-10 border border-outline-variant flex items-center justify-center hover:bg-primary hover:text-on-primary transition-colors" href="#">
              <span className="material-symbols-outlined text-[20px]">thumb_up</span>
            </a>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-16">
          <div className="space-y-4">
            <h4 className="text-label-bold font-label-bold text-on-surface uppercase tracking-widest">Our Services</h4>
            <ul className="space-y-2">
              <li><Link className="text-on-surface-variant hover:text-primary transition-colors" to="/services#railings">Custom Railing</Link></li>
              <li><Link className="text-on-surface-variant hover:text-primary transition-colors" to="/services#fences">Aluminum Fence</Link></li>
              <li><Link className="text-on-surface-variant hover:text-primary transition-colors" to="/services#repairs">Repair Services</Link></li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="text-label-bold font-label-bold text-on-surface uppercase tracking-widest">Company</h4>
            <ul className="space-y-2">
              <li><Link className="text-on-surface-variant hover:text-primary transition-colors" to="/privacy">Privacy Policy</Link></li>
              <li><a className="text-on-surface-variant hover:text-primary transition-colors" href="#">Terms of Service</a></li>
              <li><Link className="text-on-surface-variant hover:text-primary transition-colors" to="/contact">Contact</Link></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="max-w-container-max mx-auto px-gutter py-8 border-t border-outline-variant">
        <p className="text-label-bold font-body-md text-on-surface-variant text-center md:text-left">
          © {new Date().getFullYear()} NJ Fence and Railing. All rights reserved. Proudly serving New Jersey and surrounding areas.
        </p>
      </div>
    </footer>
  );
}
