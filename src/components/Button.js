import { useContext } from 'react'
import ThemeContext from '../context/ThemeContext';


function Button() {
    const { theme, setTheme } = useContext(ThemeContext)
    const data = useContext(ThemeContext);
    console.log('data :>> ', data);
    return <div>
        Active Theme :{theme}
        <br />
        <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}> Change Theme</button>
    </div>;
}

export default Button;
