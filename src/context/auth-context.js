import React, { useState, useEffect, useMemo, createContext } from 'react'
import { getToken, signOut } from '../Api/services/AuthService'
import Cookies from 'js-cookie'

export const AuthContext = createContext();

export function AuthProvider(props) {

    const [user, setUser] = useState(null);
    const [auth, setAuth] = useState(false);

    useEffect(() => {
        if (getToken()) {
            setUser(JSON.parse(Cookies.get('userData')))
            setAuth(true)
        }

    }, [])

    function logIn({user, token}){
        console.log(user);
        setUser(user);
        Cookies.set('userToken', token);
        Cookies.set('userData', JSON.stringify(user));
        setAuth(true);
    }

    function logOut(){
        setUser(null);
        setAuth(false);
        signOut();
    }

    const value = useMemo(() => {
        return({
            user,
            auth,
            logIn,
            logOut
        })
    }, [user, auth])

    return <AuthContext.Provider value={value} {...props} />
}