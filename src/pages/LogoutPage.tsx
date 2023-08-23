import { FC, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

interface Props {}

const LogoutPage: FC<Props> = () => {
  const { user, setUser } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    setUser(null);
    sessionStorage.clear();
  }, []);

  if (!user) navigate("/");

  return null;
};

export default LogoutPage;
