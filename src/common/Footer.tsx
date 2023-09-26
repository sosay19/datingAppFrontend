import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-light text-dark py-4 fixed bottom-0 w-full">
      <div className="container mx-auto">
        <div className="flex flex-col items-center">
          <p className="text-2xl font-semibold">Muslim Match</p>
          <p className="text-sm mt-2">Bringing Hearts Together</p>
        </div>
        <div className="flex justify-center mt-4">
          <ul className="flex space-x-4">
            <li className="footer-item">
              <a
                href="/privacy"
                className="text-sm text-dark hover:text-primary transition duration-300 ease-in-out"
              >
                Privacy Policy
              </a>
            </li>
            <li className="footer-item">
              <a
                href="/terms"
                className="text-sm text-dark hover:text-primary transition duration-300 ease-in-out"
              >
                Terms of Service
              </a>
            </li>
            <li className="footer-item">
              <a
                href="/contact"
                className="text-sm text-dark hover:text-primary transition duration-300 ease-in-out"
              >
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
