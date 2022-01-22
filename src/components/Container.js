import { useContext } from 'react';
import { useTheme } from '../context/ThemeContext';
import Button from './Button';
import Header from './Header';
import Profile from './Profile';
function Container() {
    const { theme } = useTheme();
    return <div className={`app ${theme}`}>
        <Header />
        <hr />
        <Button />
        <br />
        <hr />
        <Profile />
    </div>;
}

export default Container;
