import React, {useState, useEffect} from 'react'
import {showUsers} from '../../Api/services/UserService'
import Card from '../../components/SubscriptionCard'

function Find() {

    const [users, setUsers] = useState([])

    useEffect(() => {

        async function getUsers(){
           const response = await showUsers(1)
           if(response.status === 200) setUsers(response.data)
        }

        getUsers();
    },[])

  return (
    <div className="row justify-content-center">
        {users.length > 0 ? users.map((user,i) => <Card key={i} user={user} subscribed={false} />) : <p>There are not new users.</p>}
    </div>
  )
}

export default Find