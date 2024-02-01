
import Home from './pages/home'
import { Chest } from './workout Pages/chest'
import { LegWorkout } from './workout Pages/leg'
import { Fullworkout } from './workout Pages/full'
import { ArmWorkout } from './workout Pages/arm'
import { Backworkout } from './workout Pages/back'
import { CoreWorkout } from './workout Pages/core'
import { Beginner } from './workout Pages/beginner'
import { Intermediate } from './workout Pages/intermediate'
import { Advance } from './workout Pages/advance'
import Instructions from './subpages/instructions'
import './App.css'
import { BrowserRouter,Route,Routes,Link } from 'react-router-dom'
function App() {
 

  return (
    <>
    <BrowserRouter>
    <Link to={'/'}> <h1 className='nameApp'>Exercise App</h1></Link>
    
<Routes>
<Route path="/" element={<Home/>}></Route>
<Route path='/chest' element={<Chest/>}></Route>
<Route path='/legs' element={<LegWorkout/>}></Route>
<Route path='/arms' element={<ArmWorkout/>}></Route>
<Route path='/fullworkout' element={<Fullworkout/>}></Route>
<Route path='/back' element={<Backworkout/>}></Route>
<Route path='/core' element={<CoreWorkout/>}></Route>
<Route path='/beginner' element={<Beginner/>}></Route>
<Route path='/intermediate' element={<Intermediate/>}></Route>
<Route path='/advance' element={<Advance/>}></Route>
<Route path='/exercise/:details' element={<Instructions/>}></Route>
</Routes>
</BrowserRouter>
    </>
  )
}

export default App
