import styled from "styled-components";

const Wrapper = styled.nav`
  background: var(--white);
  box-shadow: var(--shadow-1);
  height: max-content;
  .nav-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;
  }
  .nav-toggle {
    font-size: 2.5rem;
    color: var(--primary-500);
    background: transparent;
    border-color: transparent;
    transition: var(--transition);
    cursor: pointer;
  }
  .nav-toggle:hover {
    color: var(--primary-700);
    transform: rotate(90deg);
  }
  .logo {
    height: 100px;
    border-radius: var(--borderRadius);
  }
  .links a {
    color: var(--grey-700);
    font-size: 1.5rem;
    text-transform: capitalize;
    letter-spacing: var(--letterSpacing);
    display: block;
    padding: 0.5rem 1rem;
    transition: var(--transition);
  }

  .links a:hover {
    background: var(--primary-100);
    color: var(--primary-500);
    padding-left: 1.5rem;
  }
  /* 160px */

  .links-container {
    overflow: hidden;
    transition: var(--transition);
  }

  .social-icons {
    display: none;
  }

  @media screen and (min-width: 800px) {
    height: 130px;
    .nav-toggle {
      display: none;
    }
    #link {
      margin-left: 10px;
    }
    .nav-header {
      padding: 0;
    }
    .nav-center {
      max-width: 1170px;
      margin: 0 auto;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 1rem;
    }
    .links-container {
      height: auto !important;
    }
    .links {
      display: flex;
      gap: 0.5rem;
    }
    .links a {
      padding: 0;
    }
    .links a:hover {
      padding: 0;
      background: transparent;
    }
    .social-icons {
      display: flex;
      gap: 0.5rem;
      font-size: x-large;
    }
    .social-icons a {
      color: var(--primary-500);
      transition: var(--transition);
    }
    .social-icons a:hover {
      color: var(--primary-300);
    }
  }
`;

export default Wrapper;
