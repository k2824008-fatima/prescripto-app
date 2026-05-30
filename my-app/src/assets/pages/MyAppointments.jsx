// import { useState } from 'react'

// export default function MyAppointments({ appointments, setAppointments }) {
//   const [showPayment, setShowPayment] = useState(null)

//   const cancelAppointment = (id) => {
//     setAppointments(prev => prev.map(a =>
//       a.id === id ? { ...a, cancelled: true } : a
//     ))
//   }

//   return (
//     <div style={{maxWidth:"900px", margin:"0 auto", padding:"40px 20px", fontFamily:"sans-serif"}}>
//       <h2 style={{marginBottom:"30px"}}>My appointments</h2>

//       {appointments.length === 0 && (
//         <p style={{color:"#888"}}>No appointments booked yet.</p>
//       )}

//       {appointments.map((apt) => (
//         <div key={apt.id} style={{display:"flex", gap:"20px", alignItems:"center", borderBottom:"1px solid #eee", padding:"20px 0"}}>
//           <img src={apt.img} alt={apt.name}
//             style={{width:"80px", height:"90px", objectFit:"cover", borderRadius:"8px", background:"#eef"}} />
//           <div style={{flex:1}}>
//             <p style={{fontWeight:"bold", fontSize:"16px", margin:"0 0 4px"}}>{apt.name}</p>
//             <p style={{color:"#666", margin:"0 0 8px", fontSize:"14px"}}>{apt.speciality}</p>
//             <p style={{margin:"0 0 4px", fontSize:"13px"}}><b>Address:</b></p>
//             <p style={{margin:"0 0 4px", fontSize:"13px", color:"#555"}}>{apt.address1}</p>
//             <p style={{margin:"0 0 4px", fontSize:"13px", color:"#555"}}>{apt.address2}</p>
//             <p style={{margin:"0", fontSize:"13px"}}><b>Date & Time:</b> {apt.date} | {apt.time}</p>
//           </div>
//           <div style={{display:"flex", flexDirection:"column", gap:"10px", minWidth:"160px"}}>
//             {apt.cancelled ? (
//               <button style={{padding:"8px 16px", border:"1px solid red", color:"red", background:"white", borderRadius:"6px"}}>
//                 Appointment cancelled
//               </button>
//             ) : (
//               <>
//                 {showPayment === apt.id ? (
//                   <div style={{display:"flex", flexDirection:"column", gap:"8px"}}>
//                     <button onClick={() => setShowPayment(null)}
//                       style={{padding:"8px 16px", border:"1px solid #5f6FFF", color:"#5f6FFF", background:"white", borderRadius:"6px", cursor:"pointer", fontWeight:"bold"}}>
//                       stripe
//                     </button>
//                     <button onClick={() => setShowPayment(null)}
//                       style={{padding:"8px 16px", border:"1px solid #5f6FFF", color:"#5f6FFF", background:"white", borderRadius:"6px", cursor:"pointer", fontWeight:"bold"}}>
//                       Razorpay
//                     </button>
//                   </div>
//                 ) : (
//                   <button onClick={() => setShowPayment(apt.id)}
//                     style={{padding:"8px 16px", border:"1px solid #5f6FFF", color:"#5f6FFF", background:"white", borderRadius:"6px", cursor:"pointer"}}>
//                     Pay Online
//                   </button>
//                 )}
//                 <button onClick={() => cancelAppointment(apt.id)}
//                   style={{padding:"8px 16px", border:"1px solid #666", color:"#666", background:"white", borderRadius:"6px", cursor:"pointer"}}>
//                   Cancel appointment
//                 </button>
//               </>
//             )}
//           </div>
//         </div>
//       ))}
//     </div>
//   )
// }

import { useState } from 'react'

