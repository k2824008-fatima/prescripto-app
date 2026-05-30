// //  import {NavLink , Link} from "react-router-dom";
// // import { useState } from "react";
// // export default function Header(){
// //     const [ active, setActive ] = useState("HOME");
// //   return (
// //          <div className="main">
// //             <div className="imgual">
// //             <img src="./assets/logo-1.svg" width="140"/>
// //             </div>
// //         <div className="header">
// //              <Link to="/" className={active === "HOME" ? "active" : ""}
// //               onClick={() => setActive("HOME")}>HOME </Link> 
// //             <Link to="/doctors" className={active === "ALL DOCTORS" ? "active" : ""}
// //             onClick={()=> setActive("ALL DOCTORS")}>ALL DOCTORS</Link>
          
// //             <Link to="/about" className={active === "ABOUT" ? "active" :  ""}
// //              onClick={()=> setActive("ABOUT")}>ABOUT</Link>
// //             <Link to="/contact" className={active === "CONTACT" ? "active" : ""}
// //             onClick={()=>  setActive("CONTACT")}>CONTACT</Link>
// //                <span>Admin Panel</span>
// //         </div>
// //         <div className="button">
// //             <img src="./assets/image-1.png" className="profile-icon" width="40px"/>
// //             <span className="arrow">^</span>
// //             <div className="drop">
// //                 <Link to="/">My Profile</Link>
// //                 <Link to="/">My Appointments</Link>
// //                 <Link to="/" className="source">Source Code</Link>
// //                 <Link to="/">Logout</Link>
// //             </div>
// //         </div>
// //       </div>
// //     //   </div>
// //     );
// // }


// // import { NavLink, Link, useNavigate } from "react-router-dom";
// // import { useState } from "react";

// // export default function Header({ user, setUser }) {
// //   const [active, setActive] = useState("HOME");
// //   const [showDrop, setShowDrop] = useState(false);
// //   const navigate = useNavigate();

// //   return (
// //     <div className="main">
// //       <div className="imgual">
// //         <img src="./assets/logo-1.svg" width="140" />
// //       </div>

// //       <div className="header">
// //         <Link to="/" className={active === "HOME" ? "active" : ""}
// //           onClick={() => setActive("HOME")}>HOME</Link>
// //         <Link to="/doctors" className={active === "ALL DOCTORS" ? "active" : ""}
// //           onClick={() => setActive("ALL DOCTORS")}>ALL DOCTORS</Link>
// //         <Link to="/about" className={active === "ABOUT" ? "active" : ""}
// //           onClick={() => setActive("ABOUT")}>ABOUT</Link>
// //         <Link to="/contact" className={active === "CONTACT" ? "active" : ""}
// //           onClick={() => setActive("CONTACT")}>CONTACT</Link>
// //         <span>Admin Panel</span>
// //       </div>

// //       <div className="button">
// //         {user ? (
// //           <div style={{position:"relative"}}>
// //             <div onClick={() => setShowDrop(!showDrop)}
// //               style={{display:"flex", alignItems:"center", gap:"8px", cursor:"pointer"}}>
// //               <img src="./assets/image-1.png" className="profile-icon" width="40px" />
// //               <span style={{fontSize:"14px", fontWeight:"500"}}>{user.name}</span>
// //               <span className="arrow">^</span>
// //             </div>
// //             {showDrop && (
// //               <div className="drop" style={{position:"absolute", right:0, top:"50px", background:"white", boxShadow:"0 4px 12px rgba(0,0,0,0.1)", borderRadius:"8px", padding:"10px", minWidth:"160px", zIndex:100}}>
// //                 <Link to="/" style={{display:"block", padding:"8px", color:"#333", textDecoration:"none"}}>My Profile</Link>
// //                 <Link to="/" style={{display:"block", padding:"8px", color:"#333", textDecoration:"none"}}>My Appointments</Link>
// //                 <div onClick={() => { setUser(null); setShowDrop(false); navigate('/') }}
// //                   style={{display:"block", padding:"8px", color:"red", cursor:"pointer"}}>
// //                   Logout
// //                 </div>
// //               </div>
// //             )}
// //           </div>
// //         ) : (
// //           <button onClick={() => navigate('/login')}
// //             style={{background:"#5f6FFF", color:"white", border:"none", padding:"10px 24px", borderRadius:"50px", cursor:"pointer", fontSize:"14px"}}>
// //             Create account
// //           </button>
// //         )}
// //       </div>
// //     </div>
// //   );
// // }



// import { Link, useNavigate } from "react-router-dom";
// import { useState } from "react";

// export default function Header({ user, setUser }) {
//   const [active, setActive] = useState("HOME");
//   const [showDrop, setShowDrop] = useState(false);
//   const navigate = useNavigate();

//   return (
//     <div className="main">
//       <div className="imgual">
//         <img src="./assets/logo-1.svg" width="140" />
//       </div>

