import "./App.scss";
import Header from "./components/molecules/Header";
import Home from "./screens/Home";
import { Analytics } from "@vercel/analytics/react";

function App() {
  return (
    <main className="container_main">
      <Analytics />
      <Header />
      <Home />
    </main>
  );
}

export default App;
