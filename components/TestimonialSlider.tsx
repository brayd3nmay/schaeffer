'use client';

import { useState, useEffect } from 'react';
import {
  FaQuoteLeft,
  FaStar,
  FaChevronLeft,
  FaChevronRight,
} from 'react-icons/fa';

const TestimonialSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: 'Mike Johnson',
      company: 'Johnson Transport LLC',
      rating: 5,
      text: "Schaeffer's has been our go-to for tank repairs for over 10 years. Their ASME certification and quality work keeps our fleet running safely and efficiently.",
    },
    {
      name: 'Sarah Williams',
      company: 'Industrial Solutions Inc',
      rating: 5,
      text: 'Outstanding service and expertise. They completed our emergency repair in record time, getting us back on the road when we needed it most. Highly recommended!',
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  const goToPrevious = () => {
    setCurrentIndex(
      currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex(
      currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1
    );
  };

  return (
    <section className="py-16 bg-steel-blue">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-oswald text-3xl md:text-4xl font-semibold text-white mb-4">
            What Our Customers Say
          </h2>
          <p className="text-lg text-bright-silver">
            Trusted by businesses across Ohio
          </p>
        </div>

        <div className="relative">
          <div className="bg-white rounded-lg shadow-xl p-8 md:p-12">
            <FaQuoteLeft className="text-4xl text-safety-yellow mb-6" />

            <blockquote className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
              &ldquo;{testimonials[currentIndex].text}&rdquo;
            </blockquote>

            <div className="flex items-center justify-between">
              <div>
                <div className="flex items-center mb-2">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <FaStar key={i} className="text-safety-yellow text-sm" />
                  ))}
                </div>
                <cite className="font-oswald text-steel-blue font-semibold text-lg">
                  {testimonials[currentIndex].name}
                </cite>
                <p className="text-gray-600 text-sm">
                  {testimonials[currentIndex].company}
                </p>
              </div>

              <div className="flex space-x-2">
                <button
                  onClick={goToPrevious}
                  className="p-2 rounded-full bg-steel-blue text-white hover:bg-opacity-80 transition-colors duration-200"
                  aria-label="Previous testimonial"
                >
                  <FaChevronLeft />
                </button>
                <button
                  onClick={goToNext}
                  className="p-2 rounded-full bg-steel-blue text-white hover:bg-opacity-80 transition-colors duration-200"
                  aria-label="Next testimonial"
                >
                  <FaChevronRight />
                </button>
              </div>
            </div>
          </div>

          {/* Dots indicator */}
          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                  index === currentIndex
                    ? 'bg-safety-yellow'
                    : 'bg-bright-silver'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSlider;
