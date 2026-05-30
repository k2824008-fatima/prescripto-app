// import { useState } from 'react'

// export default function MyProfile({ user }) {
//   const [edit, setEdit] = useState(false)
//   const [phone, setPhone] = useState('000-000-0000')
//   const [address, setAddress] = useState('')
//   const [gender, setGender] = useState('Not Selected')
//   const [birthday, setBirthday] = useState('Not Selected')

//   if (!user) return (
//     <div style={{textAlign:"center", padding:"60px", fontFamily:"sans-serif"}}>
//       <p>Please login first!</p>
//     </div>
//   )

//   return (
//     <div style={{maxWidth:"700px", margin:"0 auto", padding:"40px 20px", fontFamily:"sans-serif"}}>

//       {/* Profile pic */}
//       <div style={{marginBottom:"20px"}}>
//         <div style={{width:"80px", height:"80px", borderRadius:"50%", background:"#5f6FFF", display:"flex", alignItems:"center", justifyContent:"center", marginBottom:"16px"}}>
//           <span style={{color:"white", fontSize:"30px"}}>👤</span>
//         </div>
//         <h2 style={{margin:"0", fontSize:"24px"}}>{user.name}</h2>
//       </div>

//       <hr style={{border:"none", borderTop:"1px solid #eee", margin:"20px 0"}} />

//       {/* Contact Information */}
//       <p style={{fontWeight:"bold", textDecoration:"underline", marginBottom:"16px"}}>CONTACT INFORMATION</p>

//       <div style={{display:"grid", gridTemplateColumns:"150px 1fr", gap:"12px", marginBottom:"20px"}}>
//         <p style={{color:"#666", margin:0}}>Email id:</p>
//         <p style={{color:"#5f6FFF", margin:0}}>{user.email}</p>

//         <p style={{color:"#666", margin:0}}>Phone:</p>
//         {edit ? (
//           <input value={phone} onChange={e => setPhone(e.target.value)}
//             style={{padding:"6px 10px", border:"1px solid #ddd", borderRadius:"6px", fontSize:"14px"}} />
//         ) : (
//           <p style={{color:"#5f6FFF", margin:0}}>{phone}</p>
//         )}

//         <p style={{color:"#666", margin:0}}>Address:</p>
//         {edit ? (
//           <input value={address} onChange={e => setAddress(e.target.value)}
//             placeholder="Enter address"
//             style={{padding:"6px 10px", border:"1px solid #ddd", borderRadius:"6px", fontSize:"14px"}} />
//         ) : (
//           <p style={{margin:0}}>{address || "-"}</p>
//         )}
//       </div>

//       <hr style={{border:"none", borderTop:"1px solid #eee", margin:"20px 0"}} />

//       {/* Basic Information */}
//       <p style={{fontWeight:"bold", textDecoration:"underline", marginBottom:"16px"}}>BASIC INFORMATION</p>

//       <div style={{display:"grid", gridTemplateColumns:"150px 1fr", gap:"12px", marginBottom:"30px"}}>
//         <p style={{color:"#666", margin:0}}>Gender:</p>
//         {edit ? (
//           <select value={gender} onChange={e => setGender(e.target.value)}
//             style={{padding:"6px 10px", border:"1px solid #ddd", borderRadius:"6px", fontSize:"14px"}}>
//             <option>Not Selected</option>
//             <option>Male</option>
//             <option>Female</option>
//           </select>
//         ) : (
//           <p style={{margin:0}}>{gender}</p>
//         )}

//         <p style={{color:"#666", margin:0}}>Birthday:</p>
//         {edit ? (
//           <input type="date" value={birthday === 'Not Selected' ? '' : birthday}
//             onChange={e => setBirthday(e.target.value)}
//             style={{padding:"6px 10px", border:"1px solid #ddd", borderRadius:"6px", fontSize:"14px"}} />
//         ) : (
//           <p style={{margin:0}}>{birthday}</p>
//         )}
//       </div>

//       {edit ? (
//         <button onClick={() => setEdit(false)}
//           style={{padding:"10px 30px", background:"#5f6FFF", color:"white", border:"none", borderRadius:"50px", cursor:"pointer", fontSize:"14px"}}>
//           Save information
//         </button>
//       ) : (
//         <button onClick={() => setEdit(true)}
//           style={{padding:"10px 30px", background:"white", color:"#333", border:"1px solid #ddd", borderRadius:"50px", cursor:"pointer", fontSize:"14px"}}>
//           Edit
//         </button>
//       )}

//     </div>
//   )
// }
import { useState } from 'react'

