import styled from "styled-components";
const Wrapper = styled.article`
  background: var(--white);
  box-shadow: var(--shadow-2);
  transition: var(--transition);
  display: grid;
  grid-template-rows: auto 1fr;
  border-radius: var(--borderRadius);
  :hover {
    box-shadow: var(--shadow-4);
  }
  img {
    height: 15rem;
    border-top-left-radius: var(--borderRadius);
    border-top-right-radius: var(--borderRadius);
  }
  .footer {
    padding: 1.5rem;
    h4,
    h5 {
      margin-bottom: 0.5rem;
    }
    h4 {
      font-weight: 700;
    }
    p {
      margin-bottom: 1rem;
      color: var(--grey-500);
    }
  }

  .footer-items {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    .cart {
      font-size: 1.5rem;
      color: var(--primary-500);
      background-color: transparent;
      border-color: transparent;
      cursor: pointer;
      :hover {
        color: var(--primary-700);
      }
    }
  }
`;

export default Wrapper;
