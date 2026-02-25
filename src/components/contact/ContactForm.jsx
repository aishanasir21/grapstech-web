import React from "react";
import { useForm, ValidationError } from "@formspree/react";

function ContactForm() {
  const [state, handleSubmit] = useForm("mlgwboey");

  if (state.succeeded) {
    return (
      <div className="flex flex-col justify-end text-left md:text-center py-10 w-full">
        <h2 className="text-2xl font-[font4]">Thank you !</h2>
        <p className="text-gray-600 font-[font4] tracking-wider">Your message has been sent successfully.</p>
      </div>
    );
  }

  return (
    <div className="w-full md:w-1/2 mx-auto p-4">
      <form onSubmit={handleSubmit} className="space-y-4">

        {/* First + Last Name */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <input
              type="text"
              name="first_name"
              placeholder="First name"
              required
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          <div>
            <input
              type="text"
              name="last_name"
              placeholder="Last name"
              required
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>
        </div>

        {/* Email + Phone */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <input
              id="email"
              type="email"
              name="email"
              placeholder="Email address"
              required
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-black"
            />
            <ValidationError prefix="Email" field="email" errors={state.errors} />
          </div>

          <div>
            <input
              type="tel"
              name="phone"
              placeholder="Phone"
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>
        </div>

        {/* Services */}
        <div>
          <select
            name="service"
            required
            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-black"
          >
            <option value="">Select a service</option>
            <option>Air-Conditioning, Ventilation & Air Filtration Systems</option>
            <option>Installation & Maintenance</option>
            <option>Electromechanical Equipment Installation & Maintenance</option>
            <option>Plumbing & Sanitary Contracting</option>
            <option>Floor & Wall Tiling Works</option>
            <option>Painting Contracting</option>
            <option>Carpentry & Flooring Contracting</option>
            <option>Insulation Contracting</option>
            <option>Partitions & False Ceilings</option>
            <option>Plaster & Cladding Works</option>
            <option>Building Cleaning Services</option>
            <option>Artificial Grass Work</option>
          </select>
        </div>

        {/* Message */}
        <div>
          <textarea
            id="message"
            name="message"
            rows="4"
            placeholder="Write your message here"
            required
            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-black"
          />
          <ValidationError prefix="Message" field="message" errors={state.errors} />
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={state.submitting}
          className="w-full bg-black text-white p-3 rounded-xl hover:opacity-90 transition"
        >
          {state.submitting ? "Sending..." : "Submit"}
        </button>
      </form>
    </div>
  );
}

export default ContactForm;
