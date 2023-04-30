import React from "react";
import { useNavigate, Outlet } from "react-router-dom";

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
