import { Analytics } from "@vercel/analytics/react";
import AppRoutes from "../src/router/routes.tsx";
import "./App.scss";

function App() {
  return (
    <main className="container_main">
      <Analytics />
      <AppRoutes />
    </main>
  );
}

export default App;
