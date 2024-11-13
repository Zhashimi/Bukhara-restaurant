import styled from "styled-components";

export const Header = styled.header`
  text-align: center;
  min-height: calc(60vh - 120px);
  width: 90vw;
  margin: 0 auto;
  margin-top: 40px;
  padding: 1.5rem 1.5rem;
  max-width: var(--fixed-width);

  h2 {
    color: var(--grey-700);
    margin: 2rem;
  }
  h4 {
    color: var(--grey-400);
    margin: 2rem;
  }
`;

const Wrapper = styled.section`
  text-align: center;
  min-height: calc(100vh - 120px);
  width: 90vw;
  margin: 0 auto;
  margin-top: 40px;
  padding: 1.5rem 1.5rem;
  max-width: var(--fixed-width);
  h2 {
    text-transform: uppercase;
    text-align: center;
    margin-bottom: 3rem;
  }

  footer {
    margin-top: 4rem;
    text-align: center;
    h4 {
      text-transform: capitalize;
      display: flex;
      justify-content: space-between;
      margin-top: 1rem;
    }

    .clear-btn,
    .confirm-btn {
      background: transparent;
      padding: 0.5rem 1rem;
      color: var(--red-dark);
      border: 1px solid var(--red-dark);
      margin-top: 2.25rem;
      border-radius: var(--borderRadius);
      margin: 1rem;
    }
    .clear-btn:hover {
      background: var(--red-light);
      color: var(--red-dark);
      border-color: var(--red-light);
    }
    .confirm-btn {
      border-color: var(--green-dark);
      color: var(--green-dark);
    }
    .confirm-btn:hover {
      background-color: var(--green-light);
    }
  }
`;

export default Wrapper;
