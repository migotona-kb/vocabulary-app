import { Route, Routes } from "react-router-dom";
import WordList from "./pages/WordList";
import WordCard from "./pages/WordCard";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<WordList />} />
      <Route path="/words/:id" element={<WordCard />} />
    </Routes>
  );
}

export default App;
