import './App.css';
import { Introduction } from './Components/Introduction';
import { ProfileCard } from './Components/ProfileCard';
function App() {
  return (
    <div className="flex flex-col items-center gap-8">
      <Introduction/>
      <h2 className="text-[30px] font-[700]">Meet the Contributors</h2>
      <ProfileCard />
    </div>
  );
}
export default App;
