
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import Header from "./components/Header";
import About from "./assets/pages/About";
import Doctors from "./assets/pages/Doctors";
import Home from "./assets/pages/Home";
import Appointment from "./assets/pages/Appointment";
import Login from "./assets/pages/Login";
import MyAppointments from "./assets/pages/MyAppointments";
import MyProfile from "./assets/pages/MyProfile";
import Contact from "./assets/pages/Contact";
import AdminPanel from "./assets/pages/AdminPanel";
import "./App.css";
function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

function App() {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem('user'))  || null
  )
  const [appointments, setAppointments] = useState([])                   
    

  return (
    <>
      <Header user={user} setUser={setUser} />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/doctors" element={<Doctors />} />
        <Route path="/appointment/:docId" element={
          <Appointment appointments={appointments} setAppointments={setAppointments} user={user} />
        } />
        <Route path="/login" element={<Login setUser={setUser} />} />
        <Route path="/my-appointments" element={
          <MyAppointments appointments={appointments} setAppointments={setAppointments} />
        } />
        <Route path="/my-profile" element={<MyProfile user={user} />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/admin" element={<AdminPanel />} />
      </Routes>
    </>
  );
}

export default App;