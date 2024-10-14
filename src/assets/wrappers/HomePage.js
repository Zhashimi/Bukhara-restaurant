import styled from "styled-components";

const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  .hero {
    max-height: 800px;
    max-width: 80vw;
    border-radius: 2rem;
  }
  .title {
    letter-spacing: var(--letter-spacing);
    margin: 4rem;
  }
  p {
    font-size: 1rem;
    margin: 1rem;
  }
  .icon {
    color: var(--primary-500);
    font-size: 20px;
  }
  @media screen and (max-width: 800px) {
    p {
      margin: 5px;
    }
    .title {
      margin: 1rem;
    }
  }
`;
export default Wrapper;
