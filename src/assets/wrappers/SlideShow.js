import styled from "styled-components";

const Wrapper = styled.div`
  position: relative;

  height: 300px;
  width: 100%;
  max-width: var(--fixed-width);
  .slide {
    text-align: center;
    position: absolute;
    top: 10;
    left: 0;
    width: 100%;
    height: 100%;
    transition: var(--transition);
    padding: 1rem 0;
  }
  .slider-image {
    height: 230px;
    width: 96%;
    max-height: 800px;
    max-width: 1000px;
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
    top: 40%;
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
    .prev,
    .next {
      width: 2rem;
      height: 2rem;
      font-size: 1.5rem;
    }
    .slider-image {
      height: 500px;
    }
  }
  .next-slide {
    transform: translateX(100%);
  }
`;

export default Wrapper;
