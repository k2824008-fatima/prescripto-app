
// import { useState } from 'react'
// import { useNavigate } from 'react-router-dom'

// export default function Login({ setUser }) {
//   const [state, setState] = useState('Sign Up')
//   const [name, setName] = useState('')
//   const [email, setEmail] = useState('')
//   const [password, setPassword] = useState('')
//   const navigate = useNavigate()

//   const handleSubmit = () => {
//     if (state === 'Sign Up' && name && email && password) {
//         const userData = { name, email }
//         localStorage.setItem('user', JSON.stringify(userData))
//         setUser(userData)
//     //   setUser({ name, email })
//       navigate('/')
//     } else if (state === 'Login' && email && password) {
//          const userData = { name, email }
//         localStorage.setItem('user', JSON.stringify(userData))
//         setUser(userData)
//     //   setUser({ name: email, email })
//       navigate('/')
//     }
//   }

//   return (
//     <div style={{minHeight:"80vh", display:"flex", alignItems:"center", justifyContent:"center", fontFamily:"sans-serif"}}>
//       <div style={{background:"white", padding:"40px", borderRadius:"12px", boxShadow:"0 4px 20px rgba(0,0,0,0.1)", width:"380px"}}>
//         <h2 style={{marginBottom:"6px", fontSize:"26px"}}>{state === 'Sign Up' ? 'Create Account' : 'Login'}</h2>
//         <p style={{color:"#888", marginBottom:"24px", fontSize:"14px"}}>
//           Please {state === 'Sign Up' ? 'sign up' : 'log in'} to book appointment
//         </p>

//         {state === 'Sign Up' && (
//           <div style={{marginBottom:"16px"}}>
//             <p style={{marginBottom:"6px", fontSize:"14px"}}>Full Name</p>
//             <input type="text" value={name} onChange={e => setName(e.target.value)}
//               style={{width:"100%", padding:"10px", border:"1px solid #ddd", borderRadius:"6px", fontSize:"14px", boxSizing:"border-box"}} />
//           </div>
//         )}

//         <div style={{marginBottom:"16px"}}>
//           <p style={{marginBottom:"6px", fontSize:"14px"}}>Email</p>
//           <input type="email" value={email} onChange={e => setEmail(e.target.value)}
//             style={{width:"100%", padding:"10px", border:"1px solid #ddd", borderRadius:"6px", fontSize:"14px", boxSizing:"border-box"}} />
//         </div>

//         <div style={{marginBottom:"24px"}}>
//           <p style={{marginBottom:"6px", fontSize:"14px"}}>Password</p>
//           <input type="password" value={password} onChange={e => setPassword(e.target.value)}
//             style={{width:"100%", padding:"10px", border:"1px solid #ddd", borderRadius:"6px", fontSize:"14px", boxSizing:"border-box"}} />
//         </div>

//         <button onClick={handleSubmit}
//           style={{width:"100%", padding:"12px", background:"#5f6FFF", color:"white", border:"none", borderRadius:"6px", fontSize:"16px", cursor:"pointer"}}>
//           {state === 'Sign Up' ? 'Create account' : 'Login'}
//         </button>

//         {state === 'Sign Up' ? (
//           <p style={{marginTop:"16px", fontSize:"14px", color:"#666", textAlign:"center"}}>
//             Already have an account? <span onClick={() => setState('Login')} style={{color:"#5f6FFF", cursor:"pointer"}}>Login here</span>
//           </p>
//         ) : (
//           <p style={{marginTop:"16px", fontSize:"14px", color:"#666", textAlign:"center"}}>
//             Create a new account? <span onClick={() => setState('Sign Up')} style={{color:"#5f6FFF", cursor:"pointer"}}>Click here</span>
//           </p>
//         )}
//       </div>
//     </div>
//   )
// }

import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Login({ setUser }) {
  const [state, setState] = useState('Sign Up')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const handleSubmit = () => {
    if (state === 'Sign Up' && name && email && password) {
      const userData = { name, email }
      localStorage.setItem('user', JSON.stringify(userData))
      setUser(userData)
      navigate('/')
    } else if (state === 'Login' && email && password) {
      const userData = { name, email }
      localStorage.setItem('user', JSON.stringify(userData))
      setUser(userData)
      navigate('/')
    }
  }

  return (
    <div style={{ minHeight: "80vh", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "sans-serif", padding: "20px" }}>
      <div style={{ background: "white", padding: "40px", borderRadius: "12px", boxShadow: "0 4px 20px rgba(0,0,0,0.1)", width: "100%", maxWidth: "380px" }}>
        <h2 style={{ marginBottom: "6px", fontSize: "26px" }}>{state === 'Sign Up' ? 'Create Account' : 'Login'}</h2>
        <p style={{ color: "#888", marginBottom: "24px", fontSize: "14px" }}>
          Please {state === 'Sign Up' ? 'sign up' : 'log in'} to book appointment
        </p>

        {state === 'Sign Up' && (
          <div style={{ marginBottom: "16px" }}>
            <p style={{ marginBottom: "6px", fontSize: "14px" }}>Full Name</p>
            <input type="text" value={name} onChange={e => setName(e.target.value)}
              style={{ width: "100%", padding: "10px", border: "1px solid #ddd", borderRadius: "6px", fontSize: "14px", boxSizing: "border-box" }} />
          </div>
        )}

        <div style={{ marginBottom: "16px" }}>
          <p style={{ marginBottom: "6px", fontSize: "14px" }}>Email</p>
          <input type="email" value={email} onChange={e => setEmail(e.target.value)}
            style={{ width: "100%", padding: "10px", border: "1px solid #ddd", borderRadius: "6px", fontSize: "14px", boxSizing: "border-box" }} />
        </div>

        <div style={{ marginBottom: "24px" }}>
          <p style={{ marginBottom: "6px", fontSize: "14px" }}>Password</p>
          <input type="password" value={password} onChange={e => setPassword(e.target.value)}
            style={{ width: "100%", padding: "10px", border: "1px solid #ddd", borderRadius: "6px", fontSize: "14px", boxSizing: "border-box" }} />
        </div>

        <button onClick={handleSubmit}
          style={{ width: "100%", padding: "12px", background: "#5f6FFF", color: "white", border: "none", borderRadius: "6px", fontSize: "16px", cursor: "pointer" }}>
          {state === 'Sign Up' ? 'Create account' : 'Login'}
        </button>

        {state === 'Sign Up' ? (
          <p style={{ marginTop: "16px", fontSize: "14px", color: "#666", textAlign: "center" }}>
            Already have an account? <span onClick={() => setState('Login')} style={{ color: "#5f6FFF", cursor: "pointer" }}>Login here</span>
          </p>
        ) : (
          <p style={{ marginTop: "16px", fontSize: "14px", color: "#666", textAlign: "center" }}>
            Create a new account? <span onClick={() => setState('Sign Up')} style={{ color: "#5f6FFF", cursor: "pointer" }}>Click here</span>
          </p>
        )}
      </div>
    </div>
  )
}
