import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./HomePage/HomePage";
import LoginPage from "./LoginPage/LoginPage";
import Header from "./Header/Header";
import SignInPage from "./SignInPage/SignInPage";
import DetailPage from "./DetailPage/DetailPage";
import BookingTicket from "./BookingTicket/BookingTicket";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signin" element={<SignInPage />} />
          <Route path="/detail/:idPhim" element={<DetailPage />} />
          <Route path="/booking/:id" element={<BookingTicket />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
