import logo from './logo.svg';
import './App.css';
import NameCard from './components/NameCard';
import LikesButton from './components/LikesButton';

function App() {
  const tags=['aaa','bbb','ccc']
  return (
    <div className="App"> 
      <NameCard name="zwy" number={12345678} isHuman tags={tags}/>
      <LikesButton />
    </div>
  );
}

export default App;
