import axios from "axios";
import { useEffect, useState } from "react";
import useUserEmail from "./useUserEmail";

const useToken = () => {
  const [email, loading] = useUserEmail();
  const [token, setToken] = useState("");
  useEffect(() => {
    const fetching = async () => {
      const { data } = await axios.post(
        `https://the-treasure-chest.herokuapp.com/gettoken?email=${email}`
      );
      setToken(data.token);
      localStorage.setItem("token", data.token);
    };
    if (email) {
      fetching();
    }
  }, [email, loading]);
  return [token];
};

export default useToken;
