import NewMeetUpForm from '../components/NewMeetUpForm'
import classes from './NewMeetUp.module.css'
import {useNavigate} from 'react-router-dom'

function NewMeetUp(){
    const navigate = useNavigate()
    function createMeetUp(meetup){
        
            fetch('https://react-getting-started-16132-default-rtdb.firebaseio.com/meetups.json',{
                method:'POST',
                body:JSON.stringify(meetup),
                headers:{
                    'content-type':'application/json'
                }
            }).then(()=>{

                navigate('/')
            })
    }
    return(
        <div className={classes.main}>
            <h1 className={classes.title}>
            New Meetups
            </h1>

            <NewMeetUpForm addMeetUp={createMeetUp}/>

        </div>
    )
}

export default NewMeetUp