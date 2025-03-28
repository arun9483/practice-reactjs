import { createContext } from 'react';

export const themeKey = 'app-theme';

export type ThemeType = 'light' | 'dark';

export interface ThemeContextType {
  theme: ThemeType;
  setTheme: (theme: ThemeType) => void;
}

export const ThemeContext = createContext<ThemeContextType>({
  theme: window.localStorage.getItem(themeKey) === 'dark' ? 'dark' : 'light',
  setTheme: (theme: ThemeType) => {
    console.log(`current theme is ${theme}`);
  },
});
