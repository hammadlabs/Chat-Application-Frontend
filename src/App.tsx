import { useState } from "react";
import { Routes, Route, Navigate } from "react-router";
import AuthLayouts from "./layouts/AuthLayouts";

export default function App() {
  const [authenticated, setAuthenticated] = useState(false);
  const setAuthUser = () => {
    setAuthenticated(true);
  };
  setAuthUser();
  let routes;
  if (!authenticated) {
    routes = (
      <Routes>
        <Route path="/auth/*" element={<AuthLayouts />} />
        <Route path="*" element={<Navigate to="/auth/login" replace />} />
      </Routes>
    );
  } else return null;
  return <>{routes}</>;
}
