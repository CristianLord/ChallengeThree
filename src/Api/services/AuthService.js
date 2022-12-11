import { instance } from '../instance'
import Cookies from 'js-cookie'

export async function signUp(user){
    return await instance.post('/Auth/SignUp', user);
}

export async function signIn({email, password}){
    return await instance.post('/Auth/SignIn', { email, password });
}

export function signOut(){
    Cookies.remove('userToken');
    Cookies.remove('userData');
}

export function getToken(){
    const token = Cookies.get('userToken')
    return  token ? token : '';
}



