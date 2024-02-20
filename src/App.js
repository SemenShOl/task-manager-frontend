import { Route, Routes } from "react-router-dom";
import { LoginPage, DayPage, CalendarPage, TextPage } from "./pages";

function App() {
  return (
    <Routes>
      <Route path="/calendar" element={<CalendarPage />} />
      <Route path="/calendar/:date" element={<DayPage />} />
      <Route path="/note" element={<TextPage />} />
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
}

export default App;
