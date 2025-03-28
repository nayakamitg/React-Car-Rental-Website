import React, { useState } from "react";
import { Form, FormGroup } from "reactstrap";
import { FaUser, FaEnvelope, FaPhone, FaMapMarkerAlt, FaCalendarAlt, FaClock, FaSuitcase } from "react-icons/fa"; // Importing icons
import "../../styles/booking-form.css";

const BookingForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    fromAddress: "",
    toAddress: "",
    persons: "",
    luggage: "",
    journeyDate: "",
    journeyTime: "",
    message: "",
  });

  // Handle input changes
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.phone) {
      alert("Please fill in all required fields.");
      return;
    }

    const phoneNumber = "916306624037";  
    const message = encodeURIComponent(`
      Booking Details:
      - Name: ${formData.firstName} ${formData.lastName}
      - Email: ${formData.email}
      - Phone: ${formData.phone}
      - From: ${formData.fromAddress}
      - To: ${formData.toAddress}
      - Persons: ${formData.persons}
      - Luggage: ${formData.luggage}
      - Date: ${formData.journeyDate}
      - Time: ${formData.journeyTime}
      - Message: ${formData.message}
    `);
    
    window.open(`https://api.whatsapp.com/send?phone=${phoneNumber}&text=${message}`, "_blank");
  };

  return (
    <Form onSubmit={handleSubmit} className="booking-form">
      <h2 className="form-title">Book Your Ride 🚗</h2>

      <div className="form-row">
        <FormGroup className="form-group">
          <FaUser className="icon" />
          <input type="text" name="firstName" placeholder="First Name" onChange={handleChange} required />
        </FormGroup>
        <FormGroup className="form-group">
          <FaUser className="icon" />
          <input type="text" name="lastName" placeholder="Last Name" onChange={handleChange} required />
        </FormGroup>
      </div>

      <div className="form-row">
        <FormGroup className="form-group">
          <FaEnvelope className="icon" />
          <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
        </FormGroup>
        <FormGroup className="form-group">
          <FaPhone className="icon" />
          <input type="number" name="phone" placeholder="Phone Number" onChange={handleChange} required />
        </FormGroup>
      </div>

      <div className="form-row">
        <FormGroup className="form-group">
          <FaMapMarkerAlt className="icon" />
          <input type="text" name="fromAddress" placeholder="From Address" onChange={handleChange} required />
        </FormGroup>
        <FormGroup className="form-group">
          <FaMapMarkerAlt className="icon" />
          <input type="text" name="toAddress" placeholder="To Address" onChange={handleChange} required />
        </FormGroup>
      </div>

      <div className="form-row">
        <FormGroup className="form-group">
          <FaUser className="icon" />
          <select name="persons" onChange={handleChange} required>
            <option value="">Select Persons</option>
            <option value="1 person">1 Person</option>
            <option value="2 person">2 Persons</option>
            <option value="3 person">3 Persons</option>
          </select>
        </FormGroup>
        <FormGroup className="form-group">
          <FaSuitcase className="icon" />
          <select name="luggage" onChange={handleChange} required>
            <option value="">Select Luggage</option>
            <option value="1 luggage">1 Luggage</option>
            <option value="2 luggage">2 Luggage</option>
            <option value="3 luggage">3 Luggage</option>
          </select>
        </FormGroup>
      </div>

      <div className="form-row">
        <FormGroup className="form-group">
          <FaCalendarAlt className="icon" />
          <input type="date" name="journeyDate" onChange={handleChange} required />
        </FormGroup>
        <FormGroup className="form-group">
          <FaClock className="icon" />
          <input type="time" name="journeyTime" onChange={handleChange} required />
        </FormGroup>
      </div>

      <FormGroup className="form-group">
        <textarea name="message" placeholder="Additional Message (Optional)" onChange={handleChange}></textarea>
      </FormGroup>

      <button type="submit" className="submit-btn">📲 Send Booking to WhatsApp</button>
    </Form>
  );
};

export default BookingForm;
