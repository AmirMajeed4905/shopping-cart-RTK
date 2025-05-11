import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
} from "mdb-react-ui-kit";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../features/cartSlice";
import { Link } from "react-router-dom";

export default function ProductCatalog() {
  const items = useSelector((state) => state.allCart.items);
  const dispatch = useDispatch();

  return (
    <section className="py-5 bg-white min-vh-100">
      <MDBContainer>
        <h2 className="mb-5 text-center fw-bold text-primary">Our Products</h2>
        <MDBRow className="g-3">
          {items.map((item) => (
            <MDBCol key={item.id} size="12" sm="6" lg="2">
              <MDBCard className="h-100 shadow-sm border rounded-4 overflow-hidden">
                <Link to={`/product/${item.id}`}>
                  <MDBCardImage
                    src={item.img}
                    alt={item.title}
                    position="top"
                    className="img-fluid rounded shadow"
                    style={{
                      height: "180px",
                      width: "100%",
                      objectFit: "contain"
                    }}
                  />
                </Link>
                <MDBCardBody className="d-flex flex-column p-3">
                  <MDBCardTitle className="fw-semibold fs-5 text-dark mb-2">{item.title}</MDBCardTitle>
                  <MDBCardText className="text-muted mb-3">
                    {new Intl.NumberFormat("en-US", {
                      style: "currency",
                      currency: "USD",
                    }).format(item.price)}
                  </MDBCardText>
                  <MDBBtn
                    color="dark"
                    className="mt-auto"
                    onClick={() => dispatch(addToCart(item))}
                  >
                    Add to Cart
                  </MDBBtn>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          ))}
        </MDBRow>
      </MDBContainer>
    </section>
  );
}
