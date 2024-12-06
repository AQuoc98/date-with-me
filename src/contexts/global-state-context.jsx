import { createContext, useContext, useReducer } from "react";
import { INITIAL_STATE } from "../utils/constants";

const GlobalStateContext = createContext(null);

const GlobalStateDispatchContext = createContext(null);

const globalStateReducer = (state, action) => {
  switch (action.type) {
    case "update":
      return {
        ...state,
        ...action.payload,
      };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};

export const GlobalStateProvider = ({ children }) => {
  const [globalState, dispatch] = useReducer(globalStateReducer, INITIAL_STATE);

  return (
    <GlobalStateContext.Provider value={globalState}>
      <GlobalStateDispatchContext.Provider value={dispatch}>
        {children}
      </GlobalStateDispatchContext.Provider>
    </GlobalStateContext.Provider>
  );
};

export const useGlobalState = () => useContext(GlobalStateContext);
export const useGlobalStateDispatch = () =>
  useContext(GlobalStateDispatchContext);
