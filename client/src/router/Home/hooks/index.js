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
        return {};
      }
      return data.data;
    } catch (e) {
      createNotification(e.message);
      return { status: false };
    } finally {
      setIsLoading(false);
    }
  };

  const create = async ({servicesIds, employeeId, extraServiceDescription, extraServiceAmount}) => {
    try {
      console.log(servicesIds, employeeId)
      if (!servicesIds) {
        return createNotification("يجب اختيار الموظف ", "warning");
      }
      if (!employeeId) {
        return createNotification("يجب اختيار خدمة واحدة علي الاقل", "warning");
      }

      let response = await axios.post("/api/transactions/create", {
        servicesIds,
        employeeId,
        extraServiceDescription,
        extraServiceAmount
      });

      setIsLoading(true);

      console.log(response);

      let data = await response.data;

      console.log(data.message);
      console.log(data.status);

      if (!data.status) {
        createNotification(data.message, "error");
        return{};
      }
      createNotification(data.message, "success");

      return data.data;
    } catch (e) {
      alert(e.message);
      return {};
    } finally {
      setIsLoading(false);
    }
  };

  return { getData, create };
};

export default useHome;