//       <div className="header">
//         <Link to="/" className={active === "HOME" ? "active" : ""}
//           onClick={() => setActive("HOME")}>HOME</Link>
//         <Link to="/doctors" className={active === "ALL DOCTORS" ? "active" : ""}
//           onClick={() => setActive("ALL DOCTORS")}>ALL DOCTORS</Link>
//         <Link to="/about" className={active === "ABOUT" ? "active" : ""}
//           onClick={() => setActive("ABOUT")}>ABOUT</Link>
//         <Link to="/contact" className={active === "CONTACT" ? "active" : ""}
//           onClick={() => setActive("CONTACT")}>CONTACT</Link>
//         <Link to="/admin" className={active === "ADMIN" ? "active" : ""}
//         onClick={() => setActive("ADMIN")}>Admin Panel</Link>
//       </div>

//       <div className="button">
//         {user ? (
//           <div style={{position:"relative"}}>
//             <div onClick={() => setShowDrop(!showDrop)}
//               style={{display:"flex", alignItems:"center", gap:"8px", cursor:"pointer"}}>
//               <img src="./assets/image-1.png" className="profile-icon" width="40px" />
//               <span style={{fontSize:"14px", fontWeight:"500"}}>{user.name}</span>
//               <span>▼</span>
//             </div>
//             {showDrop && (
//               <div style={{position:"absolute", right:0, top:"50px", background:"white", boxShadow:"0 4px 12px rgba(0,0,0,0.1)", borderRadius:"8px", padding:"10px", minWidth:"180px", zIndex:100}}>
//                 <div onClick={() => { navigate('/my-profile'); setShowDrop(false) }}
//                   style={{padding:"10px", cursor:"pointer", color:"#333", borderBottom:"1px solid #eee"}}>
//                   My Profile
//                 </div>
//                 <div onClick={() => { navigate('/my-appointments'); setShowDrop(false) }}
//                   style={{padding:"10px", cursor:"pointer", color:"#333", borderBottom:"1px solid #eee"}}>
//                   My Appointments
//                 </div>
//                 <div onClick={() => { localStorage.removeItem('user')
//                  setUser(null); setShowDrop(false); navigate('/') }}
//                   style={{padding:"10px", cursor:"pointer", color:"red"}}>
//                   Logout
//                 </div>
//               </div>
//             )}
//           </div>
//         ) : (
//           <button onClick={() => navigate('/login')}
//             style={{background:"#5f6FFF", color:"white", border:"none", padding:"10px 24px", borderRadius:"50px", cursor:"pointer", fontSize:"14px"}}>
//             Create account
//           </button>
//         )}
//       </div>
//     </div>
//   );
// }

