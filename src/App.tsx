import { BrowserRouter } from "react-router-dom";
import { Router } from "./routes";

function App() {
  return (
    <BrowserRouter>
      <main className="bg-gray-950 min-w-7xl min-h-screen">
        <Router />
      </main>
    </BrowserRouter>
  );
}

export default App;
