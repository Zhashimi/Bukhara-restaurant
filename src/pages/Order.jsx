import React from "react";
import { Form, useNavigation } from "react-router-dom";
import { FWrapper, SWrapper } from "../assets/wrappers/OrderPage";
import { useSelector } from "react-redux";

const Order = () => {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  const { cartItems } = useSelector((store) => store.cart);
  return (
    <section>
      <Form className="form order-form" method="POST">
        <FWrapper>
          <div>
            <h5>Contact Information</h5>
            <input
              type="email"
              name="email"
              className="form-input"
              id="email"
              placeholder="Example@gmail.com"
            />
            <input
              type="tel"
              name="phone"
              required
              className="form-input"
              id="phone"
              placeholder="+(1)111-4444"
            />
            <div>
              <input
                type="text"
                name="name"
                className="form-input"
                required
                id="name"
                placeholder="Your name..."
              />
              <input
                type="text"
                name="lName"
                className="form-input"
                id="lName"
                placeholder="Your last name..."
              />
            </div>
          </div>
          <div>
            <h5>Address</h5>
            <input
              type="text"
              name="homeAddress"
              required
              className="form-input"
              id="nomeAddress"
              placeholder="Home Number and street..."
            />
            <input
              type="text"
              name="district"
              className="form-input"
              id="district"
              placeholder="District..."
            />
            <input
              type="text"
              name="city"
              required
              className="form-input"
              id="city"
              placeholder="Town/City..."
            />
            <input
              type="text"
              name="zipCode"
              className="form-input"
              id="zipCode"
              placeholder="ZIP Code..."
            />
          </div>
          <div>
            <h5>Additional information</h5>
            <textarea
              rows={5}
              className="form-input"
              name="additional"
              id="additional"
              placeholder="Note about your order..."
            />
          </div>
        </FWrapper>

        <SWrapper>
          <h5>Order Summary</h5>
          <div className="shipping">
            <p>Shipping</p>
            <div>
              <div>
                <input type="radio" name="shipping" id="pickup" />
                <label htmlFor="pickup">Local Pickup</label>
              </div>
              <div>
                <input type="radio" name="shipping" id="delivery" />
                <label htmlFor="delivery">Local delivery: 20Af</label>
              </div>
            </div>
          </div>
          <div className="delivery-options">
            <div className="delivery-row">
              <label htmlFor="deliveryTime" className="form-label">
                Delivery Time
              </label>
              <input
                type="time"
                className="form-input"
                id="deliveryTime"
                name="deliveryTime"
                width={"50%"}
              />
            </div>
            <div className="delivery-row">
              <label htmlFor="deliveryDate" className="form-label">
                Delivery Date
              </label>
              <input
                type="date"
                className="form-input"
                id="deliveryDate"
                name="deliveryDate"
              />
            </div>
          </div>
          <div className="cart-items">
            {cartItems.map((item) => {
              return (
                <div className="cart-row" key={item.id}>
                  <img src={item.image} alt={item.name} />
                  <p>{item.name}</p>
                  <p>
                    {item.quantity} X {item.price}
                  </p>
                </div>
              );
            })}
          </div>
          <div className="tip-btn">
            <label htmlFor="tip15">
              <input type="radio" name="tipGroup" id="tip15" value="15" />
              15 %
            </label>
            <label htmlFor="tip10">
              <input type="radio" name="tipGroup" id="tip10" value="10" />
              10 %
            </label>
            <label htmlFor="tip20">
              <input type="radio" name="tipGroup" id="tip20" value="20" />
              20 %
            </label>
            <label htmlFor="no-tip" style={{ width: "40%" }}>
              <input type="radio" name="tipGroup" id="no-tip" value="0" />
              no tip
            </label>
            <label htmlFor="custom" style={{ width: "45%" }} id="custom-label">
              <input type="radio" name="tipGroup" id="custom" value="1" />
              custom
            </label>
          </div>
          <button className="btn btn-block">
            {" "}
            {isSubmitting ? "Ordering" : "Order"}
          </button>
        </SWrapper>
      </Form>
    </section>
  );
};

export default Order;
