import Login from "../views/auth/Login";
import Signup from "../views/auth/Signup";

const AuthRoutes = [
  {
    path: "/login",
    name: "Login Page",
    component: <Login />,
    layout: "auth",
  },
  {
    path: "/signup",
    name: "Signup Page",
    component: <Signup />,
    layout: "auth",
  },
  // {
  //   path: "/rest-password",
  //   name: "Reset Password",
  //   component: <ReesetPassword />,
  //   layout: "auth",
  // },
  // {
  //   path: "/New-password",
  //   name: "New Password",
  //   component: <NewPassword />,
  //   layout: "auth",
  // },
  // {
  //   path: "/2faAuthentication/:encryptedEmail",
  //   name: "2fa Authentication",
  //   component: <OTPVerification />,
  //   layout: "auth",
  // },
];
export default AuthRoutes;
