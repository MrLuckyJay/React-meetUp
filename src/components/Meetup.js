import { useContext } from 'react';
import FavouriteContext from '../store/favourite-context';
import classes from './Meetup.module.css';

function Meetup({title,image,description,address,id}){
    const favouriteCtx = useContext(FavouriteContext)
    const itemFav = favouriteCtx.favouriteItem(id)
   function toggleFavouriteStatusHandler(){
        if(itemFav){
            favouriteCtx.removeFavourite(id)
        }else{
            favouriteCtx.addFavourite({
                id,
                title,
                image,
                description,
                address
            })
        }
    }
    return (<div className={classes.card}>
    <img src={image} alt={title} className={classes.cardImg}/>
    <h3 className={classes.title}>{title}</h3>
    <p className={classes.txtDesc}>{description}</p>
    <p>{address}</p>
    <button className={classes.btn} onClick={toggleFavouriteStatusHandler}>{itemFav?'Remove from Favourite':'Add to Favourite'}</button>
</div>)
}

export default Meetup