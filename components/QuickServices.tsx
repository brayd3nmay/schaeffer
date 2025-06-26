import Link from 'next/link';
import { FaWrench, FaTruck, FaFlask, FaCertificate } from 'react-icons/fa';

const QuickServices = () => {
  const services = [
    {
      icon: FaWrench,
      title: 'Tank Repairs',
      description: 'Expert ASME-certified tank repair services',
      href: '/services/tank-repair',
    },
    {
      icon: FaTruck,
      title: 'Trailer Service',
      description: 'Comprehensive trailer maintenance and repair',
      href: '/services/trailer-service',
    },
    {
      icon: FaFlask,
      title: 'Meter Calibration',
      description: 'Precise meter calibration and testing',
      href: '/services/meter-calibration',
    },
    {
      icon: FaCertificate,
      title: 'Certifications',
      description: 'Official inspections and certifications',
      href: '/certifications',
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-oswald text-3xl md:text-4xl font-semibold text-steel-blue mb-4">
            Our Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Professional tank and trailer services you can trust
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Link
                key={index}
                href={service.href}
                className="group bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 p-6 text-center hover:-translate-y-1"
              >
                <div className="mb-4">
                  <IconComponent className="text-4xl text-steel-blue group-hover:text-safety-yellow transition-colors duration-300 mx-auto" />
                </div>
                <h3 className="font-oswald text-xl font-semibold text-steel-blue mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {service.description}
                </p>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default QuickServices;
