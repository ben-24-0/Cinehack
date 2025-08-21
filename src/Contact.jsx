import React from "react";
import { Instagram, Linkedin, Globe, Mail } from "lucide-react";

const Contact = () => {
  return (
    <div id="contact" className="min-h-screen bg-black font-sans select-none">
      {/* Container for the purple section with wave SVGs. */}
      <div className="bg-purple-400">
        {/* Top SVG wave */}
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 220">
          <path
            fill="#000000"
            d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,149.3C960,160,1056,160,1152,138.7C1248,117,1344,75,1392,53.3L1440,32V0H0Z"
          ></path>
        </svg>

        <div className="px-8 py-16 flex flex-col items-center gap-8">
          {/* Title */}
          <h1 className="text-5xl font-bold mb-8 text-black text-center">
            Contact Us
          </h1>

          {/* Event Location */}
          <div className="bg-gray-700/60 backdrop-blur-md text-white rounded-lg p-6 max-w-2xl w-full text-center shadow-lg">
            <h3 className="text-2xl font-semibold mb-4 text-white">Event Location</h3>
            <p className="font-medium text-lg mb-2 text-white">
              Federal Institute of Science and Technology (FISAT)
            </p>
            <p className="text-gray-300">
              Hormis Nagar, Mookkannur, Angamaly, Kerala 683577
            </p>
          </div>

          {/* Contact Persons - Two Main Boxes */}
          <div className="flex flex-col gap-8 max-w-6xl w-full">
            
            {/* Faculty Coordinators Box */}
            <div className="bg-gray-800/90 backdrop-blur-md text-white rounded-2xl p-8 shadow-2xl border border-gray-700">
              <h3 className="text-3xl font-bold mb-8 text-white text-center">Faculty Coordinators</h3>
              
              {/* IEDC Category */}
              <div className="mb-8">
                <h4 className="text-xl font-semibold text-gray-200 mb-6 bg-gray-700 py-3 px-6 rounded-lg text-center">IEDC</h4>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-gray-900 text-white rounded-2xl p-6 shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-600">
                    <p className="font-bold text-xl mb-3 text-white">Mr. Benoy Abraham</p>
                    <p className="text-gray-400 text-sm mb-4 uppercase tracking-wide">IEDC Coordinator</p>
                    <div className="bg-black px-4 py-2 rounded-lg border border-gray-600">
                      <p className="text-green-400 font-mono text-sm">+91 85472 97021</p>
                    </div>
                  </div>
                  <div className="bg-gray-900 text-white rounded-2xl p-6 shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-600">
                    <p className="font-bold text-xl mb-3 text-white">Ms. Parvathy G Menon</p>
                    <p className="text-gray-400 text-sm mb-4 uppercase tracking-wide">IEDC Coordinator</p>
                    <div className="bg-black px-4 py-2 rounded-lg border border-gray-600">
                      <p className="text-green-400 font-mono text-sm">+91 85473 78007</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* IEDC TBI & FISAT Category */}
              <div>
                <h4 className="text-xl font-semibold text-gray-200 mb-6 bg-gray-700 py-3 px-6 rounded-lg text-center">IEDC TBI & FISAT</h4>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-gray-900 text-white rounded-2xl p-6 shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-600">
                    <p className="font-bold text-xl mb-3 text-white">Mr. Tom Anto</p>
                    <p className="text-gray-400 text-sm mb-4 uppercase tracking-wide">IEDC TBI Coordinator</p>
                    <div className="bg-black px-4 py-2 rounded-lg border border-gray-600">
                      <p className="text-green-400 font-mono text-sm">+91 90489 17395</p>
                    </div>
                  </div>
                  <div className="bg-gray-900 text-white rounded-2xl p-6 shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-600">
                    <p className="font-bold text-xl mb-3 text-white">Ms. Meera Treesa Mathews</p>
                    <p className="text-gray-400 text-sm mb-4 uppercase tracking-wide">FISAT Coordinator</p>
                    <div className="bg-black px-4 py-2 rounded-lg border border-gray-600">
                      <p className="text-green-400 font-mono text-sm">+91 97468 79952</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Student Coordinators Box */}
            <div className="bg-gray-800/90 backdrop-blur-md text-white rounded-2xl p-8 shadow-2xl border border-gray-700">
              <h3 className="text-3xl font-bold mb-8 text-white text-center">Student Coordinators</h3>
              <div>
                <h4 className="text-xl font-semibold text-gray-200 mb-6 bg-gray-700 py-3 px-6 rounded-lg text-center">Event Management Team</h4>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-gray-900 text-white rounded-2xl p-6 shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-600">
                    <p className="font-bold text-xl mb-3 text-white">Naveen Jayprakash</p>
                    <p className="text-gray-400 text-sm mb-4 uppercase tracking-wide">Student Coordinator</p>
                    <div className="bg-black px-4 py-2 rounded-lg border border-gray-600">
                      <p className="text-green-400 font-mono text-sm">+91 80866 48992</p>
                    </div>
                  </div>
                  <div className="bg-gray-900 text-white rounded-2xl p-6 shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-600">
                    <p className="font-bold text-xl mb-3 text-white">Nandakishor K</p>
                    <p className="text-gray-400 text-sm mb-4 uppercase tracking-wide">Student Coordinator</p>
                    <div className="bg-black px-4 py-2 rounded-lg border border-gray-600">
                      <p className="text-green-400 font-mono text-sm">+91 75949 93674</p>
                    </div>
                  </div>
                  <div className="bg-gray-900 text-white rounded-2xl p-6 shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-600">
                    <p className="font-bold text-xl mb-3 text-white">Vishwam K</p>
                    <p className="text-gray-400 text-sm mb-4 uppercase tracking-wide">Student Coordinator</p>
                    <div className="bg-black px-4 py-2 rounded-lg border border-gray-600">
                      <p className="text-green-400 font-mono text-sm">+91 70346 67695</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Google Maps Section */}
        <div className="px-8 pb-16">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-black mb-8">
              Find Us Here
            </h2>
            <div className="bg-white rounded-lg overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3928.6557982158447!2d76.38845261479488!3d10.109876691992234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080d514abec6bf%3A0xbd582caa5844192!2sFederal%20Institute%20of%20Science%20and%20Technology!5e0!3m2!1sen!2sin!4v1692781234567!5m2!1sen!2sin"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="FISAT Location"
              ></iframe>
            </div>

            {/* Get Directions Button */}
            <div className="text-center mt-6">
              <a
                href="https://www.google.com/maps/dir//Federal+Institute+of+Science+and+Technology,+Hormis+Nagar,+Mookkannur,+Angamaly,+Kerala+683577/@10.109877,76.388453,17z"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 
                            bg-purple-900 text-white font-semibold rounded-lg 
                            hover:bg-black transition-all duration-300 
                            shadow-md hover:shadow-xl 
                            transform hover:-translate-y-1"
              >
                <span>Get Directions</span>
              </a>
            </div>
          </div>
        </div>

        {/* Connect with Us Section */}
        <div className="px-8 pb-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-black mb-8">
              Connect with Us
            </h2>
            <div className="flex justify-center items-center gap-8 flex-wrap">
              {/* Instagram */}
              <a
                href="https://instagram.com/fisatiedc"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white px-6 py-3 rounded-lg hover:from-pink-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                <Instagram size={24} />
                <span className="font-semibold">Instagram</span>
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/company/iedc-fisat/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                <Linkedin size={24} />
                <span className="font-semibold">LinkedIn</span>
              </a>

              {/* IEDC FISAT Website */}
              <a
                href="https://iedc.fisat.ac.in"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                <Globe size={24} />
                <span className="font-semibold">IEDC FISAT</span>
              </a>

              {/* Mail ID */}
              <a
                href="mailto:fisatiedc@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                <Mail size={24} />
                <span className="font-semibold">Mail Us</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom SVG wave */}
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 220">
          <path
            fill="#000000"
            d="M0,32L48,53.3C96,75,192,117,288,138.7C384,160,480,160,576,149.3C672,139,768,117,864,122.7C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96V220H0Z"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default Contact;