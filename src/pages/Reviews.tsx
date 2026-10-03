// @ts-nocheck
import { useEffect, useState } from 'react';

interface GoogleReview {
  author_name: string;
  author_url: string;
  profile_photo_url: string;
  rating: number;
  relative_time_description: string;
  text: string;
  time: number;
}

export default function Reviews() {
  const [reviews, setReviews] = useState<GoogleReview[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchReviews = () => {
      // Create script tag dynamically
      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=${import.meta.env.VITE_GOOGLE_MAPS_API_KEY}&libraries=places`;
      script.async = true;
      script.defer = true;
      
      script.onload = () => {
        if (!window.google) {
          setError("Failed to load Google Maps");
          setLoading(false);
          return;
        }

        const mapDiv = document.createElement('div');
        const service = new window.google.maps.places.PlacesService(mapDiv);

        const placeId = import.meta.env.VITE_PLACE_ID || 'ChIJy3L2T9T_wokRPfybqRJtELk';
        
        // 1. Get details (including reviews) using the Place ID
        if (placeId) {
          service.getDetails({
            placeId: placeId,
            fields: ['reviews']
          }, (place, detailStatus) => {
            if (detailStatus === window.google.maps.places.PlacesServiceStatus.OK && place?.reviews) {
              // Sort reviews by rating (highest first) or time
              const sortedReviews = place.reviews.sort((a, b) => (b.rating || 0) - (a.rating || 0));
              setReviews(sortedReviews as GoogleReview[]);
            } else {
              setError("No reviews found for this business.");
            }
            setLoading(false);
          });
        } else {
           setError("Could not find Place ID.");
           setLoading(false);
        }
      };

      script.onerror = () => {
        setError("Error loading Google Maps API script. Please check your API key and permissions.");
        setLoading(false);
      };

      document.body.appendChild(script);

      return () => {
        // Cleanup script when component unmounts
        document.body.removeChild(script);
      };
    };

    fetchReviews();
  }, []);

  return (
    <main className="min-h-screen bg-surface-dim py-section-padding-desktop">
      <div className="max-w-container-max mx-auto px-gutter">
        <div className="text-center mb-16">
          <h1 className="text-display-lg font-display-lg text-on-surface mb-4">Client <span className="text-primary">Reviews</span></h1>
          <p className="text-body-lg font-body-lg text-on-surface-variant max-w-2xl mx-auto">
            Don't just take our word for it. Read what our satisfied clients across New Jersey have to say about our premium installations.
          </p>
        </div>

        {loading ? (
          <div className="flex justify-center items-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
          </div>
        ) : error ? (
          <div className="text-center py-10">
            <p className="text-error font-body-lg">{error}</p>
            <p className="text-on-surface-variant mt-4 text-sm max-w-lg mx-auto">
              (Note: If you see a permissions error, make sure "Places API" and "Maps JavaScript API" are enabled in your Google Cloud Console for this API key).
            </p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.map((review, idx) => (
              <div key={idx} className="bg-surface-container-high border border-outline-variant p-8 flex flex-col h-full hover:border-primary/50 transition-colors">
                <div className="flex items-center gap-4 mb-6">
                  {review.profile_photo_url ? (
                    <img src={review.profile_photo_url} alt={review.author_name} className="w-16 h-16 rounded-full object-cover border-2 border-primary/20" />
                  ) : (
                    <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center border-2 border-primary/20">
                      <span className="text-headline-sm text-primary">{review.author_name.charAt(0)}</span>
                    </div>
                  )}
                  <div>
                    <h3 className="text-headline-sm font-headline-sm text-on-surface line-clamp-1">{review.author_name}</h3>
                    <p className="text-label-md font-label-md text-on-surface-variant uppercase tracking-wider">Google Review</p>
                  </div>
                </div>
                <div className="flex gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <span key={i} className="material-symbols-outlined text-primary text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  ))}
                </div>
                <p className="text-body-md font-body-md text-on-surface-variant flex-grow italic">
                  "{review.text}"
                </p>
                <div className="mt-6 pt-4 border-t border-outline-variant/50 flex justify-between items-center">
                  <p className="text-label-md font-label-md text-on-surface-variant/50 uppercase">
                    {review.relative_time_description}
                  </p>
                  <a href={review.author_url} target="_blank" rel="noopener noreferrer" className="text-primary text-sm hover:underline">
                    Ver en Google
                  </a>
                </div>
              </div>
            ))}
            
            {reviews.length === 0 && (
               <div className="col-span-full text-center py-10">
                 <p className="text-on-surface-variant">No reviews to display yet.</p>
               </div>
            )}
          </div>
        )}
      </div>
    </main>
  );
}
