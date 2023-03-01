import { Outlet } from "react-router-dom";
import Header from "./Header/Header";

function Router() {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
}

export default Router;
