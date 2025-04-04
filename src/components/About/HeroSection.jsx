const HeroSection = () => {
  return (
    <div
      className="relative w-full h-[400px] bg-cover bg-center"
      style={{ backgroundImage: "url('./assets/home/01.jpg')" }}
    >
      {/* Overlay for better readability */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content Container */}
      <div className="relative z-10 flex h-full w-full items-center justify-center text-center text-white">
        <div className="max-w-2xl px-4">
          <h1 className="mb-6 text-5xl font-extrabold drop-shadow-lg">
            Contact Us
          </h1>
          <p className="mb-4 text-lg text-gray-200">
            Have any questions? Reach out to us and we'll be happy to assist
            you.
          </p>
          <a
            href="#"
            className="inline-block rounded-lg bg-blue-600 px-6 py-3 text-lg font-semibold text-white transition-all duration-300 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
          >
            About Us
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
