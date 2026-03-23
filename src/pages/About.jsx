import { motion } from 'framer-motion'
import { Briefcase, MapPin } from 'lucide-react'

export default function About() {
  const leaders = [
    {
      name: "Sanjay Singh",
      role: "Managing Partner & Founder",
      exp: "10+ Years",
      desc: "Sanjay serves as the primary leader and visionary behind Lakshay Security. Having worked rigorously as a ground supervisor for over 10 years, he deeply understands the operational nuances of the industry. He leveraged this unparalleled experience to establish and lead this firm.",
      img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80"
    },
    {
      name: "Subhash Chander",
      role: "Partner",
      exp: "10+ Years",
      desc: "Highly qualified in fiscal management, Subhash brings over a decade of experience operating as a financial advisor for a prominent firm before joining Lakshay as a core partner, ensuring our sustainable growth and client trust.",
      img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&q=80"
    },
    {
      name: "Pariti Rani",
      role: "Partner & Operations Advisor",
      exp: "5+ Years",
      desc: "Pariti brings over 5 years of advisory experience from her previous firm. She expertly handles multiple high-profile sites concurrently, coordinating seamless operations between our regional offices and on-ground supervisors.",
      img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80"
    }
  ];

  return (
    <div className="py-24" style={{backgroundColor: 'var(--bg-main)'}}>
      <div className="container">
        
        {/* Intro */}
        <div style={{textAlign: 'center', marginBottom: '80px', maxWidth: '900px', margin: '0 auto'}}>
            <motion.h1 initial={{opacity: 0, y: -20}} animate={{opacity: 1, y: 0}} className="section-title">
                About <span className="text-accent">Our Firm</span>
            </motion.h1>
            <motion.p initial={{opacity: 0}} animate={{opacity: 1}} transition={{delay: 0.2}} style={{color: 'var(--text-muted)', fontSize: '1.2rem', lineHeight: '1.8'}}>
                We provide the ultimate shield of protection through uncompromising professionalism. Our firm is driven by a highly qualified core team of <strong>30-40 regional experts</strong> operating across our dual locations. We maintain absolute ground control through an extensive network of specialized, region-specific supervisors stationed directly at client-sites.
            </motion.p>
        </div>

        {/* Legacy & Scale Metrics */}
        <div style={{marginBottom: '80px'}}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <motion.div initial={{opacity: 0, scale: 0.9}} whileInView={{opacity: 1, scale: 1}} viewport={{once: true}} className="glass-panel text-center" style={{padding: '30px 20px', borderTop: '3px solid var(--accent-gold)'}}>
                    <h3 style={{fontSize: '2.5rem', fontWeight: 800, color: 'white', marginBottom: '10px'}}>2010</h3>
                    <p style={{color: 'var(--accent-gold)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1px'}}>Year Established</p>
                    <p style={{color: 'var(--text-muted)', fontSize: '0.9rem', marginTop: '10px'}}>Over 16+ years of commanding ground presence and trusted operational delivery.</p>
                </motion.div>

                <motion.div initial={{opacity: 0, scale: 0.9}} whileInView={{opacity: 1, scale: 1}} viewport={{once: true}} transition={{delay: 0.15}} className="glass-panel text-center" style={{padding: '30px 20px', borderTop: '3px solid var(--accent-red)'}}>
                    <h3 style={{fontSize: '2.5rem', fontWeight: 800, color: 'white', marginBottom: '10px'}}>₹50+ Cr</h3>
                    <p style={{color: 'var(--accent-red)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1px'}}>Annual Turnover</p>
                    <p style={{color: 'var(--text-muted)', fontSize: '0.9rem', marginTop: '10px'}}>Consistently scaling financial strength ensuring maximum stability for our clients.</p>
                </motion.div>

                <motion.div initial={{opacity: 0, scale: 0.9}} whileInView={{opacity: 1, scale: 1}} viewport={{once: true}} transition={{delay: 0.3}} className="glass-panel text-center" style={{padding: '30px 20px', borderTop: '3px solid white'}}>
                    <h3 style={{fontSize: '2.5rem', fontWeight: 800, color: 'white', marginBottom: '10px'}}>1300+</h3>
                    <p style={{color: '#cbd5e1', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1px'}}>Elite Guards</p>
                    <p style={{color: 'var(--text-muted)', fontSize: '0.9rem', marginTop: '10px'}}>A massive, highly-trained deployment force actively securing tier-1 assets.</p>
                </motion.div>
            </div>
        </div>

        {/* Leadership */}
        <div style={{marginBottom: '80px'}}>
            <h2 style={{fontSize: '2rem', textAlign: 'center', marginBottom: '40px'}}>Meet Our <span className="text-red">Leadership</span></h2>
            <div className="grid grid-cols-3 gap-8">
              {leaders.map((leader, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.15 }}
                  className="glass-panel text-center"
                  style={{padding: '30px 20px'}}
                >
                  <div style={{width: '120px', height: '120px', borderRadius: '50%', margin: '0 auto 20px', overflow: 'hidden', border: '3px solid var(--accent-red)'}}>
                      <img src={leader.img} alt={leader.name} style={{width:'100%', height:'100%', objectFit: 'cover'}}/>
                  </div>
                  <h3 style={{fontSize: '1.4rem'}}>{leader.name}</h3>
                  <p style={{color: 'var(--accent-gold)', fontWeight: 600, margin: '5px 0 15px'}}>{leader.role}</p>
                  <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '5px', marginBottom: '15px', color: '#94a3b8', fontSize: '0.9rem'}}>
                      <Briefcase size={16}/> {leader.exp} Experience
                  </div>
                  <p style={{color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.6'}}>{leader.desc}</p>
                </motion.div>
              ))}
            </div>
        </div>

        {/* Office Locations */}
        <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="glass-panel"
        >
            <h2 style={{fontSize: '2rem', textAlign: 'center', marginBottom: '40px'}}>Our <span className="text-accent">Offices</span></h2>
            <div className="grid grid-cols-2 gap-8 text-center">
                <div>
                   <MapPin size={40} color="var(--accent-red)" style={{margin: '0 auto 15px'}}/>
                   <h3 style={{fontSize: '1.3rem', marginBottom: '10px'}}>Head Office - Rohtak</h3>
                   <p style={{color: 'var(--text-muted)'}}>43, Ground Floor, Agro Mall,<br/>Sector-14, Rohtak, Haryana</p>
                </div>
                <div>
                   <MapPin size={40} color="var(--accent-gold)" style={{margin: '0 auto 15px'}}/>
                   <h3 style={{fontSize: '1.3rem', marginBottom: '10px'}}>Corporate Branch - Hisar</h3>
                   <p style={{color: 'var(--text-muted)'}}>SCO 10-11, 2nd Floor, Vakil City Center,<br/>PLA Delhi Road, Hisar, Haryana - 125001</p>
                </div>
            </div>
            <div className="text-center" style={{marginTop: '40px', paddingTop: '20px', borderTop: '1px solid rgba(255,255,255,0.1)'}}>
                <p style={{color: '#94a3b8'}}>We actively coordinate and deploy pan-India operations from these central hubs seamlessly.</p>
            </div>
        </motion.div>

      </div>
    </div>
  )
}
