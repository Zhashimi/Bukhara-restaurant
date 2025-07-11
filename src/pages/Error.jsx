import Wrapper from "../assets/wrappers/ErrorPage";
import { Link, useRouteError } from "react-router-dom";
import img from "../assets/images/error.jpg";

const Error = () => {
  const error = useRouteError();
  if (error.status === 404) {
    return (
      <Wrapper>
        <div>
          <img src={img} alt="not found" />
          <h3>Sorry!!! </h3>
          <p>We can't seem to find the page you're looking for</p>
          <Link to="/">back home</Link>
        </div>
      </Wrapper>
    );
  }
  return (
    <Wrapper>
      <div>
        <h5>something went wrong{error.message}</h5>
      </div>
    </Wrapper>
  );
};

export default Error;
