import axios from "axios";
import { useEffect, useState } from "react";

const useToken = (user) => {
  const [token, setToken] = useState("");
  useEffect(() => {
    const fetching = async () => {
      const { data } = await axios.post(
        `https://the-treasure-chest.herokuapp.com/gettoken?email=${user.email}`
      );
      setToken(data.token);
      localStorage.setItem("token", data.token);
    };
    if (user) {
      fetching();
    }
  }, [user]);
  return [token];
};

export default useToken;
