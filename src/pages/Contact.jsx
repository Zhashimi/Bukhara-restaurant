import React from "react";
import { Form, useNavigation } from "react-router-dom";

const Contact = () => {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  return (
    <section>
      <Form className="form" method="POST">
        <h4 style={{ textAlign: "center", marginBottom: "2rem" }}>
          Contact US
        </h4>
        <div className="form-row">
          <label htmlFor="name" className="form-label">
            Full Name:
          </label>
          <input
            type="text"
            name="name"
            className="form-input"
            required
            id="name"
            placeholder="your name..."
          />
        </div>
        <div className="form-row">
          <label htmlFor="email" className="form-label">
            Email:
          </label>
          <input
            type="email"
            name="email"
            required
            className="form-input"
            id="email"
            placeholder="example@gmail.com"
          />
        </div>
        <div className="form-row">
          <label htmlFor="phone" className="form-label">
            Phone:
          </label>
          <input
            type="tel"
            name="phone"
            className="form-input"
            id="phone"
            placeholder="+(1)111-4444"
          />
        </div>
        <div className="form-row">
          <label htmlFor="suggestion" className="form-label">
            Question/Suggestion:
          </label>
          <textarea
            name="suggestion"
            className="form-input"
            id="suggestion"
            placeholder="Your question or suggestion..."
            rows={5}
          />
        </div>
        <button
          type="submit"
          className="btn btn-block"
          style={{ marginTop: "2rem" }}
          disabled={isSubmitting}
        >
          {isSubmitting ? "Submitting" : "Submit"}
        </button>
      </Form>
    </section>
  );
};

export default Contact;
