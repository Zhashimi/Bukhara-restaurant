import { toast } from "react-toastify";
import axios from "axios";
const contactUrl = "https://www.course-api.com/cocktails-newsletter";
import { redirect } from "react-router-dom";

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
