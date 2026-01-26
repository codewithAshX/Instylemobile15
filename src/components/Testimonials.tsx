"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { useState, useEffect } from "react";

interface Testimonial {
  id: string;
  author_name: string;
  rating: number;
  text: string;
  time: number;
  profile_photo_url?: string;
  relative_time_description: string;
}

// Mock testimonials data (replace with Google API data)
const mockTestimonials: Testimonial[] = [
  {
    id: "1",
    author_name: "Priya Sharma",
    rating: 5,
    text: "Excellent service! Riddhi Builders helped us find our dream home. The team was professional, knowledgeable, and guided us through every step of the process. Highly recommended!",
    time: Date.now() - 86400000, // 1 day ago
    profile_photo_url: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
    relative_time_description: "a day ago"
  },
  {
    id: "2",
    author_name: "Rajesh Kumar",
    rating: 5,
    text: "Outstanding construction quality and timely delivery. We've been living in our new apartment for 6 months now and everything is perfect. The attention to detail is remarkable.",
    time: Date.now() - 172800000, // 2 days ago
    profile_photo_url: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    relative_time_description: "2 days ago"
  },
  {
    id: "3",
    author_name: "Anjali Patel",
    rating: 4,
    text: "Great experience working with Riddhi Builders. The project management was excellent and they kept us updated throughout the construction. Minor delays but overall satisfied.",
    time: Date.now() - 259200000, // 3 days ago
    profile_photo_url: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
    relative_time_description: "3 days ago"
  },
  {
    id: "4",
    author_name: "Vikram Singh",
    rating: 5,
    text: "Best real estate company in the area! Professional staff, quality construction, and excellent customer service. Our villa turned out exactly as promised.",
    time: Date.now() - 345600000, // 4 days ago
    profile_photo_url: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
    relative_time_description: "4 days ago"
  },
  {
    id: "5",
    author_name: "Meera Joshi",
    rating: 5,
    text: "From planning to execution, everything was handled perfectly. The team at Riddhi Builders is trustworthy and delivers on their promises. Five stars!",
    time: Date.now() - 432000000, // 5 days ago
    profile_photo_url: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face",
    relative_time_description: "5 days ago"
  },
  {
    id: "6",
    author_name: "Amit Desai",
    rating: 4,
    text: "Good construction quality and reasonable pricing. There were some initial hiccups but the team resolved all issues promptly. Overall a positive experience.",
    time: Date.now() - 518400000, // 6 days ago
    profile_photo_url: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
    relative_time_description: "6 days ago"
  }
];

export default function Testimonials() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Fetch testimonials from API
    const fetchTestimonials = async () => {
      try {
        const response = await fetch('/api/google-reviews');
        const data = await response.json();

        if (data.reviews) {
          setTestimonials(data.reviews);
        } else {
          // Fallback to mock data if API fails
          setTestimonials(mockTestimonials);
        }
      } catch (err) {
        console.error('Failed to fetch testimonials:', err);
        // Fallback to mock data
        setTestimonials(mockTestimonials);
      } finally {
        setLoading(false);
      }
    };

    fetchTestimonials();
  }, []);

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < rating ? "text-yellow-400 fill-current" : "text-gray-300"
        }`}
      />
    ));
  };

  if (loading) {
    return (
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              What Our Customers Say
            </h2>
            <p className="text-gray-600">Loading testimonials...</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="bg-white p-6 rounded-xl shadow animate-pulse">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
                  <div className="ml-4">
                    <div className="h-4 bg-gray-300 rounded w-24 mb-2"></div>
                    <div className="h-3 bg-gray-300 rounded w-16"></div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="h-4 bg-gray-300 rounded"></div>
                  <div className="h-4 bg-gray-300 rounded w-3/4"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            What Our Customers Say
          </h2>
          <p className="text-red-600">{error}</p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            What Our Customers Say
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our satisfied customers have to say about their experience with Riddhi Builders.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center mb-4">
                <Quote className="w-8 h-8 text-emerald-600 mr-2 shrink-0" />
                <div className="flex">
                  {renderStars(testimonial.rating)}
                </div>
              </div>

              <p className="text-gray-700 mb-4 leading-relaxed">
                "{testimonial.text}"
              </p>

              <div className="flex items-center">
                {testimonial.profile_photo_url ? (
                  <img
                    src={testimonial.profile_photo_url}
                    alt={testimonial.author_name}
                    className="w-10 h-10 rounded-full object-cover mr-3"
                  />
                ) : (
                  <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center mr-3">
                    <span className="text-gray-600 font-semibold text-sm">
                      {testimonial.author_name.charAt(0)}
                    </span>
                  </div>
                )}
                <div>
                  <p className="font-semibold text-gray-900">
                    {testimonial.author_name}
                  </p>
                  <p className="text-sm text-gray-500">
                    {testimonial.relative_time_description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href="https://www.google.com/search?q=riddhi+builders+reviews"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors"
          >
            View All Reviews on Google
          </a>
        </motion.div>
      </div>
    </section>
  );
}