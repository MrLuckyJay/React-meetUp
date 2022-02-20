import {Route, Routes} from 'react-router-dom'
import MainNav from './components/layout/MainNav';
import AllMeetUp from './pages/AllMeetUps';
import FavouriteMeetUp from './pages/FavouriteMeetUp';
import NewMeetUp from './pages/NewMeetUp';

function App() {
  return (
  <>
  <MainNav/>
  <Routes>
  <Route path='/' element={<AllMeetUp/>}/>
  
  <Route path='/new-meetup' element={<NewMeetUp/>}/>
    
  <Route path='/favourite' element={<FavouriteMeetUp/>}/>

  </Routes>
   
  </>
  
    
  
   
  );
}

export default App;
