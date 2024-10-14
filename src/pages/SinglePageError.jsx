import { useRouteError } from "react-router-dom";
const SinglePageError = () => {
  const error = useRouteError();
  return <h2 style={{ alignContent: "center" }}>{error.message}</h2>;
};
export default SinglePageError;
