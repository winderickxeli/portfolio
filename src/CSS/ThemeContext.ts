import React from 'react';
import { IThemeContext } from '../Interfaces';
export const bodyTheme = {
    dark: {
        backgroundColor: "#2a2c31",
        color:"#d5d3c5"
    },
    light: {
        backgroundColor: "#d5d3c5",
        color:"#2a2c31"
    }
}

const ThemeContext = React.createContext<IThemeContext>({theme:'Dark',setTheme:()=>{}});

export default ThemeContext;