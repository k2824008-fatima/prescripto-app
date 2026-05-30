

import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./Doctors.css";

export default function Doctors() {
  const [selected, setSelected] = useState("");
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const spec = params.get("speciality");
    if (spec) setSelected(spec.trim());
  }, [location.search]);

  const specialties = [
    "General physician",
    "Gynecologist",
    "Dermatologist",
    "Pediatricians",
    "Neurologist",
    "Gastroenterologist"
  ];

  const doctors = [
    { id: 1, name: "Dr. Richard James", speciality: "General physician", available: true, img: "/assets/doc1.png" },
    { id: 2, name: "Dr. Emily Larson", speciality: "Gynecologist", available: true, img: "/assets/doc2.png" },
    { id: 3, name: "Dr. Sarah Patel", speciality: "Dermatologist", available: true, img: "/assets/doc3.png" },
    { id: 4, name: "Dr. Christopher Lee", speciality: "Pediatricians", available: true, img: "/assets/doc4.png" },
    { id: 5, name: "Dr. Jennifer Garcia", speciality: "Neurologist", available: true, img: "/assets/doc5.png" },
    { id: 6, name: "Dr. Andrew Williams", speciality: "Gastroenterologist", available: true, img: "/assets/doc6.png" },
    { id: 7, name: "Dr. Christopher Davis", speciality: "General physician", available: true, img: "/assets/doc7.png" },
    { id: 8, name: "Dr. Timothy White", speciality: "Gynecologist", available: true, img: "/assets/doc8.png" },
    { id: 9, name: "Dr. Ava Mitchell", speciality: "Dermatologist", available: true, img: "/assets/doc9.png", fee: 55, degree: "MBBS", experience: "4 Years", about: "Dr. Ava Mitchell specializes in advanced skin care and dermatology.", address1: "14th Cross, Richmond", address2: "Circle, Ring Road, London" },
    { id: 10, name: "Dr. Christopher Lee", speciality: "Pediatricians",available: true, img: "/assets/doc10.png", fee: 45, degree: "MBBS", experience: "3 Years", about: "Dr. Christopher Lee is passionate about child healthcare and development.", address1: "17th Cross, Richmond", address2: "Circle, Ring Road, London" },
    { id: 11, name: "Dr. Zoe Kelly", speciality: "Neurologist",available: true, img: "/assets/doc11.png", fee: 70, degree: "MBBS", experience: "5 Years", about: "Dr. Zoe Kelly focuses on brain and nervous system disorders.", address1: "47th Cross, Richmond", address2: "Circle, Ring Road, London" },
    { id: 12, name: "Dr. Patrick Harris", speciality: "Gastroenterologist",available: true, img: "/assets/doc12.png", fee: 65, degree: "MBBS", experience: "6 Years", about: "Dr. Patrick Harris specializes in digestive and gut health.", address1: "57th Cross, Richmond", address2: "Circle, Ring Road, London" },
    { id: 13, name: "Dr. Chloe Evans", speciality: "General physician",available: true, img: "/assets/doc13.png", fee: 50, degree: "MBBS", experience: "2 Years", about: "Dr. Chloe Evans provides compassionate and comprehensive medical care.", address1: "24 main street", address2: "10 clause road" },
    { id: 14, name: "Dr. Ryan Martinez", speciality: "Gynecologist", available: true, img: "/assets/doc14.png", fee: 60, degree: "MBBS", experience: "4 Years", about: "Dr. Ryan Martinez is dedicated to women's reproductive health.", address1: "37th Cross, Richmond", address2: "Circle, Ring Road, London" },
    { id: 15, name: "Dr. Amelia Hill", speciality: "Dermatologist", available: true, img: "/assets/doc15.png", fee: 55, degree: "MBBS", experience: "7 Years", about: "Dr. Amelia Hill is an expert in cosmetic and medical dermatology.", address1: "27th Cross, Richmond", address2: "Circle, Ring Road, London" },
  ];

  const filteredDoctors = selected
    ? doctors.filter((doc) => doc.speciality === selected)
    : doctors;

  return (
    <div className="doctors-page">
      <p className="doctors-title">Browse through the doctors specialist.</p>
      <div className="doctors-container">
        <div className="filter-list">
          {specialties.map((spec) => (
            <p
              key={spec}
              onClick={() => setSelected(spec === selected ? "" : spec)}
              className={`filter-item ${selected === spec ? "active" : ""}`}
            >
              {spec}
            </p>
          ))}
        </div>
        <div className="doctors-grid">
          {filteredDoctors.map((doc) => (
            <div key={doc.id} className="doctor-card" onClick={() => navigate(`/appointment/${doc.id}`)}>
              <img src={doc.img} alt={doc.name} />
              <div className="doctor-info">
                <p className={`status ${doc.available ? "available" : "not-available"}`}>
                  ● {doc.available ? "Available" : "Not Available"}
                </p>
                <p className="doctor-name">{doc.name}</p>
                <p className="doctor-specialty">{doc.speciality}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* FOOTER */}
      <div className="lorem">
        <div>
          <img src="./assets/logo-1.svg" alt="logo" />
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
        </div>
        <div>
          <h2>COMPANY</h2>
          <div className="about">
            <a href="#">Home</a>
            <a href="#">About us</a>
            <a href="#">Delivery</a>
            <a href="#">Privacy policy</a>
          </div>
        </div>
        <div className="get">
          <h2>GET IN TOUCH</h2>
          <div className="num">+0-000-000-000</div>
          <div>greatstackdev@gmail.com</div>
        </div>
      </div>
      <div className="copy">
        <p>Copyright 2024 @ Greatstack.dev - All Right Reserved.</p>
      </div>
    </div>
  );
}