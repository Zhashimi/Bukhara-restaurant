import styled from "styled-components";

const Wrapper = styled.article`
  display: grid;
  align-items: center;
  grid-template-columns: auto 1fr auto;
  grid-column-gap: 1.5rem;
  margin: 1.5rem 0;

  img {
    width: 5rem;
    height: 5rem;
    object-fit: cover;
    border-radius: var(--borderRadius);
  }
  h4 {
    margin-bottom: 0.5rem;
    font-weight: 500;
    letter-spacing: 2px;
  }
  .item-price {
    color: var(--grey-500);
  }
  .remove-btn {
    color: var(--primary-400);
    letter-spacing: var(--spacing);
    cursor: pointer;
    font-size: 0.85rem;
    background: transparent;
    border: none;
    margin-top: 0.375rem;
    transition: var(--transition);
  }
  .remove-btn:hover {
    color: var(--primary-light);
  }
  .amount-btn {
    width: 24px;
    background: transparent;
    border: none;
    cursor: pointer;
    padding-top: 1rem;
    padding-bottom: 1rem;
  }
  .amount-btn svg {
    color: var(--primary-500);
  }
  .amount-btn:hover svg {
    color: var(--primary-light);
  }
  .amount {
    text-align: center;
    margin-bottom: 0;
    font-size: 1.25rem;
    line-height: 1;
  }
  hr {
    background: var(--clr-grey-5);
    border-color: transparent;
    border-width: 0.25px;
  }
`;

export default Wrapper;
