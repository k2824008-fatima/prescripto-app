



// import React from 'react'

// const About = () => {
//   return (
//     <div style={{ fontFamily: 'Segoe UI, sans-serif', backgroundColor: '#f5f5f5' }}>

//       {/* ABOUT US SECTION */}
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
//           ABOUT <span style={{ fontWeight: '700', color: '#222' }}>US</span>
//         </h2>

//         <div style={{ display: 'flex', alignItems: 'flex-start', gap: '60px', flexWrap: 'wrap' }}>

//           <div style={{ flex: '1 1 300px', maxWidth: '100%' }}>
//             <img
//               src="/assets/about_image.png"
//               alt="Doctors at Prescripto"
//               style={{ width: '100%', borderRadius: '8px', objectFit: 'cover', display: 'block' }}
//             />
//           </div>

//           <div style={{ flex: '2 1 300px' }}>
//             <p style={{ fontSize: 'clamp(0.85rem, 1.5vw, 0.95rem)', lineHeight: '1.8', color: '#555', marginBottom: '20px' }}>
//               Welcome to Prescripto, your trusted partner in managing your healthcare needs
//               conveniently and efficiently. At Prescripto, we understand the challenges
//               individuals face when it comes to scheduling doctor appointments and managing
//               their health records.
//             </p>

//             <p style={{ fontSize: 'clamp(0.85rem, 1.5vw, 0.95rem)', lineHeight: '1.8', color: '#555', marginBottom: '20px' }}>
//               Prescripto is committed to excellence in healthcare technology. We continuously
//               strive to enhance our platform, integrating the latest advancements to improve
//               user experience and deliver superior service. Whether you're booking your first
//               appointment or managing ongoing care, Prescripto is here to support you every
//               step of the way.
//             </p>

//             <h3 style={{ fontSize: '1rem', fontWeight: '700', color: '#222', marginBottom: '12px' }}>
//               Our Vision
//             </h3>

//             <p style={{ fontSize: 'clamp(0.85rem, 1.5vw, 0.95rem)', lineHeight: '1.8', color: '#555' }}>
//               Our vision at Prescripto is to create a seamless healthcare experience for every
//               user. We aim to bridge the gap between patients and healthcare providers,
//               making it easier for you to access the care you need, when you need it.
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* WHY CHOOSE US SECTION */}
//       <div style={{ maxWidth: '1200px', margin: '60px auto', padding: '0 40px' }}>

//         <h2 style={{
//           fontSize: 'clamp(1rem, 2vw, 1.4rem)',
//           fontWeight: '700',
//           letterSpacing: '2px',
//           color: '#222',
//           textTransform: 'uppercase',
//           marginBottom: '40px'
//         }}>
//           WHY CHOOSE US
//         </h2>

//         <div style={{ display: 'flex', flexWrap: 'wrap', border: '1px solid #ddd', borderRadius: '4px', overflow: 'hidden' }}>
//           <WhyCard title="EFFICIENCY:" text="Streamlined appointment scheduling that fits into your busy lifestyle." />
//           <WhyCard title="CONVENIENCE:" text="Access to a network of trusted healthcare professionals in your area." />
//           <WhyCard title="PERSONALIZATION:" text="Tailored recommendations and reminders to help you stay on top of your health." isLast={true} />
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

// const WhyCard = ({ title, text, isLast }) => {
//   const [hovered, setHovered] = React.useState(false)

//   return (
//     <div
//       onMouseEnter={() => setHovered(true)}
//       onMouseLeave={() => setHovered(false)}
//       style={{
//         flex: '1 1 220px',
//         padding: '40px 30px',
//         borderRight: isLast ? 'none' : '1px solid #ddd',
//         borderBottom: '1px solid #ddd',
//         background: hovered ? '#4361ee' : '#fff',
//         cursor: 'pointer',
//         transition: 'background 0.3s'
//       }}
//     >
//       <h4 style={{
//         fontSize: '0.85rem',
//         fontWeight: '700',
//         letterSpacing: '1.5px',
//         textTransform: 'uppercase',
//         marginBottom: '16px',
//         color: hovered ? '#fff' : '#222',
//         transition: 'color 0.3s'
//       }}>
//         {title}
//       </h4>
//       <p style={{
//         fontSize: '0.9rem',
//         lineHeight: '1.7',
//         color: hovered ? '#fff' : '#666',
//         transition: 'color 0.3s'
//       }}>
//         {text}
//       </p>
//     </div>
//   )
// }

