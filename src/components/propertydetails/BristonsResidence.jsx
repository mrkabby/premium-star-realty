import React from "react";
import HeroImage1 from "../../assets/highlights/MNKK_187.jpg";
import HeroImage2 from "../../assets/highlights/MNKK_162.jpg";
import HeroImage3 from "../../assets/highlights/MNKK_150.jpg";
import HeroImage4 from "../../assets/highlights/MNKK_166.jpg";
import HeroImage5 from "../../assets/highlights/MNKK_171.jpg";
import HeroImage6 from "../../assets/highlights/MNKK_130.jpg";

const BristonsResidence = () => {
  return (
    <div>
      <section className="py-12 bg-gray-100 text-center">
        <h1 className="text-4xl font-bold text-[#7B1C27]">Bristons Residence</h1>
        <p className="mt-4 text-lg text-gray-600">
        Bedrooms 3 | 1 Kitchen | 2  Bathrooms | CCTV | Car Park | 24/7 Security
                
        </p>
        <p className="mt-4 text-sm text-gray-500">Location: Sakumono, Accra</p>
      </section>

      {/* Images Section */}
      <section className="py-12 px-6">
        <h2 className="text-2xl font-bold text-[#7B1C27] mb-6 text-center">
          Gallery
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {[HeroImage1, HeroImage2, HeroImage3, HeroImage4, HeroImage5, HeroImage6].map((image, index) => (
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

export default BristonsResidence;
