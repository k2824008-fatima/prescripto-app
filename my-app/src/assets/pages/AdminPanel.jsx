
import React from 'react'

const doctors = [
  { id: 1, name: "Dr. Richard James", speciality: "General physician", img: "/assets/doc1.png", fee: 50 },
  { id: 2, name: "Dr. Emily Larson", speciality: "Gynecologist", img: "/assets/doc2.png", fee: 60 },
  { id: 3, name: "Dr. Sarah Patel", speciality: "Dermatologist", img: "/assets/doc3.png", fee: 55 },
  { id: 4, name: "Dr. Christopher Lee", speciality: "Pediatricians", img: "/assets/doc4.png", fee: 45 },
  { id: 5, name: "Dr. Jennifer Garcia", speciality: "Neurologist", img: "/assets/doc5.png", fee: 70 },
  { id: 6, name: "Dr. Andrew Williams", speciality: "Gastroenterologist", img: "/assets/doc6.png", fee: 65 },
  { id: 7, name: "Dr. Christopher Davis", speciality: "General physician", img: "/assets/doc7.png", fee: 50 },
  { id: 8, name: "Dr. Timothy White", speciality: "Gynecologist", img: "/assets/doc8.png", fee: 60 },
  { id: 9, name: "Dr. Ava Mitchell", speciality: "Dermatologist", available: true, img: "/assets/doc9.png", fee: 55, degree: "MBBS", experience: "4 Years", about: "Dr. Ava Mitchell specializes in advanced skin care and dermatology.", address1: "14th Cross, Richmond", address2: "Circle, Ring Road, London" },
  { id: 10, name: "Dr. Christopher Lee", speciality: "Pediatricians",available: true, img: "/assets/doc10.png", fee: 45, degree: "MBBS", experience: "3 Years", about: "Dr. Christopher Lee is passionate about child healthcare and development.", address1: "17th Cross, Richmond", address2: "Circle, Ring Road, London" },
  { id: 11, name: "Dr. Zoe Kelly", speciality: "Neurologist",available: true, img: "/assets/doc11.png", fee: 70, degree: "MBBS", experience: "5 Years", about: "Dr. Zoe Kelly focuses on brain and nervous system disorders.", address1: "47th Cross, Richmond", address2: "Circle, Ring Road, London" },   { id: 12, name: "Dr. Patrick Harris", speciality: "Gastroenterologist",available: true, img: "/assets/doc12.png", fee: 65, degree: "MBBS", experience: "6 Years", about: "Dr. Patrick Harris specializes in digestive and gut health.", address1: "57th Cross, Richmond", address2: "Circle, Ring Road, London" },
  { id: 13, name: "Dr. Chloe Evans", speciality: "General physician",available: true, img: "/assets/doc13.png", fee: 50, degree: "MBBS", experience: "2 Years", about: "Dr. Chloe Evans provides compassionate and comprehensive medical care.", address1: "24 main street", address2: "10 clause road" },
  { id: 14, name: "Dr. Ryan Martinez", speciality: "Gynecologist", available: true, img: "/assets/doc14.png", fee: 60, degree: "MBBS", experience: "4 Years", about: "Dr. Ryan Martinez is dedicated to women's reproductive health.", address1: "37th Cross, Richmond", address2: "Circle, Ring Road, London" },
  { id: 15, name: "Dr. Amelia Hill", speciality: "Dermatologist", available: true, img: "/assets/doc15.png", fee: 55, degree: "MBBS", experience: "7 Years", about: "Dr. Amelia Hill is an expert in cosmetic and medical dermatology.", address1: "27th Cross, Richmond", address2: "Circle, Ring Road, London" },
]

