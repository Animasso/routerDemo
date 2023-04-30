import { Route, Routes } from "react-router-dom";
import {
  Home,
  ProductList,
  ProductDetail,
  Contact,
  Error,
} from "../pages/index";
import { ContactAf } from "../components/ContactAf";
import { ContactEu } from "../components/ContactEu";
export const AllRoutes = () => {
  return (
    <>
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
    </>
  );
};
