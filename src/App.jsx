import './App.css';
import Home from './components/home/Home';
import Skills from './components/skills/Skills';

function App() {
  return (
    <div>
      <header>
        <Home />
      </header>
      <div className='baseBody'>
        <Skills />
      </div>
    </div>
  );
}

export default App;
