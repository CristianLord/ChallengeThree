import {instance} from '../instance'

export async function showUsers(id){
    return await instance.get(`users/withoutSubs/${id}`)
}

export async function showProfile(id){
    return await instance.get(`users/${id}`)
}

export async function updateProfile(user){
    return await instance.put(`users/${user.id}`,{user})
}