export default function MyAppointments({ appointments, setAppointments }) {
  const [showPayment, setShowPayment] = useState(null)
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 600)

  useState(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 600)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const cancelAppointment = (id) => {
    const updated = appointments.map(a =>
      a.id === id ? { ...a, cancelled: true } : a
    )
    setAppointments(updated)
    localStorage.setItem('appointments', JSON.stringify(updated))
  }

  return (
    <div style={{ maxWidth: "900px", margin: "0 auto", padding: isMobile ? "20px 16px" : "40px 20px", fontFamily: "sans-serif" }}>
      <h2 style={{ marginBottom: "30px", fontSize: isMobile ? "20px" : "26px" }}>My appointments</h2>

      {appointments.length === 0 && (
        <p style={{ color: "#888" }}>No appointments booked yet.</p>
      )}

      {appointments.map((apt) => (
        <div key={apt.id} style={{
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          gap: "16px",
          alignItems: isMobile ? "flex-start" : "center",
          borderBottom: "1px solid #eee",
          padding: "20px 0"
        }}>

          {/* Image + Info Row on mobile */}
          <div style={{ display: "flex", gap: "14px", flex: 1 }}>
            <img src={apt.img} alt={apt.name}
              style={{ width: isMobile ? "70px" : "80px", height: isMobile ? "80px" : "90px", objectFit: "cover", borderRadius: "8px", background: "#eef", flexShrink: 0 }} />

            <div style={{ flex: 1 }}>
              <p style={{ fontWeight: "bold", fontSize: isMobile ? "14px" : "16px", margin: "0 0 4px" }}>{apt.name}</p>
              <p style={{ color: "#666", margin: "0 0 6px", fontSize: "13px" }}>{apt.speciality}</p>
              <p style={{ margin: "0 0 2px", fontSize: "12px" }}><b>Address:</b></p>
              <p style={{ margin: "0 0 2px", fontSize: "12px", color: "#555" }}>{apt.address1}</p>
              <p style={{ margin: "0 0 4px", fontSize: "12px", color: "#555" }}>{apt.address2}</p>
              <p style={{ margin: "0", fontSize: "12px" }}><b>Date & Time:</b> {apt.date} | {apt.time}</p>
            </div>
          </div>

          {/* Buttons */}
          <div style={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            width: isMobile ? "100%" : "160px",
            flexShrink: 0
          }}>
            {apt.cancelled ? (
              <button style={{
                padding: "8px 16px",
                border: "1px solid red",
                color: "red",
                background: "white",
                borderRadius: "6px",
                fontSize: "13px",
                width: "100%"
              }}>
                Appointment cancelled
              </button>
            ) : (
              <>
                {showPayment === apt.id ? (
                  <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                    <button onClick={() => setShowPayment(null)}
                      style={{ padding: "8px 16px", border: "1px solid #5f6FFF", color: "#5f6FFF", background: "white", borderRadius: "6px", cursor: "pointer", fontWeight: "bold", fontSize: "13px" }}>
                      Stripe
                    </button>
                    <button onClick={() => setShowPayment(null)}
                      style={{ padding: "8px 16px", border: "1px solid #5f6FFF", color: "#5f6FFF", background: "white", borderRadius: "6px", cursor: "pointer", fontWeight: "bold", fontSize: "13px" }}>
                      Razorpay
                    </button>
                  </div>
                ) : (
                  <button onClick={() => setShowPayment(apt.id)}
                    style={{ padding: "8px 16px", border: "1px solid #5f6FFF", color: "#5f6FFF", background: "white", borderRadius: "6px", cursor: "pointer", fontSize: "13px", width: "100%" }}>
                    Pay Online
                  </button>
                )}
                <button onClick={() => cancelAppointment(apt.id)}
                  style={{ padding: "8px 16px", border: "1px solid #666", color: "#666", background: "white", borderRadius: "6px", cursor: "pointer", fontSize: "13px", width: "100%" }}>
                  Cancel appointment
                </button>
              </>
            )}
          </div>
        </div>
      ))}
    </div>
  )
}