import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const RequireAuthContent = ({ children }) => {
  const { user } = useAuth();

  if (!user) {
    return (
      <section className="auth">
        <h2>Please login or register</h2>
        <p>You need an account to see this content.</p>

        <div className="auth__cta">
          <Link to="/login" className="btn btn-secondary">
            Login
          </Link>
          <Link to="/register" className="btn btn-primary">
            Register
          </Link>
        </div>
      </section>
    );
  }
  return children;
};

export default RequireAuthContent;
