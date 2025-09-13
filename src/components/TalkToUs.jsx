import { useState } from "react";
import emailjs from "@emailjs/browser";
import Image from "../assets/Community18/Inside1.jpg";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    countryCode: "",
    phone: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const templateParams = {
      user_firstName: formData.firstName,
      user_lastName: formData.lastName,
      user_email: formData.email,
      user_countryCode: formData.countryCode,
      user_phone: formData.phone,
      user_message: formData.message,
    };

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      alert("Message sent successfully!");
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        countryCode: "",
        phone: "",
        message: "",
      });
    } catch (error) {
      console.error("Failed to send email:", error);
      alert("Failed to send message. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-12 px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Images Section */}
        <div className="space-y-4">
          <img
            src={Image} // Replace with the correct image path
            alt="Contact"
            className="rounded-lg shadow-lg"
          />
        </div>

        {/* Form Section */}
        <div>
          <h3 className="text-2xl font-bold text-[#7B1C27] mb-4">Talk to Us</h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="First Name"
                className="p-3 rounded border border-gray-300 w-full"
                required
              />
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Last Name"
                className="p-3 rounded border border-gray-300 w-full"
                required
              />
            </div>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              className="p-3 rounded border border-gray-300 w-full"
              required
            />
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                name="countryCode"
                value={formData.countryCode}
                onChange={handleChange}
                placeholder="Country Code (e.g., +233)"
                className="p-3 rounded border border-gray-300 w-full"
                required
              />
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone"
                className="p-3 rounded border border-gray-300 w-full"
                required
              />
            </div>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Message"
              className="p-3 rounded border border-gray-300 w-full"
              rows="5"
            ></textarea>
            <button
              type="submit"
              disabled={isSubmitting}
              className={`px-6 py-3 text-white rounded w-full font-bold transition ${
                isSubmitting
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-[#3fc7d8] hover:bg-[#7B1C27]"
              }`}
            >
              {isSubmitting ? "Submitting..." : "Submit"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
