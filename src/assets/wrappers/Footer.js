import styled from "styled-components";

const Wrapper = styled.footer`
  background-color: var(--primary-700);
  padding: 1rem 0rem;
  text-align: center;

  .social-icons,
  .links {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    margin-bottom: 1.5rem;
    justify-content: center;
  }
  .link {
    margin-bottom: 1rem;
  }
  #link {
    color: var(--grey-200);
  }

  #link:hover {
    color: var(--primary-300);
    margin-left: 5px;
    transition: var(--transition);
  }
  .copyright {
    letter-spacing: var(--letterSpacing);
  }
  @media screen and (min-width: 800px) {
    padding: 5rem 0rem;
    .social-icons,
    .links {
      flex-direction: row;
    }
    .link {
      margin-left: 1rem;
    }
  }
`;
export default Wrapper;
