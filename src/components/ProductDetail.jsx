import React from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from "mdb-react-ui-kit";
import { addToCart } from "../features/cartSlice";

const ProductDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const product = useSelector((state) =>
    state.allCart.items.find((item) => item.id.toString() === id)
  );

  if (!product) {
    return <p className="text-center mt-5">Product not found</p>;
  }

  return (
    <section className="py-5 bg-white min-vh-100">
      <MDBContainer>
        <MDBRow className="align-items-center">
          <MDBCol md="6">
            <img
              src={product.img}
              alt={product.title}
              className="img-fluid rounded shadow-sm"
            />
          </MDBCol>
          <MDBCol md="6">
            <h2 className="fw-bold">{product.title}</h2>
            <p className="text-muted fs-5">
              {new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD",
              }).format(product.price)}
            </p>
            <p className="lead">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
              odio. Praesent libero. Sed cursus ante dapibus diam.
            </p>
            <MDBBtn color="success" onClick={() => dispatch(addToCart(product))}>
              Add to Cart
            </MDBBtn>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
  );
};

export default ProductDetail;
