import type { Metadata } from 'next';
import Link from 'next/link';
import {
  FaWrench,
  FaTruck,
  FaFlask,
  FaCogs,
  FaSearch,
  FaTools,
} from 'react-icons/fa';

export const metadata: Metadata = {
  title: 'Tank & Trailer Services',
  description:
    'Comprehensive tank and trailer services including repairs, maintenance, calibration, and emergency service. ASME certified with 45+ years of experience.',
};

const ServicesPage = () => {
  const services = [
    {
      slug: 'tank-repair',
      title: 'Tank Repair',
      icon: FaWrench,
      description:
        'Expert ASME-certified tank repair services for all types of tanks and trailers.',
      features: [
        'Welding & Fabrication',
        'Structural Repairs',
        'Leak Repairs',
        'Component Replacement',
      ],
    },
    {
      slug: 'trailer-service',
      title: 'Trailer Maintenance',
      icon: FaTruck,
      description:
        'Comprehensive trailer maintenance and repair services to keep your fleet running.',
      features: [
        'Preventive Maintenance',
        'Brake Service',
        'Suspension Repair',
        'DOT Inspections',
      ],
    },
    {
      slug: 'meter-calibration',
      title: 'Meter Calibration',
      icon: FaFlask,
      description:
        'Precise meter calibration and testing services to ensure accurate measurements.',
      features: [
        'Flow Meter Testing',
        'Calibration Certificates',
        'Compliance Verification',
        'Emergency Calibration',
      ],
    },
    {
      slug: 'fabrication',
      title: 'Custom Fabrication',
      icon: FaCogs,
      description:
        'In-house fabrication services for custom tanks and specialized equipment.',
      features: [
        'Custom Tank Design',
        'Structural Fabrication',
        'Modification Services',
        'Prototype Development',
      ],
    },
    {
      slug: 'inspection',
      title: 'Inspection Services',
      icon: FaSearch,
      description:
        'Thorough inspection services to ensure safety and regulatory compliance.',
      features: [
        'ASME Inspections',
        'DOT Compliance',
        'Safety Assessments',
        'Certification Services',
      ],
    },
    {
      slug: 'emergency',
      title: 'Emergency Service',
      icon: FaTools,
      description:
        '24/7 emergency repair services to get you back on the road quickly.',
      features: [
        '24/7 Availability',
        'Mobile Service',
        'Rapid Response',
        'Emergency Welding',
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-steel-blue text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="font-oswald text-4xl md:text-5xl font-bold mb-4">
              Our Services
            </h1>
            <p className="text-xl text-bright-silver max-w-2xl mx-auto">
              Comprehensive tank and trailer services backed by 45+ years of
              experience
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden group"
                >
                  <div className="p-8">
                    <div className="mb-6 flex justify-center">
                      <div className="w-16 h-16 bg-safety-yellow rounded-full flex items-center justify-center group-hover:bg-steel-blue transition-colors duration-300">
                        <IconComponent className="text-3xl text-steel-blue group-hover:text-white transition-colors duration-300" />
                      </div>
                    </div>

                    <h3 className="font-oswald text-xl font-semibold text-steel-blue mb-3 text-center">
                      {service.title}
                    </h3>

                    <p className="text-gray-600 text-center mb-6 leading-relaxed">
                      {service.description}
                    </p>

                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <li
                          key={featureIndex}
                          className="flex items-center text-sm text-gray-600"
                        >
                          <span className="w-2 h-2 bg-safety-yellow rounded-full mr-3 flex-shrink-0"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <div className="text-center">
                      <Link
                        href={`/services/${service.slug}`}
                        className="inline-flex items-center px-6 py-3 bg-steel-blue text-white font-oswald font-semibold rounded-md hover:bg-opacity-90 transition-colors duration-200"
                      >
                        Learn More
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-steel-blue text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-oswald text-3xl md:text-4xl font-bold mb-4">
            Need Service Today?
          </h2>
          <p className="text-xl text-bright-silver mb-8">
            Emergency service available 24/7. Contact us for immediate
            assistance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:330-296-7519"
              className="inline-flex items-center justify-center px-8 py-4 bg-safety-yellow text-steel-blue font-oswald font-semibold text-lg rounded-lg hover:bg-yellow-400 transition-colors duration-200"
            >
              Call 330-296-7519
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-oswald font-semibold text-lg rounded-lg hover:bg-white hover:text-steel-blue transition-colors duration-200"
            >
              Request Quote
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
