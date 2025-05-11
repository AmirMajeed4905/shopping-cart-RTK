import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBIcon } from "mdb-react-ui-kit";

export default function About() {
  return (
    <section className="py-5 bg-light min-vh-100">
      <MDBContainer>
        <h2 className="text-center fw-bold text-primary mb-4">About Us</h2>
        <MDBRow className="align-items-center">
          <MDBCol md="6" className="mb-4">
            <img
              src="https://images.unsplash.com/photo-1523275335684-37898b6baf30"
              alt="About us"
              className="img-fluid rounded shadow"
            />
          </MDBCol>
          <MDBCol md="6">
            <h4 className="fw-bold">Welcome to MyStore</h4>
            <p className="text-muted">
              MyStore is your go-to destination for high-quality products at affordable prices. Our mission is to provide the best shopping experience with exceptional customer service.
            </p>
            <p className="text-muted">
              We value your trust and strive to bring you the latest trends, fast delivery, and secure payments. Thank you for choosing us!
            </p>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
  );
}
