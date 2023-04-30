import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Home } from "./components/Home";
import { ProductList } from "./components/ProductList";
import { ProductDetail } from "./components/ProductDetail";
import { Contact } from "./components/Contact";
import { NavBar } from "./components/NavBar";
import { Footer } from "./components/Footer";
import { Error } from "./Error";
import { ContactAf } from "./components/ContactAf";
import { ContactEu } from "./components/ContactEu";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />}>
          <Route path="eu" element={<ContactEu />} />
          <Route path="af" element={<ContactAf />} />
        </Route>

        <Route path="/products" element={<ProductList />} />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
