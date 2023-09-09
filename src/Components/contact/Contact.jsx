'use client'
import React, { useState } from 'react';
import Headline from '../heading/Headline';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [formData, setFormData] = useState({
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Replace with your EmailJS Service ID, Template ID, and User ID
    const serviceId = import.meta.env.serviceId;
    const templateId = import.meta.env.templateId;
    const userId = import.meta.env.userId;

    emailjs.send(serviceId, templateId, formData, userId)
      .then((response) => {
        console.log('Email sent successfully:', response);
        alert('Email sent successfully');
      })
      .catch((error) => {
        console.error('Error sending email:', error);
        alert('Failed to send email');
      });
    };
  return (
  <div id='page3'>
      <Headline heading={"Contact Me"}></Headline>
      <div className="max-w-md mx-auto  shadow-md bg-orange-100 p-10 rounded-lg lg:w-3/4">
    <form onSubmit={handleSubmit}  className="space-y-4">
      {/* Email Input */}
      <div className="form-control">
        <label className="label">
          <span className="label-text">Email</span>
        </label>
        <input type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="input input-bordered"
            placeholder="Enter your email"
            required />
      </div>

      {/* Message Textarea */}
      <div className="form-control">
        <label className="label">
          <span className="label-text">Message</span>
        </label>
        <textarea name="message"
            value={formData.message}
            onChange={handleChange}
            className="textarea textarea-bordered"
            placeholder="Enter your message"
            required
            ></textarea>
      </div>

      {/* Send Button */}
      <div className="text-center">
        <button type="submit" className="btn btn-primary">Send</button>
      </div>
    </form>
  </div>
  </div>
  );
};

export default Contact;