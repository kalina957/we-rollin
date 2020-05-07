import React, {useState,useEffect} from 'react';
import '../css/styles.css';
import '../css/materialize.min.css';
import {firestore} from '../firebase';
import { useHistory, Link } from 'react-router-dom';

//  const db = firebase.firestore();
function useEvents(){
  const [events, setEvents] = useState([]);
  useEffect(() => {
firestore.collection('events')
.onSnapshot((snapshot)=>{
  const newEvents = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data()
  }))
  setEvents(newEvents)
})
  }, [])
  return events;
}
export const Events =() =>{
  const history = useHistory()
  const events = useEvents()
    return(
        <div className="pageWrapper container">
        <div className="logoImg container " >
  <div className="imgMainWrap row">
    <img className="imgMainWrap " src={require('../assets/skaterss.png')} width="90%" />
  </div>
</div>
  <div className="headerContainer row">
    <h4 className="headerElement"><strong>Events Near me</strong></h4>
  </div>
        <div className="recipes grey-text text-darken-1 text-center">
      
      <div className="buttonFilter ">
         <Link to="/addEvent" className="linkAddEvent"> 
     <i className="tagAddEvent">Add Event</i>
     </Link>
     </div> 
        <ul>
          {events.map((event) => 
          <li key={event.id}>
        <div className="card-panel recipe white row">
          <img  src={event.imgRef}  alt="recipe thumb" className="img"/>
          <div className="recipe-details">
          <div className="recipe-title">{event.Name}</div>
          <div className="recipe-ingredients">{event.Location}, {event.Time}</div>
          </div>
          </div>
          </li>
          )} 
    </ul>
        </div>
      
  </div>
    )
}