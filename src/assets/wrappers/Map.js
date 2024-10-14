import styled from "styled-components";

const Wrapper = styled.div`
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  .map-container {
    width: 90%;
    height: 200px;
    box-shadow: var(--shadow-3);
    border: 1px solid var(--grey-300);
    position: relative;
    margin: 1rem;
    border-radius: var(--borderRadius);
  }
  .address {
    margin-top: 10px;
  }
  @media (min-width: 800px) {
    .map-container {
      width: 70%;
      height: 500px;
    }
    .direction-container {
      position: absolute;
      top: 10px;
      left: 10px;
    }
    .address {
      margin-top: 2rem;
    }
  }
`;

export default Wrapper;
