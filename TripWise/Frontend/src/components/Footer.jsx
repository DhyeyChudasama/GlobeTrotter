import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="relative mt-16">
      <div className="gradient-border-top" />
      <div className="bg-white/70 backdrop-blur-xl border-t border-white/30">
        <div className="container py-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Brand */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900">TripWise</h2>
              <p className="text-gray-600 mt-2">
                Plan smarter, travel better. Seamless itineraries, personalized suggestions, and effortless budgeting.
              </p>
            </div>

            {/* Links */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Explore</h3>
              <ul className="mt-3 space-y-2">
                <li>
                  <Link to="/" className="text-gray-600 hover:text-gray-900 transition-colors">Home</Link>
                </li>
                <li>
                  <Link to="/itinerary" className="text-gray-600 hover:text-gray-900 transition-colors">Itinerary Planner</Link>
                </li>
                <li>
                  <Link to="/smartsuggest" className="text-gray-600 hover:text-gray-900 transition-colors">Smart Suggest</Link>
                </li>
                <li>
                  <Link to="/expenselog" className="text-gray-600 hover:text-gray-900 transition-colors">Budget Tracker</Link>
                </li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Resources</h3>
              <ul className="mt-3 space-y-2">
                <li>
                  <Link to="/profile" className="text-gray-600 hover:text-gray-900 transition-colors">Your Profile</Link>
                </li>
                <li>
                  <Link to="/settings" className="text-gray-600 hover:text-gray-900 transition-colors">Settings</Link>
                </li>
                <li>
                  <Link to="/contact" className="text-gray-600 hover:text-gray-900 transition-colors">Contact</Link>
                </li>
              </ul>
            </div>

            {/* Socials */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Follow us</h3>
              <div className="flex gap-4 mt-3">
                <a href="#" aria-label="Facebook" className="text-gray-600 hover:text-[#4267B2] transition-colors">
                  <FaFacebook className="text-2xl" />
                </a>
                <a href="#" aria-label="Instagram" className="text-gray-600 hover:text-[#C13584] transition-colors">
                  <FaInstagram className="text-2xl" />
                </a>
                <a href="#" aria-label="YouTube" className="text-gray-600 hover:text-[#FF0000] transition-colors">
                  <FaYoutube className="text-2xl" />
                </a>
              </div>
            </div>
          </div>

          <div className="mt-10 pt-6 border-t border-gray-200 text-center text-sm text-gray-500">
            &copy; {new Date().getFullYear()} TripWise. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
