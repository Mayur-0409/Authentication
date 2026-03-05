import { motion } from "framer-motion";
import { useAuthStore } from "../store/authStore";
import { formdate } from "../utile/Date";

const HomePage = () => {
  const { user, logout } = useAuthStore();
  const HandleLogout = () => {
    logout();
  };
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl w-full bg-gray-800 bg-opacity-70 backdrop-filter backdrop-blur-xl rounded-2xl shadow-xl overflow-hidden p-10"
    >
      <h2 className="text-3xl font-bold text-center text-green-400 bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent mb-2">
        Home Page
      </h2>

      <div className="space-y-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="p-4 bg-gray-800 bg-opacity-50 rounded-50 rounded-lg border border-gray-700"
        >
          <h3 className="mb-3 text-xl font-semibold text-green-400">
            Profile Information
          </h3>
          <p className="text-gray-300">
            <span className="text-green-400 font-bold">Name: </span>
            {user.name}
          </p>
          <p className="text-gray-300">
            <span className="text-green-400 font-bold">Email: </span>
            {user.email}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="p-4 bg-gray-800 bg-opacity-50 rounded-lg border border-gray-700"
        >
          <h3 className="mb-3 text-xl font-semibold text-green-400">
            Account Status
          </h3>
          <p className="text-gray-300">
            <span className="text-green-400 font-bold">Joined: </span>
            {new Date(user.createdAt).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
          <p className="text-gray-300">
            <span className="text-green-400 font-bold">Last Login: </span>
            {formdate(user.lastLogin)}
          </p>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="mt-6 text-center"
      >
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={HandleLogout}
          className="px-6 py-3 w-full bg-green-600 hover:bg-green-700 text-white font-bold rounded-full shadow-lg transition-colors duration-300 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 focus-outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-gray-900"
        >
          Logout
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

export default HomePage;
