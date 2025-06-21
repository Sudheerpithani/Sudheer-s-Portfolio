import React, { useState } from "react";
import { certificates } from "../../constants";

const Certificates = () => {
  const [selectedCert, setSelectedCert] = useState(null);

  const handleOpenModal = (cert) => {
    setSelectedCert(cert);
  };

  const handleCloseModal = () => {
    setSelectedCert(null);
  };

  return (
    <section
      id="certificates"
      className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans relative"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">CERTIFICATES</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          Verified certifications showcasing my learning and technical achievements
        </p>
      </div>

      {/* Certificates Grid */}
      <div className="grid gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {certificates.map((cert) => (
          <div
            key={cert.id}
            onClick={() => handleOpenModal(cert)}
            className="border border-white bg-gray-900 backdrop-blur-md rounded-2xl shadow-2xl overflow-hidden cursor-pointer hover:shadow-purple-500/50 hover:-translate-y-2 transition-transform duration-300"
          >
            <div className="p-4">
              <img
                src={cert.image}
                alt={cert.title}
                className="w-full h-48 object-cover rounded-xl"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-white mb-2">
                {cert.title}
              </h3>
              <p className="text-gray-500 text-sm">{cert.issuer}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedCert && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 p-4">
          <div className="bg-gray-900 rounded-xl shadow-2xl w-[90%] max-w-3xl overflow-hidden relative">
            <div className="flex justify-end p-4">
              <button
                onClick={handleCloseModal}
                className="text-white text-3xl font-bold hover:text-purple-500"
              >
                &times;
              </button>
            </div>
            <div className="flex flex-col items-center px-6 pb-6">
              <img
                src={selectedCert.image}
                alt={selectedCert.title}
                className="w-full object-contain rounded-xl mb-6"
              />
              <h3 className="text-2xl font-bold text-white mb-2">
                {selectedCert.title}
              </h3>
              <p className="text-gray-400 mb-4">{selectedCert.issuer}</p>
              {selectedCert.link && (
                <a
                  href={selectedCert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-purple-600 hover:bg-purple-800 text-white px-6 py-2 rounded-xl text-lg font-semibold"
                >
                  View Certificate
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Certificates;