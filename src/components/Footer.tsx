import React from "react";
import { FaFacebook, FaWhatsapp, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 py-8 text-white">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex flex-col items-center justify-between md:flex-row">
          {/* Logo and Channel Name */}
          <div className="mb-4 flex items-center space-x-3 md:mb-0">
            <img
              src="./khabartalash-banner.jpeg"
              alt="Logo"
              className="h-10 w-10 rounded-full"
            />
            <span className="text-xl font-semibold">Khabartalash</span>
          </div>

          {/* Social Media Links */}
          <div className="flex space-x-6">
            {/* YouTube Icon */}
            <a
              href="https://www.youtube.com/@KhabarTalash"
              className="text-gray-400 transition hover:text-red-500"
              aria-label="YouTube"
            >
              <FaYoutube className="h-6 w-6" />
            </a>

            {/* Facebook Icon */}
            <a
              href="https://www.facebook.com/profile.php?id=100093288555898&mibextid=ZbWKwL"
              className="text-gray-400 transition hover:text-blue-700"
              aria-label="Facebook"
            >
              <FaFacebook className="h-6 w-6" />
            </a>

            {/* WhatsApp Icon */}
            <div
              className="flex cursor-pointer text-gray-400 transition hover:text-green-500"
              aria-label="WhatsApp"
            >
              <FaWhatsapp className="h-6 w-6" />
              <p>+91 9872981511</p>
            </div>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="mt-6 border-t border-gray-700 pt-6 text-center">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} Khabartalash. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