import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Header({ user, setUser }) {
  const [active, setActive] = useState("HOME");
  const [showDrop, setShowDrop] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <div style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "14px 40px",
      borderBottom: "1px solid #eee",
      backgroundColor: "#fff",
      position: "sticky",
      top: 0,
      zIndex: 999,
      boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
      flexWrap: "wrap",
      gap: "10px"
    }}>

      {/* LOGO + HAMBURGER */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", width: "auto" }}>
        <img src="./assets/logo-1.svg" width="130" alt="logo" />

        {/* Hamburger - only mobile */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            display: "none",
            background: "none",
            border: "none",
            fontSize: "1.6rem",
            cursor: "pointer",
            marginLeft: "20px"
          }}
          className="hamburger-btn"
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* NAV LINKS */}
      <div style={{
        display: "flex",
        alignItems: "center",
        gap: "24px",
        flexWrap: "wrap"
      }} className="nav-links">
        {[
          { label: "HOME", path: "/" },
          { label: "ALL DOCTORS", path: "/doctors" },
          { label: "ABOUT", path: "/about" },
          { label: "CONTACT", path: "/contact" },
        ].map(item => (
          <Link
            key={item.label}
            to={item.path}
            onClick={() => { setActive(item.label); setMenuOpen(false) }}
            style={{
              textDecoration: "none",
              fontSize: "14px",
              fontWeight: "500",
              color: active === item.label ? "#5f6FFF" : "#555",
              borderBottom: active === item.label ? "2px solid #5f6FFF" : "2px solid transparent",
              paddingBottom: "4px",
              transition: "all 0.2s"
            }}
          >
            {item.label}
          </Link>
        ))}

        {/* Admin Panel Button */}
        <Link
          to="/admin"
          onClick={() => { setActive("ADMIN"); setMenuOpen(false) }}
          style={{
            textDecoration: "none",
            fontSize: "13px",
            fontWeight: "600",
            color: active === "ADMIN" ? "#fff" : "#5f6FFF",
            backgroundColor: active === "ADMIN" ? "#5f6FFF" : "transparent",
            border: "1.5px solid #5f6FFF",
            borderRadius: "50px",
            padding: "6px 18px",
            transition: "all 0.3s"
          }}
        >
          Admin Panel
        </Link>
      </div>

      {/* USER / BUTTON */}
      <div className="header-btn">
        {user ? (
          <div style={{ position: "relative" }}>
            <div onClick={() => setShowDrop(!showDrop)}
              style={{ display: "flex", alignItems: "center", gap: "8px", cursor: "pointer" }}>
              <img src="./assets/image-1.png" width="38px"
                style={{ borderRadius: "50%", objectFit: "cover" }} />
              <span style={{ fontSize: "14px", fontWeight: "500", color: "#333" }}>{user.name}</span>
              <span style={{ fontSize: "12px", color: "#888" }}>▼</span>
            </div>
            {showDrop && (
              <div style={{
                position: "absolute", right: 0, top: "50px",
                background: "white", boxShadow: "0 4px 16px rgba(0,0,0,0.12)",
                borderRadius: "10px", padding: "8px", minWidth: "180px", zIndex: 100
              }}>
                <div onClick={() => { navigate('/my-profile'); setShowDrop(false) }}
                  style={{ padding: "10px 14px", cursor: "pointer", color: "#333", borderRadius: "6px", fontSize: "14px" }}
                  onMouseEnter={e => e.target.style.background = "#f5f5f5"}
                  onMouseLeave={e => e.target.style.background = "transparent"}>
                  👤 My Profile
                </div>
                <div onClick={() => { navigate('/my-appointments'); setShowDrop(false) }}
                  style={{ padding: "10px 14px", cursor: "pointer", color: "#333", borderRadius: "6px", fontSize: "14px" }}
                  onMouseEnter={e => e.target.style.background = "#f5f5f5"}
                  onMouseLeave={e => e.target.style.background = "transparent"}>
                  📅 My Appointments
                </div>
                <div onClick={() => { localStorage.removeItem('user'); setUser(null); setShowDrop(false); navigate('/') }}
                  style={{ padding: "10px 14px", cursor: "pointer", color: "red", borderRadius: "6px", fontSize: "14px" }}
                  onMouseEnter={e => e.target.style.background = "#fff0f0"}
                  onMouseLeave={e => e.target.style.background = "transparent"}>
                  🚪 Logout
                </div>
              </div>
            )}
          </div>
        ) : (
          <button onClick={() => navigate('/login')}
            style={{
              background: "#5f6FFF", color: "white", border: "none",
              padding: "10px 24px", borderRadius: "50px",
              cursor: "pointer", fontSize: "14px", fontWeight: "500"
            }}>
            Create account
          </button>
        )}
      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          gap: "12px",
          paddingTop: "16px",
          borderTop: "1px solid #eee"
        }}>
          {[
            { label: "HOME", path: "/" },
            { label: "ALL DOCTORS", path: "/doctors" },
            { label: "ABOUT", path: "/about" },
            { label: "CONTACT", path: "/contact" },
          ].map(item => (
            <Link
              key={item.label}
              to={item.path}
              onClick={() => { setActive(item.label); setMenuOpen(false) }}
              style={{
                textDecoration: "none",
                fontSize: "14px",
                fontWeight: "500",
                color: active === item.label ? "#5f6FFF" : "#555",
                padding: "8px 0"
              }}
            >
              {item.label}
            </Link>
          ))}
          <Link
            to="/admin"
            onClick={() => { setActive("ADMIN"); setMenuOpen(false) }}
            style={{
              textDecoration: "none",
              fontSize: "13px",
              fontWeight: "600",
              color: "#5f6FFF",
              border: "1.5px solid #5f6FFF",
              borderRadius: "50px",
              padding: "8px 18px",
              textAlign: "center"
            }}
          >
            Admin Panel
          </Link>

          {/* Mobile user buttons */}
          {user ? (
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <div onClick={() => { navigate('/my-profile'); setMenuOpen(false) }}
                style={{ padding: "10px", cursor: "pointer", color: "#333", fontSize: "14px" }}>
                👤 My Profile
              </div>
              <div onClick={() => { navigate('/my-appointments'); setMenuOpen(false) }}
                style={{ padding: "10px", cursor: "pointer", color: "#333", fontSize: "14px" }}>
                📅 My Appointments
              </div>
              <div onClick={() => { localStorage.removeItem('user'); setUser(null); setMenuOpen(false); navigate('/') }}
                style={{ padding: "10px", cursor: "pointer", color: "red", fontSize: "14px" }}>
                🚪 Logout
              </div>
            </div>
          ) : (
            <button onClick={() => { navigate('/login'); setMenuOpen(false) }}
              style={{
                background: "#5f6FFF", color: "white", border: "none",
                padding: "10px 24px", borderRadius: "50px",
                cursor: "pointer", fontSize: "14px"
              }}>
              Create account
            </button>
          )}
        </div>
      )}

    </div>
  );
}