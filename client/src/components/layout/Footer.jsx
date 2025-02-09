export default function Footer() {
    return (
      <footer className="bg-gray-900 text-white py-8 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul>
              <li><a href="/rooms" className="hover:text-gray-300">Rooms</a></li>
              <li><a href="/attendance" className="hover:text-gray-300">Attendance</a></li>
              <li><a href="/fest-events" className="hover:text-gray-300">Fest & Sports</a></li>
              <li><a href="/contact" className="hover:text-gray-300">Contact Us</a></li>
            </ul>
          </div>
  
          {/* Team Members */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Team Members</h3>
            <ul>
              <li>👨‍💻 Ayush Rak</li>
              <li>👩‍💻 John Doe</li>
              <li>👨‍💻 Alex Smith</li>
              <li>👩‍💻 Priya Sharma</li>
            </ul>
          </div>
  
          {/* Social Media */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-gray-300">📘 Facebook</a>
              <a href="#" className="hover:text-gray-300">📸 Instagram</a>
              <a href="#" className="hover:text-gray-300">🐦 Twitter</a>
            </div>
          </div>
  
        </div>
  
        {/* Copyright */}
        <div className="text-center text-gray-400 mt-6">
          &copy; 2024 XYZ Hostel. All rights reserved.
        </div>
      </footer>
    );
  }
  