const AdminPanel = () => {
  const [activePage, setActivePage] = React.useState('dashboard')
  const [isAdmin, setIsAdmin] = React.useState(true)
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [loggedIn, setLoggedIn] = React.useState(false)
  const [sidebarOpen, setSidebarOpen] = React.useState(false)
  const [isMobile, setIsMobile] = React.useState(window.innerWidth <= 768)

  React.useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const [appointments, setAppointments] = React.useState(() => {
    try { return JSON.parse(localStorage.getItem('appointments')) || [] }
    catch { return [] }
  })

  React.useEffect(() => {
    const sync = () => {
      try {
        const data = JSON.parse(localStorage.getItem('appointments')) || []
        setAppointments(data)
      } catch { }
    }
    const interval = setInterval(sync, 2000)
    return () => clearInterval(interval)
  }, [])

  const handleLogin = () => {
    if (email && password) setLoggedIn(true)
  }

  const handleCancel = (id) => {
    const updated = appointments.map(a => a.id === id ? { ...a, cancelled: true, status: 'Cancelled' } : a)
    setAppointments(updated)
    localStorage.setItem('appointments', JSON.stringify(updated))
  }

  const confirmed = appointments.filter(a => !a.cancelled && !a.status).length
  const cancelled = appointments.filter(a => a.cancelled || a.status === 'Cancelled').length

  // LOGIN PAGE
  if (!loggedIn) {
    return (
      <div style={{ minHeight: '100vh', backgroundColor: '#f5f5f5', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'Segoe UI, sans-serif', padding: '20px' }}>
        <div style={{ backgroundColor: '#fff', padding: '40px', borderRadius: '12px', boxShadow: '0 4px 20px rgba(0,0,0,0.08)', width: '100%', maxWidth: '420px' }}>
          <h2 style={{ textAlign: 'center', fontSize: '1.6rem', fontWeight: '600', color: '#222', marginBottom: '30px' }}>
            <span style={{ color: '#4361ee' }}>{isAdmin ? 'Admin' : 'Doctor'}</span> Login
          </h2>
          <div style={{ marginBottom: '20px' }}>
            <label style={{ fontSize: '0.9rem', color: '#444', display: 'block', marginBottom: '8px' }}>Email</label>
            <input type="email" value={email} onChange={e => setEmail(e.target.value)}
              placeholder={isAdmin ? 'admin@example.com' : 'doctor@email.com'}
              style={{ width: '100%', padding: '10px 14px', border: '1px solid #ddd', borderRadius: '6px', fontSize: '0.95rem', outline: 'none', boxSizing: 'border-box' }} />
          </div>
          <div style={{ marginBottom: '28px' }}>
            <label style={{ fontSize: '0.9rem', color: '#444', display: 'block', marginBottom: '8px' }}>Password</label>
            <input type="password" value={password} onChange={e => setPassword(e.target.value)}
              placeholder="••••••••"
              style={{ width: '100%', padding: '10px 14px', border: '1px solid #ddd', borderRadius: '6px', fontSize: '0.95rem', outline: 'none', boxSizing: 'border-box' }} />
          </div>
          <button onClick={handleLogin}
            style={{ width: '100%', padding: '12px', backgroundColor: '#4361ee', color: '#fff', border: 'none', borderRadius: '6px', fontSize: '1rem', fontWeight: '600', cursor: 'pointer', marginBottom: '20px' }}>
            Login
          </button>
          <p style={{ textAlign: 'center', fontSize: '0.9rem', color: '#555' }}>
            {isAdmin ? 'Doctor Login?' : 'Admin Login?'}{' '}
            <span onClick={() => setIsAdmin(!isAdmin)} style={{ color: '#4361ee', cursor: 'pointer', fontWeight: '600' }}>Click here</span>
          </p>
        </div>
      </div>
    )
  }

  const navItems = [
    { key: 'dashboard', label: '📊 Dashboard' },
    { key: 'doctors', label: '👨‍⚕️ Doctors' },
    { key: 'appointments', label: '📅 Appointments' },
  ]

  return (
    <div style={{ display: 'flex', minHeight: '100vh', fontFamily: 'Segoe UI, sans-serif', backgroundColor: '#f0f2f5' }}>

      {/* MOBILE TOP BAR */}
      {isMobile && (
        <div style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 200, backgroundColor: '#fff', padding: '14px 20px', boxShadow: '0 2px 8px rgba(0,0,0,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <span style={{ fontSize: '1.1rem', fontWeight: '700', color: '#222' }}>Prescripto Admin</span>
          <button onClick={() => setSidebarOpen(!sidebarOpen)}
            style={{ background: 'none', border: 'none', fontSize: '1.5rem', cursor: 'pointer' }}>☰</button>
        </div>
      )}

      {/* MOBILE OVERLAY */}
      {isMobile && sidebarOpen && (
        <div onClick={() => setSidebarOpen(false)}
          style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0,0,0,0.4)', zIndex: 140 }} />
      )}

      {/* SIDEBAR */}
      <div style={{
        width: '240px',
        backgroundColor: '#fff',
        boxShadow: '2px 0 8px rgba(0,0,0,0.06)',
        padding: '30px 0',
        display: 'flex',
        flexDirection: 'column',
        position: isMobile ? 'fixed' : 'sticky',
        top: 0,
        left: isMobile ? (sidebarOpen ? 0 : '-240px') : 0,
        height: '100vh',
        zIndex: 150,
        transition: 'left 0.3s ease',
        flexShrink: 0
      }}>
        <div style={{ padding: '0 24px 30px', borderBottom: '1px solid #eee' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div style={{ width: '36px', height: '36px', backgroundColor: '#4361ee', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 'bold' }}>P</div>
            <span style={{ fontSize: '1.1rem', fontWeight: '700', color: '#222' }}>Prescripto</span>
          </div>
          <p style={{ fontSize: '0.75rem', color: '#888', marginTop: '6px' }}>{isAdmin ? 'Admin Panel' : 'Doctor Panel'}</p>
        </div>

        {navItems.map(item => (
          <div key={item.key} onClick={() => { setActivePage(item.key); setSidebarOpen(false) }}
            style={{ padding: '14px 24px', cursor: 'pointer', backgroundColor: activePage === item.key ? '#eef0fd' : 'transparent', color: activePage === item.key ? '#4361ee' : '#555', fontWeight: activePage === item.key ? '600' : '400', borderLeft: activePage === item.key ? '3px solid #4361ee' : '3px solid transparent', fontSize: '0.95rem', transition: 'all 0.2s' }}>
            {item.label}
          </div>
        ))}

        <div style={{ marginTop: 'auto', padding: '20px 24px', borderTop: '1px solid #eee' }}>
          <button onClick={() => setLoggedIn(false)}
            style={{ width: '100%', padding: '10px', backgroundColor: '#ff4757', color: '#fff', border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: '600' }}>
            Logout
          </button>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div style={{ flex: 1, padding: isMobile ? '70px 14px 30px' : '30px', overflowY: 'auto', minWidth: '750px' }}>

        {/* DASHBOARD */}
        {activePage === 'dashboard' && (
          <div>
            <h2 style={{ fontSize: isMobile ? '1.2rem' : '1.5rem', fontWeight: '700', color: '#222', marginBottom: '20px' }}>Dashboard</h2>

            <div style={{ display: 'grid', gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)', gap: '14px', marginBottom: '24px' }}>
              {[
                { label: 'Total Doctors', value: doctors.length, color: '#4361ee', icon: '👨‍⚕️' },
                { label: 'Appointments', value: appointments.length, color: '#2ecc71', icon: '📅' },
                { label: 'Confirmed', value: confirmed, color: '#f39c12', icon: '✅' },
                { label: 'Cancelled', value: cancelled, color: '#e74c3c', icon: '❌' },
              ].map((card, i) => (
                <div key={i} style={{ backgroundColor: '#fff', padding: isMobile ? '14px' : '20px', borderRadius: '12px', boxShadow: '0 2px 8px rgba(0,0,0,0.06)', borderLeft: `4px solid ${card.color}` }}>
                  <div style={{ fontSize: '1.4rem', marginBottom: '6px' }}>{card.icon}</div>
                  <div style={{ fontSize: isMobile ? '1.4rem' : '1.8rem', fontWeight: '700', color: card.color }}>{card.value}</div>
                  <div style={{ fontSize: '0.78rem', color: '#888', marginTop: '4px' }}>{card.label}</div>
                </div>
              ))}
            </div>

            <div style={{ backgroundColor: '#fff', borderRadius: '12px', padding: isMobile ? '16px' : '24px', boxShadow: '0 2px 8px rgba(0,0,0,0.06)', overflowX: 'auto' }}>
              <h3 style={{ fontSize: '1rem', fontWeight: '600', marginBottom: '16px', color: '#222' }}>Recent Appointments</h3>
              {appointments.length === 0 ? (
                <p style={{ color: '#aaa', textAlign: 'center', padding: '30px 0' }}>No appointments yet</p>
              ) : (
                <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: '480px' }}>
                  <thead>
                    <tr style={{ backgroundColor: '#f8f9fa' }}>
                      {['Patient', 'Doctor', 'Date', 'Time', 'Status'].map(h => (
                        <th key={h} style={{ padding: '10px 12px', textAlign: 'left', fontSize: '0.8rem', color: '#888', fontWeight: '600' }}>{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {appointments.slice(-5).reverse().map(a => (
                      <tr key={a.id} style={{ borderTop: '1px solid #f0f0f0' }}>
                        <td style={{ padding: '10px 12px', fontSize: '0.85rem', fontWeight: '500' }}>{a.patientName || 'Patient'}</td>
                        <td style={{ padding: '10px 12px', fontSize: '0.85rem', color: '#555' }}>{a.name}</td>
                        <td style={{ padding: '10px 12px', fontSize: '0.85rem', color: '#555' }}>{a.date}</td>
                        <td style={{ padding: '10px 12px', fontSize: '0.85rem', color: '#555' }}>{a.time}</td>
                        <td style={{ padding: '10px 12px' }}>
                          <span style={{ padding: '3px 8px', borderRadius: '20px', fontSize: '0.75rem', fontWeight: '600', backgroundColor: a.cancelled ? '#ffe8e8' : '#e8f8f0', color: a.cancelled ? '#e74c3c' : '#2ecc71' }}>
                            {a.cancelled ? 'Cancelled' : a.status || 'Booked'}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </div>
          </div>
        )}

        {/* DOCTORS */}
        {activePage === 'doctors' && (
          <div>
            <h2 style={{ fontSize: isMobile ? '1.2rem' : '1.5rem', fontWeight: '700', color: '#222', marginBottom: '20px' }}>All Doctors</h2>
            <div style={{ display: 'grid', gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : 'repeat(auto-fill, minmax(200px, 1fr))', gap: '16px' }}>
              {doctors.map(doc => (
                <div key={doc.id} style={{ backgroundColor: '#fff', borderRadius: '12px', boxShadow: '0 2px 8px rgba(0,0,0,0.06)', overflow: 'hidden' }}>
                  <img src={doc.img} alt={doc.name} style={{ width: '100%', height: isMobile ? '140px' : '180px', objectFit: 'cover', backgroundColor: '#eef' }} />
                  <div style={{ padding: isMobile ? '12px' : '16px' }}>
                    <h4 style={{ fontSize: isMobile ? '0.82rem' : '0.95rem', fontWeight: '600', color: '#222', marginBottom: '4px' }}>{doc.name}</h4>
                    <p style={{ fontSize: '0.78rem', color: '#4361ee', marginBottom: '4px' }}>{doc.speciality}</p>
                    <p style={{ fontSize: '0.78rem', color: '#888', marginBottom: '8px' }}>Fee: ${doc.fee}</p>
                    <span style={{ fontSize: '0.72rem', padding: '3px 8px', borderRadius: '20px', backgroundColor: '#e8f8f0', color: '#2ecc71', fontWeight: '600' }}>● Available</span>
                    <p style={{ fontSize: '0.72rem', color: '#aaa', marginTop: '6px' }}>
                      Appointments: {appointments.filter(a => a.name === doc.name).length}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* APPOINTMENTS */}
        {activePage === 'appointments' && (
          <div>
            <h2 style={{ fontSize: isMobile ? '1.2rem' : '1.5rem', fontWeight: '700', color: '#222', marginBottom: '20px' }}>All Appointments</h2>
            <div style={{ backgroundColor: '#fff', borderRadius: '12px', padding: isMobile ? '16px' : '24px', boxShadow: '0 2px 8px rgba(0,0,0,0.06)', overflowX: 'auto' }}>
              {appointments.length === 0 ? (
                <p style={{ color: '#aaa', textAlign: 'center', padding: '40px 0' }}>No appointments booked yet</p>
              ) : (
                <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: '580px' }}>
                  <thead>
                    <tr style={{ backgroundColor: '#f8f9fa' }}>
                      {['#', 'Doctor', 'Speciality', 'Date', 'Time', 'Status', 'Action'].map(h => (
                        <th key={h} style={{ padding: '10px 12px', textAlign: 'left', fontSize: '0.8rem', color: '#888', fontWeight: '600' }}>{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {appointments.map((a, i) => (
                      <tr key={a.id} style={{ borderTop: '1px solid #f0f0f0' }}>
                        <td style={{ padding: '10px 12px', fontSize: '0.82rem', color: '#888' }}>{i + 1}</td>
                        <td style={{ padding: '10px 12px' }}>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                            <img src={a.img} alt={a.name} style={{ width: '32px', height: '32px', borderRadius: '50%', objectFit: 'cover', backgroundColor: '#eef', flexShrink: 0 }} />
                            <span style={{ fontSize: '0.82rem', fontWeight: '500' }}>{a.name}</span>
                          </div>
                        </td>
                        <td style={{ padding: '10px 12px', fontSize: '0.82rem', color: '#555' }}>{a.speciality}</td>
                        <td style={{ padding: '10px 12px', fontSize: '0.82rem', color: '#555' }}>{a.date}</td>
                        <td style={{ padding: '10px 12px', fontSize: '0.82rem', color: '#555' }}>{a.time}</td>
                        <td style={{ padding: '10px 12px' }}>
                          <span style={{ padding: '3px 8px', borderRadius: '20px', fontSize: '0.75rem', fontWeight: '600', backgroundColor: a.cancelled ? '#ffe8e8' : '#e8f8f0', color: a.cancelled ? '#e74c3c' : '#2ecc71' }}>
                            {a.cancelled ? 'Cancelled' : a.status || 'Booked'}
                          </span>
                        </td>
                        <td style={{ padding: '10px 12px' }}>
                          {!a.cancelled && (
                            <button onClick={() => handleCancel(a.id)}
                              style={{ padding: '5px 10px', backgroundColor: '#ffe8e8', color: '#e74c3c', border: 'none', borderRadius: '6px', cursor: 'pointer', fontSize: '0.75rem', fontWeight: '600' }}>
                              Cancel
                            </button>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default AdminPanel