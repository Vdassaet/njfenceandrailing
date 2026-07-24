export default function Contact() {
  return (
    <main className="min-h-screen bg-surface-dim py-section-padding-desktop">
      <div className="max-w-container-max mx-auto px-gutter">
        <div className="text-center mb-16">
          <h1 className="text-display-lg font-display-lg text-on-surface mb-4">Get In <span className="text-primary">Touch</span></h1>
          <p className="text-body-lg font-body-lg text-on-surface-variant max-w-2xl mx-auto">
            Ready to secure your perimeter? Contact us today for a free estimate on your next project.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 bg-surface-container-high p-8 md:p-12 border border-outline-variant">
          <div className="space-y-8">
            <h2 className="text-headline-lg font-headline-lg text-primary uppercase">Contact Information</h2>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-surface-variant flex items-center justify-center border border-outline-variant">
                  <span className="material-symbols-outlined text-primary">call</span>
                </div>
                <div>
                  <p className="text-label-bold text-on-surface-variant uppercase">Direct Line</p>
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
                  <p className="text-label-bold text-on-surface-variant uppercase">Service Area</p>
                  <p className="text-body-md font-body-md text-on-surface">Serving New Jersey & Surrounding Areas</p>
                </div>
              </div>
            </div>
          </div>

          <form action="https://formsubmit.co/njfenceandrailing@gmail.com" method="POST" className="space-y-6 flex flex-col justify-center">
            {/* Hidden fields for FormSubmit configuration */}
            <input type="hidden" name="_subject" value="New Contact Request from Website!" />
            <input type="hidden" name="_next" value="https://njfenceandrailing.vercel.app/" />
            <input type="hidden" name="_captcha" value="false" />
            
            <div>
              <label className="block text-label-bold text-on-surface-variant uppercase mb-2">Name</label>
              <input type="text" name="name" required className="w-full bg-background border border-outline-variant p-3 text-on-surface focus:border-primary focus:outline-none transition-colors" placeholder="Your Name" />
            </div>
            <div>
              <label className="block text-label-bold text-on-surface-variant uppercase mb-2">Email</label>
              <input type="email" name="email" required className="w-full bg-background border border-outline-variant p-3 text-on-surface focus:border-primary focus:outline-none transition-colors" placeholder="Your Email Address" />
            </div>
            <div>
              <label className="block text-label-bold text-on-surface-variant uppercase mb-2">Message</label>
              <textarea name="message" required rows={4} className="w-full bg-background border border-outline-variant p-3 text-on-surface focus:border-primary focus:outline-none transition-colors" placeholder="How can we help you?"></textarea>
            </div>
            <button type="submit" className="bg-primary text-on-primary px-8 py-4 rounded-none font-label-bold text-label-bold uppercase tracking-widest hover:brightness-110 active:scale-95 transition-all w-full md:w-auto">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
