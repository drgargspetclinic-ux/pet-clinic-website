import React, { useEffect, useState, useRef } from 'react';
import emailjs from 'emailjs-com';

const BookAppointment = () => {
  const [fadeIn, setFadeIn] = useState(false);
  const form = useRef();

  useEffect(() => {
    setFadeIn(true);
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_t6w5jxq",   // 🔹 Replace with EmailJS Service ID
        "template_5jwbcks",  // 🔹 Replace with EmailJS Template ID
        form.current,
        "5q7DeK5o0hMzb_siz"    // 🔹 Replace with EmailJS Public Key
      )
      .then(
        (result) => {
          alert("✅ Appointment booked! We will contact you soon.");
          console.log(result.text);
          form.current.reset(); // clear form after success
        },
        (error) => {
          alert("❌ Oops! Something went wrong.");
          console.error(error.text);
        }
      );
  };

  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '40px 20px',
      }}
    >
      <div
        style={{
          opacity: fadeIn ? 1 : 0,
          transform: fadeIn ? 'translateY(0)' : 'translateY(30px)',
          transition: 'all 0.8s ease',
          background: '#fff',
          padding: '40px',
          borderRadius: '16px',
          boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
          width: '100%',
          maxWidth: '500px',
          border: '1px solid black',
        }}
      >
        <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Book an Appointment</h2>

        <form ref={form} onSubmit={sendEmail} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
          <input type="text" name="user_name" placeholder="Your Name" required />
          <input type="text" name="pet_name" placeholder="Pet's Name" required />
          <input type="text" name="pet_type" placeholder="Type of Pet (e.g., Dog, Cat)" required />
          <input type="datetime-local" name="appointment_time" required />
          <input type="tel" name="user_phone" placeholder="Contact Number" required />
          <button
            type="submit"
            style={{
              padding: '12px',
              backgroundColor: '#ff7f50',
              color: '#fff',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
            }}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookAppointment;
