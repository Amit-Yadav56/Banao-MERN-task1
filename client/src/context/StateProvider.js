//This is where we create our own context

import React, { createContext, useContext, useReducer } from 'react'

export const StateContext = createContext();

export const StateProvider = ({ reducer, initialState, children }) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
)

//This is the custom state
export const UseStateValue = () => useContext(StateContext)


//from context provider we can use the value whenever we want