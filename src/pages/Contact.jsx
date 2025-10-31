import React from "react";

export default function Contact() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-center mb-10">Contact Us</h1>

      <div className="grid md:grid-cols-2 gap-10">
        {/* LEFT SIDE - CONTACT DETAILS */}
        <div className="space-y-6">
          <div>
            <h2 className="text-xl font-semibold mb-2">Get in Touch</h2>
            <p className="text-gray-600 dark:text-gray-300">
              We’d love to hear from you! Whether you have a question about our
              hardware products, services, or anything else — our team is ready
              to help.
            </p>
          </div>

          <div>
            <h3 className="font-semibold">Address</h3>
            <p className="text-gray-600 dark:text-gray-300"> 
              {/* Near Shivaji Chowk Akola Road Kanheri, Sarap, Akola, Maharashtra 444401 */}
               Near Shivaji Chowk, <br />
              Akola Road Kanheri, <br />
             Sarap, Akola, Maharashtra 444401
            </p>
          </div>

          <div>
            <h3 className="font-semibold">Phone</h3>
            <p className="text-gray-600 dark:text-gray-300">+91 9511814420</p>
          </div>

          {/* <div>
            <h3 className="font-semibold">Email</h3>
            <p className="text-gray-600 dark:text-gray-300">
              contact@patelhardware.com
            </p>
          </div> */}

          <div className="flex gap-3 mt-4">
            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 rounded bg-green-600 text-white hover:bg-green-700 transition"
            >
              WhatsApp
            </a>
            <a
              href="tel:+919876543210"
              className="px-5 py-2 rounded border border-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
            >
              Call Now
            </a>
          </div>
        </div>

        {/* RIGHT SIDE - MAP */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold mb-2">Visit Our Store</h2>
          <div className="w-full h-72 rounded-lg overflow-hidden shadow-md">
            <iframe
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3733.773696877139!2d77.04369647470409!3d20.6380791010835!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd72d26d2e1df1f%3A0x483dce7431deb7f!2sKunal%20Hardware!5e0!3m2!1sen!2sin!4v1761913470646!5m2!1sen!2sin"
              className="w-full h-full"
              loading="lazy"
              allowFullScreen
            ></iframe>
          </div>
           
        </div>
      </div>
    </div>
  );
}
