import type { Metadata } from 'next';
import ContactForm from '@/components/ContactForm';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa';

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    "Get in touch with Schaeffer's Tank & Truck Service. Call 330-296-7519 or visit us in Wooster, OH for all your tank and trailer service needs.",
};

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-steel-blue text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="font-oswald text-4xl md:text-5xl font-bold mb-4">
              Contact Us
            </h1>
            <p className="text-xl text-bright-silver max-w-2xl mx-auto">
              Get in touch for all your tank and trailer service needs
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="font-oswald text-2xl font-semibold text-steel-blue mb-6">
                  Get In Touch
                </h2>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Whether you need emergency repair service or want to schedule
                  routine maintenance, our experienced team is here to help.
                  Contact us today to discuss your tank and trailer service
                  needs.
                </p>
              </div>

              {/* Contact Details */}
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-safety-yellow rounded-full flex items-center justify-center flex-shrink-0">
                    <FaPhone className="text-steel-blue text-lg" />
                  </div>
                  <div>
                    <h3 className="font-oswald text-lg font-semibold text-steel-blue mb-1">
                      Phone
                    </h3>
                    <a
                      href="tel:330-296-7519"
                      className="text-gray-600 hover:text-steel-blue transition-colors duration-200 text-lg"
                    >
                      330-296-7519
                    </a>
                    <p className="text-gray-500 text-sm mt-1">
                      Emergency service available 24/7
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-safety-yellow rounded-full flex items-center justify-center flex-shrink-0">
                    <FaEnvelope className="text-steel-blue text-lg" />
                  </div>
                  <div>
                    <h3 className="font-oswald text-lg font-semibold text-steel-blue mb-1">
                      Email
                    </h3>
                    <a
                      href="mailto:info@schaeffertank.com"
                      className="text-gray-600 hover:text-steel-blue transition-colors duration-200"
                    >
                      info@schaeffertank.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-safety-yellow rounded-full flex items-center justify-center flex-shrink-0">
                    <FaMapMarkerAlt className="text-steel-blue text-lg" />
                  </div>
                  <div>
                    <h3 className="font-oswald text-lg font-semibold text-steel-blue mb-1">
                      Address
                    </h3>
                    <address className="text-gray-600 not-italic">
                      123 Industrial Drive
                      <br />
                      Wooster, OH 44691
                    </address>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-safety-yellow rounded-full flex items-center justify-center flex-shrink-0">
                    <FaClock className="text-steel-blue text-lg" />
                  </div>
                  <div>
                    <h3 className="font-oswald text-lg font-semibold text-steel-blue mb-1">
                      Business Hours
                    </h3>
                    <div className="text-gray-600 space-y-1">
                      <p>Monday - Friday: 7:00 AM - 5:00 PM</p>
                      <p>Saturday: 8:00 AM - 12:00 PM</p>
                      <p>Sunday: Closed</p>
                      <p className="text-safety-yellow font-medium mt-2">
                        Emergency Service Available
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="font-oswald text-2xl font-semibold text-steel-blue mb-6">
                Send us a Message
              </h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Map placeholder */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-oswald text-2xl font-semibold text-steel-blue mb-6 text-center">
            Our Location
          </h2>
          <div className="bg-gray-300 h-96 rounded-lg flex items-center justify-center">
            <p className="text-gray-600">
              Interactive map will be integrated here
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
