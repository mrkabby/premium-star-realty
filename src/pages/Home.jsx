import React from "react";
import Image1 from "../assets/highlights/mnkk_101.jpg";
import Image2 from "../assets/highlights/mnkk_115.jpg";
import Image3 from "../assets/highlights/mnkk_105.jpg";
import LeroImage1 from "../assets/highlights/mnkk_180.jpg";
import LeroImage2 from "../assets/highlights/mnkk_120.jpg";
import LeroImage3 from "../assets/highlights/mnkk_130.jpg";
import HeroSection from "../components/HeroSection";
import ContactForm from "../components/TalkToUs";

const HomePage = () => {
  
  return (
    <>
      <HeroSection />
      <div>
        {/* YouTube Video Section */}
        <section className="py-12 px-6 bg-gray-100">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Video */}
          <div className="h-full">
            <iframe
              src="https://www.youtube.com/embed/UIFniPZxiFI" 
              title="Quao Realty YouTube Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="rounded-lg shadow-lg w-full h-[50vh]"
            ></iframe>
          </div>

            {/* Video Description */}
            <div>
              <h2 className="text-2xl font-bold text-[#7B1C27] mb-4">
                Pristine Gardens Is Ready For You To Move In
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Just six sleek 4.5 two-storey townhouses, steps from Sakumono
                Golf Course. Prime city living near The Junction Mall, Sakumono
                Beach, Tema Port, top schools, eateries, banks, and more. It's
                time you walk into a broader zone, into a noiseless neighborhood
                that complements the excellence you've achieved.
              </p>
              <ul className="list-disc list-inside mt-4 text-gray-700">
                <li>24-hour security</li>
                <li>Backup water supply</li>
                <li>Multiple media connections and more</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Image Grid Section */}
        <section className="py-12 px-6">
          <h3 className="text-center text-2xl font-thin text-[#7B1C27] mb-6">
            This is your chance to move into a home that is based on the
            foundation of privacy and exclusivenes Our Community 18 Property is truly a
            one-of-its-kind opportunity for you to reside in an elite community
            of like-minded individuals surrounded by graceful luxury and
            matchless comfort.
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <img
              src={Image1}
              alt="Property 1"
              className="rounded-lg shadow-lg"
            />
            <img
              src={Image2}
              alt="Property 2"
              className="rounded-lg shadow-lg"
            />
            <img
              src={LeroImage1}
              alt="Property 3"
              className="rounded-lg shadow-lg"
            />
            <img
              src={LeroImage2}
              alt="Property 4"
              className="rounded-lg shadow-lg"
            />
            <img
              src={Image3}
              alt="Property 5"
              className="rounded-lg shadow-lg"
            />
            <img
              src={LeroImage3}
              alt="Property 6"
              className="rounded-lg shadow-lg"
            />
          </div>
        </section>

        {/* Features Section */}
        <section className="py-12 px-6 bg-gray-50">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <h4 className="text-xl font-bold text-[#7B1C27]">Transparent Process</h4>
              <p className="text-gray-700 leading-relaxed">
              Clear communication and hassle-free transactions.
              </p>
            </div>
            <div>
              <h4 className="text-xl font-bold text-[#7B1C27]">
              Expert Guidance
              </h4>
              <p className="text-gray-700 leading-relaxed">
              Tailored advice from experienced real estate professionals. </p>
            </div>
            <div>
              <h4 className="text-xl font-bold text-[#7B1C27]">
              Extensive Portfolio
              </h4>
              <p className="text-gray-700 leading-relaxed">
              A wide range of properties across prime locations in Ghana.

              </p>
            </div>
          </div>
        </section>

        {/* Big Image Section */}
        <section className="relative h-[500px] bg-cover bg-center flex items-center justify-center text-white">
          <img
            src={Image1} // Replace with the correct image path
            alt="Main"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          <h2 className="z-10 text-2xl md:text-2xl font-thin text-center">
            Homes that stimulate positive vibes cascading away to merge with
            fresh air and good lighting.
          </h2>
        </section>
      </div>
      <ContactForm />
    </>
  );
};

export default HomePage;
