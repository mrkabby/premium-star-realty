// ...existing code...
import HeroImage from "../assets/highlights/MNKK_180.jpg"; 
import VisionImage from "../assets/highlights/MNKK_190.jpg"; 
import AboutSection from "../components/AboutUs";
import TestimonialSection from "../components/Testimonials";


const About = () => {
  return (
    <div>
      {/* Hero Section */}
      <section
        className="relative h-[500px] bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: `url(${HeroImage})`,
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        <h1 className="z-10 text-white text-4xl md:text-6xl font-bold">About Us</h1>
      </section>

      {/* Vision Statement Section */}
      <section className="py-12 px-6 text-center">
        <h2 className="text-3xl font-bold text-[#7B1C27] mb-6">Who we are</h2>
        <p className="text-lg text-gray-700 mb-6">
          Our vision is to become the leading Real Estate Developers
          <br />
          making the dreams of luxury homeowners and investors in
          <br />
          Africa and the world come true.
        </p>
      </section>

      {/* Description Section */}
      <section className="py-12 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-6">
            We are a luxury real estate development and management company with
            a mission of developing and investing in luxury properties to create
            value for homeowners and investors by designing innovative products
            and keeping our promises to our clients. We are an experienced young
            and nimble team that’s taking real estate personally. Each team
            member is well-versed in their field of expertise, coming together to
            create the perfect workforce to meet the desires of our clients. We
            focus on acquisition, development, construction, management, sales,
            and leasing.
          </p>
        </div>

        <div className="mt-8">
          <img
            src={VisionImage}
            alt="Vision Statement"
            className="w-full max-h-[600px] object-cover"
          />
        </div>
      </section>
      <AboutSection />
      <TestimonialSection />
    </div>
  );
};

export default About;
