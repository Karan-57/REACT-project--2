import { createContext, useState } from 'react';

export const AuthDataContext = createContext();

const AuthContext = ({ children }) => {

  const [auth, setAuth] = useState([]);

  return (
    <AuthDataContext.Provider value={[auth, setAuth]}>
      {children}
    </AuthDataContext.Provider>
  );
};

export default AuthContext;