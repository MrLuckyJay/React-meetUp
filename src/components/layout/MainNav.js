import { Link } from "react-router-dom";

import classes from './MainNav.module.css'

function MainNav(){
    return(
        <header className={classes.header}>
            <div className={classes.logo}>React MeetUps</div>
                <nav>
                    <ul>
                        <li><Link to={'/'}>Home</Link></li>
                        <li><Link to={'/new-meetup'}>Add New MeetUp</Link></li>
                        <li><Link to={'/favourite'}>My Favourites</Link></li>
                    </ul>
                </nav>
            
        </header>
    )
}

export default MainNav;