import axios from "axios";
import { useState, useEffect } from "react";

// Define the review type
interface Review {
  id: string;
  user: string;
  comment: string;
  rating: number;
}

// Props for the component
interface ReviewSectionProps {
  propertyId: string;
}

const ReviewSection = ({ propertyId }: ReviewSectionProps) => {
  // Explicitly type the state as Review[]
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!propertyId) return;

    const fetchReviews = async () => {
      try {
        const response = await axios.get<Review[]>(
          `/api/properties/${propertyId}/reviews`
        );
        setReviews(response.data);
      } catch (err) {
        console.error("Error fetching reviews:", err);
        setError("Failed to load reviews.");
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, [propertyId]);

  if (loading) return <p className="text-center mt-4">Loading reviews...</p>;
  if (error) return <p className="text-center mt-4 text-red-500">{error}</p>;
  if (reviews.length === 0)
    return <p className="text-center mt-4 text-gray-500">No reviews yet.</p>;

  return (
    <div className="mt-6 space-y-4">
      {reviews.map((review: Review) => (
        <div
          key={review.id}
          className="border p-4 rounded-lg shadow-sm bg-white"
        >
          <div className="flex items-center justify-between mb-1">
            <span className="font-semibold">{review.user}</span>
            <span className="text-sm text-gray-600">{review.rating} ★</span>
          </div>
          <p className="text-gray-700">{review.comment}</p>
        </div>
      ))}
    </div>
  );
};

export default ReviewSection;
