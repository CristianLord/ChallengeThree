import {instance} from '../instance'

export async function getJournal(id){
    return await instance.get(`journals/journal/${id}`);
}

export async function getJournals(id){
    return await instance.get(`journals/SubscriptionsJournals/${id}`);
}

export async function getUserJournals(id){
    return await instance.get(`journals/UserJournals/${id}`);
}

export async function createJournal(journal){
    return await instance.post('journals',journal,{
        headers: {
            "Content-Type": "multipart/form-data"
        }
    });
}

export async function updateJournal(journal){
    return await instance.put(`journals/${journal.id}`,journal,{
        headers: {
            "Content-Type": "multipart/form-data"
        }
    });
}

export async function deleteJournal({id}){
    return await instance.delete(`journals/${id}`);
}