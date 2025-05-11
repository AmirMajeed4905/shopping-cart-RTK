import React from "react";
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-react-ui-kit";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <MDBFooter bgColor="light" className="text-center text-lg-start text-muted pt-4 mt-auto shadow-sm">
      <MDBContainer className="text-center text-md-start">
        <MDBRow className="mt-3">
          {/* Brand Info */}
          <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4">
            <h6 className="text-uppercase fw-bold mb-4">
              <MDBIcon icon="shopping-cart" className="me-2 text-primary" />
              MyStore
            </h6>
            <p>
              Discover the latest products at the best prices. Quality you can trust, service you'll love.
            </p>
          </MDBCol>

          {/* Useful Links */}
          <MDBCol md="2" lg="2" xl="2" className="mx-auto mb-4">
            <h6 className="text-uppercase fw-bold mb-4">Links</h6>
            <p><Link to="/" className="text-reset text-decoration-none">Home</Link></p>
            <p><Link to="/cart" className="text-reset text-decoration-none">Cart</Link></p>
            <p><a href="#!" className="text-reset text-decoration-none">About</a></p>
            <p><a href="#!" className="text-reset text-decoration-none">Contact</a></p>
          </MDBCol>

          {/* Contact Info */}
          <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-4">
            <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
            <p><MDBIcon icon="home" className="me-2" /> Lahore, Pakistan</p>
            <p><MDBIcon icon="envelope" className="me-2" /> info@mystore.com</p>
            <p><MDBIcon icon="phone" className="me-2" /> +92 300 0000000</p>
          </MDBCol>

          {/* Social Links */}
          <MDBCol md="3" lg="3" xl="3" className="mx-auto mb-4 text-center">
            <h6 className="text-uppercase fw-bold mb-4">Follow us</h6>
            <a href="#!" className="me-3 text-reset"><MDBIcon fab icon="facebook-f" /></a>
            <a href="#!" className="me-3 text-reset"><MDBIcon fab icon="twitter" /></a>
            <a href="#!" className="me-3 text-reset"><MDBIcon fab icon="instagram" /></a>
            <a href="#!" className="me-3 text-reset"><MDBIcon fab icon="linkedin-in" /></a>
          </MDBCol>
        </MDBRow>
      </MDBContainer>

      <div className="text-center p-3 bg-light border-top">
        © {new Date().getFullYear()} MyStore. All Rights Reserved.
      </div>
    </MDBFooter>
  );
}
