import React, { useEffect, useState } from 'react';
import doctorImage from '../assets/doctor.jpg'; // Replace with actual image

const About = () => {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    setFadeIn(true);
  }, []);

  return (
    <div
      style={{
        minHeight: '100vh',
        // backgroundColor: '#f9f9f9',
        padding: '100px 20px 40px 20px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '40px',
      }}
    >
      {/* Doctor Info Box */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          backgroundColor: 'white',
          borderRadius: '20px',
          padding: '30px',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
          maxWidth: '900px',
          width: '100%',
          opacity: fadeIn ? 1 : 0,
          transform: fadeIn ? 'translateY(0)' : 'translateY(30px)',
          transition: 'opacity 1s ease, transform 1s ease',
          border: '2px solid black',
        }}
      >
        <img
          src={doctorImage}
          alt="Doctor"
          style={{
            width: '250px',
            borderRadius: '15px',
            objectFit: 'cover',
            marginRight: '30px',
            border: '2px solid black',
          }}
        />
        <div>
          <h2 style={{ marginBottom: '15px', color: '#333' }}>Dr. [Your Dad’s Name]</h2>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.6', color: '#555' }}>
            Dr. [Name] has over [X] years of experience in veterinary care and is passionate
            about providing top-notch treatment to pets of all kinds. His clinic combines
            compassionate service with medical excellence. From regular check-ups to emergency
            treatments, he ensures every pet is treated like family.
          </p>
        </div>
      </div>

      {/* Reach Us Box */}
      <div
        style={{
          backgroundColor: 'white',
          borderRadius: '20px',
          padding: '30px',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
          maxWidth: '900px',
          width: '100%',
          border: '2px solid black',
        }}
      >
        <h2 style={{ fontSize: '1.8rem', marginBottom: '10px', fontWeight: 'bold', color: '#222' }}>
          Dr. Garg's Dog Clinic & Pet Shoppee
        </h2>
        <p style={{ fontSize: '1.1rem', marginBottom: '25px', color: '#555' }}>
          📍 SCO 22, Sector 5, Mansa Devi Complex, Panchkula - 134114
        </p>
        <div style={{ width: '100%', height: '300px', borderRadius: '10px', overflow: 'hidden' }}>
          <iframe
            title="clinic-location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3430.0392103489653!2d76.8480282759442!3d30.717298074591614!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390f931dd4c25533%3A0x5f372f57d49ddcb!2sDr.%20Garg&#39;s%20Dog%20Clinic%20%26%20Pet%20Shoppee!5e0!3m2!1sen!2sin!4v1755863732093!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default About;
