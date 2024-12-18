import React from "react";
import HeroImage1 from "../../assets/highlights/mnkk_100.jpg";
import HeroImage2 from "../../assets/highlights/mnkk_100.jpg";
import HeroImage3 from "../../assets/highlights/mnkk_100.jpg";

const LegacyGardens = () => {
  return (
    <div>
      <section className="py-12 bg-gray-100 text-center">
        <h1 className="text-4xl font-bold text-[#7B1C27]">Legacy Gardens</h1>
        <p className="mt-4 text-lg text-gray-600">
          Luxury townhouses nestled in a serene environment with top-notch amenities.
        </p>
        <p className="mt-4 text-sm text-gray-500">Location: Sakumono, Accra</p>
      </section>

      {/* Images Section */}
      <section className="py-12 px-6">
        <h2 className="text-2xl font-bold text-[#7B1C27] mb-6 text-center">
          Gallery
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {[HeroImage1, HeroImage2, HeroImage3].map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Pristine Gardens Image ${index + 1}`}
              className="rounded-lg shadow-lg"
            />
          ))}
        </div>
      </section>

      {/* Video Section */}
      <section className="py-12 px-6">
        <h2 className="text-2xl font-bold text-[#7B1C27] mb-6 text-center">
          Video Tour
        </h2>
        <div className="aspect-w-16 aspect-h-9">
          <iframe
            src="https://www.youtube.com/embed/UIFniPZxiFI"
            title="Pristine Gardens Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="rounded-lg shadow-lg"
          ></iframe>
        </div>
      </section>
    </div>
  );
};

export default LegacyGardens;
