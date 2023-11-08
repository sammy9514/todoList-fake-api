import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { RouterProvider } from "react-router-dom";
import { Router } from "./Router/Router";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <RouterProvider router={Router} />
    </>
  );
}

export default App;
