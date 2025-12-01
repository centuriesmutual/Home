'use client'

import { motion } from 'framer-motion'
import { HomeIcon, LockClosedIcon, BellIcon, KeyIcon, ShieldCheckIcon, ComputerDesktopIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import { sectionAnimation, slideInLeft, slideInRight, staggerContainer, staggerItem } from '../utils/animations'

export default function SmartHomeSecurity() {
  return (
    <section className="smart-home-security-section" style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 50%, #e9ecef 100%)',
      position: 'relative',
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'center',
      padding: '2rem 0'
    }}>
      {/* Background Pattern */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundImage: 'url("data:image/svg+xml,%3Csvg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%2314432A" fill-opacity="0.05"%3E%3Cpath d="M20 20c0-11.046-8.954-20-20-20v20h20z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
        opacity: 0.6
      }} />
      
      <div className="container">
        <div className="row align-items-center" style={{ padding: '1rem 0' }}>
          <div className="col-lg-12">
            <motion.div 
              className="text-dark text-center mb-5" 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-200px' }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            >
              <h1 className="display-3 fw-bold mb-4" style={{ 
                fontFamily: "'Playfair Display', serif",
                color: '#14432A'
              }}>
                Smart Home Security System
              </h1>
              <p className="lead mb-4" style={{ 
                fontSize: '1.3rem',
                color: '#495057',
                maxWidth: '800px',
                margin: '0 auto'
              }}>
                Complete home security solution integrating cameras, network devices, and smart sensors. 
                Enterprise-grade security for comprehensive home protection.
              </p>
            </motion.div>
          </div>
          
          <motion.div 
            className="col-lg-6" 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-200px' }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <div className="text-dark" style={{ marginTop: '2rem' }}>
              <style jsx>{`
                @media (max-width: 991px) {
                  .security-text-container {
                    margin-top: 4rem !important;
                  }
                }
              `}</style>
              <div className="security-text-container">
              
              <motion.div 
                className="row g-3 mb-4" 
                style={{ marginBottom: '2rem' }}
                variants={staggerContainer}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true, margin: '-200px' }}
              >
                <motion.div className="col-md-6" variants={staggerItem}>
                  <div className="d-flex align-items-center">
                    <div style={{
                      background: 'rgba(20, 67, 42, 0.1)',
                      borderRadius: '12px',
                      padding: '12px',
                      marginRight: '15px'
                    }}>
                      <ComputerDesktopIcon style={{ width: '24px', height: '24px', color: '#14432A' }} />
                    </div>
                    <div>
                      <h5 className="mb-1 fw-bold">Integrated System</h5>
                      <small className="opacity-75">Unified security platform</small>
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
                      <BellIcon style={{ width: '24px', height: '24px', color: '#14432A' }} />
                    </div>
                    <div>
                      <h5 className="mb-1 fw-bold">Smart Alerts</h5>
                      <small className="opacity-75">Real-time notifications</small>
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
                      <KeyIcon style={{ width: '24px', height: '24px', color: '#14432A' }} />
                    </div>
                    <div>
                      <h5 className="mb-1 fw-bold">Access Control</h5>
                      <small className="opacity-75">Smart locks & keys</small>
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
                      <ShieldCheckIcon style={{ width: '24px', height: '24px', color: '#14432A' }} />
                    </div>
                    <div>
                      <h5 className="mb-1 fw-bold">Complete Protection</h5>
                      <small className="opacity-75">End-to-end security</small>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
              
              <motion.div 
                className="d-flex gap-3 flex-wrap" 
                style={{ marginTop: '1.5rem' }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-200px' }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <Link 
                  href="/shop/security-system" 
                  className="btn btn-primary btn-lg px-4 py-3 fw-bold"
                  style={{ 
                    borderRadius: '12px',
                    backgroundColor: '#14432A',
                    borderColor: '#14432A',
                    boxShadow: '0 4px 15px rgba(20, 67, 42, 0.3)',
                    transition: 'all 0.3s ease',
                    position: 'relative',
                    zIndex: 10,
                    pointerEvents: 'auto'
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
                  Shop Now
                </Link>
                <Link 
                  href="/learnmore/security-system" 
                  className="btn btn-outline-primary btn-lg px-4 py-3 fw-bold"
                  style={{ 
                    borderRadius: '12px',
                    borderColor: '#14432A',
                    color: '#14432A',
                    borderWidth: '2px',
                    transition: 'all 0.3s ease',
                    position: 'relative',
                    zIndex: 10,
                    pointerEvents: 'auto'
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
            </div>
          </motion.div>
          
          <motion.div 
            className="col-lg-6" 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-200px' }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <div className="position-relative">
              <motion.div 
                style={{
                  background: 'rgba(255,255,255,0.95)',
                  borderRadius: '20px',
                  padding: '50px',
                  boxShadow: '0 20px 60px rgba(0,0,0,0.3)',
                  backdropFilter: 'blur(10px)'
                }}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: '-200px' }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <motion.h3 
                  className="mb-4 fw-bold" 
                  style={{ color: '#14432A' }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-200px' }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  Security System Dashboard
                </motion.h3>
                <motion.div 
                  className="row g-3 mb-4"
                  variants={staggerContainer}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true, margin: '-50px' }}
                >
                  <motion.div className="col-6" variants={staggerItem}>
                    <div className="text-center p-3" style={{ 
                      background: '#f8f9fa', 
                      borderRadius: '12px',
                      border: '2px solid #e9ecef'
                    }}>
                      <HomeIcon style={{ width: '32px', height: '32px', color: '#14432A' }} />
                      <div className="mt-2">
                        <h6 className="mb-1 fw-bold" style={{ color: '#14432A' }}>100%</h6>
                        <small className="text-muted">Coverage</small>
                      </div>
                    </div>
                  </motion.div>
                  <motion.div className="col-6" variants={staggerItem}>
                    <div className="text-center p-3" style={{ 
                      background: '#f8f9fa', 
                      borderRadius: '12px',
                      border: '2px solid #e9ecef'
                    }}>
                      <LockClosedIcon style={{ width: '32px', height: '32px', color: '#14432A' }} />
                      <div className="mt-2">
                        <h6 className="mb-1 fw-bold" style={{ color: '#14432A' }}>256-bit</h6>
                        <small className="text-muted">Encryption</small>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
                
                <motion.div 
                  className="mb-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-200px' }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <h6 className="fw-bold mb-3" style={{ color: '#14432A' }}>System Status</h6>
                  <motion.div 
                    className="space-y-2"
                    variants={staggerContainer}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true, margin: '-50px' }}
                  >
                    <motion.div 
                      className="d-flex justify-content-between align-items-center p-2" 
                      style={{ background: '#f8f9fa', borderRadius: '8px' }}
                      variants={staggerItem}
                    >
                      <span className="fw-medium">All Systems Active</span>
                      <span className="text-success fw-bold">✓ Online</span>
                    </motion.div>
                    <motion.div 
                      className="d-flex justify-content-between align-items-center p-2" 
                      style={{ background: '#f8f9fa', borderRadius: '8px' }}
                      variants={staggerItem}
                    >
                      <span className="fw-medium">Smart Sensors</span>
                      <span className="text-success fw-bold">✓ Monitoring</span>
                    </motion.div>
                    <motion.div 
                      className="d-flex justify-content-between align-items-center p-2" 
                      style={{ background: '#f8f9fa', borderRadius: '8px' }}
                      variants={staggerItem}
                    >
                      <span className="fw-medium">Automated Alerts</span>
                      <span className="text-success fw-bold">✓ Enabled</span>
                    </motion.div>
                  </motion.div>
                </motion.div>
                
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

