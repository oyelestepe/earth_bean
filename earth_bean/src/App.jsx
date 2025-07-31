import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Hompage from "./Hompage";
import Cart from "./components/Cart";
import Login from "./pages/Login";
import Register from "./pages/Register";
function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Hompage />} />
          <Route path="/cart" element={<Cart/>} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
