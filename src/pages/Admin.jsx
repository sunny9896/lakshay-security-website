import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Database, Inbox, User, Phone, Mail, Clock } from 'lucide-react';

export default function Admin() {
  const [inquiries, setInquiries] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:3001/api/inquiries')
      .then(res => res.json())
      .then(data => {
        setInquiries(data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="py-24" style={{backgroundColor: 'var(--bg-main)', minHeight: '100vh'}}>
      <div className="container">
        <div style={{textAlign: 'center', marginBottom: '40px'}}>
            <motion.div initial={{scale: 0.9}} animate={{scale: 1}} style={{display: 'inline-flex', padding: '15px', background: 'rgba(230, 43, 43, 0.1)', borderRadius: '50%', color: 'var(--accent-red)', marginBottom: '15px'}}>
                <Database size={40} />
            </motion.div>
            <h1 className="section-title">Enquiry <span className="text-accent">Database</span></h1>
            <p style={{color: 'var(--text-muted)'}}>Secure internal dashboard for reviewing backend SQLite form submissions.</p>
        </div>

        {loading ? (
            <p style={{textAlign: 'center', color: 'white'}}>Loading secure database...</p>
        ) : inquiries.length === 0 ? (
            <div className="glass-panel text-center py-12">
                <Inbox size={48} style={{margin: '0 auto', color: '#64748b', marginBottom: '20px'}} />
                <h3 style={{fontSize: '1.5rem', color: 'white'}}>No inquiries yet</h3>
                <p style={{color: 'var(--text-muted)'}}>When users submit the contact form, their data will securely appear here.</p>
            </div>
        ) : (
            <div className="flex flex-col gap-4">
                {inquiries.map((inq, idx) => (
                    <motion.div 
                        initial={{opacity: 0, y: 10}} 
                        animate={{opacity: 1, y: 0}} 
                        transition={{delay: idx * 0.1}}
                        key={idx} 
                        className="glass-panel" 
                        style={{padding: '25px', borderLeft: '4px solid var(--accent-red)'}}
                    >
                        <div className="flex justify-between items-start mb-4">
                            <div>
                                <h3 style={{fontSize: '1.3rem', fontWeight: 600, color: 'white', display: 'flex', alignItems: 'center', gap: '10px'}}><User size={18} color="var(--accent-gold)"/> {inq.name}</h3>
                                <span style={{display: 'inline-block', padding: '4px 10px', background: 'rgba(255,255,255,0.1)', borderRadius: '20px', fontSize: '0.8rem', color: '#cbd5e1', marginTop: '8px', textTransform: 'uppercase'}}>{inq.type}</span>
                            </div>
                            <span style={{color: '#64748b', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '5px'}}><Clock size={14}/> {new Date(inq.created_at).toLocaleString()}</span>
                        </div>
                        
                        <div className="grid grid-cols-2 gap-4 mb-4" style={{background: 'rgba(0,0,0,0.3)', padding: '15px', borderRadius: '10px'}}>
                            <div className="flex items-center gap-3 text-white">
                                <Phone size={16} color="var(--accent-red)"/> {inq.phone}
                            </div>
                            <div className="flex items-center gap-3 text-white">
                                <Mail size={16} color="var(--accent-gold)"/> {inq.email}
                            </div>
                        </div>

                        {inq.message && (
                            <div style={{padding: '15px', background: 'rgba(255,255,255,0.02)', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.05)'}}>
                                <p style={{color: '#e2e8f0', margin: 0}}>{inq.message}</p>
                            </div>
                        )}
                    </motion.div>
                ))}
            </div>
        )}
      </div>
    </div>
  );
}
