import React from 'react';

const Contact = () => {
  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-8">Contact Us</h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Contact Form */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-lg font-medium text-gray-700">Name</label>
              <input type="text" id="name" className="mt-1 p border-2 border-slate-900 block w-full  rounded-md shadow-sm   "  placeholder='Enter Your Name' />
            </div>
            <div>
              <label htmlFor="email" className="block text-lg font-medium text-gray-700">Email</label>
              <input type="email" id="email" className="mt-1 block w-full  border-2 border-slate-900  rounded-md shadow-sm " placeholder='Enter Your Email' />
            </div>
            <div>
              <label htmlFor="message" className="block text-lg font-medium text-gray-700">Message</label>
              <textarea id="message" rows="4" className="mt-1 block w-full border-2 border-slate-900 rounded-md shadow-sm "  placeholder='Write Your Message ' ></textarea>
            </div>
            <button type="submit" className="w-full bg-gray-800 text-white font-bold py-2 px-4 rounded hover:bg-gray-900">Send Message</button>
          </form>
        </div>

        {/* Contact Information */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
          <p className="text-lg mb-4">We'd love to hear from you! You can reach us at:</p>
          <ul className="space-y-4">
            <li className="flex items-center">
              <span className="text-gray-700 mr-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.05 4.636a7 7 0 109.9 0A9.001 9.001 0 0010 2a9.001 9.001 0 00-4.95 2.636zM2 10a8 8 0 1016 0 8 8 0 00-16 0zm8-6a6 6 0 110 12A6 6 0 0110 4zm3.707 5.293a1 1 0 00-1.414 1.414L12.586 11l-1.293 1.293a1 1 0 001.414 1.414L14 12.414l1.293 1.293a1 1 0 001.414-1.414L15.414 11l1.293-1.293a1 1 0 00-1.414-1.414L14 9.586l-1.293-1.293z" clipRule="evenodd" />
                </svg>
              </span>
              <span>Kathmandu Nepal </span>
            </li>
            <li className="flex items-center">
              <span className="text-gray-700 mr-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2 8a6 6 0 1112 0 6 6 0 01-12 0zM4 8a4 4 0 108 0 4 4 0 00-8 0zm7 5a1 1 0 011 1v2a1 1 0 01-2 0v-2a1 1 0 011-1zm3-4a1 1 0 012 0 1 1 0 01-2 0zM4 11a1 1 0 000 2 1 1 0 000-2zM4 13a1 1 0 000 2 1 1 0 000-2zM11 13a1 1 0 000 2 1 1 0 000-2z" />
                </svg>
              </span>
              <span>(+977) 042-7890</span>
            </li>
            <li className="flex items-center">
              <span className="text-gray-700 mr-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2 5a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm1 0v10h14V5H3zm2 3h10v2H5V8zm0 3h5v2H5v-2z" />
                </svg>
              </span>
              <span>contact@ecommerce.com</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Contact;
