import { Route, Routes } from "react-router-dom";
import {
  LoginPage,
  DayPage,
  CalendarPage,
  RegistrationPage,
  NotesPage,
  ProfilePage,
} from "./pages";

function App() {
  return (
    <Routes>
      <Route path="/" element={<CalendarPage />} />
      {/* <Route path="/:date" element={<DayPage />} /> */}
      <Route path="/notes" element={<NotesPage />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/register" element={<RegistrationPage />} />
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
}

export default App;
