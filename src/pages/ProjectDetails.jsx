import React from "react";
import { useParams } from "react-router-dom";
import HeroImage1 from "../assets/bedroom.jpg";
import HeroImage2 from "../assets/bed.jpg";
import HeroImage3 from "../assets/pathway.jpg";

const projects = [
  {
    id: "pristine-gardens",
    title: "Pristine Gardens",
    description:
      "Luxury townhouses nestled in a serene environment with top-notch amenities.",
    location: "Sakumono, Accra",
    images: [HeroImage1, HeroImage2],
    video: "https://www.youtube.com/embed/UIFniPZxiFI",
  },
  {
    id: "legacy-square",
    title: "Legacy Square",
    description:
      "State-of-the-art apartments offering a blend of modernity and elegance.",
    location: "Airport Residential, Accra",
    images: [HeroImage3, HeroImage2],
    video: "https://www.youtube.com/embed/UIFniPZxiFI",
  },
  {
    id: "brittons-residence",
    title: "Britton’s Residence",
    description:
      "A harmonious blend of contemporary design and functional living spaces.",
    location: "East Legon, Accra",
    images: [HeroImage1, HeroImage3],
    video: "https://www.youtube.com/embed/UIFniPZxiFI",
  },
];

const ProjectDetails = () => {
  const { projectId } = useParams();
  const project = projects.find((p) => p.id === projectId);

  if (!project) {
    return <div>Project not found!</div>;
  }

  return (
    <div>
      <section className="py-12 bg-gray-100 text-center">
        <h1 className="text-4xl font-bold text-[#7B1C27]">{project.title}</h1>
        <p className="mt-4 text-lg text-gray-600">{project.description}</p>
        <p className="mt-4 text-sm text-gray-500">{project.location}</p>
      </section>

      {/* Images Section */}
      <section className="py-12 px-6">
        <h2 className="text-2xl font-bold text-[#7B1C27] mb-6 text-center">
          Gallery
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {project.images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`${project.title} Image ${index + 1}`}
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
            src={project.video}
            title={`${project.title} Video`}
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

export default ProjectDetails;
