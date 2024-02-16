import '../styles/globals.css';
import React from 'react';
export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <ThemeConsumer>
        <Component {...pageProps} />
      </ThemeConsumer>
    </ThemeProvider>
  );
}
const ThemeContext = React.createContext('light');

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = React.useState('light');
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };
  //store it in localStorage
  React.useEffect(() => {
    const localTheme = window.localStorage.getItem('theme');
    if (localTheme) {
      setTheme(localTheme);
    }
  }, []);
  React.useEffect(() => {
    window.localStorage.setItem('theme', theme);
  }, [theme]);
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
const ThemeConsumer = ({ children }) => {
  const { theme } = React.useContext(ThemeContext);
  return <div className={theme}>{children}</div>;
};
export { ThemeContext, ThemeProvider };
