import styled from "styled-components";

const Wrapper = styled.div`
  margin-bottom: 1rem;
  position: absolute;
  top: 0.2rem;
  left: 1rem;
  .form {
    display: flex;
    flex-direction: row;
    padding: 1rem;
  }
  .form-input {
    padding: 10px;
    margin: 3px;
    border-radius: var(--borderRadius);
  }
  .btn {
    margin: 5px;
    pad: 10px;
    background-color: transparent;
    border-radius: var(--borderRadius);
  }
  @media (min-width: 800px) {
    position: absolute;
    top: 10px;
    left: 10px;
  }
`;

export default Wrapper;
