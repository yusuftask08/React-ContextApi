import { useContext } from 'react'
import React from 'react';
import ThemeContext from '../context/ThemeContext';


function Button() {

    const data = useContext(ThemeContext);
    console.log('data :>> ', data);
    return <div>
        Button ({data})
    </div>;
}

export default Button;
