import { FaCertificate, FaClock, FaTools } from 'react-icons/fa';

const WhyChooseUs = () => {
  const features = [
    {
      icon: FaCertificate,
      title: 'ASME R-Stamp Certified',
      description:
        'We hold the prestigious ASME R-Stamp certification, ensuring all repairs meet the highest industry standards for safety and quality.',
    },
    {
      icon: FaClock,
      title: '45+ Years Experience',
      description:
        "Since 1978, we've been Ohio's trusted partner for tank and trailer services, with decades of expertise you can rely on.",
    },
    {
      icon: FaTools,
      title: 'In-House Fabrication',
      description:
        'Our complete fabrication facility allows us to handle everything from minor repairs to custom tank manufacturing.',
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-oswald text-3xl md:text-4xl font-semibold text-steel-blue mb-4">
            Why Choose Schaeffer&apos;s?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Four and a half decades of excellence in tank and trailer services
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={index}
                className="text-center group hover:scale-105 transition-transform duration-300"
              >
                <div className="mb-6 flex justify-center">
                  <div className="w-20 h-20 bg-safety-yellow rounded-full flex items-center justify-center group-hover:bg-steel-blue transition-colors duration-300">
                    <IconComponent className="text-3xl text-steel-blue group-hover:text-white transition-colors duration-300" />
                  </div>
                </div>
                <h3 className="font-oswald text-xl font-semibold text-steel-blue mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
