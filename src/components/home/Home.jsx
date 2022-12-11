import React, {useEffect, useState} from 'react'
import {useAuth} from '../../hooks/useAuth'
import {getJournals} from '../../Api/services/JournalService'
import HomeCard from './HomeCard'
import Header from '../Header'

function Home(){

  const [journals, setJournals] = useState(null)
  const {user} = useAuth();

  useEffect(() => {
    const id = user.id
    async function journals(){
        const response = await getJournals(id);
        if(response.status === 200){
          setJournals(response.data)
        }
      }

      journals();
    }, [])
    
    if(journals)
      return (
        <div className="container">
          <Header title={'journals'} button={{text:'Create journal', link:'/journals/upsert', style:'btn-sm btn-primary'}} />
          {journals.map((journal,i) => <HomeCard key={i} journal={journal}/>)}
        </div>
      )
    else
      return(
        <p>There are not post yet.</p>
      )
}

export default Home