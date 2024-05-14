
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import NavBar from './components/NavBar.tsx';
import ProjectVideoOnHover from './components/ProjectVideoOnHover.tsx';
import HomePage from './pages/HomePage.tsx';
import Projects from './pages/Projects.tsx';
import Skills from './pages/Skills.tsx';
import Hobbies from './pages/Hobbies.tsx';
import Vinyl from './pages/Vinyl.tsx';

function App() {

  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='projects' element={<Projects />} />
          <Route path='skills' element={<Skills/>} />
          <Route path='hobbies' element={<Hobbies/>} />
          <Route path='/hobbies/vinyl' element={<Vinyl/>} />
        </Routes>
      </BrowserRouter>

    </>

  )
}

export default App;
