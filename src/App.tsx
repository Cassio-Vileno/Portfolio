import "./App.scss";
import Home from "./screens/Home";
import { Analytics } from "@vercel/analytics/react";

function App() {
  return (
    <main className="container_main">
      <Analytics />
      <Home />
    </main>
  );
}

export default App;
