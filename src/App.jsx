import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "./pages/SignIn";
import Home from "./pages/Home";
import About from "./pages/About";
import Profile from "./pages/Profile";
import Header from "./components/Header";

export default function App() {
  return (
    <BrowserRouter>
    <Header />  
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<div>Sign Up</div>} />
          <Route path="/about" element={<div>About</div>} />
          <Route path="/profile" element={<div>Profile</div>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

