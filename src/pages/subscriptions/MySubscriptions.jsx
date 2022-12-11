import React, {useState, useEffect} from 'react'
import {getSubscriptions} from '../../Api/services/SubscriptionService'
import Card from '../../components/SubscriptionCard'


function MySubscriptions() {
  const [users, setUsers] = useState([])

    useEffect(() => {

        async function getUsers(){
           const response = await getSubscriptions(1)
           if(response.status === 200) setUsers(response.data)
        }

        getUsers();
    },[])

  return (
    <div className="row justify-content-center">
        {users.length > 0 ? users.map((user,i) => <Card key={i} user={user} subscribed={true}/>) : <p>You are not subscribed to anyone yet.</p>}
    </div>
  )
}

export default MySubscriptions