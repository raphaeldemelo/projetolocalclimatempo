import { useState, createContext } from 'react';

export const UserContext = createContext({});

export default function UserProvider({ children }) {

    const [cep, setCep] = useState('');
    const [cepUser, setCepUser] = useState('');
    const [minhaLat, setMinhaLat] = useState();
    const [minhaLong, setMinhaLong] = useState();
    const [cidade, setCidade] = useState('');


    return (
        <UserContext.Provider
            value={{
                cep,
                setCep,
                cepUser,
                setCepUser,
                minhaLat,
                setMinhaLat,
                minhaLong,
                setMinhaLong,
                cidade,
                setCidade,
            }}>

            {children}
        </UserContext.Provider>
    )
}