import { useNavigate } from "react-router-dom";

const Error404 = () => {
  const navigate = useNavigate();
  return (
    <div className="error-container">
      <img
        src="https://www.freepik.com/free-vector/glitch-error-404-page-background_3918617.htm#query=404&position=14&from_view=search"
        alt="404 error"
      />
      <button className="btn" onClick={() => navigate("/")}>
        Return to Explore
      </button>
    </div>
  );
};

export { Error404 };
