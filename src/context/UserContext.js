import { createContext, useState } from 'react'
import { useContext } from 'react/cjs/react.development';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null
    );
    const values = { user, setUser }
    return <UserContext.Provider value={values
    }> {children} </UserContext.Provider>
}

export const useUser = () => useContext(UserContext)