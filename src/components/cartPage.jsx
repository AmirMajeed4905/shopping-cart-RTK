import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getCartTotal,
  removeItem,
  decreaseItemQuantity,
  increaseItemQuantity,
} from "../features/cartSlice";

const CartPage = () => {
  const { cart, totalQuantity, totalPrice } = useSelector((state) => state.allCart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCartTotal());
  }, [cart, dispatch]);

  return (
    <section className="min-vh-100 py-5 bg-light">
      <div className="container">
        <div className="row g-4">
          {/* Cart Items Section */}
          <div className="col-lg-8">
            <div className="card shadow-sm">
              <div className="card-header bg-primary text-white">
                <h5 className="mb-0">Cart - {cart.length} item(s)</h5>
              </div>
              <div className="card-body">
                {cart.length === 0 ? (
                  <p className="text-center">Your cart is empty</p>
                ) : (
                  cart.map((item) => (
                    <div key={item.id} className="row align-items-center mb-4">
                      {/* Image */}
                      <div className="col-6 col-sm-3 text-center mb-3 mb-sm-0">
                        <img
                          src={item.img}
                          alt={item.title}
                          className="img-fluid rounded"
                          style={{ maxHeight: "120px", objectFit: "contain" }}
                        />
                      </div>

                      {/* Title & Remove */}
                      <div className="col-12 col-sm-5 mb-3 mb-sm-0">
                        <h6 className="fw-bold">{item.title}</h6>
                        <p className="mb-1 text-muted">${item.price}</p>
                        <button
                          type="button"
                          className="btn btn-outline-danger btn-sm"
                          onClick={() => dispatch(removeItem(item.id))}
                        >
                          <i className="fas fa-trash me-1"></i> Remove
                        </button>
                      </div>

                      {/* Quantity & Subtotal */}
                      <div className="col-12 col-sm-4">
                        <div className="d-flex justify-content-center justify-content-sm-start align-items-center mb-2">
                          <button
                            className="btn btn-outline-primary btn-sm"
                            onClick={() => dispatch(decreaseItemQuantity(item.id))}
                          >
                            <i className="fas fa-minus"></i>
                          </button>

                          <input
                            type="text"
                            className="form-control mx-2 text-center"
                            value={item.quantity}
                            readOnly
                            style={{ width: "60px" }}
                          />

                          <button
                            className="btn btn-outline-primary btn-sm"
                            onClick={() => dispatch(increaseItemQuantity(item.id))}
                          >
                            <i className="fas fa-plus"></i>
                          </button>
                        </div>
                        <p className="text-center text-muted mb-0">
                          Subtotal: ${(item.price * item.quantity).toFixed(2)}
                        </p>
                      </div>

                      <hr className="my-3" />
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>

          {/* Summary Section */}
          <div className="col-lg-4">
            <div className="card shadow-sm">
              <div className="card-header bg-primary text-white">
                <h5 className="mb-0">Summary</h5>
              </div>
              <div className="card-body">
                <ul className="list-group list-group-flush mb-3">
                  <li className="list-group-item d-flex justify-content-between">
                    <span>Total Quantity</span>
                    <span>{totalQuantity}</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between">
                    <strong>Total Amount</strong>
                    <strong>${totalPrice.toFixed(2)}</strong>
                  </li>
                </ul>
                <button className="btn btn-success w-100">
                  Proceed to Checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CartPage;
