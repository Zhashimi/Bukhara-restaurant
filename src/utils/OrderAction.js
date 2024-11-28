import { redirect } from "react-router-dom";
import { toast } from "react-toastify";

export const action = async ({ request }) => {
  const formData = await request.formData();
  ////I used the newData instead of form data because the limitation of API when you change the API you should use data instead of newData
  try {
    toast.success("Order placed successfully!!!");
    return redirect("/");
  } catch (error) {
    toast.error(error.message);
    toast.error(error?.response?.data?.message);
    return error;
  }
};
