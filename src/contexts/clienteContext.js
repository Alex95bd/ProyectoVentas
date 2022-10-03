import React, { createContext, useReducer } from 'react';
import ClienteRedurcer from '../reducer/clienteReducer';

export const ClienteContext = createContext();

export const ClienteContextProvider = props => {

    const initialState = {
        clientesList: []
    }
    
    const [state, dispatch] = useReducer(ClienteRedurcer, initialState);

    return (
        <ClienteContext.Provider
          value={{
            clientesList: state.clientesList
          }}
        >
          {props.children}
        </ClienteContext.Provider>
    )
}