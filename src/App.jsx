import { Outlet } from "react-router-dom";
import HeartsAnimation from "./components/molecules/hearts-animation";

function App() {
  return (
    <div className="relative overflow-hidden h-screen">
      <HeartsAnimation />
      <Outlet />
    </div>
  );
}

export default App;
