import NavBar from './components/NavBar/NavBar'
import About from './components/About/About'
import Home from './components/Home/Home'
import Skills from './components/Skills/Skills'
import Youtube from './components/Youtube/Youtube' 
import Contact from './components/Contact/Contact'
import './App.css';

function App() {
  return (
    <div className="App">
     <NavBar />
     <Home /> 
     <About /> 
     <Skills /> 
     <Youtube /> 
     <Contact /> 
    </div>
  );
}

export default App;
