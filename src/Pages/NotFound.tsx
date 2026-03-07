import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <section style={{ textAlign: "center", padding: "3rem 1rem" }}>
      <h1>404 - Page Not Found</h1>
      <p>The page you requested does not exist.</p>
      <Link to="/">Go back home</Link>
    </section>
  );
};

export default NotFound;

