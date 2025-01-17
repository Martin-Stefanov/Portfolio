import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import 'leaflet/dist/leaflet.css';
import NavBar from "./components/NavBar.tsx";
import HomePage from "./pages/HomePage.tsx";
import Projects from "./pages/Projects.tsx";
import Skills from "./pages/Skills.tsx";
import Hobbies from "./pages/Hobbies.tsx";
import Vinyl from "./pages/Vinyl.tsx";
import VinylAlbum from "./pages/VinylAlbum.tsx";
import Camping from "./pages/Camping.tsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="flex flex-col h-screen">
          <NavBar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="projects" element={<Projects />} />
            <Route path="skills" element={<Skills />} />
            <Route path="hobbies" element={<Hobbies />} />
            <Route path="/hobbies/vinyl" element={<Vinyl />} />
            <Route path="/hobbies/vinyl/:album" element={<VinylAlbum />} />
            <Route path="/hobbies/camping" element={<Camping/>} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
