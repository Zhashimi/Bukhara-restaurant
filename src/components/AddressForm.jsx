import React from "react";
import Wrapper from "../assets/wrappers/AddressForm";
import { Form, useNavigation } from "react-router-dom";
import { FcUpRight } from "react-icons/fc";
import { FcSearch } from "react-icons/fc";
const AddressForm = ({ start, destination, handleSubmit }) => {
  const navigation = useNavigation();
  const isSearching = navigation.state === "submitting";
  return (
    <Wrapper>
      <Form className="form" onSubmit={handleSubmit}>
        <div>
          <input
            type="search"
            name="start"
            className="form-input"
            defaultValue={start}
          />
          <input
            type="search"
            name="destination"
            className="form-input"
            defaultValue={destination}
          />
        </div>
        <button type="submit" className="btn">
          {isSearching ? <FcSearch color="red" /> : <FcUpRight color="red" />}
        </button>
      </Form>
    </Wrapper>
  );
};

export default AddressForm;
