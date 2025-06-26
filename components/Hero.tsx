import CTAButton from './CTAButton';

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background with gradient fallback */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-steel-blue via-gray-800 to-gray-900">
        {/* Future: Replace with actual hero image */}
        {/* <Image
          src="/images/tanker-yard.jpg"
          alt="Schaeffer's Tank Yard"
          fill
          className="object-cover"
          priority
        /> */}
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="font-oswald text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
          ASME-Certified Tank & Trailer Repairs
          <span className="block text-safety-yellow mt-2">Since 1978</span>
        </h1>

        <p className="text-xl md:text-2xl mb-8 text-bright-silver max-w-2xl mx-auto leading-relaxed">
          Professional tank services with 45+ years of experience. Emergency
          service available when you need it most.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <CTAButton href="/contact" size="lg" className="w-full sm:w-auto">
            Book Service
          </CTAButton>

          <CTAButton
            href="tel:330-296-7519"
            variant="secondary"
            size="lg"
            className="w-full sm:w-auto"
          >
            Call 330-296-7519
          </CTAButton>
        </div>

        {/* Trust indicators */}
        <div className="mt-12 flex flex-wrap justify-center items-center gap-8 text-bright-silver">
          <div className="flex items-center space-x-2">
            <span className="w-2 h-2 bg-safety-yellow rounded-full"></span>
            <span className="text-sm">ASME R-Stamp Certified</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="w-2 h-2 bg-safety-yellow rounded-full"></span>
            <span className="text-sm">45+ Years Experience</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="w-2 h-2 bg-safety-yellow rounded-full"></span>
            <span className="text-sm">Emergency Service</span>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-bright-silver rounded-full flex justify-center">
          <div className="w-1 h-3 bg-bright-silver rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
