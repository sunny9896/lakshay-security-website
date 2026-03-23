import { motion } from 'framer-motion'

export default function Services() {
  const services = [
    { title: "Guarding and Security", desc: "Manned Guarding and Physical Security | Electronic Sensors & Surveillance Systems. Highly trained personnel ensuring 24/7 protection.", img: "/service-guarding.png" },
    { title: "Facility Management", desc: "Premium facility management services offering total building management including the maintenance of space and infrastructure.", img: "https://images.unsplash.com/photo-1587560699334-cc4ff634909a?w=600&q=80" },
    { title: "Management Consultant", desc: "Evaluate your unique security needs, zero in on threats and devise strategic frameworks to comprehensively protect your people.", img: "https://images.unsplash.com/photo-1573164713988-8665fc963095?w=600&q=80" },
    { title: "Crisis Management & Emergency", desc: "Emergency Services, Quick Response Teams (QRTs), and disaster recovery planning to ensure your business remains operational during a crisis.", img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600&q=80" },
    { title: "Training", desc: "Comprehensive security training programs for personnel, corporate staff, and emergency responders tailored by veterans.", img: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&q=80" },
    { title: "Sensors and CCTVs", desc: "Expert advice and deployment of smart electronic solutions, CCTV installations, access control, and remote monitoring systems.", img: "/service-sensors.png" }
  ];

  return (
    <div className="py-24" style={{backgroundColor: 'var(--bg-main)'}}>
      <div className="container">
        <div style={{textAlign: 'center', marginBottom: '60px'}}>
            <motion.h1 
                initial={{opacity: 0, y: -20}} 
                animate={{opacity: 1, y: 0}} 
                className="section-title"
                style={{marginBottom: '1rem'}}
            >
                Our <span className="text-accent">Services</span>
            </motion.h1>
            <motion.p 
                initial={{opacity: 0}} 
                animate={{opacity: 1}} 
                transition={{delay: 0.2}}
                style={{color: 'var(--text-muted)', fontSize: '1.2rem', maxWidth: '800px', margin: '0 auto'}}
            >
                We offer a comprehensive suite of security and facility management solutions tailored to provide unmatched protection and peace of mind.
            </motion.p>
        </div>

        <div className="grid grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.1 }}
              className="border-card"
            >
              <div style={{width: '100%', height: '240px', overflow: 'hidden', padding: '15px'}}>
                <img 
                  src={service.img} 
                  alt={service.title} 
                  style={{width: '100%', height: '100%', objectFit: 'cover', borderRadius: '15px'}} 
                />
              </div>
              <h3 style={{fontSize: '1.5rem', margin: '15px 0', padding: '0 20px'}}>{service.title}</h3>
              <p style={{color: 'var(--text-muted)', padding: '0 30px', fontSize: '0.95rem', lineHeight: '1.6'}}>{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
