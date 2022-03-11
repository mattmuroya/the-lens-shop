import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home";

function App() {
  return (
    <div className="wrapper">
      <NavBar />
      <Home></Home>
      <Outlet />
    </div>
  );
}

export default App;
