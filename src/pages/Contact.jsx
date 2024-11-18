import axios from "axios";
import React from "react";
import { Form, redirect, useNavigation } from "react-router-dom";
import { toast } from "react-toastify";
const contactUrl = "https://www.course-api.com/cocktails-newsletter";

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  const newData = {
    name: "zahra",
    lastName: "Hashimi",
    email: "test@test.com",
  };
  ////I used the newData instead of form data because the limitation of API when you change the API you should use data instead of newData
  try {
    const response = await axios.post(contactUrl, newData);
    toast.success(response.data.msg);
    return redirect("/");
  } catch (error) {
    toast.error(error.message);
    toast.error(error?.response?.data?.message);
    return error;
  }
};

const Contact = () => {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  return (
    <Form className="form" method="POST">
      <h4 style={{ textAlign: "center", marginBottom: "2rem" }}>Contact US</h4>
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
  );
};

export default Contact;
