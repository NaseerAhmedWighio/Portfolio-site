"use client"
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import image from "./ashraf.jpg"
import naseer from "@/app/icons/naseer.jpg"

const Resume = () => {
  const [showSkills, setShowSkills] = useState(true);

  const toggleSkills = () => {
    setShowSkills(!showSkills);
  };

  return (
    <div style={styles.body}>
      <div style={styles.container}>
        <div style={styles.center}>
          <div style={styles.personalInfo}>
            <Image
              src={naseer}
              alt="Profile Picture"
              width={100}
              height={100}
              style={styles.profilePic}
            ></Image>
            <h1 style={styles.heading}>Naseer Ahmed</h1>
            <p><strong>Contact: naseerahmedwighio@gmail.com</strong></p>
            <p><strong>0311 3867522</strong></p>
          </div>
        </div>

        <div style={styles.section}>
          <h2 style={styles.heading}>Education</h2>
          <p><strong>Intermediate</strong></p>
        </div>

        <div style={styles.section}>
          <h2 style={styles.heading}>Skills</h2>
          {showSkills && (
            <ul style={styles.list}>
              <li><strong>JavaScript</strong></li>
              <li><strong>TypeScript</strong></li>
              <li><strong>HTML & CSS</strong></li>
              <li><strong>React</strong></li>
              <li><strong>Next.js</strong></li>
            </ul>
          )}
        </div>

        <div style={styles.section}>
          <h2 style={styles.heading}>Work Experience</h2>
          <p><strong>GIAIC 1st Quarter Complete</strong></p>
          <p><strong>Learning API, Web 3.0, Metaverse</strong></p>
        </div>

        <div style={styles.center}>
          <button onClick={toggleSkills} style={styles.button}>
            Toggle Skills
          </button>
        </div>
      </div>
    </div>
  );
};

const styles = {
  body: {
    fontFamily: 'Arial, sans-serif',
    background: 'linear-gradient(45deg, #8c01d1, #00b7ff)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
  },
  container: {
    background: 'linear-gradient(45deg, #00b7ff, #8c01d1)',
    padding: '20px',
    borderRadius: '10px',
    width: '90%',
    maxWidth: '600px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  center: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column' as const,
  },
  personalInfo: {
    textAlign: 'center' as const,
  },
  profilePic: {
    borderRadius: '50%',
    border: '3px solid #fff',
    marginBottom: '10px',
    marginLeft: '72px',
    boxShadow: '3px 6px 3px rgba(0, 0, 0, 0.503)',
  },
  heading: {
    color: '#cccccc',
  },
  section: {
    marginTop: '20px',
  },
  list: {
    listStyleType: 'none',
    padding: 0,
    color: '#e8baff',
  },
  button: {
    marginTop: '20px',
    padding: '10px 20px',
    background: 'linear-gradient(45deg, #00b7ff, #8c01d1)',
    color: '#fff',
    border: '3px solid white',
    borderRadius: '15px',
    cursor: 'pointer',
    boxShadow: '3px 6px 3px rgba(0, 0, 0, 0.503)',
    transition: 'all 1s',
  },
};

export default Resume;
