import axios from "axios";
import { useAppContext } from "../../../Providers";

const useHome = () => {
  const { createNotification, setIsLoading } = useAppContext();

  const getData = async () => {
    try {
      setIsLoading(true);

      let response = await axios.post("/api/home");
      let data = response.data;
      console.log(data.data);
      if (!data.status) {
        createNotification(data.message);
        return data;
      }
      createNotification(data.message, "success");
      return data;
    } catch (e) {
      createNotification(e.message);
      return { status: false };
    } finally {
      setIsLoading(false);
    }
  };

  return { getData };
};

export default useHome;
