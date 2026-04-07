import { Link } from "react-router-dom";
import { MdNearbyError } from "react-icons/md";


function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      
      <div className="text-center">
        
        {/* 404 Text */}
        <h1 className="text-7xl font-extrabold text-blue-600 mb-4">
          404
        </h1>

        {/* Message */}
        <h2 className="text-2xl font-semibold text-gray-800 mb-2 flex items-center justify-center gap-2">
          Page Not Found <MdNearbyError />
        </h2>

        <p className="text-gray-500 mb-6">
          Sorry, the page you are looking for does not exist.
        </p>

        {/* Button */}
        <Link to="/">
          <button className="bg-blue-600 text-white px-6 py-2 rounded-lg shadow hover:bg-blue-700 transition">
            Go Back Home
          </button>
        </Link>

      </div>
    </div>
  );
}

export default NotFound;