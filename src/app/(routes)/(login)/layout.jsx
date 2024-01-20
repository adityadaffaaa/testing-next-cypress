import React from "react";

const LoginLayout = ({ children }) => (
  <div className="h-screen grid place-items-center bg-primary relative overflow-hidden">
    {children}
  </div>
);

export default LoginLayout;
