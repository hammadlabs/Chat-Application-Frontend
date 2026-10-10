import { useState } from "react";
import { Routes, Route, Navigate } from "react-router";
import AuthLayouts from "./layouts/AuthLayouts";
import NotFound from "./views/public/NotFound";
import Home from "./views/public/Home";

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

      </Routes>
    );
  } else return null;
  return (<>
  {routes}
  <Routes>
    <Route path="*" element={<NotFound />} />
    <Route path="/"   element={<Home/>} handle={{name:"home"}}/>
    </Routes>  
    </>)
}
