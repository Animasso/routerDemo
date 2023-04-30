import React from "react";
import { useSearchParams, useLocation } from "react-router-dom";
export const ProductList = () => {
  //  utilsé pour acceder aux info dans l'url'
  const [searchParams] = useSearchParams();
  const location = useLocation();
  console.log("location:", location);
  console.log("searchParams:", searchParams.get("keyword"));
  return <div>ProductList</div>;
};