export default function MyProfile({ user }) {
  const [edit, setEdit] = useState(false)
  const [phone, setPhone] = useState('000-000-0000')
  const [address, setAddress] = useState('')
  const [gender, setGender] = useState('Not Selected')
  const [birthday, setBirthday] = useState('Not Selected')
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 600)

  useState(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 600)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  if (!user) return (
    <div style={{ textAlign: "center", padding: "60px 20px", fontFamily: "sans-serif" }}>
      <p>Please login first!</p>
    </div>
  )

  return (
    <div style={{ maxWidth: "700px", margin: "0 auto", padding: isMobile ? "20px 16px" : "40px 20px", fontFamily: "sans-serif" }}>

      {/* Profile pic */}
      <div style={{ marginBottom: "20px" }}>
        <div style={{ width: "80px", height: "80px", borderRadius: "50%", background: "#5f6FFF", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "16px" }}>
          <span style={{ color: "white", fontSize: "30px" }}>👤</span>
        </div>
        <h2 style={{ margin: "0", fontSize: isMobile ? "20px" : "24px" }}>{user.name}</h2>
      </div>

      <hr style={{ border: "none", borderTop: "1px solid #eee", margin: "20px 0" }} />

      {/* Contact Information */}
      <p style={{ fontWeight: "bold", textDecoration: "underline", marginBottom: "16px" }}>CONTACT INFORMATION</p>

      <div style={{
        display: "grid",
        gridTemplateColumns: isMobile ? "100px 1fr" : "150px 1fr",
        gap: "12px",
        marginBottom: "20px"
      }}>
        <p style={{ color: "#666", margin: 0, fontSize: isMobile ? "13px" : "14px" }}>Email id:</p>
        <p style={{ color: "#5f6FFF", margin: 0, fontSize: isMobile ? "13px" : "14px", wordBreak: "break-all" }}>{user.email}</p>

        <p style={{ color: "#666", margin: 0, fontSize: isMobile ? "13px" : "14px" }}>Phone:</p>
        {edit ? (
          <input value={phone} onChange={e => setPhone(e.target.value)}
            style={{ padding: "6px 10px", border: "1px solid #ddd", borderRadius: "6px", fontSize: "13px", width: "100%", boxSizing: "border-box" }} />
        ) : (
          <p style={{ color: "#5f6FFF", margin: 0, fontSize: isMobile ? "13px" : "14px" }}>{phone}</p>
        )}

        <p style={{ color: "#666", margin: 0, fontSize: isMobile ? "13px" : "14px" }}>Address:</p>
        {edit ? (
          <input value={address} onChange={e => setAddress(e.target.value)}
            placeholder="Enter address"
            style={{ padding: "6px 10px", border: "1px solid #ddd", borderRadius: "6px", fontSize: "13px", width: "100%", boxSizing: "border-box" }} />
        ) : (
          <p style={{ margin: 0, fontSize: isMobile ? "13px" : "14px" }}>{address || "-"}</p>
        )}
      </div>

      <hr style={{ border: "none", borderTop: "1px solid #eee", margin: "20px 0" }} />

      {/* Basic Information */}
      <p style={{ fontWeight: "bold", textDecoration: "underline", marginBottom: "16px" }}>BASIC INFORMATION</p>

      <div style={{
        display: "grid",
        gridTemplateColumns: isMobile ? "100px 1fr" : "150px 1fr",
        gap: "12px",
        marginBottom: "30px"
      }}>
        <p style={{ color: "#666", margin: 0, fontSize: isMobile ? "13px" : "14px" }}>Gender:</p>
        {edit ? (
          <select value={gender} onChange={e => setGender(e.target.value)}
            style={{ padding: "6px 10px", border: "1px solid #ddd", borderRadius: "6px", fontSize: "13px", width: "100%", boxSizing: "border-box" }}>
            <option>Not Selected</option>
            <option>Male</option>
            <option>Female</option>
          </select>
        ) : (
          <p style={{ margin: 0, fontSize: isMobile ? "13px" : "14px" }}>{gender}</p>
        )}

        <p style={{ color: "#666", margin: 0, fontSize: isMobile ? "13px" : "14px" }}>Birthday:</p>
        {edit ? (
          <input type="date" value={birthday === 'Not Selected' ? '' : birthday}
            onChange={e => setBirthday(e.target.value)}
            style={{ padding: "6px 10px", border: "1px solid #ddd", borderRadius: "6px", fontSize: "13px", width: "100%", boxSizing: "border-box" }} />
        ) : (
          <p style={{ margin: 0, fontSize: isMobile ? "13px" : "14px" }}>{birthday}</p>
        )}
      </div>

      {edit ? (
        <button onClick={() => setEdit(false)}
          style={{ padding: isMobile ? "10px 24px" : "10px 30px", background: "#5f6FFF", color: "white", border: "none", borderRadius: "50px", cursor: "pointer", fontSize: "14px", width: isMobile ? "100%" : "auto" }}>
          Save information
        </button>
      ) : (
        <button onClick={() => setEdit(true)}
          style={{ padding: isMobile ? "10px 24px" : "10px 30px", background: "white", color: "#333", border: "1px solid #ddd", borderRadius: "50px", cursor: "pointer", fontSize: "14px", width: isMobile ? "100%" : "auto" }}>
          Edit
        </button>
      )}

    </div>
  )
}