
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import NavBar from './components/NavBar.tsx';
import VideoBackground from './components/VideoBackground.tsx';
import HomePage from './pages/HomePage.tsx';
import Projects from './pages/Projects.tsx';

function App() {

  return (
    <>
      <BrowserRouter>

        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='projects' element={<Projects/>}/>
        </Routes>
      </BrowserRouter>
      
    </>

  )
}

export default App;
