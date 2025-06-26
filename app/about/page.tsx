import type { Metadata } from 'next';
import { FaCertificate, FaUsers, FaIndustry, FaTrophy } from 'react-icons/fa';

export const metadata: Metadata = {
  title: 'About Us - 45+ Years of Tank Service Excellence',
  description:
    "Learn about Schaeffer's Tank & Truck Service history since 1978. ASME certified team with decades of experience serving Ohio's tank and trailer needs.",
};

const AboutPage = () => {
  const timelineEvents = [
    {
      year: '1978',
      title: 'Company Founded',
      description:
        "Schaeffer's Tank & Truck Service was established with a commitment to quality tank repairs.",
    },
    {
      year: '1985',
      title: 'ASME R-Stamp Certification',
      description:
        'Achieved ASME R-Stamp certification, setting the standard for quality and safety.',
    },
    {
      year: '1995',
      title: 'Facility Expansion',
      description:
        'Expanded our facility to include full fabrication capabilities and larger service bays.',
    },
    {
      year: '2005',
      title: 'Technology Upgrade',
      description:
        'Invested in state-of-the-art welding equipment and testing technology.',
    },
    {
      year: '2015',
      title: 'Service Area Growth',
      description:
        'Extended our service area throughout Ohio and neighboring states.',
    },
    {
      year: '2024',
      title: 'Continued Excellence',
      description:
        'Today, we continue to lead the industry with innovative solutions and exceptional service.',
    },
  ];

  const stats = [
    {
      icon: FaCertificate,
      number: '45+',
      label: 'Years of Experience',
    },
    {
      icon: FaUsers,
      number: '1000+',
      label: 'Satisfied Customers',
    },
    {
      icon: FaIndustry,
      number: '10,000+',
      label: 'Tanks Serviced',
    },
    {
      icon: FaTrophy,
      number: '24/7',
      label: 'Emergency Service',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-steel-blue text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="font-oswald text-4xl md:text-5xl font-bold mb-4">
              About Schaeffer&apos;s
            </h1>
            <p className="text-xl text-bright-silver max-w-2xl mx-auto">
              Four and a half decades of excellence in tank and trailer services
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-oswald text-3xl font-semibold text-steel-blue mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Since 1978, Schaeffer&apos;s Tank & Truck Service has been
                  Ohio&apos;s trusted partner for tank and trailer repairs. What
                  started as a small family business has grown into the
                  region&apos;s premier tank service facility, known for quality
                  workmanship and reliable service.
                </p>
                <p>
                  Our ASME R-Stamp certification demonstrates our commitment to
                  the highest industry standards. Every repair, modification,
                  and fabrication project meets or exceeds strict safety and
                  quality requirements, giving our customers confidence in our
                  work.
                </p>
                <p>
                  Today, we combine traditional craftsmanship with modern
                  technology to serve customers throughout Ohio and beyond. Our
                  experienced team takes pride in solving complex challenges and
                  getting you back on the road quickly and safely.
                </p>
              </div>
            </div>
            <div className="bg-gray-200 h-96 rounded-lg flex items-center justify-center">
              <p className="text-gray-600">Company photo placeholder</p>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-safety-yellow rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="text-2xl text-steel-blue" />
                  </div>
                  <div className="font-oswald text-3xl font-bold text-steel-blue mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-oswald text-3xl font-semibold text-steel-blue mb-4">
              Our Journey
            </h2>
            <p className="text-lg text-gray-600">
              Milestones in our commitment to excellence
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-steel-blue hidden md:block"></div>

            <div className="space-y-12">
              {timelineEvents.map((event, index) => (
                <div
                  key={index}
                  className={`flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                >
                  <div
                    className={`flex-1 ${index % 2 === 0 ? 'md:text-right md:pr-8' : 'md:text-left md:pl-8'}`}
                  >
                    <div className="bg-white p-6 rounded-lg shadow-md">
                      <div className="font-oswald text-2xl font-bold text-safety-yellow mb-2">
                        {event.year}
                      </div>
                      <h3 className="font-oswald text-xl font-semibold text-steel-blue mb-2">
                        {event.title}
                      </h3>
                      <p className="text-gray-600">{event.description}</p>
                    </div>
                  </div>

                  {/* Timeline dot */}
                  <div className="w-4 h-4 bg-safety-yellow rounded-full border-4 border-steel-blue flex-shrink-0 hidden md:block"></div>

                  <div className="flex-1"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-16 bg-steel-blue text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-oswald text-3xl font-semibold mb-4">
              Our Mission & Values
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="font-oswald text-xl font-semibold text-safety-yellow mb-4">
                Quality First
              </h3>
              <p className="text-bright-silver">
                Every project meets the highest standards of quality and safety,
                backed by our ASME R-Stamp certification.
              </p>
            </div>
            <div className="text-center">
              <h3 className="font-oswald text-xl font-semibold text-safety-yellow mb-4">
                Customer Focus
              </h3>
              <p className="text-bright-silver">
                We understand the importance of uptime and work efficiently to
                minimize downtime and get you back in operation.
              </p>
            </div>
            <div className="text-center">
              <h3 className="font-oswald text-xl font-semibold text-safety-yellow mb-4">
                Continuous Innovation
              </h3>
              <p className="text-bright-silver">
                We invest in the latest technology and training to provide
                cutting-edge solutions for complex challenges.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
