import React from "react";
import { useNavigate, Outlet } from "react-router-dom";
//utilisation de outlet pour afficher les composants
export const Contact = () => {
  const navigate = useNavigate();
  const handleNav = () => {
    navigate("/");
  };
  return (
    <>
      <div>Contact</div>
      <Outlet />
      <button onClick={handleNav}>Move To Home</button>
    </>
  );
};
