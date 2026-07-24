

export default function BrandPromises() {
  return (
    <div className="bg-primary py-6 overflow-hidden">
      <div className="max-w-container-max mx-auto px-gutter flex flex-wrap justify-between items-center gap-8">
        <div className="flex items-center gap-3 text-on-primary">
          <span className="material-symbols-outlined text-[32px]">verified</span>
          <span className="font-headline-md text-label-bold uppercase tracking-widest">Quality Work</span>
        </div>
        <div className="flex items-center gap-3 text-on-primary">
          <span className="material-symbols-outlined text-[32px]">construction</span>
          <span className="font-headline-md text-label-bold uppercase tracking-widest">Durable Results</span>
        </div>
        <div className="flex items-center gap-3 text-on-primary">
          <span className="material-symbols-outlined text-[32px]">sentiment_satisfied</span>
          <span className="font-headline-md text-label-bold uppercase tracking-widest">Customer Satisfaction</span>
        </div>
      </div>
    </div>
  );
}
