import "./App.css";
import { NavBar } from "./components/NavBar";
import { Footer } from "./components/Footer";
import { AllRoutes } from "./routes/AllRoutes";

function App() {
  return (
    <div className="App">
      <NavBar />
      <AllRoutes />
      <Footer />
    </div>
  );
}

export default App;
