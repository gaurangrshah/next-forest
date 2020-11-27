import React, { useState, useEffect, createContext } from 'react';

const NavStateContext = createContext();
const NavDispatchContext = createContext();

export function NavProvider({ children }) {
  const [nav, setNav] = useState(() => ({
    pages: [],
    controls: []
  }));

  const updatePages = (pages) => setNav((prevState) => ({ ...prevState, pages }));
  const updateControls = (controls) => setNav((prevState) => ({ ...prevState, controls }));

  return (
    <NavStateContext.Provider value={{ nav }}>
      <NavDispatchContext.Provider value={{ updatePages, updateControls }}>
        {children}
      </NavDispatchContext.Provider>
    </NavStateContext.Provider>
  );
}

export const useNavState = () => {
  const context = React.useContext(NavStateContext);
  if (context === undefined) {
    throw new Error('useCountState must be used within a CountProvider');
  }
  return context;
};

export const useNavDispatch = () => {
  const context = React.useContext(NavDispatchContext);
  if (context === undefined) {
    throw new Error('useCountState must be used within a CountProvider');
  }
  return context;
};
