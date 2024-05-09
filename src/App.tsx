
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import NavBar from './components/NavBar.tsx';
import ProjectVideoOnHover from './components/ProjectVideoOnHover.tsx';
import HomePage from './pages/HomePage.tsx';
import Projects from './pages/Projects.tsx';

function App() {

  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='projects' element={<Projects />} />
        </Routes>
      </BrowserRouter>

    </>

  )
}

export default App;
