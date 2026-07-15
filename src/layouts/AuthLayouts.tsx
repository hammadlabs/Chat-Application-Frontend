import { Routes, Route } from "react-router";
import AuthRoutes from "../routes/AuthRoutes";
import type { RouteTypes } from "../types/routes";

export default function AuthLayouts() {
  const getRoutes = (routes: RouteTypes[]) => {
    return routes.map((route, key) => {
      if (route.layout === "auth") {
        return <Route path={route.path} element={route.component} key={key} />;
      } else return null;
    });
  };
  console.log(AuthRoutes);
  return <Routes>{getRoutes(AuthRoutes as RouteTypes[])}</Routes>;
}
