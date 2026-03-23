import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Clock, ShieldCheck, CheckCircle2, AlertCircle } from 'lucide-react'
import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', type: 'business', message: '' });
  const [status, setStatus] = useState({ state: 'idle', message: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(!formData.name || !formData.phone || !formData.email) {
      setStatus({ state: 'error', message: 'Name, Phone, and Email are required fields.' });
      return;
    }
    
    setStatus({ state: 'loading', message: 'Sending securely...' });
    
    try {
      const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:3001';
      const response = await fetch(`${apiUrl}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      
      if(response.ok) {
        setStatus({ state: 'success', message: 'Your request has been securely logged in our system. Our team will contact you shortly.' });
        setFormData({ name: '', phone: '', email: '', type: 'business', message: '' });
      } else {
        setStatus({ state: 'error', message: 'Failed to submit request. Please try again.' });
      }
    } catch (error) {
      console.error(error);
      setStatus({ state: 'error', message: 'Network connection failed. Please ensure the backend is running.' });
    }
  };

  return (
    <div className="py-24" style={{backgroundColor: 'var(--bg-main)'}}>
      <div className="container">
        
        <div style={{textAlign: 'center', marginBottom: '60px'}}>
            <motion.h1 initial={{opacity: 0, y: -20}} animate={{opacity: 1, y: 0}} className="section-title">
                Get In <span className="text-red">Touch</span>
            </motion.h1>
            <motion.p initial={{opacity: 0}} animate={{opacity: 1}} transition={{delay: 0.2}} style={{color: 'var(--text-muted)', fontSize: '1.1rem', maxWidth: '700px', margin: '0 auto'}}>
                Whether you need premium security deployment, facility management queries, or placement coordination, our centralized desk is ready 24/7.
            </motion.p>
        </div>

        <div className="grid grid-cols-2 gap-8" style={{maxWidth: '1100px', margin: '0 auto'}}>
            {/* Contact Info */}
            <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex flex-col gap-6"
            >
                <div className="glass-panel flex items-center gap-6" style={{padding: '25px'}}>
                    <div style={{minWidth:'60px', height:'60px', background:'rgba(230, 43, 43, 0.1)', borderRadius:'50%', display:'flex', alignItems:'center', justifyContent:'center', color:'var(--accent-red)'}}>
                        <Phone size={28}/>
                    </div>
                    <div>
                        <h3 style={{fontSize: '1.2rem', marginBottom:'5px'}}>Direct Hotlines</h3>
                        <p style={{color: 'var(--text-muted)'}}>+91 74041-59725</p>
                        <p style={{color: 'var(--text-muted)'}}>+91 90530-60222, +91 83938-22222</p>
                    </div>
                </div>

                <div className="glass-panel flex items-center gap-6" style={{padding: '25px'}}>
                    <div style={{minWidth:'60px', height:'60px', background:'rgba(250, 204, 21, 0.1)', borderRadius:'50%', display:'flex', alignItems:'center', justifyContent:'center', color:'var(--accent-gold)'}}>
                        <Mail size={28}/>
                    </div>
                    <div>
                        <h3 style={{fontSize: '1.2rem', marginBottom:'5px'}}>Email Coordination</h3>
                        <p style={{color: 'var(--text-muted)'}}>Lsnps2008@gmail.com</p>
                        <p style={{color: 'var(--text-muted)'}}>info@lakshaysecurity.com</p>
                    </div>
                </div>

                <div className="glass-panel flex items-center gap-6" style={{padding: '25px'}}>
                    <div style={{minWidth:'60px', height:'60px', background:'rgba(255, 255, 255, 0.1)', borderRadius:'50%', display:'flex', alignItems:'center', justifyContent:'center', color:'white'}}>
                        <Clock size={28}/>
                    </div>
                    <div>
                        <h3 style={{fontSize: '1.2rem', marginBottom:'5px'}}>Operational Hours</h3>
                        <p style={{color: 'var(--text-muted)'}}>24/7 Security Dispatch & Support</p>
                        <p style={{color: '#94a3b8', fontSize: '0.85rem'}}>Corporate HQ: Mon-Sat, 9AM - 6PM</p>
                    </div>
                </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="glass-panel"
            >
                <h3 style={{fontSize: '1.5rem', marginBottom: '20px'}}>Send a Direct Request</h3>
                
                {status.state === 'success' && (
                    <div style={{padding: '15px', background: 'rgba(34, 197, 94, 0.1)', border: '1px solid #22c55e', borderRadius: '10px', color: '#22c55e', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '10px'}}>
                        <CheckCircle2 size={24}/> {status.message}
                    </div>
                )}
                
                {status.state === 'error' && (
                    <div style={{padding: '15px', background: 'rgba(239, 68, 68, 0.1)', border: '1px solid #ef4444', borderRadius: '10px', color: '#ef4444', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '10px'}}>
                        <AlertCircle size={24}/> {status.message}
                    </div>
                )}

                <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                    <input 
                        type="text" 
                        placeholder="Your Full Name *" 
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        style={{width: '100%', padding: '15px 20px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '10px', color: 'white', outline: 'none'}}
                    />
                    <div className="flex gap-4">
                        <input 
                            type="text" 
                            placeholder="Phone Number *" 
                            value={formData.phone}
                            onChange={(e) => setFormData({...formData, phone: e.target.value})}
                            style={{width: '100%', padding: '15px 20px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '10px', color: 'white', outline: 'none'}}
                        />
                        <input 
                            type="email" 
                            placeholder="Email Address *" 
                            value={formData.email}
                            onChange={(e) => setFormData({...formData, email: e.target.value})}
                            style={{width: '100%', padding: '15px 20px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '10px', color: 'white', outline: 'none'}}
                        />
                    </div>
                    <select 
                        value={formData.type}
                        onChange={(e) => setFormData({...formData, type: e.target.value})}
                        style={{width: '100%', padding: '15px 20px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '10px', color: 'white', outline: 'none'}}
                    >
                        <option value="business" style={{color:'black'}}>Business Enquiry (Looking for Guards)</option>
                        <option value="job" style={{color:'black'}}>Job Application (Apply as Guard/Supervisor)</option>
                        <option value="other" style={{color:'black'}}>Other Queries</option>
                    </select>
                    <textarea 
                        placeholder="Your Message..." 
                        rows="4"
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                        style={{width: '100%', padding: '15px 20px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '10px', color: 'white', outline: 'none', resize: 'none'}}
                    ></textarea>
                    
                    <button 
                        disabled={status.state === 'loading'}
                        className="btn-solid" 
                        style={{marginTop: '10px', opacity: status.state === 'loading' ? 0.7 : 1}}
                    >
                        <ShieldCheck size={20}/> 
                        {status.state === 'loading' ? 'Encrypting & Sending...' : 'Submit Request'}
                    </button>
                </form>
            </motion.div>
        </div>

      </div>
    </div>
  )
}
