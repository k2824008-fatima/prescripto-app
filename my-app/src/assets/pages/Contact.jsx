
// import React from 'react'

// const Contact = () => {
//   const [btnHovered, setBtnHovered] = React.useState(false)

//   return (
//     <div style={{ fontFamily: 'Segoe UI, sans-serif', backgroundColor: '#f5f5f5' }}>

//       {/* CONTACT US SECTION */}
//       <div style={{ maxWidth: '1200px', margin: '60px auto', padding: '0 40px' }}>

//         <h2 style={{
//           textAlign: 'center',
//           fontSize: 'clamp(1.4rem, 3vw, 2rem)',
//           fontWeight: '400',
//           letterSpacing: '2px',
//           color: '#555',
//           marginBottom: '50px',
//           textTransform: 'uppercase'
//         }}>
//           CONTACT <span style={{ fontWeight: '700', color: '#222' }}>US</span>
//         </h2>

//         <div style={{ display: 'flex', alignItems: 'flex-start', gap: '60px', flexWrap: 'wrap' }}>

//           {/* Image */}
//           <div style={{ flex: '1 1 300px', maxWidth: '100%' }}>
//             <img
//               src="/assets/contact_image-1.png"
//               alt="Contact Prescripto"
//               style={{ width: '100%', borderRadius: '8px', objectFit: 'cover', display: 'block' }}
//             />
//           </div>

//           {/* Text */}
//           <div style={{ flex: '2 1 300px' }}>

//             <h3 style={{
//               fontSize: '1rem',
//               fontWeight: '700',
//               letterSpacing: '1px',
//               color: '#222',
//               textTransform: 'uppercase',
//               marginBottom: '20px'
//             }}>
//               OUR OFFICE
//             </h3>

//             <p style={{ fontSize: '0.95rem', lineHeight: '1.8', color: '#555', marginBottom: '4px' }}>
//               00000 Willms Station
//             </p>
//             <p style={{ fontSize: '0.95rem', lineHeight: '1.8', color: '#555', marginBottom: '20px' }}>
//               Suite 000, Washington, USA
//             </p>

//             <p style={{ fontSize: '0.95rem', lineHeight: '1.8', color: '#555', marginBottom: '4px' }}>
//               Tel: (000) 000-0000
//             </p>
//             <p style={{ fontSize: '0.95rem', lineHeight: '1.8', color: '#555', marginBottom: '40px' }}>
//               Email: greatstackdev@gmail.com
//             </p>

//             <h3 style={{
//               fontSize: '1rem',
//               fontWeight: '700',
//               letterSpacing: '1px',
//               color: '#222',
//               textTransform: 'uppercase',
//               marginBottom: '16px'
//             }}>
//               CAREERS AT PRESCRIPTO
//             </h3>

//             <p style={{ fontSize: '0.95rem', lineHeight: '1.8', color: '#555', marginBottom: '24px' }}>
//               Learn more about our teams and job openings.
//             </p>

//             <button
//               onMouseEnter={() => setBtnHovered(true)}
//               onMouseLeave={() => setBtnHovered(false)}
//               style={{
//                 padding: '12px 28px',
//                 fontSize: '0.9rem',
//                 fontWeight: '500',
//                 border: '1px solid #222',
//                 borderRadius: '4px',
//                 backgroundColor: btnHovered ? '#222' : '#fff',
//                 color: btnHovered ? '#fff' : '#222',
//                 cursor: 'pointer',
//                 transition: 'all 0.3s'
//               }}
//             >
//               Explore Jobs
//             </button>

//           </div>
//         </div>
//       </div>

//       {/* FOOTER */}
//       <footer style={{ backgroundColor: '#f5f5f5', borderTop: '1px solid #e0e0e0', padding: '60px 40px 30px', marginTop: '60px' }}>
//         <div style={{ maxWidth: '1200px', margin: '0 auto' }}>

//           {/* Footer Top */}
//           <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '40px', marginBottom: '40px' }}>

