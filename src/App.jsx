import Header from "../components/Header";
import Navigation from "../components/Navigation";
import DiaryPages from "../pages/DiaryPage";
import FoodPages from "../pages/FoodPage";
import GuestbookPage from "../pages/GuestbookPage";
import IntroPage from "../pages/IntroPage";
import MusicPickPage from "../pages/MusicPickPage";
import GusPickPage from "../pages/GusPickPage";
import "./App.css";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Header />
      <Navigation />

      <Routes>
        <Route path="/" element={<IntroPage />} />
        <Route path="/GusPick" element={<GusPickPage />} />
        <Route path="/Diary" element={<DiaryPages />} />
        <Route path="/GuestBookPage" element={<GuestbookPage />} />
        <Route path="/MusicPickPage" element={<MusicPickPage />} />
      </Routes>
    </div>
  );
}

export default App;
