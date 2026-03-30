'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { LockClosedIcon, DocumentCheckIcon, DocumentTextIcon, ClockIcon } from '@heroicons/react/24/outline'
import { sectionAnimation, staggerContainer, slideInLeft, slideInRight, staggerItem } from '../utils/animations'

export default function Legacy() {
  return (
    <>
      {/* eDocument System — placed before A Legacy of Trust */}
      <section className="d-flex align-items-center" style={{
        background: 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 50%, #e9ecef 100%)',
        position: 'relative',
        overflow: 'hidden',
        minHeight: '100vh',
        padding: '2rem 0',
        width: '100%'
      }}>
        <div style={{ width: '100%', padding: '0' }}>
          <div className="row align-items-center" style={{ margin: 0 }}>
            <div className="col-lg-12">
              <motion.div className="text-dark text-center mb-5" {...sectionAnimation}>
                <h1 className="display-3 fw-bold mb-4" style={{ 
                  fontFamily: "'Playfair Display', serif",
                  color: '#14432A'
                }}>
                  eDocument System
                </h1>
                <p className="lead mb-4" style={{ 
                  fontSize: '1.3rem',
                  color: '#495057',
                  maxWidth: '800px',
                  margin: '0 auto'
                }}>
                  Find and rent real estate with roommates using our comprehensive eDocument system. Streamline lease agreements, roommate contracts, and property documentation all in one place.
                </p>
              </motion.div>
            </div>
            
            <motion.div className="col-lg-6" {...slideInLeft}>
              <div className="position-relative">
                <div style={{
                  background: 'rgba(255,255,255,0.95)',
                  borderRadius: '20px',
                  padding: '50px',
                  boxShadow: '0 20px 60px rgba(0,0,0,0.3)',
                  backdropFilter: 'blur(10px)'
                }}>
                  <h3 className="mb-4 fw-bold" style={{ color: '#14432A' }}>eDocument Dashboard</h3>
                  <div className="row g-3 mb-4">
                    <div className="col-6">
                      <div className="text-center p-3" style={{ 
                        background: '#f8f9fa', 
                        borderRadius: '12px',
                        border: '2px solid #e9ecef'
                      }}>
                        <DocumentCheckIcon style={{ width: '32px', height: '32px', color: '#14432A' }} />
                        <div className="mt-2">
                          <h6 className="mb-1 fw-bold" style={{ color: '#14432A' }}>15</h6>
                          <small className="text-muted">Active Leases</small>
                        </div>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="text-center p-3" style={{ 
                        background: '#f8f9fa', 
                        borderRadius: '12px',
                        border: '2px solid #e9ecef'
                      }}>
                        <ClockIcon style={{ width: '32px', height: '32px', color: '#14432A' }} />
                        <div className="mt-2">
                          <h6 className="mb-1 fw-bold" style={{ color: '#14432A' }}>3</h6>
                          <small className="text-muted">Pending Docs</small>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <h6 className="fw-bold mb-3" style={{ color: '#14432A' }}>Document Status</h6>
                    <div className="space-y-2">
                      <div className="d-flex justify-content-between align-items-center p-2" style={{ background: '#f8f9fa', borderRadius: '8px' }}>
                        <span className="fw-medium">Lease Agreement</span>
                        <span className="text-success fw-bold">✓ Signed</span>
                      </div>
                      <div className="d-flex justify-content-between align-items-center p-2" style={{ background: '#f8f9fa', borderRadius: '8px' }}>
                        <span className="fw-medium">Roommate Contract</span>
                        <span className="text-success fw-bold">✓ Complete</span>
                      </div>
                      <div className="d-flex justify-content-between align-items-center p-2" style={{ background: '#f8f9fa', borderRadius: '8px' }}>
                        <span className="fw-medium">Property Inspection</span>
                        <span className="text-warning fw-bold">⚠ Pending</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div className="col-lg-6" {...slideInRight}>
              <div className="text-dark" style={{ marginTop: '2rem' }}>
                <motion.div 
                  className="row g-3 mb-4" 
                  style={{ marginBottom: '2rem' }}
                  variants={staggerContainer}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true, margin: '-50px' }}
                >
                  <motion.div className="col-md-6" variants={staggerItem}>
                    <div className="d-flex align-items-center">
                      <div style={{
                        background: 'rgba(20, 67, 42, 0.1)',
                        borderRadius: '12px',
                        padding: '12px',
                        marginRight: '15px'
                      }}>
                        <DocumentTextIcon style={{ width: '24px', height: '24px', color: '#14432A' }} />
                      </div>
                      <div>
                        <h5 className="mb-1 fw-bold">Digital Leases</h5>
                        <small className="opacity-75">Electronic lease agreements</small>
                      </div>
                    </div>
                  </motion.div>
                  <motion.div className="col-md-6" variants={staggerItem}>
                    <div className="d-flex align-items-center">
                      <div style={{
                        background: 'rgba(20, 67, 42, 0.1)',
                        borderRadius: '12px',
                        padding: '12px',
                        marginRight: '15px'
                      }}>
                        <DocumentCheckIcon style={{ width: '24px', height: '24px', color: '#14432A' }} />
                      </div>
                      <div>
                        <h5 className="mb-1 fw-bold">Roommate Contracts</h5>
                        <small className="opacity-75">Secure roommate agreements</small>
                      </div>
                    </div>
                  </motion.div>
                  <motion.div className="col-md-6" variants={staggerItem}>
                    <div className="d-flex align-items-center">
                      <div style={{
                        background: 'rgba(20, 67, 42, 0.1)',
                        borderRadius: '12px',
                        padding: '12px',
                        marginRight: '15px'
                      }}>
                        <DocumentTextIcon style={{ width: '24px', height: '24px', color: '#14432A' }} />
                      </div>
                      <div>
                        <h5 className="mb-1 fw-bold">Property Documents</h5>
                        <small className="opacity-75">Complete property files</small>
                      </div>
                    </div>
                  </motion.div>
                  <motion.div className="col-md-6" variants={staggerItem}>
                    <div className="d-flex align-items-center">
                      <div style={{
                        background: 'rgba(20, 67, 42, 0.1)',
                        borderRadius: '12px',
                        padding: '12px',
                        marginRight: '15px'
                      }}>
                        <LockClosedIcon style={{ width: '24px', height: '24px', color: '#14432A' }} />
                      </div>
                      <div>
                        <h5 className="mb-1 fw-bold">Instant Access</h5>
                        <small className="opacity-75">24/7 document access</small>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
                
                <motion.div 
                  className="d-flex gap-3 flex-wrap" 
                  style={{ marginTop: '1.5rem' }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  <Link 
                    href="/edocument-system" 
                    className="btn btn-primary btn-lg px-4 py-3 fw-bold"
                    style={{ 
                      borderRadius: '12px',
                      backgroundColor: '#14432A',
                      borderColor: '#14432A',
                      boxShadow: '0 4px 15px rgba(20, 67, 42, 0.3)',
                      transition: 'all 0.3s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.transform = 'translateY(-2px)';
                      e.target.style.boxShadow = '0 6px 20px rgba(0,0,0,0.3)';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.transform = 'translateY(0)';
                      e.target.style.boxShadow = '0 4px 15px rgba(0,0,0,0.2)';
                    }}
                  >
                    Access Documents
                  </Link>
                  <Link 
                    href="/edocuments-audit-tracking" 
                    className="btn btn-outline-primary btn-lg px-4 py-3 fw-bold"
                    style={{ 
                      borderRadius: '12px',
                      borderColor: '#14432A',
                      color: '#14432A',
                      borderWidth: '2px',
                      transition: 'all 0.3s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.background = 'rgba(20, 67, 42, 0.1)';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.background = 'transparent';
                    }}
                  >
                    Learn More
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

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
              <h2 className="fw-bold mb-4" style={{ 
                fontFamily: "'Playfair Display', serif",
                color: 'white',
                fontSize: '3rem',
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

