import { Route, Routes } from "react-router-dom";
import { LoginPage, DayPage, CalendarPage, NotePage } from "./pages";
import { NotesPage } from "./pages/NotesPage/NotesPage";
function App() {
  return (
    <Routes>
      <Route path="/calendar" element={<CalendarPage />} />
      <Route path="/calendar/:date" element={<DayPage />} />
      <Route path="/notes" element={<NotesPage />} />
      <Route path="/note" element={<NotePage />} />

      <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
}

export default App;
