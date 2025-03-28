import { useEffect } from 'react';
import { useTheme } from './useTheme';
import './ThemeSwitcher.css';

const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();
  useEffect(() => {
    if (theme === 'dark') {
      window.document.body.classList.add('dark');
    } else {
      window.document.body.classList.remove('dark');
    }
  }, [theme]);

  return (
    <div className="theme-switcher">
      <label>
        <input
          type="checkbox"
          name="theme-switcher"
          checked={theme === 'dark'}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            if (event.target.checked) {
              setTheme('dark');
            } else {
              setTheme('light');
            }
          }}
        />
        <span>Currently applied theme is: {theme}</span>
      </label>
    </div>
  );
};

export default ThemeSwitcher;
