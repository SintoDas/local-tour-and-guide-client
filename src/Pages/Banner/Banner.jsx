import banner from "../../assets/banne.jpeg";
import { motion } from "framer-motion";
const Banner = () => {
  return (
    <div>
      <motion.div
        animate={{
          scale: [1, 2, 2, 1, 1],
          borderRadius: ["10%", "20%", "50%", "50%", "20%"],
        }}
        className="relative w-full h-64 overflow-hidden rounded-lg"
      >
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
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="bg-blue-600 mt-4 hover:bg-blue-700 text-white rounded-full px-4 py-2 transition duration-300"
              >
                Book Now
              </motion.button>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Banner;
