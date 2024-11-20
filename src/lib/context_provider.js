import React, { useEffect } from 'react'
import { useState } from "react";
import { themes } from '../constants/constants';

export const Context = React.createContext({
    user: null,
    login: async (user) => {},
    loading: Boolean
});

const ContextProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [theme, setTheme] = useState(themes[0])
    const [loading, setLoading] = useState(true)
    
    return (
        <Context.Provider value={{
            user,
            loading,
            theme,
            setTheme
        }}>
            {children}
          
        </Context.Provider>
    );
}

export default ContextProvider;