const Banner = () => {
  return (
    <div>
      <div className="bg-gradient-to-r rounded-lg from-purple-600 to-pink-500 p-10 text-white">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0 text-center md:text-left">
              <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
                Discover the Beauty of Your Hometown
              </h1>
              <p className="mt-4 text-xl">
                Let our local guides take you on an unforgettable journey!
              </p>
            </div>
            <a
              href="#book-now"
              className="bg-yellow-400 hover:bg-yellow-500 text-purple-800 hover:text-white py-3 px-6 rounded-full font-semibold text-sm transition duration-300 transform hover:scale-105"
            >
              Confirm Booking
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
