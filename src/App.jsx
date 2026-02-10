import { Routes, Route, Link } from "react-router";

import Destination from "./components/Destination";
import Car from "./components/Car";
import Hobby from "./components/Hobby";

function App() {
  return (
    <>
      <nav>
        <Link to="/destination">Destination</Link> <Link to="/car">Car</Link>{" "}
        <Link to="/hobby">Hobby</Link>
      </nav>

      <Routes>
        <Route path="/destination" element={<Destination />} />
        <Route path="/car" element={<Car />} />
        <Route path="/hobby" element={<Hobby />} />
      </Routes>
    </>
  );
}

export default App;
