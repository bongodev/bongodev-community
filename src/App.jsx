import './App.css'
import { ProfileCard } from './Components/ProfileCard'
function App(){
   return(
     <div className='flex flex-col gap-8'>
     <h2 className='text-2xl font-bold'>Contributors</h2>
     <ProfileCard/>
     </div>
     )
}
export default App
