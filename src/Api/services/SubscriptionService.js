import {instance} from '../instance'

export async function getSubscriptions(id){
    return await instance.get(`subscriptions/GetSubscriptionsUser/${id}`)
}

export async function SubscribeTo(subscription){
    return await instance.post('subscriptions',subscription)
}

export async function UnsubscribeFrom({idUser, idSubscribed}){
    return await instance.delete(`subscriptions/${idUser}/${idSubscribed}`)
}