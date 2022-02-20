import classes from './Meetup.module.css';

function Meetup({title,image,description,address}){
    return (<div className={classes.card}>
    <img src={image} alt={title} className={classes.cardImg}/>
    <h3 className={classes.title}>{title}</h3>
    <p className={classes.txtDesc}>{description}</p>
    <p>{address}</p>
    <button className={classes.btn}>Add to Favourite</button>
</div>)
}

export default Meetup