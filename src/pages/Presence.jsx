import { motion } from 'framer-motion'
import { Truck, Building2, Factory, Landmark, Box, Leaf } from 'lucide-react'

import mapImg from '../assets/map_locations.png'

export default function Presence() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  }

  // Coordinates [latitude, longitude] !! Leaflet uses Lat, Lng
  const markers = [
    { name: "Haryana", coordinates: [29.0588, 76.0856] },
    { name: "Delhi", coordinates: [28.6139, 77.2090] },
    { name: "Punjab", coordinates: [31.1471, 75.3412] },
    { name: "Himachal Pradesh", coordinates: [31.1048, 77.1734] },
    { name: "Rajasthan", coordinates: [26.8206, 74.2179] },
    { name: "Gujarat", coordinates: [22.2587, 71.1924] },
    { name: "Maharashtra", coordinates: [19.7515, 75.7139] },
    { name: "Madhya Pradesh", coordinates: [22.9734, 78.6569] },
    { name: "Uttar Pradesh", coordinates: [26.8467, 80.9462] },
    { name: "Uttarakhand", coordinates: [30.0668, 79.0193] },
    { name: "West Bengal", coordinates: [22.9868, 87.8550] },
    { name: "Andhra Pradesh", coordinates: [15.9129, 79.7400] },
    { name: "Karnataka", coordinates: [15.3173, 75.7139] },
    { name: "Tamil Nadu", coordinates: [11.1271, 78.6569] },
    { name: "Odisha", coordinates: [20.9517, 85.0985] },
    { name: "Telangana", coordinates: [18.1124, 79.0193] },
    { name: "Jammu", coordinates: [32.7266, 74.8671] }
  ];

  const corporateClients = [
    { name: "Cocoon Logistics", sector: "Logistics", icon: <Truck size={32} /> },
    { name: "Warehousing Express", sector: "Logistics", icon: <Box size={32} /> },
    { name: "Boxman Logistics", sector: "Logistics", icon: <Box size={32} /> },
    { name: "Flywheel Logistics", sector: "Logistics", icon: <Truck size={32} /> },
    { name: "Shriram Housing Finance", sector: "Finance", icon: <Landmark size={32} /> },
    { name: "Shree Shubham", sector: "Agro & Logistics", icon: <Leaf size={32} /> },
    { name: "Hema Engineering", sector: "Manufacturing", icon: <Factory size={32} /> },
    { name: "Metro Security Solutions", sector: "Security Infra", icon: <Building2 size={32} /> },
  ];

  const govtClients = [
    { name: "National Institute of Designing", loc: "Kurukshetra" },
    { name: "Govt. ITI", loc: "Matanhail, Meham, Hisar, Kalanour, Rohtak, Jind" },
    { name: "The Meham Co-Op Sugar Mill", loc: "Meham" },
  ];

  return (
    <div className="py-24" style={{backgroundColor: 'var(--bg-main)'}}>
      <div className="container">
        
        {/* Header */}
        <div style={{textAlign: 'center', marginBottom: '60px'}}>
            <motion.h1 initial={{opacity: 0, y: -20}} animate={{opacity: 1, y: 0}} className="section-title">
                Pan India <span className="text-accent">Presence & Clientele</span>
            </motion.h1>
            <motion.p initial={{opacity: 0}} animate={{opacity: 1}} transition={{delay: 0.2}} style={{color: 'var(--text-muted)', fontSize: '1.2rem', maxWidth: '800px', margin: '0 auto'}}>
                With over <strong className="text-red">16+ Years</strong> of operational excellence, we secure facilities across <strong className="text-accent">18+ States</strong> and <strong className="text-accent">105+ Districts</strong> with a massive force of <strong className="text-red">1300+ Guards</strong> serving <strong className="text-accent">90+ Elite Clients</strong>.
            </motion.p>
        </div>

        {/* Interactive Map Section */}
        <div className="glass-panel" style={{marginBottom: '60px', padding: '40px 20px'}}>
            <h2 style={{fontSize: '2rem', marginBottom: '30px', textAlign: 'center'}}>Operating <span className="text-accent">Zones</span></h2>
            <div style={{width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(255,255,255,0.02)', borderRadius: '20px', padding: '20px'}}>
                <img 
                    src={mapImg} 
                    alt="Lakshay Regional Operating Territories Map" 
                    style={{width: '100%', maxWidth: '800px', height: 'auto', borderRadius: '15px'}} 
                />
            </div>
        </div>

        {/* Clients Dashboard */}
        <div className="grid grid-cols-2 gap-8" style={{alignItems: 'start'}}>
            {/* Corporate/Logistics Clients Grid */}
            <div>
                <h3 style={{fontSize: '1.8rem', marginBottom: '30px', textAlign: 'center'}}>Corporate <span className="text-red">Portfolio</span></h3>
                <div className="grid grid-cols-2 gap-4">
                    {corporateClients.map((client, idx) => (
                        <div key={idx} className="border-card" style={{padding: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '15px', background: 'rgba(0,0,0,0.2)'}}>
                            <div style={{color: 'var(--accent-gold)'}}>
                                {client.icon}
                            </div>
                            <h4 style={{fontSize: '1.1rem', fontWeight: 600, lineHeight: 1.3, textAlign: 'center'}}>{client.name}</h4>
                            <span style={{fontSize: '0.8rem', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '1px'}}>{client.sector}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Government Clients */}
            <div className="flex flex-col gap-6">
                <h3 style={{fontSize: '1.8rem', marginBottom: '6px', textAlign: 'center'}}>Government <span className="text-accent">Institutes</span></h3>
                {govtClients.map((client, idx) => (
                    <div key={idx} className="glass-panel flex items-center justify-between" style={{padding: '25px 30px', background: 'rgba(0,0,0,0.2)'}}>
                        <div>
                            <h4 style={{fontSize: '1.3rem', fontWeight: 600, color: 'white', marginBottom: '5px'}}>{client.name}</h4>
                            <p style={{color: 'var(--text-muted)'}}>{client.loc}</p>
                        </div>
                        <div style={{color: 'var(--accent-red)'}}>
                            <Building2 size={40}/>
                        </div>
                    </div>
                ))}
                
                <div className="glass-panel text-center" style={{padding: '30px', marginTop: '10px', border: '1px solid var(--accent-red)'}}>
                    <h3 style={{fontSize: '1.4rem', color: 'var(--accent-gold)', marginBottom: '10px'}}>Absolute Transparency</h3>
                    <p style={{color: '#94a3b8'}}>All operations are fully vetted, structured, and executed in compliance with local law enforcement and regulatory standards across the nation.</p>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}
