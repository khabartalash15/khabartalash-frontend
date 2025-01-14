import React from "react";

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
            <a
              href="https://www.youtube.com/@KhabarTalash"
              className="text-gray-400 transition hover:text-red-500"
              aria-label="YouTube"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M10 15l6-3-6-3z" />
                <path d="M21.8 8.001s-.2-1.4-.8-2.001c-.8-.8-1.7-.8-2.1-.9C16.1 5 12 5 12 5h-.1s-4.1 0-6.9.1c-.4 0-1.3.1-2.1.9-.6.6-.8 2-.8 2S2 9.6 2 11.2v1.5c0 1.6.2 3.2.2 3.2s.2 1.4.8 2c.8.8 1.8.8 2.2.9 1.6.1 6.7.1 6.7.1s4.1 0 6.9-.1c.4-.1 1.3-.1 2.1-.9.6-.6.8-2 .8-2s.2-1.6.2-3.2v-1.5c0-1.6-.2-3.2-.2-3.2z" />
              </svg>
            </a>

            <a
              href="https://www.facebook.com/profile.php?id=100093288555898&mibextid=ZbWKwL"
              className="text-gray-400 transition hover:text-blue-700"
              aria-label="Facebook"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.326v21.348c0 .733.593 1.326 1.326 1.326h11.495v-9.294h-3.124v-3.622h3.124v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.464.099 2.794.143v3.24h-1.918c-1.504 0-1.795.715-1.795 1.764v2.312h3.588l-.467 3.622h-3.121v9.294h6.116c.733 0 1.326-.593 1.326-1.326v-21.35c0-.732-.593-1.326-1.326-1.326z" />
              </svg>
            </a>
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
