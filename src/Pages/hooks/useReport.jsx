import { useEffect, useState } from "react";
import useInventories from "../hooks/useInventories";
const useReport = (url) => {
  const [data] = useInventories(url);
  const [invest, setInvest] = useState(0);
  const [sold, setSold] = useState(0);

  useEffect(() => {
    let totalInvest = 0;
    let totalSold = 0;
    if (data) {
      totalInvest = data.reduce(
        (sum, current) => sum + +current.price * +current.quantity,
        0
      );

      totalSold = data.reduce(
        (sum, current) => sum + +current.price * +current.sold,
        0
      );
    }
    setInvest(totalInvest.toFixed(2));
    setSold(totalSold.toFixed(2));
  }, [data]);
  return [invest, sold];
};

export default useReport;
