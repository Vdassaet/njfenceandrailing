export default function Reviews() {
  const reviews = [
    {
      id: 1,
      name: "Michael Thompson",
      location: "Morristown, NJ",
      date: "2 weeks ago",
      rating: 5,
      content: "The team at NJ Fence and Railing completely transformed our backyard. We wanted a custom aluminum railing for our new deck, and they delivered beyond our expectations. The attention to detail and the quality of the finish is outstanding. Highly recommend them for any residential projects!",
      avatar: "/images/reviewer_1.jpg"
    },
    {
      id: 2,
      name: "Sarah Jenkins",
      location: "Summit, NJ",
      date: "1 month ago",
      rating: 5,
      content: "We hired them to install a white PVC privacy fence around our property. The crew was professional, arrived on time, and left the site completely clean. The fence looks beautiful and perfectly aligned. It's rare to find contractors who communicate as well as they do.",
      avatar: "/images/reviewer_2.jpg"
    },
    {
      id: 3,
      name: "David Rossi",
      location: "Paramus, NJ",
      date: "3 months ago",
      rating: 5,
      content: "I manage several commercial properties and have used NJ Fence and Railing for multiple security fence installations. Their materials are top-notch and truly built to last. They handle permits efficiently and their pricing is always transparent. The best in the business.",
      avatar: "/images/reviewer_3.jpg"
    }
  ];

  return (
    <main className="min-h-screen bg-surface-dim py-section-padding-desktop">
      <div className="max-w-container-max mx-auto px-gutter">
        <div className="text-center mb-16">
          <h1 className="text-display-lg font-display-lg text-on-surface mb-4">Client <span className="text-primary">Reviews</span></h1>
          <p className="text-body-lg font-body-lg text-on-surface-variant max-w-2xl mx-auto">
            Don't just take our word for it. Read what our satisfied clients across New Jersey have to say about our premium installations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <div key={review.id} className="bg-surface-container-high border border-outline-variant p-8 flex flex-col h-full hover:border-primary/50 transition-colors">
              <div className="flex items-center gap-4 mb-6">
                <img src={review.avatar} alt={review.name} className="w-16 h-16 rounded-full object-cover border-2 border-primary/20" />
                <div>
                  <h3 className="text-headline-sm font-headline-sm text-on-surface">{review.name}</h3>
                  <p className="text-label-md font-label-md text-on-surface-variant uppercase tracking-wider">{review.location}</p>
                </div>
              </div>
              <div className="flex gap-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <span key={i} className="material-symbols-outlined text-primary text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                ))}
              </div>
              <p className="text-body-md font-body-md text-on-surface-variant flex-grow italic">
                "{review.content}"
              </p>
              <p className="text-label-md font-label-md text-on-surface-variant/50 mt-6 pt-4 border-t border-outline-variant/50 uppercase">
                {review.date}
              </p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
