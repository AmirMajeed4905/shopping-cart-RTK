import React, { useState } from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBInput,
  MDBTextArea,
  MDBBtn,
  MDBIcon,
} from "mdb-react-ui-kit";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent successfully!");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section className="py-5 min-vh-100 bg-white">
      <MDBContainer>
        <h2 className="text-center fw-bold text-primary mb-4">Contact Us</h2>
        <MDBRow>
          <MDBCol md="6" className="mb-4">
            <h5 className="fw-bold mb-3">Get in touch</h5>
            <p><MDBIcon icon="map-marker-alt" className="me-2 text-primary" /> Lahore, Pakistan</p>
            <p><MDBIcon icon="envelope" className="me-2 text-primary" /> info@mystore.com</p>
            <p><MDBIcon icon="phone" className="me-2 text-primary" /> +92 300 0000000</p>
          </MDBCol>
          <MDBCol md="6">
            <form onSubmit={handleSubmit}>
              <MDBInput
                label="Name"
                name="name"
                value={form.name}
                onChange={handleChange}
                className="mb-3"
                required
              />
              <MDBInput
                label="Email"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                className="mb-3"
                required
              />
              <MDBTextArea
                label="Message"
                name="message"
                rows={4}
                value={form.message}
                onChange={handleChange}
                className="mb-3"
                required
              />
              <MDBBtn color="primary" type="submit">
                <MDBIcon icon="paper-plane" className="me-2" />
                Send Message
              </MDBBtn>
            </form>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
  );
}
