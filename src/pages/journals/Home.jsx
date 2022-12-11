import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useAuth } from '../../hooks/useAuth'
import Header from '../../components/Header'
import { getUserJournals, deleteJournal } from '../../Api/services/JournalService'

function HomeJournals() {

  let { id } = useParams();
  const { user } = useAuth();
  const [auth, setAuth] = useState(false)
  const [journals, setJournals] = useState([])
  const [refresh, setRefresh] = useState(false)

  useEffect(() => {
    if ((user.id).toString() === id) {
      setAuth(true);
    }

    async function getJournals() {
      const response = await getUserJournals(id);
      console.log(response)
      if (response.status === 200) setJournals(response.data)
    }

    getJournals();
  }, [id, user.id, refresh])

  async function removeJournal(idJournal) {
    const response = await deleteJournal({ id: idJournal })
    console.log(response)
    if (response.status === 204) setRefresh(refresh !== true)
  }

  return (
    <>
      {auth ?
        <Header title='My journals' button={{ text: 'Create new journal', link: '/journals/upsert' }} />
        :
        <Header title='Their journals' />}

      {journals.length > 0 ?
        <ul className="list-group">
          {journals.map((journal, i) =>
            <li className="list-group-item" key={i}>
              <div className="row">
                <div className="col-md-6">{journal.title}</div>
                <div className="col-md-6 text-right">
                  <Link to={`/journals/view/${journal.id}`} className="btn btn-primary btn-sm">See</Link>
                  {
                    auth ?
                      <>
                        <Link to={`/journals/upsert/${journal.id}`} className="btn btn-success mx-2 btn-sm">Edit</Link>
                        <button onClick={() => removeJournal(journal.id)} className="btn btn-danger btn-sm">Delete</button>
                      </>
                      : <></>
                  }
                </div>
              </div>
            </li>)}
        </ul>
        :
        <p>there are not post yet.</p>
      }
    </>
  )
}

export default HomeJournals