//             {/* Brand */}
//             <div style={{ flex: '0 0 35%', minWidth: '250px' }}>
//               <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
//                 <div style={{
//                   width: '38px', height: '38px', backgroundColor: '#4361ee',
//                   borderRadius: '8px', display: 'flex', alignItems: 'center',
//                   justifyContent: 'center', color: '#fff', fontSize: '1.1rem'
//                 }}>✦</div>
//                 <span style={{ fontSize: '1.3rem', fontWeight: '600', color: '#222' }}>Prescripto</span>
//               </div>
//               <p style={{ fontSize: '0.88rem', lineHeight: '1.7', color: '#777' }}>
//                 Lorem Ipsum is simply dummy text of the printing and
//                 typesetting industry. Lorem Ipsum has been the
//                 industry's standard dummy text ever since the 1500s,
//                 when an unknown printer took a galley of type and
//                 scrambled it to make a type specimen book.
//               </p>
//             </div>

//             {/* Company Links */}
//             <div style={{ minWidth: '150px' }}>
//               <h4 style={{ fontSize: '0.95rem', fontWeight: '700', letterSpacing: '1px', textTransform: 'uppercase', color: '#222', marginBottom: '20px' }}>
//                 COMPANY
//               </h4>
//               <ul style={{ listStyle: 'none', padding: 0 }}>
//                 {['Home', 'About us', 'Delivery', 'Privacy policy'].map((item) => (
//                   <li key={item} style={{ marginBottom: '10px' }}>
//                     <a href="#" style={{ textDecoration: 'none', color: '#666', fontSize: '0.9rem' }}>{item}</a>
//                   </li>
//                 ))}
//               </ul>
//             </div>

//             {/* Get In Touch */}
//             <div style={{ minWidth: '200px' }}>
//               <h4 style={{ fontSize: '0.95rem', fontWeight: '700', letterSpacing: '1px', textTransform: 'uppercase', color: '#222', marginBottom: '20px' }}>
//                 GET IN TOUCH
//               </h4>
//               <p style={{ fontSize: '0.9rem', color: '#666', marginBottom: '8px' }}>+0-000-000-000</p>
//               <p style={{ fontSize: '0.9rem', color: '#666' }}>greatstackdev@gmail.com</p>
//             </div>

//           </div>

//           {/* Footer Bottom */}
//           <div style={{ borderTop: '1px solid #ddd', paddingTop: '20px', textAlign: 'center' }}>
//             <p style={{ fontSize: '0.85rem', color: '#888' }}>
//               Copyright 2024 @ Greatstack.dev – All Right Reserved.
//             </p>
//           </div>

//         </div>
//       </footer>

//     </div>
//   )
// }

// export default Contact

import React from 'react'

