import React, { useEffect } from 'react'
import { useState } from "react";
import { themes } from '../constants/constants';

export const Context = React.createContext({
    user: null,
    loading: false,
    theme: themes[0],
    setTheme: () => {}
});

const ContextProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [theme, setTheme] = useState(themes[0])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const storedTheme = JSON.parse(localStorage.getItem('theme'));
        if (storedTheme) {
            setTheme(storedTheme);
        }
    }, []);

    useEffect(() => {
        if(!(theme.name == 'Default')) {
            localStorage.setItem('theme', JSON.stringify(theme));
        }
    }, [theme]);
    
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