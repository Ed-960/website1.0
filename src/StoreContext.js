//We need'nt it anymore, because we installed
//react-redux package instead of redux package 

import React from "react";
const StoreContext = React.createContext(null);

export const Provider = (props) => {
   return <StoreContext.Provider value={props.store}>
      {props.children}
   </StoreContext.Provider>
}



//export default StoreContext;