import React from "react";
import { Instagram, Linkedin, Globe, Mail, MapPin, Phone } from "lucide-react";

const Contact = () => {
  return (
    <div id="contact" className="bg-gradient-to-b from-gray-900 to-black font-light py-16">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Get In Touch
          </h1>
          <p className="text-gray-300 text-lg">
            Have questions? We're here to help you connect with innovation.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          
          {/* Left Side - Event Location */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
            <div className="flex items-center gap-3 mb-4">
              <MapPin className="text-blue-400" size={24} />
              <h2 className="text-2xl font-bold text-white">Event Venue</h2>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-semibold text-blue-300">
                Federal Institute of Science and Technology (FISAT)
              </h3>
              <p className="text-gray-300">
                Hormis Nagar, Mookkannur<br />
                Angamaly, Kerala 683577
              </p>
              <a
                href="https://www.google.com/maps/dir//Federal+Institute+of+Science+and+Technology,+Hormis+Nagar,+Mookkannur,+Angamaly,+Kerala+683577/@10.109877,76.388453,17z"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-3 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                <MapPin size={16} />
                Get Directions
              </a>
            </div>
          </div>

          {/* Right Side - Quick Contact */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
            <div className="flex items-center gap-3 mb-4">
              <Phone className="text-green-400" size={24} />
              <h2 className="text-2xl font-bold text-white">Quick Contact</h2>
            </div>
            <div className="space-y-3">
              <div>
                <p className="text-green-300 font-semibold">IEDC Nodal Officer</p>
                <p className="text-gray-300">Mr. Benoy Abraham</p>
                <p className="text-blue-300 font-mono">+91 85472 97021</p>
              </div>
              <div>
                <p className="text-green-300 font-semibold">Student Coordinator</p>
                <p className="text-gray-300">Naveen Jayaprakash</p>
                <p className="text-blue-300 font-mono">+91 80866 48992</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Grid - Faculty & Students */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          
          {/* Faculty Coordinators */}
          <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10">
            <h3 className="text-xl font-bold text-white mb-4 text-center">Faculty Coordinators</h3>
            <div className="space-y-4">
              <div className="bg-black/30 rounded-lg p-4">
                <p className="font-semibold text-white">Mr. Tom Anto</p>
                <p className="text-gray-400 text-sm">IEDC Nodal Officer</p>
                <p className="text-green-400 font-mono text-sm">+91 90489 17395</p>
              </div>
              <div className="bg-black/30 rounded-lg p-4">
                <p className="font-semibold text-white">Mr. Benoy Abraham</p>
                <p className="text-gray-400 text-sm">IEDC Nodal Officer</p>
                <p className="text-green-400 font-mono text-sm">+91 85472 97021</p>
              </div>
              <div className="bg-black/30 rounded-lg p-4">
                <p className="font-semibold text-white">Ms. Parvathy G Menon</p>
                <p className="text-gray-400 text-sm">IEDC Nodal Officer</p>
                <p className="text-green-400 font-mono text-sm">+91 85473 78007</p>
              </div>
              
              <div className="bg-black/30 rounded-lg p-4">
                <p className="font-semibold text-white">Ms. Meera Treesa Mathews</p>
                <p className="text-gray-400 text-sm">FISAT Alumni Coordinator</p>
                <p className="text-green-400 font-mono text-sm">+91 97468 79952</p>
              </div>
            </div>
          </div>

          {/* Student Coordinators */}
          <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10">
            <h3 className="text-xl font-bold text-white mb-4 text-center">Student Coordinators</h3>
            <div className="space-y-4">
              <div className="bg-black/30 rounded-lg p-4">
                <p className="font-semibold text-white">Naveen Jayaprakash</p>
                <p className="text-gray-400 text-sm">Student Coordinator</p>
                <p className="text-green-400 font-mono text-sm">+91 80866 48992</p>
              </div>
              <div className="bg-black/30 rounded-lg p-4">
                <p className="font-semibold text-white">Nandakishor K</p>
                <p className="text-gray-400 text-sm">Student Coordinator</p>
                <p className="text-green-400 font-mono text-sm">+91 75949 93674</p>
              </div>
              <div className="bg-black/30 rounded-lg p-4">
                <p className="font-semibold text-white">Vishwam Sajeev</p>
                <p className="text-gray-400 text-sm">Student Coordinator</p>
                <p className="text-green-400 font-mono text-sm">+91 70346 67695</p>
              </div>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="text-center">
          <h2 className="text-2xl font-bold text-white mb-6">Connect With Us</h2>
          <div className="flex justify-center items-center gap-4 flex-wrap">
            <a
              href="https://instagram.com/cinehack.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-gradient-to-r from-pink-500 to-purple-600 text-white px-4 py-2 rounded-lg hover:from-pink-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
            >
              <Instagram size={20} />
              
            </a>

            <a
              href="https://www.linkedin.com/company/iedc-fisat/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105"
            >
              <Linkedin size={20} />
             
            </a>

            <a
              href="https://iedc.fisat.ac.in"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-all duration-300 transform hover:scale-105"
            >
              <Globe size={20} />
          
            </a>

            <a
              href="mailto:cinehack.ai@gmail.com"
              className="flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-all duration-300 transform hover:scale-105"
            >
              <Mail size={20} />
              
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;