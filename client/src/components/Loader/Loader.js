import HashLoader from "react-spinners/HashLoader";
import { useAppContext } from "../../Providers";

//Style
import "./style.scss";

const Loader = () => {
  const { isLoading } = useAppContext();

  return (
    isLoading && (
      <div className="loader-container">
        <HashLoader loading color="#ffffff" size={50} />
      </div>
    )
  );
};

export default Loader;
