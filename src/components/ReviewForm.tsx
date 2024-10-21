import React, { useState } from 'react';
import { Star } from 'lucide-react';

interface Review {
  name: string;
  rating: number;
  comment: string;
}

interface ReviewFormProps {
  onSubmit: (review: Review) => void;
}

const ReviewForm: React.FC<ReviewFormProps> = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [comment, setComment] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (rating === 0) {
      alert('Please select a rating');
      return;
    }
    onSubmit({ name, rating, comment });
    setName('');
    setRating(0);
    setComment('');
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-cream p-6 rounded-lg shadow-md">
      <h3 className="text-2xl font-bold text-coffee mb-4 font-dreaming">Leave a Review</h3>
      <div className="mb-4">
        <label htmlFor="name" className="block text-coffee mb-2">Name</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="w-full px-3 py-2 border border-sage rounded-md focus:outline-none focus:ring-2 focus:ring-caramel"
        />
      </div>
      <div className="mb-4">
        <label className="block text-coffee mb-2">Rating</label>
        <div className="flex">
          {[1, 2, 3, 4, 5].map((star) => (
            <Star
              key={star}
              className={`h-8 w-8 cursor-pointer transition-colors duration-150 ${
                (hoverRating || rating) >= star ? 'text-caramel fill-current' : 'text-gray-300'
              }`}
              onMouseEnter={() => setHoverRating(star)}
              onMouseLeave={() => setHoverRating(0)}
              onClick={() => setRating(star)}
            />
          ))}
        </div>
      </div>
      <div className="mb-4">
        <label htmlFor="comment" className="block text-coffee mb-2">Comment</label>
        <textarea
          id="comment"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          required
          className="w-full px-3 py-2 border border-sage rounded-md focus:outline-none focus:ring-2 focus:ring-caramel"
          rows={4}
        ></textarea>
      </div>
      <button type="submit" className="w-full bg-sage text-cream py-2 px-4 rounded-md hover:bg-forest transition duration-300">
        Submit Review
      </button>
    </form>
  );
};

export default ReviewForm;