import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./HomePage/HomePage";
import LoginPage from "./LoginPage/LoginPage";
import Header from "./Header/Header";
import SignInPage from "./SignInPage/SignInPage";
import DetailPage from "./DetailPage/DetailPage";
import BookingTicket from "./BookingTicket/BookingTicket";
import Account from "./Account/Account";
import Spinner from "./Spinner/Spinner";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Spinner />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signin" element={<SignInPage />} />
          <Route path="/detail/:idPhim" element={<DetailPage />} />
          <Route path="/booking/:idVe" element={<BookingTicket />} />
          <Route path="/account" element={<Account />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
