import axios from "axios";
import { useAppContext } from "../../../Providers";

const useStatistics = () => {
  const { createNotification, setIsLoading } = useAppContext();

  const getData = async ({employeeId, date}) => {
    try {
      if (!date) {
        return createNotification("يجب اختيار اليوم", "warning");
      }
      let response = await axios.post("/api/transactions/get", {
        employeeId,
        date,
      });

      setIsLoading(true);
      let data = await response.data;
      console.log(data);

      if (!data.status) {
        createNotification(data.message, "error");
        return;
      }

      return;
    } catch (e) {
      alert(e.message);
    } finally {
      setIsLoading(false);
    }
  };

  return { getData };
};

export default useStatistics;
