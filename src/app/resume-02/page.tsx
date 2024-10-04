"use client"

import React, { useState } from 'react';

const ResumeBuilder = () => {
  // State variables to store form input data
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [education, setEducation] = useState('');
  const [experience, setExperience] = useState('');
  const [skills, setSkills] = useState<string[]>([]);
  const [showResume, setShowResume] = useState(false);

  // Form submission handler
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Display the generated resume
    setShowResume(true);
  };

  return (
    <div style={styles.body}>
      <div style={styles.container}>
        <center><h1>Dynamic Resume Builder</h1></center>
        <form id="resume-form" onSubmit={handleSubmit}>
          <center><h2>Personal Information</h2></center>
          <label style={styles.label} htmlFor="name"><strong>Name:</strong></label>
          <input
            style={styles.input}
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <label style={styles.label} htmlFor="email"><strong>Email:</strong></label>
          <input
            style={styles.input}
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <center><h2>Education</h2></center>
          <label style={styles.label} htmlFor="education"><strong>Education (e.g., B.Sc. in Computer Science):</strong></label>
          <textarea
            style={styles.textarea}
            id="education"
            rows={3}
            value={education}
            onChange={(e) => setEducation(e.target.value)}
            required
          ></textarea>

          <center><h2>Work Experience</h2></center>
          <label style={styles.label} htmlFor="experience"><strong>Work Experience:</strong></label>
          <textarea
            style={styles.textarea}
            id="experience"
            rows={5}
            value={experience}
            onChange={(e) => setExperience(e.target.value)}
            required
          ></textarea>

          <center><h2>Skills</h2></center>
          <label style={styles.label} htmlFor="skills"><strong>Skills</strong>(separate by commas):</label>
          <input
            style={styles.input}
            type="text"
            id="skills"
            value={skills.join(', ')}
            onChange={(e) => setSkills(e.target.value.split(',').map(skill => skill.trim()))}
            required
          />

          <center><button type="submit" style={styles.button}>Generate Resume</button></center>
        </form>

        {showResume && (
          <div id="resume-output" style={styles.resume}>
            <h2>Generated Resume</h2>
            <div style={styles.resumeSection}>
              <h3>Personal Information</h3>
              <p>Name: {name}</p>
              <p>Email: {email}</p>
            </div>
            <div style={styles.resumeSection}>
              <h3>Education</h3>
              <p>{education}</p>
            </div>
            <div style={styles.resumeSection}>
              <h3>Work Experience</h3>
              <p>{experience}</p>
            </div>
            <div style={styles.resumeSection}>
              <h3>Skills</h3>
              <ul style={styles.ul}>
                {skills.map((skill, index) => (
                  <li key={index}>{skill}</li>
                ))}
              </ul>
            </div>
          </div>
        )}
        <center><h2>Made By: Naseer Ahmed Wighio</h2></center>
      </div>
    </div>
  );
};

// Inline styles
const styles = {
  body: {
    fontFamily: 'Arial, sans-serif',
    background: 'linear-gradient(45deg,#8c01d1,#00b7ff)',
    padding: '20px',
  },
  container: {
    background: 'linear-gradient(45deg,rgb(0, 114, 228), rgb(174, 0, 209))',
    padding: '20px',
    borderRadius: '10px',
    width: '100%',
    maxWidth: '800px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    margin: '0 auto',
  },
  label: {
    display: 'block',
    marginTop: '10px',
    color: '#e0e0e0',
  },
  input: {
     color: 'black',
    width: '100%',
    padding: '10px',
    marginTop: '5px',
    marginBottom: '15px',
    border: '1px solid #ccc',
    borderRadius: '5px',
  },
  textarea: {
    width: '100%',
    padding: '10px',
    marginTop: '5px',
    marginBottom: '15px',
    border: '1px solid #ccc',
    borderRadius: '5px',
  },
  button: {
    padding: '10px 20px',
    background: 'linear-gradient(45deg,#00b7ff,#8c01d1)',
    color: '#fff',
    border: '3px solid white',
    borderRadius: '15px',
    cursor: 'pointer',
    marginTop: '10px',
  },
  resume: {
    marginTop: '30px',
    background: 'linear-gradient(45deg,#8c01d1,#00b7ff)',
    padding: '20px',
    borderRadius: '10px',
    transition: 'all 1s',
  },
  resumeSection: {
    marginBottom: '20px',
  },
  ul: {
    listStyleType: 'none',
    padding: 0,
  },
};

export default ResumeBuilder;
