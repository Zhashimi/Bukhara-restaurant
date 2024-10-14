import React from "react";
import Wrapper from "../assets/wrappers/SearchForm";
import { Form, useNavigation } from "react-router-dom";

const SearchForm = ({ searchTerm }) => {
  const navigation = useNavigation();
  const isSearching = navigation.state === "submitting";
  return (
    <Wrapper>
      <Form className="form">
        <input
          type="search"
          name="searchTerm"
          className="form-input"
          defaultValue={searchTerm}
        />
        <button type="submit" className="btn">
          {isSearching ? "Searching" : "Search"}
        </button>
      </Form>
    </Wrapper>
  );
};

export default SearchForm;
