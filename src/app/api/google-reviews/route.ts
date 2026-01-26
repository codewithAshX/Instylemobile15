import { NextRequest, NextResponse } from 'next/server';

interface GoogleReview {
  author_name: string;
  rating: number;
  text: string;
  time: number;
  profile_photo_url?: string;
  relative_time_description: string;
}

interface GooglePlaceDetails {
  result: {
    reviews?: GoogleReview[];
  };
  status: string;
}

// Mock data for development - replace with actual Google Places API call
const mockReviews: GoogleReview[] = [
  {
    author_name: "Priya Sharma",
    rating: 5,
    text: "Excellent service! Riddhi Builders helped us find our dream home. The team was professional, knowledgeable, and guided us through every step of the process. Highly recommended!",
    time: Date.now() - 86400000,
    profile_photo_url: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
    relative_time_description: "a day ago"
  },
  {
    author_name: "Rajesh Kumar",
    rating: 5,
    text: "Outstanding construction quality and timely delivery. We've been living in our new apartment for 6 months now and everything is perfect. The attention to detail is remarkable.",
    time: Date.now() - 172800000,
    profile_photo_url: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    relative_time_description: "2 days ago"
  },
  {
    author_name: "Anjali Patel",
    rating: 4,
    text: "Great experience working with Riddhi Builders. The project management was excellent and they kept us updated throughout the construction. Minor delays but overall satisfied.",
    time: Date.now() - 259200000,
    profile_photo_url: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
    relative_time_description: "3 days ago"
  },
  {
    author_name: "Vikram Singh",
    rating: 5,
    text: "Best real estate company in the area! Professional staff, quality construction, and excellent customer service. Our villa turned out exactly as promised.",
    time: Date.now() - 345600000,
    profile_photo_url: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
    relative_time_description: "4 days ago"
  },
  {
    author_name: "Meera Joshi",
    rating: 5,
    text: "From planning to execution, everything was handled perfectly. The team at Riddhi Builders is trustworthy and delivers on their promises. Five stars!",
    time: Date.now() - 432000000,
    profile_photo_url: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face",
    relative_time_description: "5 days ago"
  },
  {
    author_name: "Amit Desai",
    rating: 4,
    text: "Good construction quality and reasonable pricing. There were some initial hiccups but the team resolved all issues promptly. Overall a positive experience.",
    time: Date.now() - 518400000,
    profile_photo_url: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
    relative_time_description: "6 days ago"
  }
];

export async function GET(request: NextRequest) {
  try {
    // Get API key from environment variables
    const apiKey = process.env.GOOGLE_PLACES_API_KEY;
    const placeId = process.env.GOOGLE_PLACE_ID || 'ChIJ1234567890abcdef'; // Replace with actual place ID

    // If no API key is configured, return mock data
    if (!apiKey) {
      console.warn('Google Places API key not configured. Using mock data.');
      return NextResponse.json({
        reviews: mockReviews,
        status: 'OK'
      });
    }

    // Fetch reviews from Google Places API
    const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=reviews&key=${apiKey}`;

    const response = await fetch(url, {
      next: { revalidate: 3600 } // Cache for 1 hour
    });

    if (!response.ok) {
      throw new Error(`Google Places API error: ${response.status}`);
    }

    const data: GooglePlaceDetails = await response.json();

    if (data.status !== 'OK') {
      throw new Error(`Google Places API returned status: ${data.status}`);
    }

    // Transform the reviews to match our expected format
    const reviews = data.result.reviews?.map(review => ({
      ...review,
      id: `${review.time}_${review.author_name.replace(/\s+/g, '_')}` // Generate unique ID
    })) || [];

    return NextResponse.json({
      reviews,
      status: data.status
    });

  } catch (error) {
    console.error('Error fetching Google reviews:', error);

    // Return mock data as fallback
    return NextResponse.json({
      reviews: mockReviews,
      status: 'OK',
      fallback: true
    });
  }
}