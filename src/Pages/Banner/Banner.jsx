import banner from "../../assets/banner.jpeg";
import { motion } from "framer-motion";
const Banner = () => {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="relative w-full h-64 overflow-hidden rounded-lg">
          <img
            src={banner}
            alt="Local Tour Banner"
            className="object-cover w-full h-full"
          />

          <div className="absolute inset-0 bg-black opacity-50"></div>

          <div className="absolute inset-0  py-4 flex items-center justify-center text-white">
            <div className="text-center">
              <h1 className="text-3xl font-semibold">Explore Local Tours</h1>
              <p className="text-lg mt-2">
                Discover the beauty of our city with our expert guides.
              </p>
              <div className="py-3">
                <button className="bg-blue-600 mt-4 hover:bg-blue-700 text-white rounded-full px-4 py-2 transition duration-300">
                  Book Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Banner;
