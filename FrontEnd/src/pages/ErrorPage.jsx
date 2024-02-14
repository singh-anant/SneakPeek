import { Link, useRouteError } from "react-router-dom";
import ErrorImg from '../../assets/errorImage.jpeg';
const ErrorPage = () => {
    const err = useRouteError();
  return (
   <div className="error-page">
      <img src={ErrorImg} alt="Error Image" />
      <h1>
        Looks like your kicks are off on their own adventure. Time to lace up and track them down!" 🚀👟
      </h1>
      <h3 className="error-data">{err.data}</h3>
      <h3 className="error-back-home">
        <Link to="/">Back Home</Link>
      </h3>
    </div>
  )
}

export default ErrorPage
