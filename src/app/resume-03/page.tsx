"use client"
import "./style.css"
import React, { useState } from 'react';
import { jsPDF } from 'jspdf';
// import Link from 'next/link';
// import Image from 'next/image';

const EditableResume: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    fname: '',
    email: '',
    phone: '',
    degree: '',
    institution: '',
    year1: '',
    position: '',
    company: '',
    year2: '',
  });

  const [showResume, setShowResume] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const generateResume = () => {
    setShowResume(true);
  };

  // const copyLink = () => {
  //   navigator.clipboard.writeText(window.location.href).then(() => {
  //     alert('Link copied to clipboard!');
  //   });
  // };

  // const share = () => {
  //   if (navigator.share) {
  //     navigator
  //       .share({
  //         title: 'Resume',
  //         url: window.location.href,
  //       })
  //       .then(() => {
  //         alert('Thanks for sharing!');
  //       })
  //       .catch(console.error);
  //   } else {
  //     alert('Your browser does not support the Share feature.');
  //   }
  // };

  // const downloadPDF = () => {
  //   const doc = new jsPDF();
  //   const {
  //     name,
  //     fname,
  //     email,
  //     phone,
  //     degree,
  //     institution,
  //     year1,
  //     position,
  //     company,
  //     year2,
  //   } = formData;

  //   doc.text(20, 20, `Name: ${name}`);
  //   doc.text(20, 30, `Father's Name: ${fname}`);
  //   doc.text(20, 40, `Email: ${email}`);
  //   doc.text(20, 50, `Phone: ${phone}`);
  //   doc.text(20, 60, `Degree: ${degree}`);
  //   doc.text(20, 70, `Institution: ${institution}`);
  //   doc.text(20, 80, `Year: ${year1}`);
  //   doc.text(20, 90, `Position: ${position}`);
  //   doc.text(20, 100, `Company: ${company}`);
  //   doc.text(20, 110, `Year: ${year2}`);

  //   doc.save('resume.pdf');
  // };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-800 to-red-800 py-10">
      <div className="text-center">
        <h1 className=" text-white text-3xl font-bold bg-gradient-to-r from-red-600 to-blue-600 py-4 px-8 rounded-lg shadow-lg mx-auto">
          Editable Resume
        </h1>
      </div>
      <div className="max-w-3xl mx-auto mt-8 p-6 bg-gradient-to-r from-red-600 to-blue-600 rounded-lg shadow-lg">
        <h2 className="text-center text-white text-2xl font-semibold mb-6">
          Personal Information
        </h2>
        <form className="space-y-4">
          <div>
            <label htmlFor="name" className="text-white font-semibold">
              Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="  w-full mt-1 p-3 bg-gradient-to-r from-red-500 to-blue-500 rounded-md focus:ring focus:ring-blue-300"
            />
          </div>
          <div>
            <label htmlFor="fname" className="text-white font-semibold">
              Father's Name:
            </label>
            <input
              type="text"
              id="fname"
              name="fname"
              value={formData.fname}
              onChange={handleChange}
              className="w-full mt-1 p-3 bg-gradient-to-r from-red-500 to-blue-500 rounded-md focus:ring focus:ring-blue-300"
            />
          </div>
          <div>
            <label htmlFor="email" className="text-white font-semibold">
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full mt-1 p-3 bg-gradient-to-r from-red-500 to-blue-500 rounded-md focus:ring focus:ring-blue-300"
            />
          </div>
          <div>
            <label htmlFor="phone" className="text-white font-semibold">
              Phone:
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full mt-1 p-3 bg-gradient-to-r from-red-500 to-blue-500 rounded-md focus:ring focus:ring-blue-300"
            />
          </div>
        </form>
      </div>
      <div className="max-w-3xl mx-auto mt-8 p-6 bg-gradient-to-r from-red-600 to-blue-600 rounded-lg shadow-lg">
        <h2 className="text-center text-white text-2xl font-semibold mb-6">
          Education
        </h2>
        <form className="space-y-4">
          <div>
            <label htmlFor="degree" className="text-white font-semibold">
              Degree:
            </label>
            <input
              type="text"
              id="degree"
              name="degree"
              value={formData.degree}
              onChange={handleChange}
              className="w-full mt-1 p-3 bg-gradient-to-r from-red-500 to-blue-500 rounded-md focus:ring focus:ring-blue-300"
            />
          </div>
          <div>
            <label htmlFor="institution" className="text-white font-semibold">
              Institution:
            </label>
            <input
              type="text"
              id="institution"
              name="institution"
              value={formData.institution}
              onChange={handleChange}
              className="w-full mt-1 p-3 bg-gradient-to-r from-red-500 to-blue-500 rounded-md focus:ring focus:ring-blue-300"
            />
          </div>
          <div>
            <label htmlFor="year1" className="text-white font-semibold">
              Year:
            </label>
            <input
              type="number"
              id="year1"
              name="year1"
              value={formData.year1}
              onChange={handleChange}
              className="w-full mt-1 p-3 bg-gradient-to-r from-red-500 to-blue-500 rounded-md focus:ring focus:ring-blue-300"
            />
          </div>
        </form>
      </div>
      <div className="max-w-3xl mx-auto mt-8 p-6 bg-gradient-to-r from-red-600 to-blue-600 rounded-lg shadow-lg">
        <h2 className="text-center text-white text-2xl font-semibold mb-6">
          Work Experience
        </h2>
        <form className="space-y-4">
          <div>
            <label htmlFor="position" className="text-white font-semibold">
              Position:
            </label>
            <input
              type="text"
              id="position"
              name="position"
              value={formData.position}
              onChange={handleChange}
              className="w-full mt-1 p-3 bg-gradient-to-r from-red-500 to-blue-500 rounded-md focus:ring focus:ring-blue-300"
            />
          </div>
          <div>
            <label htmlFor="company" className="text-white font-semibold">
              Company:
            </label>
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              className="w-full mt-1 p-3 bg-gradient-to-r from-red-500 to-blue-500 rounded-md focus:ring focus:ring-blue-300"
            />
          </div>
          <div>
            <label htmlFor="year2" className="text-white font-semibold">
              Year:
            </label>
            <input
              type="number"
              id="year2"
              name="year2"
              value={formData.year2}
              onChange={handleChange}
              className="w-full mt-1 p-3 bg-gradient-to-r from-red-500 to-blue-500 rounded-md focus:ring focus:ring-blue-300"
            />
          </div>
        </form>
        <div className="text-center mt-6">
          <button
            onClick={generateResume}
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-800 transition"
          >
            Submit
          </button>
        </div>
      </div>
      {showResume && (
        <div className="max-w-3xl mx-auto mt-8 p-6 bg-gradient-to-r from-red-500 to-blue-500 rounded-lg shadow-lg">
          <h2 className="text-center text-2xl font-semibold mb-6">
            Resume Preview
          </h2>
          <h3 className="text-xl font-semibold">Personal Information</h3>
          <p>
            <strong>Name:</strong> {formData.name}
          </p>
          <p>
            <strong>Father's Name:</strong> {formData.fname}
          </p>
          <p>
            <strong>Email:</strong> {formData.email}
          </p>
          <p>
            <strong>Phone:</strong> {formData.phone}
          </p>
          <h3 className="text-xl font-semibold mt-4">Education</h3>
          <p>
            <strong>Degree:</strong> {formData.degree}
          </p>
          <p>
            <strong>Institution:</strong> {formData.institution}
          </p>
          <p>
            <strong>Year:</strong> {formData.year1}
          </p>
          <h3 className="text-xl font-semibold mt-4">Work Experience</h3>
          <p>
            <strong>Position:</strong> {formData.position}
          </p>
          <p>
            <strong>Company:</strong> {formData.company}
          </p>
          <p>
            <strong>Year:</strong> {formData.year2}
          </p>
        </div>
      )}
      {/* <div className="text-center mt-6">
        <button
          onClick={copyLink}
          className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-800 transition mx-2"
        >
          Copy Link
        </button>
        <button
          onClick={share}
          className="bg-yellow-600 text-white px-4 py-2 rounded-md hover:bg-yellow-800 transition mx-2"
        >
          Share
        </button>
        <button
          onClick={downloadPDF}
          className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-800 transition mx-2"
        >
          Download as PDF
        </button>
      </div> */}
    </div>
  );
};


export default EditableResume;
