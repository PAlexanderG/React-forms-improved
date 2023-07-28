import "./App.css";

import Authenticate from "./components/Authenitcate.jsx";
import SignUpForm from "./components/SignUpForm.jsx";
import { useState } from "react";

export default function App() {
  const [token, setToken] = useState(null);
  return (
    <>
      <SignUpForm token={token} setToken={setToken} />

      <Authenticate token={token} setToken={setToken} />
    </>
  );
}
