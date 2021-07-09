import BounceLoader from "react-spinners/BounceLoader";
import { useAppContext } from "../../../Providers";

//Style
import "./style.scss";

const Loader = () => {
  const { isLoading } = useAppContext();

  return (
    isLoading && (
      <div className="loader-container">
        <BounceLoader loading color="#ffffff" size={50} />
      </div>
    )
  );
};

export default Loader;
