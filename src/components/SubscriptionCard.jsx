import React from 'react'
import { SubscribeTo, UnsubscribeFrom } from '../Api/services/SubscriptionService'
import {Link, useNavigate} from 'react-router-dom'
import Image from '../assets/img/undraw_profile_2.svg'

function SubscriptionCard({ user, subscribed }) {

  const navigate = useNavigate();

  async function handleSubscription(event) {
    const response = 
    (subscribed) ? 
    await UnsubscribeFrom({ idUser: 1, idSubscribed: user.id }):
    await SubscribeTo({ IdUser: 1, IdSubscribedUser: user.id }); 

    if(response.status === 204){
      (subscribed) ? navigate('/find') : navigate('/subscriptions')
    }
  }

  return (
    <div>
      <img alt='' src={Image} className="img-circle w-50 mx-auto d-block" />
      <div className="card-body text-center">
        <h5 className="card-title">{user.name}</h5>
        <button onClick={handleSubscription} className={subscribed ? 'btn btn-outline-primary' : 'btn btn-primary'}>
          {subscribed ? 'Unsuscribe' : 'Suscribe'}
        </button>
        <Link to={`/journals/${user.id}`} className="btn btn-success m-2"><i className="far fa-eye"/> See journals</Link>
      </div>
    </div>
  )
}

export default SubscriptionCard