import { Route, Routes } from "react-router-dom";
import { LoginPage, DayPage, CalendarPage } from "./pages";

function App() {
  return (
    <Routes>
      <Route path="/calendar" element={<CalendarPage />} />
      <Route path="/calendar/:date" element={<DayPage />} />
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
}

export default App;
