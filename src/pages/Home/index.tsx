import { useState } from "react";

import logo from "@/images/logo.svg";

export default function Home() {
  const [count, setCount] = useState(0);
  return (
    <div className="home">
      <img src={logo} className="home-logo" alt="logo" />
      <p className="home-title">🚀Vite + 🔥React + 📖Typescript + 🔨Eslint + 💅Prettier</p>

      <div className="home-content">
        <button onClick={() => setCount((count) => count + 1)}>🪂 Click me : {count}</button>

        <p>
          <a
            className="home-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {" | "}
          <a
            className="home-link"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
        </p>
      </div>
    </div>
  );
}
