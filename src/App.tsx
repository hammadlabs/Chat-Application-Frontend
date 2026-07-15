import { useState } from "react";
import { Routes, Route, Navigate } from "react-router";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import AuthLayouts from "./layouts/AuthLayouts";

export default function App() {
  const [authenticated, setAuthenticated] = useState(false);
  const setAuthUser = () => {
    setAuthenticated(true);
  };
  let routes;
  if (!authenticated) {
    routes = (
      <Routes>
        <Route path="/auth/*" element={<AuthLayouts />} />
        <Route path="/*" element={<Navigate to="/auth/login" />} />
      </Routes>
    );
  } else {
    routes = (
      <Routes>
        <Route path="/home" element={<Footer />} />
      </Routes>
    );
  }
  return (
    <>
      <Header />
      {routes}
      <Footer />
    </>
  );
}
