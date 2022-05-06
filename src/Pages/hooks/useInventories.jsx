import axios from "axios";
import useSWR from "swr";

const config = {
  headers: {
    auth: `${localStorage.getItem("token")}`,
  },
};
const fetcher = async (...args) =>
  await axios.get(...args, config).then((res) => res.data);
const defaultValue = "https://the-treasure-chest.herokuapp.com/inventory";

const useInventories = (url) => {
  const { data, error } = useSWR(url ? url : defaultValue, fetcher);

  return [data, error, !error && !data];
};

export default useInventories;
