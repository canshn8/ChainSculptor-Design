import React, { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const CardDetails = ({ job, onClose }) => {
  const modalRef = useRef(null);

  // ESC tuşuna basınca modalı kapat
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose(); // ESC tuşuna basıldığında modalı kapat
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  // Dışarı tıklamayı algıla
  const handleClickOutside = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      onClose(); 
    }
  };

  if (!job) return null; 

  return (
    <AnimatePresence>
      {job && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-md z-50"
          onClick={handleClickOutside}
        >
          <motion.div
            ref={modalRef} 
            className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl p-8 w-[90%] max-w-[70vw] h-[90vh] overflow-y-auto relative"
            initial={{ opacity: 0, scale: 0.3 }} 
            animate={{ opacity: 1, scale: 1 }} 
            exit={{ opacity: 0, scale: 0.8 }} 
            transition={{ duration: 0.5, ease: "easeInOut" }} 
          >
            {/* Kapatma Butonu */}
            <button
              className="absolute top-4 right-4 text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white text-3xl"
              onClick={onClose} 
            >
              ✕
            </button>

            <h2 className="text-4xl font-bold text-cardHd">{job.title}</h2>
            <p className="text-lg text-cardInfo mt-4">{job.description}</p>

            <div className="mt-6 space-y-3">
              <p className="text-xl"><strong>Şirket:</strong> {job.company}</p>
              <p className="text-xl"><strong>Maaş:</strong> ${job.salary}</p>
              <p className="text-xl"><strong>Tür:</strong> {job.type}</p>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default CardDetails;
