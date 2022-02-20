import {creaateContext,useState} from 'react'


const FavouriteContext = creaateContext({
    favourites:[],
    totalFavourites:0
})

function FavouriteContextProvider(props){
const [userFavourite,setUserFavourite] = useState()

    function addFavouriteHandler(favouriteMeetup){
        setUserFavourite((previousUserFavourite)=>{
           return previousUserFavourite.concat(favouriteMeetup)
        })
    }

    function removeFavouriteHandler(meetUpiD){
        setUserFavourite(previousUserFavourite=>{
            return previousUserFavourite.filter(meetup => meetup.id !== meetUpiD)
        })
    }

    function itemIsFavouriteHandler(meetUpiD){
        return userFavourite.some(meetup =>meetup.id === meetUpiD)
    }

    const context = {
        favourites : userFavourite,
        totalFavourites:userFavourite.length,
        addFavourite:addFavouriteHandler,
        removeFavourite:removeFavouriteHandler,
        fouriteItem:itemIsFavouriteHandler,
    }

    return <FavouriteContext.Provider value={context}>
        {props.children}
    </FavouriteContext.Provider>
}