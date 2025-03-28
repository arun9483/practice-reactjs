import { FC, useCallback, useState } from 'react';
import { ThemeContext, themeKey, ThemeType } from './ThemeContext';

interface ThemeContextProviderProp {
  children: React.ReactNode;
}

export const ThemeContextProvider: FC<ThemeContextProviderProp> = ({ children }) => {
  const [theme, setTheme] = useState<ThemeType>(window.localStorage.getItem(themeKey) === 'dark' ? 'dark' : 'light');
  const setThemeHandler = useCallback(
    (theme: ThemeType) => {
      setTheme(theme);
      if (theme === 'dark') {
        window.localStorage.setItem(themeKey, 'dark');
      } else {
        window.localStorage.removeItem(themeKey);
      }
    },
    [setTheme]
  );

  return (
    <ThemeContext
      value={{
        theme,
        setTheme: setThemeHandler,
      }}
    >
      {children}
    </ThemeContext>
  );
};
