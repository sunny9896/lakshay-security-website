import { Link, useLocation } from 'react-router-dom'
import { Shield, Menu, X, Phone, Mail } from 'lucide-react'
import { useState } from 'react'
import './Navbar.css'

export default function Navbar() {
  const location = useLocation();
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const isActive = (path) => location.pathname === path ? 'active' : '';

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/services', label: 'Services' },
    { path: '/about', label: 'About Us' },
    { path: '/presence', label: 'Locations & Clients' },
    { path: '/contact', label: 'Contact Us' }
  ];

  return (
    <header style={{position: 'sticky', top: 0, zIndex: 1000}}>
      <div className="top-bar">
          <div className="container flex justify-between items-center" style={{padding: '15px 5%'}}>
              <Link to="/" className="logo flex items-center gap-4">
                  <img src="/logo.jpeg" alt="Lakshay logo" style={{width: '50px', height: '50px', objectFit: 'contain', borderRadius: '8px'}} />
                  <div className="flex flex-col">
                      <span style={{fontSize: '1.8rem', fontWeight: 800, color: 'var(--bg-main)', lineHeight: 1, letterSpacing: '-0.5px'}}>LAKSHAY</span>
                      <span style={{fontSize: '0.65rem', fontWeight: 700, letterSpacing: '1px', color: 'var(--accent-red)'}}>SECURITY & PLACEMENT SERVICES</span>
                      <span style={{fontSize: '0.6rem', fontWeight: 600, color: 'var(--text-dark)', marginTop: '2px', letterSpacing: '1.5px'}}>ESTD. 2010</span>
                  </div>
              </Link>
              <div className="top-contact flex items-center" style={{gap: '30px'}}>
                  <div className="flex items-center gap-2" style={{fontWeight: 600, fontSize:'0.95rem', color: 'var(--text-dark)'}}>
                      <div style={{width:'38px', height:'38px', borderRadius:'50%', backgroundColor:'var(--bg-main)', color:'white', display:'flex', alignItems:'center', justifyContent:'center'}}>
                          <Phone size={18} />
                      </div>
                      <span>+91 9876543210</span>
                  </div>
                  <div className="flex items-center gap-2" style={{fontWeight: 600, fontSize:'0.95rem', color: 'var(--text-dark)'}}>
                      <div style={{width:'38px', height:'38px', borderRadius:'50%', backgroundColor:'var(--bg-main)', color:'white', display:'flex', alignItems:'center', justifyContent:'center'}}>
                          <Mail size={18} />
                      </div>
                      <span>info@lakshaysecurity.com</span>
                  </div>
              </div>
          </div>
      </div>

      <nav className="navbar">
          <div className="container flex justify-between items-center" style={{height: '80px', padding: '0 5%'}}>
              <div className="nav-links desktop-links flex gap-8">
                  {navLinks.map(link => (
                    <Link key={link.path} to={link.path} className={`nav-link ${isActive(link.path)}`}>
                        {link.label}
                    </Link>
                  ))}
              </div>
              
              <div className="nav-right flex items-center gap-6">
                  <Link to="/contact" className="btn-outline">BUSINESS ENQUIRY</Link>
                  <button className="mobile-toggle" onClick={() => setIsMobileOpen(!isMobileOpen)}>
                      {isMobileOpen ? <X size={28} /> : <Menu size={28} />}
                  </button>
              </div>
          </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isMobileOpen ? 'open' : ''}`}>
          {navLinks.map(link => (
            <Link 
              key={link.path} 
              to={link.path} 
              className={`mobile-link ${isActive(link.path)}`}
              onClick={() => setIsMobileOpen(false)}
            >
                {link.label}
            </Link>
          ))}
      </div>
    </header>
  )
}
