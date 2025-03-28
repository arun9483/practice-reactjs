import { ThemeContextProvider } from './ThemeContextProvider';
import ThemeSwitcher from './ThemeSwitcher';

const ThemeSwitcherContainer = () => {
  return (
    <ThemeContextProvider>
      <h1>Theme Switcher</h1>
      <ThemeSwitcher />
    </ThemeContextProvider>
  );
};

export default ThemeSwitcherContainer;
