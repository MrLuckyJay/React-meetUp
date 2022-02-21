import { useState,useEffect } from 'react';
import Meetup from '../components/Meetup';
import classes from './AllMeetUps.module.css'


function AllMeetUps(){
  const [isLoading, setisLoading] = useState(true)
  const [loadMeetup,setLoadMeetup] = useState([])

  useEffect(()=>{
    fetch('https://react-getting-started-16132-default-rtdb.firebaseio.com/meetups.json').then(response=>{
      return response.json()
    }).then(data=>{
      const meetups = []

    for(const key in data){
      const meetup ={
        id:key,
        ...data[key]
      }
      meetups.push(meetup)
    }
    

      setisLoading(false)
      console.log(data)
      setLoadMeetup(meetups)
    })
  },[])

  


    if(isLoading){ return <section>
      <h1>Loading....</h1>
    </section>}
    return(
        <div className={classes.main}>
      <h1>All Meetups</h1>
      <div className={classes.container}>
      {loadMeetup.map((meetup)=>{
         return <Meetup image={meetup.image} title={meetup.title} address={meetup.address} description={meetup.description} id={meetup.id} key={meetup.id}/>
         
      })}
      </div>
      
        </div>
    )
}

export default AllMeetUps