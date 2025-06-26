import Link from 'next/link';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-steel-blue text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="h-12 w-auto">
              {/* Placeholder for logo - replace with actual logo when available */}
              <div className="h-12 w-40 bg-white flex items-center justify-center rounded">
                <span className="text-steel-blue font-oswald font-bold">
                  SCHAEFFER
                </span>
              </div>
            </div>
            <p className="text-bright-silver leading-relaxed">
              ASME-Certified Tank & Trailer Repairs Since 1978. Your trusted
              partner for tank services and fabrication.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-oswald font-semibold text-safety-yellow">
              Quick Links
            </h3>
            <nav className="flex flex-col space-y-2">
              <Link
                href="/services"
                className="text-bright-silver hover:text-safety-yellow transition-colors duration-200"
              >
                Services
              </Link>
              <Link
                href="/fabrication"
                className="text-bright-silver hover:text-safety-yellow transition-colors duration-200"
              >
                Fabrication
              </Link>
              <Link
                href="/certifications"
                className="text-bright-silver hover:text-safety-yellow transition-colors duration-200"
              >
                Certifications
              </Link>
              <Link
                href="/about"
                className="text-bright-silver hover:text-safety-yellow transition-colors duration-200"
              >
                About Us
              </Link>
              <Link
                href="/contact"
                className="text-bright-silver hover:text-safety-yellow transition-colors duration-200"
              >
                Contact
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-oswald font-semibold text-safety-yellow">
              Contact Info
            </h3>
            <div className="space-y-3">
              <a
                href="tel:330-296-7519"
                className="flex items-center space-x-3 text-bright-silver hover:text-safety-yellow transition-colors duration-200"
              >
                <FaPhone className="text-sm" />
                <span>330-296-7519</span>
              </a>
              <a
                href="mailto:info@schaeffertank.com"
                className="flex items-center space-x-3 text-bright-silver hover:text-safety-yellow transition-colors duration-200"
              >
                <FaEnvelope className="text-sm" />
                <span>info@schaeffertank.com</span>
              </a>
              <div className="flex items-start space-x-3 text-bright-silver">
                <FaMapMarkerAlt className="text-sm mt-1" />
                <span>
                  123 Industrial Drive
                  <br />
                  Wooster, OH 44691
                </span>
              </div>
            </div>
          </div>

          {/* Business Hours */}
          <div className="space-y-4">
            <h3 className="text-lg font-oswald font-semibold text-safety-yellow">
              Business Hours
            </h3>
            <div className="space-y-2 text-bright-silver">
              <div className="flex items-center space-x-3">
                <FaClock className="text-sm" />
                <span>Mon - Fri: 7:00 AM - 5:00 PM</span>
              </div>
              <div className="ml-6">
                <span>Saturday: 8:00 AM - 12:00 PM</span>
              </div>
              <div className="ml-6">
                <span>Sunday: Closed</span>
              </div>
              <div className="mt-3 text-safety-yellow font-medium">
                Emergency Service Available
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-bright-silver/20 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-bright-silver text-sm">
              © {currentYear} Schaeffer&apos;s Tank & Truck Service. All rights
              reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link
                href="/privacy"
                className="text-bright-silver hover:text-safety-yellow text-sm transition-colors duration-200"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-bright-silver hover:text-safety-yellow text-sm transition-colors duration-200"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