const Contact = () => {
  const [btnHovered, setBtnHovered] = React.useState(false)
  const [isMobile, setIsMobile] = React.useState(window.innerWidth <= 768)

  React.useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <div style={{ fontFamily: 'Segoe UI, sans-serif', backgroundColor: '#fff' }}>

      {/* CONTACT US SECTION */}
      <div style={{
        maxWidth: '1100px',
        margin: '60px auto',
        padding: isMobile ? '0 20px' : '0 60px'
      }}>

        <h2 style={{
          textAlign: 'center',
          fontSize: isMobile ? '1.5rem' : '2rem',
          fontWeight: '400',
          letterSpacing: '2px',
          color: '#555',
          marginBottom: '50px',
          textTransform: 'uppercase'
        }}>
          CONTACT <span style={{ fontWeight: '700', color: '#222' }}>US</span>
        </h2>

        <div style={{
          display: 'flex',
          flexDirection: isMobile ? 'column' : 'row',
          alignItems: 'flex-start',
          gap: isMobile ? '30px' : '60px'
        }}>

          {/* Image */}
          <div style={{ flex: '0 0 40%', width: isMobile ? '100%' : 'auto' }}>
            <img
              src="/assets/contact_image-1.png"
              alt="Contact Prescripto"
              style={{ width: '100%', borderRadius: '8px', objectFit: 'cover', display: 'block' }}
            />
          </div>

          {/* Text */}
          <div style={{ flex: '1' }}>

            <h3 style={{
              fontSize: '1rem',
              fontWeight: '700',
              letterSpacing: '1px',
              color: '#222',
              textTransform: 'uppercase',
              marginBottom: '20px'
            }}>
              OUR OFFICE
            </h3>

            <p style={{ fontSize: isMobile ? '0.9rem' : '0.95rem', lineHeight: '1.8', color: '#555', marginBottom: '4px' }}>
              00000 Willms Station
            </p>
            <p style={{ fontSize: isMobile ? '0.9rem' : '0.95rem', lineHeight: '1.8', color: '#555', marginBottom: '20px' }}>
              Suite 000, Washington, USA
            </p>

            <p style={{ fontSize: isMobile ? '0.9rem' : '0.95rem', lineHeight: '1.8', color: '#555', marginBottom: '4px' }}>
              Tel: (000) 000-0000
            </p>
            <p style={{ fontSize: isMobile ? '0.9rem' : '0.95rem', lineHeight: '1.8', color: '#555', marginBottom: '40px' }}>
              Email: greatstackdev@gmail.com
            </p>

            <h3 style={{
              fontSize: '1rem',
              fontWeight: '700',
              letterSpacing: '1px',
              color: '#222',
              textTransform: 'uppercase',
              marginBottom: '16px'
            }}>
              CAREERS AT PRESCRIPTO
            </h3>

            <p style={{ fontSize: isMobile ? '0.9rem' : '0.95rem', lineHeight: '1.8', color: '#555', marginBottom: '24px' }}>
              Learn more about our teams and job openings.
            </p>

            <button
              onMouseEnter={() => setBtnHovered(true)}
              onMouseLeave={() => setBtnHovered(false)}
              style={{
                padding: isMobile ? '10px 24px' : '12px 28px',
                fontSize: '0.9rem',
                fontWeight: '500',
                border: '1px solid #222',
                borderRadius: '4px',
                backgroundColor: btnHovered ? '#222' : '#fff',
                color: btnHovered ? '#fff' : '#222',
                cursor: 'pointer',
                transition: 'all 0.3s',
                width: isMobile ? '100%' : 'auto'
              }}
            >
              Explore Jobs
            </button>

          </div>
        </div>
      </div>

      {/* FOOTER */}
      <footer style={{
        backgroundColor: '#f5f5f5',
        borderTop: '1px solid #e0e0e0',
        padding: isMobile ? '40px 20px 20px' : '60px 60px 30px',
        marginTop: '60px'
      }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>

          <div style={{
            display: 'flex',
            flexDirection: isMobile ? 'column' : 'row',
            justifyContent: 'space-between',
            gap: '30px',
            marginBottom: '40px'
          }}>

            {/* Brand */}
            <div style={{ flex: '0 0 35%' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
                <div style={{
                  width: '38px', height: '38px', backgroundColor: '#4361ee',
                  borderRadius: '8px', display: 'flex', alignItems: 'center',
                  justifyContent: 'center', color: '#fff', fontSize: '1.1rem'
                }}>✦</div>
                <span style={{ fontSize: '1.3rem', fontWeight: '600', color: '#222' }}>Prescripto</span>
              </div>
              <p style={{ fontSize: '0.88rem', lineHeight: '1.7', color: '#777' }}>
                Lorem Ipsum is simply dummy text of the printing and
                typesetting industry. Lorem Ipsum has been the
                industry's standard dummy text ever since the 1500s,
                when an unknown printer took a galley of type and
                scrambled it to make a type specimen book.
              </p>
            </div>

            {/* Company */}
            <div>
              <h4 style={{ fontSize: '0.95rem', fontWeight: '700', letterSpacing: '1px', textTransform: 'uppercase', color: '#222', marginBottom: '16px' }}>
                COMPANY
              </h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {['Home', 'About us', 'Delivery', 'Privacy policy'].map((item) => (
                  <li key={item} style={{ marginBottom: '10px' }}>
                    <a href="#" style={{ textDecoration: 'none', color: '#666', fontSize: '0.9rem' }}>{item}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Get In Touch */}
            <div>
              <h4 style={{ fontSize: '0.95rem', fontWeight: '700', letterSpacing: '1px', textTransform: 'uppercase', color: '#222', marginBottom: '16px' }}>
                GET IN TOUCH
              </h4>
              <p style={{ fontSize: '0.9rem', color: '#666', marginBottom: '8px' }}>+0-000-000-000</p>
              <p style={{ fontSize: '0.9rem', color: '#666' }}>greatstackdev@gmail.com</p>
            </div>

          </div>

          <div style={{ borderTop: '1px solid #ddd', paddingTop: '20px', textAlign: 'center' }}>
            <p style={{ fontSize: '0.85rem', color: '#888' }}>
              Copyright 2024 @ Greatstack.dev – All Right Reserved.
            </p>
          </div>
        </div>
      </footer>

    </div>
  )
}

export default Contact