import { Route, Routes, useNavigate } from "react-router-dom";
import ROUTES_NAVIGATION from "./routes";
import MainLayout from "../Pages/MainLayout";
import { useEffect, useState } from "react";
import LoginPage from "../Pages/Login";
import DashBordPage from "../Pages/Dashbord";

const RouteComponent = () => {
  const [isUserAuth, setIsUserAuth] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    if (isUserAuth) {
      navigate(ROUTES_NAVIGATION.LoGIN);
    }
  }, []);

  return (
    <Routes>
      <Route path={ROUTES_NAVIGATION.DashBord} element={<MainLayout />}>
        <Route index element={<DashBordPage />} />
      </Route>
      <Route path={ROUTES_NAVIGATION.LoGIN} element={<LoginPage />} />
    </Routes>
  );
};
export default RouteComponent;
