import "./App.css";

import Authenticate from "./components/Authenitcate.jsx";
import SignUpForm from "./components/SignUpForm.jsx";

export default function App() {
  return (
    <>
      <h2>
        <SignUpForm />
        <form>
          <label>
            Username: <input />
          </label>
          <label>
            Password: <input />
          </label>
          <button>Submit</button>
        </form>
        <Authenticate />
      </h2>
    </>
  );
}
