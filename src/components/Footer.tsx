

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
            <a 
              className="w-10 h-10 border border-outline-variant flex items-center justify-center hover:bg-primary hover:text-on-primary transition-colors text-on-surface-variant" 
              href="https://www.facebook.com/people/NJ-Fence-Railings/61593430837806/"
              target="_blank"
              rel="noopener noreferrer"
              title="Follow us on Facebook"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M12 2.04c-5.5 0-10 4.49-10 10.02 0 5.01 3.66 9.15 8.44 9.9v-7H7.9v-2.9h2.54V9.85c0-2.51 1.49-3.89 3.78-3.89 1.09 0 2.23.19 2.23.19v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.45 2.9h-2.33v7a10 10 0 0 0 8.44-9.9c0-5.53-4.5-10.02-10-10.02Z"/>
              </svg>
            </a>
            <a 
              className="w-10 h-10 border border-outline-variant flex items-center justify-center hover:bg-primary hover:text-on-primary transition-colors text-on-surface-variant" 
              href="https://www.instagram.com/njfenceandrailin_/"
              target="_blank"
              rel="noopener noreferrer"
              title="Follow us on Instagram"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M7.8,2H16.2C19.4,2 22,4.6 22,7.8V16.2A5.8,5.8 0 0,1 16.2,22H7.8C4.6,22 2,19.4 2,16.2V7.8A5.8,5.8 0 0,1 7.8,2M7.6,4A3.6,3.6 0 0,0 4,7.6V16.4C4,18.39 5.61,20 7.6,20H16.4A3.6,3.6 0 0,0 20,16.4V7.6C20,5.61 18.39,4 16.4,4H7.6M17.25,5.5A1.25,1.25 0 0,1 18.5,6.75A1.25,1.25 0 0,1 17.25,8A1.25,1.25 0 0,1 16,6.75A1.25,1.25 0 0,1 17.25,5.5M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9Z"/>
              </svg>
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
      <div className="max-w-container-max mx-auto px-gutter py-8 border-t border-outline-variant flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-label-bold font-body-md text-on-surface-variant text-center md:text-left">
          © {new Date().getFullYear()} NJ Fence and Railing. All rights reserved. Proudly serving New Jersey and surrounding areas.
        </p>
        <a 
          href="https://maps.app.goo.gl/euDHYjZhjARjbETq5" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="flex items-center gap-2 text-on-surface-variant hover:text-primary transition-colors text-label-bold"
          title="NJ Fence and Railing on Google Maps"
        >
          <span className="material-symbols-outlined text-[20px]">location_on</span>
          <span>Find us on Google Maps</span>
        </a>
      </div>
    </footer>
  );
}
