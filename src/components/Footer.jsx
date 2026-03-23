import { MapPin, Mail, Phone } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="footer" style={{backgroundColor: '#050711', padding: '60px 0 30px', borderTop: '1px solid rgba(255,255,255,0.05)'}}>
        <div className="container">
            <div className="flex" style={{justifyContent: 'space-between', flexWrap: 'wrap', gap: '40px', marginBottom: '40px'}}>
                <div style={{maxWidth: '400px'}}>
                    <div className="flex items-center gap-4 mb-4">
                        <img src="/logo.jpeg" alt="Lakshay logo" style={{width: '60px', height: '60px', objectFit: 'contain', borderRadius: '10px', background: 'white', padding: '5px'}} />
                        <h2 style={{fontSize: '1.8rem', margin: 0}}>LAKSHAY Security</h2>
                    </div>
                    <p style={{color: 'var(--text-muted)'}}>Established in <strong>2010</strong>. Your trusted partner in premium security guarding and placement services with over 16+ years of operational excellence.</p>
                    <div style={{marginTop: '20px', fontSize: '0.9rem', color: '#94a3b8'}}>
                        <p><strong>Firm:</strong> LAKSHAY SECURITY & PLACEMENT SERVICES</p>
                        <p><strong>PAN:</strong> AAFFL4454Q</p>
                    </div>
                </div>
                <div style={{maxWidth: '400px'}}>
                    <h3 style={{marginBottom: '20px', fontSize: '1.3rem'}}>Contact Information</h3>
                    <div className="flex items-center gap-4 mb-4"><MapPin color="var(--accent-red)" size={40}/> <span>SCO 10-11, 2nd Floor, Vakil City Center,<br/>PLA Delhi Road, Hisar, Haryana - 125001</span></div>
                    <div className="flex items-center gap-4 mb-4"><Mail color="var(--accent-red)" size={20}/> info@lakshaysecurity.com</div>
                    <div className="flex items-center gap-4"><Phone color="var(--accent-red)" size={20}/> +91 98765 43210</div>
                </div>
            </div>
            <div style={{textAlign: 'center', paddingTop: '20px', borderTop: '1px solid rgba(255,255,255,0.05)', fontSize: '0.85rem', color: '#64748b'}}>
                <p>&copy; 2026 Lakshay Security & Placement Services. All rights reserved.</p>
            </div>
        </div>
    </footer>
  )
}
