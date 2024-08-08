import React from "react";

const _default = {
  auth: null,
};

export const AuthContext = React.createContext(_default);

const AuthProvider = ({ children }) => {
  const [auth, setAuth] = React.useState(null);

  const value = { auth, setAuth };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
