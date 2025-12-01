'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

export default function Legacy() {
  return (
    <>
      {/* Top Section - Light Grey Background */}
      <section className="py-5" style={{ 
        background: '#f8f9fa',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div className="container-fluid">
          <div className="row align-items-center" style={{ margin: 0 }}>
            {/* Left: Image with overlay button */}
            <motion.div 
              className="col-lg-6 p-0"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div style={{ position: 'relative', width: '100%', height: '500px' }}>
                <Image
                  src="/deer.jpeg"
                  alt="Legacy of Trust"
                  fill
                  style={{ objectFit: 'contain' }}
                  priority
                />
                {/* Blue button overlay on bottom right */}
                <div style={{
                  position: 'absolute',
                  bottom: '20px',
                  right: '20px',
                  background: '#0066cc',
                  borderRadius: '8px',
                  padding: '15px 25px',
                  textAlign: 'center',
                  boxShadow: '0 4px 15px rgba(0,0,0,0.2)'
                }}>
                  <div style={{ 
                    fontSize: '2rem', 
                    fontWeight: 'bold', 
                    color: 'white',
                    lineHeight: '1'
                  }}>
                    2024
                  </div>
                  <div style={{ 
                    fontSize: '0.8rem', 
                    color: 'white',
                    marginTop: '4px'
                  }}>
                    Est.
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right: Text content */}
            <motion.div 
              className="col-lg-6 p-5"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="fw-bold mb-4" style={{ 
                fontFamily: "'Playfair Display', serif",
                color: '#14432A',
                fontSize: '3rem',
                lineHeight: '1.2'
              }}>
                A Legacy of Trust
              </h2>
              <p style={{ 
                fontSize: '1.1rem',
                color: '#495057',
                lineHeight: '1.8',
                marginBottom: '1.5rem'
              }}>
                At Centuries Mutual, we've built our reputation on a foundation of trust, expertise, and unwavering commitment to our clients' financial success through secure, reliable systems and proven credibility.
              </p>
              <p style={{ 
                fontSize: '1.1rem',
                color: '#495057',
                lineHeight: '1.8',
                marginBottom: 0
              }}>
                Our advanced security infrastructure ensures that every family receives the highest level of protection and personalized attention. Through state-of-the-art encryption, secure data handling, and transparent practices, we guide families toward financial security with complete confidence.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Bottom Section - Deep Green Background */}
      <section className="py-5" style={{ 
        background: '#14432A',
        color: 'white',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div className="container-fluid">
          <div className="row align-items-center" style={{ margin: 0 }}>
            {/* Left: Text content */}
            <motion.div 
              className="col-lg-8 p-5"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="mb-4" style={{ 
                color: 'white',
                fontSize: '2.5rem',
                lineHeight: '1.2'
              }}>
                About Centuries Mutual
              </h2>
              <p style={{ 
                fontSize: '1.1rem',
                color: 'white',
                lineHeight: '1.8',
                marginBottom: 0,
                opacity: 0.95
              }}>
                We are a trusted financial services company dedicated to providing comprehensive solutions and building lasting relationships with our clients.
              </p>
            </motion.div>

            {/* Right: Button */}
            <motion.div 
              className="col-lg-4 p-5 text-center text-lg-start"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Link 
                href="/about"
                className="btn"
                style={{
                  background: '#e9ecef',
                  color: '#495057',
                  borderRadius: '8px',
                  padding: '15px 40px',
                  fontSize: '1.1rem',
                  fontWeight: '600',
                  textDecoration: 'none',
                  border: 'none',
                  display: 'inline-block',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = '#dee2e6'
                  e.target.style.transform = 'translateY(-2px)'
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = '#e9ecef'
                  e.target.style.transform = 'translateY(0)'
                }}
              >
                Learn More About Us
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}

