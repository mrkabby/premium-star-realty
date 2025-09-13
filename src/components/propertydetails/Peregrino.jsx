import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const PeregrinoPlace = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [stayOption, setStayOption] = useState("short");
  const [loading, setLoading] = useState(true);
  const [images, setImages] = useState([]);
  const navigate = useNavigate();

  const property = {
    id: 1,
    title: "Peregrino Place",
    description:
      "A beautiful destination for the perfect honeymoon or weekend getaway in the Ayi Mensah Valley. Bike or Walk up the Aburi mountains for breakfast at The Peduase Valley Resort, or drive to the Safari Valley for the experience of a lifetime.",
    address: "Ayimensah, Kweiman",
    specifications: ["4 bed rooms", "2 bath rooms", "1 kitchen", "2 garage"],
    neighborhood: [
      "Aburi Botanical Gardens",
      "Papaya Recreational Park",
      "Oboadaka Falls with Quad biking",
      "Asenema Falls",
    ],
    prices: {
      short: "$150 per day (Min. 7 days)",
      long: "$1,500 per month",
    },
  };

  useEffect(() => {
    const loadImages = async () => {
      setLoading(true);
      const loadedImages = [];
      for (let i = 60; i <= 237; i++) {
        try {
          const image = await import(`../../assets/Pregrino/NKANSA_${i}.jpg`);
          loadedImages.push(image.default);
        } catch {
          // Image not found, skip
        }
      }
      setImages(loadedImages);
      setLoading(false);
    };

    loadImages();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleBooking = () => {
    navigate(`/booking/${property.id}`, {
      state: {
        property: {
          title: property.title,
          description: property.description,
          address: property.address,
          selectedStay: stayOption,
          price:
            stayOption === "short"
              ? property.prices.short
              : property.prices.long,
          image: images[0],
        },
      },
    });
  };

  return (
    <div className="container mx-auto py-12 px-6">
      {/* Title */}
      <h1 className="text-4xl font-bold text-[#3fc7d8] mb-4 text-center">
        {property.title}
      </h1>
      <p className="text-gray-700 mb-6">{property.description}</p>

      {/* Property Details */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          {/* Address, Specifications, and Neighborhood */}
          <p className="text-lg font-semibold">Address:</p>
          <p className="text-gray-600 mb-4">{property.address}</p>

          <p className="text-lg font-semibold">Specifications:</p>
          <ul className="list-disc ml-6 text-gray-600 mb-4">
            {property.specifications.map((spec, index) => (
              <li key={index}>{spec}</li>
            ))}
          </ul>

          <p className="text-lg font-semibold">Neighborhood Information:</p>
          <ul className="list-disc ml-6 text-gray-600">
            {property.neighborhood.map((info, index) => (
              <li key={index}>{info}</li>
            ))}
          </ul>

          {/* Stay Options */}
          <p className="text-lg font-semibold mt-6">Choose Your Stay Option:</p>
          <div className="flex space-x-4 mt-2">
            <button
              onClick={() => setStayOption("short")}
              className={`px-4 py-2 rounded ${
                stayOption === "short"
                  ? "bg-[#3fc7d8] text-white"
                  : "bg-gray-200 text-gray-700"
              }`}
            >
              Short Stay ($150/day)
            </button>
            <button
              onClick={() => setStayOption("long")}
              className={`px-4 py-2 rounded ${
                stayOption === "long"
                  ? "bg-[#3fc7d8] text-white"
                  : "bg-gray-200 text-gray-700"
              }`}
            >
              Long Stay ($1,500/month)
            </button>
          </div>

          <p className="text-2xl font-bold text-[#7B1C27] mt-6">
            Price:{" "}
            {stayOption === "short"
              ? property.prices.short
              : property.prices.long}
          </p>
          <button
            className="mt-4 px-6 py-3 bg-[#3fc7d8] text-white rounded hover:bg-[#5e141b] transition"
            onClick={handleBooking}
          >
            Book Now
          </button>
        </div>

        {/* Image Carousel */}
        <div className="relative w-full overflow-hidden rounded-lg shadow-lg">
          {loading ? (
            <div className="flex justify-center items-center h-96">
              <p className="text-xl font-semibold text-gray-500">
                Loading Images...
              </p>
            </div>
          ) : (
            <>
              <div className="w-full h-96 relative">
                {images.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`Property Image ${index + 1}`}
                    className={`absolute w-full h-full object-cover transition-opacity duration-1000 ${
                      index === currentIndex ? "opacity-100" : "opacity-0"
                    }`}
                  />
                ))}
              </div>
              <button
                onClick={prevSlide}
                className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white p-2 rounded-full bg-[#3fc7d8]"
              >
                ◀
              </button>
              <button
                onClick={nextSlide}
                className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white p-2 rounded-full bg-[#3fc7d8]"
              >
                ▶
              </button>
            </>
          )}
        </div>
      </div>

      {/* Video Section */}

      {/* Image Gallery */}
      <div className="mt-12">
        <h2 className="text-2xl font-semibold mb-4 text-center">
          Image Gallery
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((image, index) => (
            <div key={index} className="overflow-hidden rounded-lg shadow-md">
              <img
                src={image}
                alt={`Gallery Image ${index + 1}`}
                className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
  <div className="w-full">
    <iframe
      className="w-full h-72 rounded-lg shadow-lg"
      src="https://www.youtube.com/embed/K6t47Tkj_wo"
      title="Peregrino Place Video"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  </div>
  <div>
    <h2 className="text-2xl font-bold text-[#3fc7d8] mb-4">
      Experience Peregrino Place
    </h2>
    <p className="text-gray-700">
      Peregrino Place is the perfect getaway nestled in the serene Ayi Mensah
      Valley. Discover nearby attractions and enjoy breathtaking views and
      world-class amenities at the Safari Valley Resort, just minutes from Peregrino
      Place.
    </p>
  </div>
</div>

      </div>
    </div>
  );
};

export default PeregrinoPlace;
