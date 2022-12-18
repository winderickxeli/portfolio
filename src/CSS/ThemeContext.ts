import React from 'react';
import { IThemeContext } from '../Interfaces';
export const bodyTheme = {
    dark: {
        backgroundColor: "#044220",
        color:"#5F93FC"
    },
    light: {
        backgroundColor: "#c1d5fe",
        color:"#044220"
    }
}

const ThemeContext = React.createContext<IThemeContext>({theme:'Dark',setTheme:()=>{}});

export default ThemeContext;