import styled from "styled-components";

const Wrapper = styled.section`
  margin: 0 auto;
  margin-top: 3rem;
  width: 80vw;
  max-width: 800px;
  position: relative;
  height: 300px;
  overflow: hidden;
  padding-top: 2rem;
  .slide {
    text-align: center;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transition: var(--transition);
  }
  .slider-image {
    height: 260px;
    width: 80vw;
    max-width: 800px;
    border-radius: var(--borderRadius);
    box-shadow: var(--shadow-2);
  }

  .title {
    text-transform: capitalize;
    color: var(--grey-700);
    margin-bottom: 0.75rem;
  }
  .prev,
  .next {
    position: absolute;
    top: 200px;
    background: var(--grey-500);
    color: var(--white);
    width: 1.25rem;
    height: 1.25rem;
    display: grid;
    place-items: center;
    border-color: transparent;
    border-radius: var(--borderRadius);
    cursor: pointer;
    transition: var(--transition);
  }
  .prev:hover,
  .next:hover {
    background: var(--primary-500);
  }
  .prev {
    left: 0;
  }
  .next {
    right: 0;
  }
  @media screen and (min-width: 800px) {
    height: 700px;
    width: 900px;

    .prev,
    .next {
      width: 2rem;
      height: 2rem;
      font-size: 1.5rem;
    }
    .slider-image {
      height: 500px;
      width: 700px;
    }
  }
  .next-slide {
    transform: translateX(100%);
  }
`;

export default Wrapper;
