import Header from "../components/Header";
import Navigation from "../components/Navigation";
import DiaryPages from "../pages/DiaryPage";
import FoodPages from "../pages/FoodPage";
import GuestbookPage from "../pages/GuestbookPage";
import IntroPage from "../pages/IntroPage";
import PlacesPage from "../pages/PlacesPage";
import "./App.css";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Header />
      <Navigation />

      <Routes>
        <Route path="/" element={<IntroPage />} />
        <Route path="/Places" element={<PlacesPage />} />
        <Route path="/Food" element={<FoodPages />} />
        <Route path="/Diary" element={<DiaryPages />} />
        <Route path="/GuestBookPage" element={<GuestbookPage />} />
      </Routes>
    </div>
  );
}

export default App;
