import { useNavigate } from "react-router-dom";
export default function Home(){
    const navigate = useNavigate()
    return(
        <div>
    
  <div className="home">
    <div className="text">
    <div className="appoin">
    <h2>Book Appointment
With Trusted Doctors</h2>
  </div>
  <div className="simp">
    <img src="./assets/group_1.png"/>
    <p>Simply browse through our extensive list of trusted doctors,                                                                                                                               
    schedule your appointment hassle-free.</p>
  </div>
  <div className="book">
    <button
    onClick={() => {
        document.getElementById("gynecologist")
        .scrollIntoView({ behavior:
            "smooth"});
    }}
    >
        Book appointment
        </button>
    <img src="./assets/download.png" width="28px"/>

    </div>
    </div>
     <div>
    <div className="image">
        <img src="./assets/header_img.png" width="500px"/>
    </div>
    </div>
    </div>
    <div  className="speciality">
        <h3>Find by Speciality</h3>
        <p>Simply browse through our extensive list of trusted doctors, schedule your appointment hassle-free.</p>
    </div>
    
    <div id="gynecologist" className="gyne">
        <div className="gyne-item" onClick={() => navigate( '/doctors?speciality= General physician')}>
        <img src="./assets/download-1.svg"/>
        <p>General physician</p>
        </div>
        <div className="gyne-item"  onClick={() => navigate( '/doctors?speciality= Gynecologist')}>
        <img src="./assets/Gynecologist-1.svg"/>
        <p>Gynecologist</p>
        </div>
        <div className="gyne-item" onClick={() => navigate( '/doctors?speciality= Dermatologist')}>
        <img src="./assets/download-2.svg"/>
        <p>Dermatologist</p>
        </div>
        <div className="gyne-item" onClick={() => navigate( '/doctors?speciality= Pediatricians')}>
        <img src="./assets/download-4.svg"/>
        <p>Pediatricians</p>
        </div>
        <div className="gyne-item" onClick={() => navigate(  '/doctors?speciality= Neurologist')}>
        <img src="./assets/download-5.svg"/>
        <p>Neurologist</p>
        </div>
        <div className="gyne-item" onClick={() => navigate( '/doctors?speciality= Gastroenterologist')}>
        <img src="./assets/download-6.svg"/>
        <p>Gastroenterologist</p>
        </div>
        </div>
        <div >
        <div className="find">
            <h4>Top Doctors to Book</h4>
            <p>Simply browse through our extensive list of trusted doctors.</p>
        </div>
        <div className="doc">
            <div className="doctor-card">
            <img src="./assets/doc1.png"/>
            <div className="info">
                <div className="status">
                <span className="dot">.</span>
                <button>Available</button>
                </div>
                
<h3>Dr. Jennifer Garcia</h3>
<p>Neurologist</p>
</div>
</div>
<div className="doctor-card">
            <img src="./assets/doc2.png"/>
            <div className="info">
                <div className="status">
                    <span className="dot">.</span>
                    <button>Available</button>
                    </div>
                    <h3>Dr. Emily Larson</h3>
                    <p>Gynecologist</p>
                    </div>
                    </div>
          <div className="doctor-card">  
            <img src="./assets/doc3.png"/>
            <div className="info">
                <div className="status">
                <span className="dot">.</span>
                <button>Available</button>
                </div>
                <h3>Dr. Sarah Patel</h3>
               <p>Dermatologist</p>
               </div>
               </div>
               <div className="doctor-card">
            <img src="./assets/doc4.png"/>
            <div className="info">
                <div className="status">
                <span className="dot">.</span>
                <button>Available</button>
                </div>
                <h3>Dr. Christopher Lee</h3>
               <p>Pediatricians</p>
               </div>
               </div>
            <div className="doctor-card">
            <img src="./assets/doc5.png"/>
            <div className="info">
                <div className="status">
                <span className="dot">.</span>
                <button>Available</button>
                </div>
                <h3>Dr. Jennifer Garcia</h3>
               <p>Neurologist</p>
               </div>
               </div>
            <div className="doctor-card">
            <img src="./assets/doc6.png"/>
            <div className="info">
                <div className="status" >
                <span className="dot">.</span>
                <button>Available</button>
                </div>
                <h3>Dr. Andrew Williams</h3>
               <p>Gastroenterologist</p>
               </div>
               </div>
            <div className="doctor-card">
            <img src="./assets/doc7.png"/>
            <div className="info">
                <div className="status">
                <span className="dot">.</span>
                <button>Available</button>
                </div>
                <h3>Dr. Christopher Davis</h3>
               <p>General physician</p>
               </div>
               </div>
            <div className="doctor-card">
            <img src="./assets/doc8.png"/>
            <div className="info">
                <div className="status">
                <span className="dot">.</span>
                <button>Available</button>
                </div>
                <h3>Dr. Timothy White</h3>
               <p>Gynecologist</p>
               </div>
               </div>
            <div className="doctor-card">
            <img src="./assets/doc9.png"/>
            <div className="info">
                <div className="status">
                <span className="dot">.</span>
                <button>Available</button>
                </div>
                <h3>Dr. Ava Mitchell</h3>
               <p>Dermatologist</p>
               </div>
               </div>
            <div className="doctor-card">
            <img src="./assets/doc10.png"/>
            <div className="info">
                <div className="status">
                <span className="dot">.</span>
                <button>Available</button>
                </div>
                <h3>Dr. Jeffrey King</h3>
               <p>Pediatricians</p>
               </div>
               </div>

        </div>
         <div className="more">
                <button onClick={() => navigate('/doctors')}>More</button>
               </div>
            
        </div>
        <div className="trust">
            <div className="create">
                <h4>Book Appointment With 100+ Trusted Doctors</h4>
<button onClick={() => navigate('/login')}>Create account</button>
            </div>
            <div className="snap">
                <img src="./assets/appointment_img.png" width="400px"/>
            </div>
        </div>
        <div className="lorem">
            <div>
                <img src="./assets/logo-1.svg"/>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            </div>
            <div >
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