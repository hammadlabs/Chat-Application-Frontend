import { useState } from "react";
import { Routes, Route} from "react-router";
import AuthLayouts from "./layouts/AuthLayouts";
import NotFound from "./views/public/NotFound";
import Home from "./views/public/Home";

export default function App() {
  const [authenticated, setAuthenticated] = useState(true);
  const toggleAuth = () => {
    setAuthenticated((prev) => !prev); // ← flips true ↔ false
  };
  toggleAuth();
  let routes;
  if (!authenticated) {
    routes = (
      <>

            <button onClick={toggleAuth}>
        {authenticated ? "Log out" : "Log in"}
      </button>

      <Routes>
        <Route path="/auth/*" element={<AuthLayouts />} />       
      </Routes>
      </>
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
