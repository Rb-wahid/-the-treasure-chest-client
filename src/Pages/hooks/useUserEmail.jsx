import { useMemo } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../Firebase.init";

const useUserEmail = () => {
  const [user, loadingUser, error] = useAuthState(auth);
  const email = useMemo(() => user?.email, [user]);

  return [email, loadingUser, error];
};

export default useUserEmail;
