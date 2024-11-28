import styled from "styled-components";

const Wrapper = styled.div`
  margin: 0 auto;
  padding: 1.5rem 1.5rem;
  max-width: var(--fixed-width);
  .form {
    margin: 2rem 0;
    display: grid;
    grid-template-columns: 1fr auto;
  }
  .form-input {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    display: block;
    font-size: medium;
    height: 45px;
  }
  .btn {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    height: 45px;
  }
`;

export default Wrapper;
