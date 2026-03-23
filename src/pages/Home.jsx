import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Shield, Settings, Cpu, Leaf, Brain, Users, Award, FileCheck, CheckCircle, Quote } from 'lucide-react'

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  }

  return (
    <div>

      {/* Hero Section */}
      <section className="relative overflow-hidden" style={{height: 'calc(100vh - 160px)', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
        <div style={{position: 'absolute', inset: 0, zIndex: 0}}>
          <img 
            src="/hero-guards.png" 
            alt="" 
            style={{width: '100%', height: '100%', objectFit: 'cover'}}
          />
        </div>
        <div style={{position: 'absolute', inset: 0, zIndex: 10, background: 'rgba(11, 14, 30, 0.5)'}}></div>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center container"
          style={{position: 'relative', zIndex: 20, maxWidth: '800px'}}
        >
          <h1 style={{fontSize: '3.5rem', fontWeight: 800, marginBottom: '20px'}}>Experienced secure services</h1>
          <p style={{fontSize: '1.2rem', marginBottom: '40px', color: '#e2e8f0'}}>We Supply Protection. A premium agency combining human vigilance with technical solutions.</p>
          <div className="flex justify-center gap-4">
            <Link to="/contact" className="btn-solid">Business Enq</Link>
            <Link to="/contact" className="btn-solid" style={{background: 'transparent', borderColor: 'white'}}>Jobs</Link>
          </div>
        </motion.div>
      </section>

      {/* Why Lakshay Section - with Security Background */}
      <section className="relative overflow-hidden" style={{padding: '100px 0'}}>
        <div style={{position: 'absolute', inset: 0, zIndex: 0}}>
          <img 
            src="/security-cctv.png" 
            alt="" 
            style={{width: '100%', height: '100%', objectFit: 'cover'}}
          />
        </div>
        <div style={{position: 'absolute', inset: 0, zIndex: 1, background: 'rgba(5, 7, 17, 0.6)'}}></div>
        
        <div className="container" style={{position: 'relative', zIndex: 2}}>
          <motion.h2 
            initial={{opacity: 0, y: -20}} 
            whileInView={{opacity: 1, y: 0}} 
            viewport={{once: true}} 
            className="section-title"
          >
            Why Choose <span className="text-accent">Lakshay?</span>
          </motion.h2>
          <motion.p 
            initial={{opacity: 0}} 
            whileInView={{opacity: 1}} 
            viewport={{once: true}} 
            transition={{delay: 0.2}} 
            style={{textAlign: 'center', color: 'var(--text-muted)', fontSize: '1.15rem', maxWidth: '700px', margin: '0 auto 60px'}}
          >
            We combine battle-tested human expertise with cutting-edge technology to deliver uncompromising security solutions across India.
          </motion.p>

          <div style={{display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px'}}>
            {[
              { icon: <Shield size={36}/>, title: "Trained Guards", desc: "1300+ rigorously trained security personnel deployed across 18 states with real-time compliance monitoring.", color: "var(--accent-red)", img: "/security-hero.png" },
              { icon: <Cpu size={36}/>, title: "CCTV Surveillance", desc: "Advanced camera networks with 24/7 live monitoring, motion detection, and instant alert systems.", color: "var(--accent-gold)", img: "/card-cctv.png" },
              { icon: <Settings size={36}/>, title: "Access Control", desc: "Biometric & RFID-based entry systems ensuring zero unauthorized access at every checkpoint.", color: "#3b82f6", img: "/card-access.png" },
              { icon: <Users size={36}/>, title: "Event Security", desc: "Specialized crowd management and VIP protection teams for large-scale corporate and government events.", color: "var(--accent-red)" },
              { icon: <Brain size={36}/>, title: "Risk Assessment", desc: "AI-backed threat analysis and vulnerability audits to proactively neutralize security gaps.", color: "var(--accent-gold)" },
              { icon: <Award size={36}/>, title: "Compliance First", desc: "ISO 9001, PSARA, EPF & ESI compliant operations with 100% incident-free track record.", color: "#3b82f6" },
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{opacity: 0, y: 30}}
                whileInView={{opacity: 1, y: 0}}
                viewport={{once: true}}
                transition={{delay: idx * 0.1}}
                style={{
                  background: 'rgba(255,255,255,0.03)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  transition: 'transform 0.3s, border-color 0.3s',
                  cursor: 'default',
                }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-5px)'; e.currentTarget.style.borderColor = item.color; }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'; }}
              >
                {item.img && (
                  <div style={{width: '100%', height: '150px', position: 'relative', overflow: 'hidden'}}>
                    <img src={item.img} alt={item.title} style={{width: '100%', height: '100%', objectFit: 'cover'}} />
                    <div style={{position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(5,7,17,1) 0%, rgba(5,7,17,0.3) 100%)'}}></div>
                  </div>
                )}
                <div style={{padding: item.img ? '20px 25px 30px' : '35px 25px'}}>
                  <div style={{width: '60px', height: '60px', borderRadius: '12px', background: `${item.color}15`, display: 'flex', alignItems: 'center', justifyContent: 'center', color: item.color, marginBottom: '20px'}}>
                    {item.icon}
                  </div>
                  <h3 style={{fontSize: '1.3rem', fontWeight: 700, color: 'white', marginBottom: '12px'}}>{item.title}</h3>
                  <p style={{color: '#94a3b8', lineHeight: '1.7', fontSize: '0.95rem'}}>{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Accreditations Banner */}
      <section className="py-12" style={{backgroundColor: '#050711', borderTop: '1px solid rgba(255,255,255,0.05)', borderBottom: '1px solid rgba(255,255,255,0.05)'}}>
        <div className="container">
          <div className="flex flex-wrap justify-around items-center gap-6 text-center">
            <motion.div initial={{opacity: 0, y: 10}} whileInView={{opacity: 1, y: 0}} viewport={{once: true}} className="flex items-center gap-3">
              <Award size={32} color="var(--accent-gold)"/>
              <span style={{fontSize: '1.1rem', fontWeight: 600, color: '#e2e8f0'}}>ISO 9001:2015 Certified</span>
            </motion.div>
            <motion.div initial={{opacity: 0, y: 10}} whileInView={{opacity: 1, y: 0}} viewport={{once: true}} transition={{delay: 0.1}} className="flex items-center gap-3">
              <Shield size={32} color="var(--accent-red)"/>
              <span style={{fontSize: '1.1rem', fontWeight: 600, color: '#e2e8f0'}}>PSARA Compliant</span>
            </motion.div>
            <motion.div initial={{opacity: 0, y: 10}} whileInView={{opacity: 1, y: 0}} viewport={{once: true}} transition={{delay: 0.2}} className="flex items-center gap-3">
              <FileCheck size={32} color="var(--accent-gold)"/>
              <span style={{fontSize: '1.1rem', fontWeight: 600, color: '#e2e8f0'}}>EPF & ESI Registered</span>
            </motion.div>
            <motion.div initial={{opacity: 0, y: 10}} whileInView={{opacity: 1, y: 0}} viewport={{once: true}} transition={{delay: 0.3}} className="flex items-center gap-3">
              <CheckCircle size={32} color="var(--accent-red)"/>
              <span style={{fontSize: '1.1rem', fontWeight: 600, color: '#e2e8f0'}}>100% Incident-Free Record</span>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24" style={{backgroundColor: 'var(--bg-main)'}}>
        <div className="container">
          <h2 className="section-title">Client <span className="text-accent">Testimonials</span></h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8" style={{marginTop: '50px'}}>
            <motion.div initial={{opacity: 0, x: -30}} whileInView={{opacity: 1, x: 0}} viewport={{once: true}} className="glass-panel" style={{padding: '40px', position: 'relative'}}>
              <Quote size={40} color="rgba(230, 43, 43, 0.2)" style={{position: 'absolute', top: '20px', left: '20px'}}/>
              <p style={{fontSize: '1.1rem', color: '#cbd5e1', lineHeight: '1.8', fontStyle: 'italic', marginBottom: '20px', position: 'relative', zIndex: 1}}>
                "Lakshay Security has managed our massive warehousing network flawlessly. Their rigid compliance standards and proactive deployment strategies give us unparalleled peace of mind."
              </p>
              <div className="flex items-center gap-4">
                <div style={{width: '50px', height: '50px', background: 'var(--accent-red)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', fontSize: '1.2rem'}}>C</div>
                <div>
                  <h4 style={{fontSize: '1.1rem', fontWeight: 700, color: 'white'}}>Director of Operations</h4>
                  <p style={{color: 'var(--accent-gold)', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px'}}>Cocoon Logistics</p>
                </div>
              </div>
            </motion.div>

            <motion.div initial={{opacity: 0, x: 30}} whileInView={{opacity: 1, x: 0}} viewport={{once: true}} transition={{delay: 0.2}} className="glass-panel" style={{padding: '40px', position: 'relative'}}>
              <Quote size={40} color="rgba(230, 43, 43, 0.2)" style={{position: 'absolute', top: '20px', left: '20px'}}/>
              <p style={{fontSize: '1.1rem', color: '#cbd5e1', lineHeight: '1.8', fontStyle: 'italic', marginBottom: '20px', position: 'relative', zIndex: 1}}>
                "Securing government institutions demands absolute transparency. From Kurukshetra to Rohtak, their trained personnel have maintained elite security protocols year after year."
              </p>
              <div className="flex items-center gap-4">
                <div style={{width: '50px', height: '50px', background: 'var(--accent-gold)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', fontSize: '1.2rem', color: 'black'}}>I</div>
                <div>
                  <h4 style={{fontSize: '1.1rem', fontWeight: 700, color: 'white'}}>Facility Head</h4>
                  <p style={{color: 'var(--accent-red)', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px'}}>Govt. ITI Network</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
