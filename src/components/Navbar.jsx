import React, { useEffect, useState } from "react";
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBCollapse,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBBtn,
  MDBIcon,
} from "mdb-react-ui-kit";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCartTotal } from "../features/cartSlice";

export default function Navbar() {
  const [showNav, setShowNav] = useState(false);
  const { cart } = useSelector((state) => state.allCart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCartTotal());
  }, [cart, dispatch]);

  return (
   <MDBNavbar expand="lg" light bgColor="light" className="shadow-sm mb-4 w-100  border-bottom bg-white ">
  <MDBContainer fluid>
    {/* Logo */}
    <MDBNavbarBrand tag={Link} to="/" className="fw-bold text-primary" style={{ fontSize: "1.8rem", letterSpacing: "2px" }}>
      🛒 <span style={{ color: "#007bff" }}>MyStore</span>
    </MDBNavbarBrand>

    {/* Toggler Button */}
    <MDBNavbarToggler
      type="button"
      data-mdb-toggle="collapse"
      data-mdb-target="#navbarCollapse"
      aria-controls="navbarCollapse"
      aria-expanded={showNav}
      aria-label="Toggle navigation"
      onClick={() => setShowNav(!showNav)}
    >
      <MDBIcon icon="bars" fas />
    </MDBNavbarToggler>

    {/* Collapsible Menu */}
    <MDBCollapse navbar open={showNav} id="navbarCollapse" className="justify-content-end">
      <MDBNavbarNav className="ms-auto  mb-2 mb-lg-0 align-items-center gap-3 fw-bold  text-uppercase ">
        <MDBNavbarItem>
          <MDBNavbarLink tag={Link} to="/"> 
            All Products
          </MDBNavbarLink>
        </MDBNavbarItem>
          <MDBNavbarItem>
          <MDBNavbarLink tag={Link} to="/contact">
            Contact
          </MDBNavbarLink>
        </MDBNavbarItem>
        <MDBNavbarItem>
          <MDBNavbarLink tag={Link} to="/about">

            About
          </MDBNavbarLink>
        </MDBNavbarItem>

        <MDBNavbarItem>
          <MDBBtn
            tag={Link}
            to="/cart"
            color="light"
            className="ms-2 position-relative shadow-sm border"
          >
            <MDBIcon fas icon="shopping-cart" className="me-2 text-primary" />
         
            {cart.length > 0 && (
              <span className="  translate-middle badge rounded-pill bg-danger">
                {cart.length}
                <span className="visually-hidden">unread messages</span>
              </span>
            )}
          </MDBBtn>
        </MDBNavbarItem>
      </MDBNavbarNav>
    </MDBCollapse>
  </MDBContainer>
</MDBNavbar>

  );
}