// export default About
import React from 'react'

const About = () => {
  const [isMobile, setIsMobile] = React.useState(window.innerWidth <= 768)

  React.useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <div style={{ fontFamily: 'Segoe UI, sans-serif', backgroundColor: '#fff' }}>

      {/* ABOUT US SECTION */}
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
          ABOUT <span style={{ fontWeight: '700', color: '#222' }}>US</span>
        </h2>

        <div style={{
          display: 'flex',
          flexDirection: isMobile ? 'column' : 'row',
          alignItems: 'flex-start',
          gap: isMobile ? '30px' : '60px'
        }}>

          <div style={{ flex: '0 0 40%', width: isMobile ? '100%' : 'auto' }}>
            <img
              src="/assets/about_image.png"
              alt="Doctors at Prescripto"
              style={{ width: '100%', borderRadius: '8px', objectFit: 'cover', display: 'block' }}
            />
          </div>

          <div style={{ flex: '1' }}>
            <p style={{ fontSize: isMobile ? '0.9rem' : '0.95rem', lineHeight: '1.8', color: '#555', marginBottom: '20px' }}>
              Welcome to Prescripto, your trusted partner in managing your healthcare needs
              conveniently and efficiently. At Prescripto, we understand the challenges
              individuals face when it comes to scheduling doctor appointments and managing
              their health records.
            </p>

            <p style={{ fontSize: isMobile ? '0.9rem' : '0.95rem', lineHeight: '1.8', color: '#555', marginBottom: '20px' }}>
              Prescripto is committed to excellence in healthcare technology. We continuously
              strive to enhance our platform, integrating the latest advancements to improve
              user experience and deliver superior service. Whether you're booking your first
              appointment or managing ongoing care, Prescripto is here to support you every
              step of the way.
            </p>

            <h3 style={{ fontSize: '1rem', fontWeight: '700', color: '#222', marginBottom: '12px' }}>
              Our Vision
            </h3>

            <p style={{ fontSize: isMobile ? '0.9rem' : '0.95rem', lineHeight: '1.8', color: '#555' }}>
              Our vision at Prescripto is to create a seamless healthcare experience for every
              user. We aim to bridge the gap between patients and healthcare providers,
              making it easier for you to access the care you need, when you need it.
            </p>
          </div>
        </div>
      </div>

      {/* WHY CHOOSE US SECTION */}
      <div style={{
        maxWidth: '1100px',
        margin: '60px auto',
        padding: isMobile ? '0 20px' : '0 60px'
      }}>

        <h2 style={{
          fontSize: isMobile ? '1rem' : '1.3rem',
          fontWeight: '700',
          letterSpacing: '2px',
          color: '#222',
          textTransform: 'uppercase',
          marginBottom: '30px'
        }}>
          WHY CHOOSE US
        </h2>

        <div style={{
          display: 'flex',
          flexDirection: isMobile ? 'column' : 'row',
          border: '1px solid #ddd',
          borderRadius: '4px',
          overflow: 'hidden'
        }}>
          <WhyCard title="EFFICIENCY:" text="Streamlined appointment scheduling that fits into your busy lifestyle." isMobile={isMobile} />
          <WhyCard title="CONVENIENCE:" text="Access to a network of trusted healthcare professionals in your area." isMobile={isMobile} />
          <WhyCard title="PERSONALIZATION:" text="Tailored recommendations and reminders to help you stay on top of your health." isLast={true} isMobile={isMobile} />
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

const WhyCard = ({ title, text, isLast, isMobile }) => {
  const [hovered, setHovered] = React.useState(false)

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        flex: '1',
        padding: isMobile ? '24px 20px' : '40px 30px',
        borderRight: isLast || isMobile ? 'none' : '1px solid #ddd',
        borderBottom: '1px solid #ddd',
        background: hovered ? '#4361ee' : '#fff',
        cursor: 'pointer',
        transition: 'background 0.3s'
      }}
    >
      <h4 style={{
        fontSize: '0.85rem',
        fontWeight: '700',
        letterSpacing: '1.5px',
        textTransform: 'uppercase',
        marginBottom: '16px',
        color: hovered ? '#fff' : '#222',
        transition: 'color 0.3s'
      }}>
        {title}
      </h4>
      <p style={{
        fontSize: '0.9rem',
        lineHeight: '1.7',
        color: hovered ? '#fff' : '#666',
        transition: 'color 0.3s'
      }}>
        {text}
      </p>
    </div>
  )
}

export default About