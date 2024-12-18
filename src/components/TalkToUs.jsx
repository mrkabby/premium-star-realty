import React from "react";
import Image from "../assets/highlights/mnkk_102.jpg"



const ContactForm = () => {
  return (
    <section className="py-12 px-6 bg-gray-100">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Images Section */}
        <div className="space-y-4">
          <img
            src={Image} // Replace with the correct image path
            alt="Contact 1"
            className="rounded-lg shadow-lg"
          />
         
        </div>

        {/* Form Section */}
        <div>
          <h3 className="text-2xl font-bold text-[#7B1C27] mb-4">Talk to Us</h3>
          <form className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="First Name"
                className="p-3 rounded border border-gray-300 w-full"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="p-3 rounded border border-gray-300 w-full"
              />
            </div>
            <input
              type="email"
              placeholder="Email"
              className="p-3 rounded border border-gray-300 w-full"
            />
            <div className="grid grid-cols-2 gap-4">
              <select
                className="p-3 rounded border border-gray-300 w-full"
                defaultValue=""
              >
                <option value="" disabled>
                  Country Code
                </option>
                <option value="+233">+233</option>
                <option value="+234">+234</option>
                {/* Add more country codes here */}
              </select>
              <input
                type="text"
                placeholder="Phone"
                className="p-3 rounded border border-gray-300 w-full"
              />
            </div>
            <textarea
              placeholder="Message"
              className="p-3 rounded border border-gray-300 w-full"
              rows="5"
            ></textarea>
           
            <button
              type="submit"
              className="px-6 py-3 bg-[#3fc7d8] text-white rounded hover:bg-[#7B1C27] transition w-full"
            >
              Submit
            </button>
          </form>
        </div>
        
      </div>
    </section>
  );
};

export default ContactForm;
