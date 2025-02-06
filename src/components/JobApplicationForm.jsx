import React, { useState } from 'react';
import { FaRegAddressCard, FaRegPaperPlane, FaFileUpload } from 'react-icons/fa';

const JobApplicationForm = () => {
  const [cv, setCv] = useState(null);
  const [coverLetter, setCoverLetter] = useState('');

  // Handle file selection for CV
  const handleCvChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setCv(file);
    }
  };

  // Handle text input for cover letter
  const handleCoverLetterChange = (event) => {
    setCoverLetter(event.target.value);
  };

  return (
    <div className="bg-beige text-dark-brown p-8 rounded-lg shadow-md max-w-lg mx-auto">
      <h2 className="text-2xl font-bold text-center mb-6">Job Application</h2>

      <form className="space-y-6">
        <div>
          <label className="block text-sm font-semibold text-dark-brown" htmlFor="name">
            Full Name
          </label>
          <input
            id="name"
            type="text"
            placeholder="Enter your full name"
            className="w-full p-3 rounded-lg border border-light-brown focus:ring-2 focus:ring-primary transition"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-dark-brown" htmlFor="email">
            Email Address
          </label>
          <input
            id="email"
            type="email"
            placeholder="Enter your email address"
            className="w-full p-3 rounded-lg border border-light-brown focus:ring-2 focus:ring-primary transition"
          />
        </div>

        {/* CV Upload Section */}
        <div>
          <label className="block text-sm font-semibold text-dark-brown" htmlFor="cv">
            Upload Your CV
          </label>
          <input
            type="file"
            id="cv"
            accept=".pdf,.doc,.docx"
            onChange={handleCvChange}
            className="w-full p-3 rounded-lg border border-light-brown focus:ring-2 focus:ring-primary transition"
          />
          {cv && (
            <p className="mt-2 text-sm text-dark-brown">
              CV Uploaded: <strong>{cv.name}</strong>
            </p>
          )}
        </div>

        {/* Cover Letter Section */}
        <div>
          <label className="block text-sm font-semibold text-dark-brown" htmlFor="coverLetter">
            Cover Letter
          </label>
          <textarea
            id="coverLetter"
            value={coverLetter}
            onChange={handleCoverLetterChange}
            placeholder="Tell us why you're the perfect candidate"
            className="w-full p-3 rounded-lg border border-light-brown focus:ring-2 focus:ring-primary transition"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-dark-brown text-white p-3 rounded-lg flex items-center justify-center hover:bg-primary transition"
        >
          <FaRegPaperPlane className="mr-2" /> Submit Application
        </button>
      </form>
    </div>
  );
};

export default JobApplicationForm;
