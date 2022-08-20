import './App.css';
import Home from './components/home/Home';
import Perfil from './components/perfil/Perfil';
import Skills from './components/skills/Skills';

function App() {
  return (
    <div>
      <header>
        <Home />
      </header>
      <div className='baseBody'>
        <div className='row'>
          <div className='col-md-6'>
            <Perfil />
          </div>
          <div className='col-md-6'>
            <Skills />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
