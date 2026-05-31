


import { useNavigate, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'

const doctors = [
  { id: 1, name: "Dr. Richard James", speciality: "General physician", img: "/assets/doc1.png", fee: 50, degree: "MBBS", experience: "4 Years", about: "Dr. Richard James has a strong commitment to delivering comprehensive medical care.", address1: "24 main street", address2: "10 clause road" },
  { id: 2, name: "Dr. Emily Larson", speciality: "Gynecologist", img: "/assets/doc2.png", fee: 60, degree: "MBBS", experience: "3 Years", about: "Dr. Emily Larson is dedicated to women's health and wellness.", address1: "37th Cross, Richmond", address2: "Circle, Ring Road, London" },
  { id: 3, name: "Dr. Sarah Patel", speciality: "Dermatologist", img: "/assets/doc3.png", fee: 55, degree: "MBBS", experience: "5 Years", about: "Dr. Sarah Patel specializes in skin care and treatment.", address1: "27th Cross, Richmond", address2: "Circle, Ring Road, London" },
  { id: 4, name: "Dr. Christopher Lee", speciality: "Pediatricians", img: "/assets/doc4.png", fee: 45, degree: "MBBS", experience: "2 Years", about: "Dr. Christopher Lee is passionate about child healthcare.", address1: "17th Cross, Richmond", address2: "Circle, Ring Road, London" },
  { id: 5, name: "Dr. Jennifer Garcia", speciality: "Neurologist", img: "/assets/doc5.png", fee: 70, degree: "MBBS", experience: "6 Years", about: "Dr. Jennifer Garcia focuses on neurological disorders.", address1: "47th Cross, Richmond", address2: "Circle, Ring Road, London" },
  { id: 6, name: "Dr. Andrew Williams", speciality: "Gastroenterologist", img: "/assets/doc6.png", fee: 65, degree: "MBBS", experience: "4 Years", about: "Dr. Andrew Williams specializes in digestive health.", address1: "57th Cross, Richmond", address2: "Circle, Ring Road, London" },
  { id: 7, name: "Dr. Christopher Davis", speciality: "General physician", img: "/assets/doc7.png", fee: 50, degree: "MBBS", experience: "3 Years", about: "Dr. Christopher Davis provides comprehensive medical care.", address1: "24 main street", address2: "10 clause road" },
  { id: 8, name: "Dr. Timothy White", speciality: "Gynecologist", img: "/assets/doc8.png", fee: 60, degree: "MBBS", experience: "5 Years", about: "Dr. Timothy White is committed to patient wellness.", address1: "37th Cross, Richmond", address2: "Circle, Ring Road, London" },
  { id: 9, name: "Dr. Ava Mitchell", speciality: "Dermatologist", img: "/assets/doc9 (1).png", fee: 55, degree: "MBBS", experience: "4 Years", about: "Dr. Ava Mitchell specializes in advanced skin care and dermatology.", address1: "14th Cross, Richmond", address2: "Circle, Ring Road, London" },
  { id: 10, name: "Dr. Christopher Lee", speciality: "Pediatricians", img: "/assets/doc10(1).png", fee: 45, degree: "MBBS", experience: "3 Years", about: "Dr. Christopher Lee is passionate about child healthcare and development.", address1: "17th Cross, Richmond", address2: "Circle, Ring Road, London" },
  { id: 11, name: "Dr. Zoe Kelly", speciality: "Neurologist", img: "/assets/doc11.png", fee: 70, degree: "MBBS", experience: "5 Years", about: "Dr. Zoe Kelly focuses on brain and nervous system disorders.", address1: "47th Cross, Richmond", address2: "Circle, Ring Road, London" },
  { id: 12, name: "Dr. Patrick Harris", speciality: "Gastroenterologist", img: "/assets/doc12.png", fee: 65, degree: "MBBS", experience: "6 Years", about: "Dr. Patrick Harris specializes in digestive and gut health.", address1: "57th Cross, Richmond", address2: "Circle, Ring Road, London" },
  { id: 13, name: "Dr. Chloe Evans", speciality: "General physician", img: "/assets/doc13.png", fee: 50, degree: "MBBS", experience: "2 Years", about: "Dr. Chloe Evans provides compassionate and comprehensive medical care.", address1: "24 main street", address2: "10 clause road" },
  { id: 14, name: "Dr. Ryan Martinez", speciality: "Gynecologist", img: "/assets/doc14.png", fee: 60, degree: "MBBS", experience: "4 Years", about: "Dr. Ryan Martinez is dedicated to women's reproductive health.", address1: "37th Cross, Richmond", address2: "Circle, Ring Road, London" },
  { id: 15, name: "Dr. Amelia Hill", speciality: "Dermatologist", img: "/assets/doc15.png", fee: 55, degree: "MBBS", experience: "7 Years", about: "Dr. Amelia Hill is an expert in cosmetic and medical dermatology.", address1: "27th Cross, Richmond", address2: "Circle, Ring Road, London" },
]

const slotDays = ["WED","THU","FRI","SAT","SUN","MON","TUE"]
const slotDates = ["28","29","30","31","1","2","3"]
const slotTimes = ["9:00am","9:30am","10:00am","10:30am","11:00am","11:30am","1:00pm","1:30pm","2:00pm","2:30pm"]

export default function Appointment({ appointments, setAppointments, user }) {
  const navigate = useNavigate()
  const { docId } = useParams()
  const doctor = doctors.find(d => d.id === parseInt(docId))
  const [selectedDay, setSelectedDay] = useState(null)
  const [selectedTime, setSelectedTime] = useState(null)
  const [booked, setBooked] = useState(false)
  const [showLoginToast, setShowLoginToast] = useState(false)
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 600)

  const isLoggedIn = !!user

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 600)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  if (!doctor) return <div><p>Doctor not found</p></div>

  const handleBook = () => {
    if (!isLoggedIn) {
      setShowLoginToast(true)
      setTimeout(() => {
        setShowLoginToast(false)
        navigate('/login')
      }, 2000)
      return
    }

    if (selectedDay !== null && selectedDay !== 0 && selectedTime !== null) {
      const newAppointment = {
        id: Date.now(),
        patientName: user?.name || 'Patient',
        name: doctor.name,
        speciality: doctor.speciality,
        img: doctor.img,
        address1: doctor.address1,
        address2: doctor.address2,
        date: `${slotDates[selectedDay]} Jun 2026`,
        time: slotTimes[selectedTime],
        cancelled: false
      }
      setAppointments(prev => {
        const updated = [...prev, newAppointment]
        localStorage.setItem('appointments', JSON.stringify(updated))
        return updated
      })
      setBooked(true)
      setTimeout(() => {
        setBooked(false)
        navigate('/my-appointments')
      }, 2000)
    } else {
      alert("Please select a day and time!")
    }
  }

  return (
    <div style={{ maxWidth: "960px", margin: "0 auto", padding: isMobile ? "20px 12px" : "40px 20px", fontFamily: "sans-serif" }}>

      {/* Login Toast */}
      {showLoginToast && (
        <div style={{
          position: "fixed", top: "20px", left: "50%",
          transform: "translateX(-50%)",
          background: "white", border: "2px solid orange",
          borderRadius: "10px", padding: "14px 24px",
          display: "flex", alignItems: "center", gap: "10px",
          boxShadow: "0 4px 16px rgba(0,0,0,0.15)", zIndex: 9999,
          whiteSpace: "nowrap"
        }}>
          <span style={{ fontSize: "20px" }}>⚠️</span>
          <span style={{ fontWeight: "600", color: "#333" }}>Login to book appointment</span>
        </div>
      )}

      {/* Booked Toast */}
      {booked && (
        <div style={{
          position: "fixed", top: "20px", right: "20px",
          background: "white", border: "1px solid #ddd",
          borderRadius: "8px", padding: "14px 20px",
          display: "flex", alignItems: "center", gap: "10px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)", zIndex: 999
        }}>
          <span style={{ color: "green", fontSize: "20px" }}>✅</span>
          <span style={{ fontWeight: "500" }}>Appointment Booked</span>
        </div>
      )}

      {/* Doctor Info */}
      <div style={{
        display: "flex",
        flexDirection: isMobile ? "column" : "row",
        gap: "24px", marginBottom: "50px", alignItems: "flex-start"
      }}>
        <img src={doctor.img} alt={doctor.name}
          style={{
            width: isMobile ? "100%" : "220px",
            height: isMobile ? "260px" : "260px",
            objectFit: "cover", borderRadius: "12px",
            background: "#5f6FFF", flexShrink: 0
          }} />

        <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "20px", width: "100%" }}>
          <div style={{ border: "1px solid #ddd", borderRadius: "12px", padding: isMobile ? "16px" : "24px" }}>
            <h2 style={{ margin: "0 0 8px", fontSize: isMobile ? "20px" : "24px" }}>
              {doctor.name} <span style={{ color: "#5f6FFF" }}>✔</span>
            </h2>
            <p style={{ color: "#666", marginBottom: "15px", fontSize: "15px" }}>
              {doctor.degree} - {doctor.speciality} &nbsp;
              <span style={{ border: "1px solid #ccc", padding: "3px 12px", borderRadius: "20px", fontSize: "13px" }}>{doctor.experience}</span>
            </p>
            <hr style={{ border: "none", borderTop: "1px solid #eee", margin: "12px 0" }} />
            <p style={{ fontWeight: "bold", marginBottom: "6px" }}>About ℹ</p>
            <p style={{ color: "#666", fontSize: "14px", lineHeight: "1.7", marginBottom: "15px" }}>{doctor.about}</p>
            <p style={{ fontSize: "15px" }}><b>Appointment fee:</b> ${doctor.fee}</p>
          </div>

          {/* Booking Slots */}
          <div style={{ padding: "4px 0" }}>
            <h3 style={{ marginBottom: "16px", fontSize: "17px" }}>Booking slots</h3>

            <div style={{ display: "flex", gap: "10px", marginBottom: "16px", flexWrap: "wrap" }}>
              {slotDays.map((day, i) => (
                <div key={i}
                  onClick={() => { setSelectedDay(i); setSelectedTime(null) }}
                  style={{
                    textAlign: "center", borderRadius: "50px",
                    padding: isMobile ? "8px 10px" : "10px 14px",
                    cursor: "pointer",
                    minWidth: isMobile ? "48px" : "58px",
                    background: selectedDay === i ? "#5f6FFF" : "#f5f5f5",
                    color: selectedDay === i ? "white" : i === 0 ? "#ccc" : "#333",
                  }}>
                  <p style={{ margin: 0, fontSize: "11px" }}>{i === 0 ? "" : day}</p>
                  <p style={{ margin: 0, fontWeight: "bold", fontSize: "14px" }}>{i === 0 ? "" : slotDates[i]}</p>
                </div>
              ))}
            </div>

            {selectedDay !== null && selectedDay !== 0 && (
              <div style={{
                display: "flex", gap: "8px",
                flexWrap: isMobile ? "wrap" : "nowrap",
                overflowX: isMobile ? "visible" : "auto",
                marginBottom: "20px"
              }}>
                {slotTimes.map((time, i) => (
                  <div key={i} onClick={() => setSelectedTime(i)}
                    style={{
                      borderRadius: "50px", padding: "8px 16px", cursor: "pointer",
                      fontSize: "13px", whiteSpace: "nowrap", flexShrink: 0,
                      background: selectedTime === i ? "#5f6FFF" : "#f5f5f5",
                      color: selectedTime === i ? "white" : "#555"
                    }}>
                    {time}
                  </div>
                ))}
              </div>
            )}

            <button onClick={handleBook}
              style={{
                background: "#5f6FFF", color: "white", border: "none",
                padding: isMobile ? "12px 30px" : "12px 40px",
                borderRadius: "50px", fontSize: "15px", cursor: "pointer",
                marginTop: "10px", width: isMobile ? "100%" : "auto"
              }}>
              Book an appointment
            </button>
          </div>
        </div>
      </div>

      {/* Related Doctors */}
      <div style={{ paddingTop: "30px", borderTop: "1px solid #eee" }}>
        <h2 style={{ fontSize: "22px", marginBottom: "6px", textAlign: "center" }}>Related Doctors</h2>
        <p style={{ color: "#888", fontSize: "14px", marginBottom: "30px", textAlign: "center" }}>
          Simply browse through our extensive list of trusted doctors.
        </p>
        <div style={{
          display: "grid",
          gridTemplateColumns: isMobile ? "repeat(2, 1fr)" : "repeat(auto-fill, minmax(180px, 1fr))",
          gap: "16px"
        }}>
          {doctors
            .filter(d => d.speciality === doctor.speciality && d.id !== doctor.id)
            .slice(0, 5)
            .map(d => (
              <div key={d.id}
                onClick={() => navigate(`/appointment/${d.id}`)}
                style={{ border: "1px solid #ddd", borderRadius: "12px", cursor: "pointer", overflow: "hidden" }}>
                <img src={d.img} alt={d.name}
                  style={{ width: "100%", height: "180px", objectFit: "cover", background: "#eef" }} />
                <div style={{ padding: "12px" }}>
                  <p style={{ margin: "0 0 4px", color: "green", fontSize: "13px" }}>● Available</p>
                  <p style={{ margin: "0 0 4px", fontWeight: "bold", fontSize: "14px" }}>{d.name}</p>
                  <p style={{ margin: 0, color: "#888", fontSize: "13px" }}>{d.speciality}</p>
                </div>
              </div>
            ))}
        </div>
      </div>

      {/* Footer */}
      <div style={{
        display: "flex", flexDirection: isMobile ? "column" : "row",
        gap: "30px", marginTop: "60px", paddingTop: "30px",
        borderTop: "1px solid #eee"
      }}>
        <div style={{ flex: 2 }}>
          <img src="/assets/logo-1.svg" style={{ marginBottom: "12px" }}  />
          <p style={{ color: "#666", fontSize: "14px", lineHeight: "1.8" }}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
          </p>
        </div>
        <div style={{ flex: 1 }}>
          <h2 style={{ fontSize: "16px", marginBottom: "14px" }}>COMPANY</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            {["Home", "About us", "Delivery", "Privacy policy"].map(link => (
              <a key={link} href="#" style={{ color: "#555", textDecoration: "none", fontSize: "14px" }}>{link}</a>
            ))}
          </div>
        </div>
        <div style={{ flex: 1 }}>
          <h2 style={{ fontSize: "16px", marginBottom: "14px" }}>GET IN TOUCH</h2>
          <p style={{ color: "#555", fontSize: "14px", marginBottom: "8px" }}>+0-000-000-000</p>
          <p style={{ color: "#555", fontSize: "14px" }}>greatstackdev@gmail.com</p>
        </div>
      </div>

      <div style={{ textAlign: "center", marginTop: "30px", color: "#888", fontSize: "13px", borderTop: "1px solid #eee", paddingTop: "20px" }}>
        Copyright 2024 @ Greatstack.dev - All Right Reserved.
      </div>
    </div>
  )
}

