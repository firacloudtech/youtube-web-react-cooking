import { useState } from "react";
import reactLogo from "./assets/react.svg";
import Navbar from "./components/navbar/Navbar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="py-14 px-32 max-w-7xl mx-auto text-black">
      <Navbar />
    </div>
  );
}

export default App;
