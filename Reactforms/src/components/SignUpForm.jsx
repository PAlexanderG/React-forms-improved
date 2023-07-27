// import the useState hook from React
import { useState } from "react";

// create a SignUpForm component, and ensure it is the default export.
export default function SignUpForm() {
  // create three state variables for our form inputs: username, password, and error. Their default values should be "", "" and null, respectively.
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  async function handleSubmit(event) {
    event.preventDefault();
    // console.log("Hello 👋");

    try {
    } catch (error) {
      setError(error.message);
    }
  }

  <>
    <h2>Sign Up</h2>
    {error && <p>{error}</p>}
    <form onSubmit={handleSubmit}>
      <label>
        Username:{" "}
        <input value={username} onChange={(e) => setUsername(e.target.value)} />
      </label>
      <label>
        Password:{" "}
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <button>Submit</button>
    </form>
  </>;
}
