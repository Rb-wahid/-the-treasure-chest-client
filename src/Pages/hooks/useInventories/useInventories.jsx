import axios from "axios";
import useSWR from "swr";

const fetcher = async (...args) =>
  await axios.get(...args).then((res) => res.data);
const defaultValue = "https://the-treasure-chest.herokuapp.com/inventory";

const useInventories = (url) => {
  const { data, error } = useSWR(url ? url : defaultValue, fetcher);

  return { data, isError: error, isLoading: !error && !data };
};

export default useInventories;
