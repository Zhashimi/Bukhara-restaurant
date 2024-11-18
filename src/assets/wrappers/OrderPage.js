import styled from "styled-components";

export const FWrapper = styled.div`
  text-align: left;
  width: 100%;
  padding-right: 1rem;
  h5 {
    margin: 1rem 1rem 1rem 0;
  }
  @media screen and (min-width: 800px) {
    width: 48%;
  }
`;

export const SWrapper = styled.div`
  text-align: left;
  width: 100%;
  padding: 15px;
  border: 0.7px solid var(--grey-200);
  margin-bottom: 2rem;
  h5 {
    margin: 1rem 1rem 1rem 0;
  }
  .shipping {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    p {
      margin-right: 20px;
    }
    input {
      margin: 5px;
    }
  }
  .delivery-options {
    padding-top: 1rem;
    border-bottom: 0.7px solid var(--grey-200);
    .delivery-row {
      width: 100%;
      display: flex;
      input {
        width: 55%;
      }
      label {
        width: 45%;
        font-size: smaller;
      }
    }
  }

  .cart-items {
    padding-top: 1rem;
    .cart-row {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      flex-wrap: wrap;
      margin-bottom: 5px;

      img {
        width: 30px;
        height: 30px;
        border-radius: 10px;
      }
      p {
        font-size: smaller;
        color: var(--grey-500);
      }
    }
  }

  .tip-btn {
    margin-top: 1rem;
    margin-bottom: 2rem;
    input[type="radio"] {
      display: none;
    }
    label {
      display: inline-block;
      padding: 10px 20px;
      border: 1px solid var(--primary-700);
      border-radius: var(--borderRadius);
      margin: 10px 10px 0px 0px;
      cursor: pointer;
      width: 75px;
      font-size: small;
      text-align: center;
    }
    label:hover {
      background-color: var(--primary-200);
    }

    label:has(input[type="radio"]:checked) {
      background-color: var(--primary-500) !important;
      border-color: var(--primary-500) !important;
      color: white;
    }
  }

  @media screen and (min-width: 800px) {
    width: 48%;
  }
`;
