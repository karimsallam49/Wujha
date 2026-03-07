import "./loader.css";
import LogoPic from "../../assets/Images/wujha logo-DFqlX04L.png"

const LoadingFallback = () => {
  return (
    <div className="loader-container">
      <img
        src={LogoPic}
        alt="WUJHA Development"
        className="loader-logo"
      />
    </div>
  );
};

export default LoadingFallback;
