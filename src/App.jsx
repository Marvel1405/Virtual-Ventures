import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Footer from "./Components/Footer";
import Services from "./Components/Services";
import Register from "./Components/Register";
import Login from "./Components/Login";
import Blog from "./Components/Blog";

function App() {
  return (
    <>
      <div className="w-full h-[auto] bg-[#f2f2f2]">
        <div className="w-full h-[auto] bg-[#f2f2f2] flex flex-col items-center justify-between ">
          <BrowserRouter>
            <Header />
            <Routes>
              <Route path="/home" element={<Hero />} />
              <Route path="/about" element={<Blog />} />
              <Route path="/services" element={<Services />} />
            </Routes>
            <Routes>
              <Route path="/register" element={<Register />} />
            </Routes>
            <Routes>
              <Route path="/login" element={<Login />} />
            </Routes>
            <Footer />
          </BrowserRouter>
        </div>
      </div>
    </>
  );
}

export default App;
