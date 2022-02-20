import {useRef} from 'react'
import classes from './NewMeetUpForm.module.css'


function NewMeetUpForm({addMeetUp}){
    const titleRef = useRef()
    const imageRef = useRef()
    const addressRef = useRef()
    const descRef = useRef()

        function frmSubmit(event){
            event.preventDefault()
            const titleRefinput  = titleRef.current.value
            const imageRefinput = imageRef.current.value
            const addressRefinput = addressRef.current.value
            const descRefinput = descRef.current.value

            const meetupData ={
                title : titleRefinput,
                address:addressRefinput,
                image:imageRefinput,
                description:descRefinput    
            }

            addMeetUp(meetupData)
        }

    return <section className={classes.card}>
            <form className={classes.form} onSubmit={frmSubmit}>

                <div className={classes.control}>
                    <label htmlFor='title'>Meetup Title</label>
                    <input type='text' required id='title' ref={titleRef}/>
                </div>

                <div className={classes.control}>
                    <label htmlFor='address'>Meetup Adress</label>
                    <input type='text' required id='address' ref={addressRef}/>
                </div>

                <div className={classes.control}>
                    <label htmlFor='image'>Meetup Image</label>
                    <input type='url' required id='image' ref={imageRef}/>
                </div>

                <div className={classes.control}>
                    <label htmlFor='description'>Meetup Description</label>
                    <textarea rows='5' id='description' ref={descRef}>

                    </textarea>
                </div>

                <div className={classes.actions}>
                    <button>Save Meetup</button>
                </div>

            </form>
    </section>
}

export default NewMeetUpForm