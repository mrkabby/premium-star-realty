import React, { useState, useEffect } from "react";
import SlideImage1 from "../assets/highlights/mnkk_147.jpg";

const TestimonialSection = () => {
  const testimonials = [
    {
      quote:
        "The location of Legacy Square is the best. So close to all of the well-known bars and eateries and connection to other areas in Accra is soo easy. So many things to see and do from this location. Everything went smoothly from our arrival to our departure. I would highly recommend this property.",
      author: "Deloris & Family",
    },
    {
      quote:
        "Living at One Elm has been a dream come true. The serene environment and modern amenities make it the perfect place for my family. The team at Quao Realty was incredibly supportive throughout the process.",
      author: "Mr. & Mrs. Ofori",
    },
    {
      quote:
        "Pristine Gardens exceeded my expectations. The quality of construction and the attention to detail are unmatched. I would definitely choose Quao Realty again.",
      author: "Samuel Appiah",
    },
  ];

  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <div className="bg-[#3fc7d8] text-white py-12 px-6 rounded-lg mb-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-3xl font-bold mb-4">WHY OUR CLIENTS <span className="text-pink-300">♥</span> US</h2>
          <p className="text-lg leading-relaxed mb-4">
            WE LET OUR CLIENTS DO THE SPEAKING FOR US
          </p>
          <p className="italic text-lg leading-relaxed">
            "{testimonials[currentTestimonial].quote}"
          </p>
          <p className="text-right text-sm mt-4">- {testimonials[currentTestimonial].author}</p>
          <div className="flex justify-center mt-4 space-x-2">
            {testimonials.map((_, index) => (
              <span
                key={index}
                className={`h-2 w-2 rounded-full ${
                  index === currentTestimonial ? "bg-white" : "bg-gray-500"
                }`}
              ></span>
            ))}
          </div>
        </div>
        <div>
          <img
            src={SlideImage1}
            alt="Testimonial Static Image"
            className="rounded-lg shadow-lg w-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;