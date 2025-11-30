'use client'

import { motion } from 'framer-motion'
import { WifiIcon, ServerIcon, SignalIcon, ShieldCheckIcon, BoltIcon, GlobeAltIcon, PhoneIcon, ChatBubbleLeftRightIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import { sectionAnimation, slideInLeft, slideInRight, staggerContainer, staggerItem } from '../utils/animations'

export default function NetworkDevices() {
  return (
    <section className="network-devices-section" style={{
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
            <motion.div className="text-dark text-center mb-5" {...sectionAnimation}>
              <h1 className="display-3 fw-bold mb-4" style={{ 
                fontFamily: "'Playfair Display', serif",
                color: '#14432A'
              }}>
                Custom Network Devices
              </h1>
              <p className="lead mb-4" style={{ 
                fontSize: '1.3rem',
                color: '#495057',
                maxWidth: '800px',
                margin: '0 auto'
              }}>
                Build a secure, high-performance home network with our custom network devices, integrated phone systems, and secure messaging systems. 
                Enterprise-grade networking solutions for your home.
              </p>
            </motion.div>
          </div>
          
          <motion.div className="col-lg-6" {...slideInLeft}>
            <div className="text-dark" style={{ marginTop: '2rem' }}>
              <style jsx>{`
                @media (max-width: 991px) {
                  .network-text-container {
                    margin-top: 4rem !important;
                  }
                }
              `}</style>
              <div className="network-text-container">
              
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
                      <ServerIcon style={{ width: '24px', height: '24px', color: '#14432A' }} />
                    </div>
                    <div>
                      <h5 className="mb-1 fw-bold">Routers & Switches</h5>
                      <small className="opacity-75">High-performance hardware</small>
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
                      <h5 className="mb-1 fw-bold">Secure Gateway</h5>
                      <small className="opacity-75">Advanced threat protection</small>
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
                      <GlobeAltIcon style={{ width: '24px', height: '24px', color: '#14432A' }} />
                    </div>
                    <div>
                      <h5 className="mb-1 fw-bold">Smart Management</h5>
                      <small className="opacity-75">Remote configuration</small>
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
                      <SignalIcon style={{ width: '24px', height: '24px', color: '#14432A' }} />
                    </div>
                    <div>
                      <h5 className="mb-1 fw-bold">Extended Range</h5>
                      <small className="opacity-75">Whole home coverage</small>
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
                      <PhoneIcon style={{ width: '24px', height: '24px', color: '#14432A' }} />
                    </div>
                    <div>
                      <h5 className="mb-1 fw-bold">Phone Systems</h5>
                      <small className="opacity-75">Private phone protocol</small>
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
                      <ChatBubbleLeftRightIcon style={{ width: '24px', height: '24px', color: '#14432A' }} />
                    </div>
                    <div>
                      <h5 className="mb-1 fw-bold">Messaging Systems</h5>
                      <small className="opacity-75">Secure messaging protocol</small>
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
                  href="/shop/network" 
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
                  href="/learnmore/network" 
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
          
          <motion.div className="col-lg-6" {...slideInRight}>
            <div className="position-relative">
              <div style={{
                background: 'rgba(255,255,255,0.95)',
                borderRadius: '20px',
                padding: '50px',
                boxShadow: '0 20px 60px rgba(0,0,0,0.3)',
                backdropFilter: 'blur(10px)'
              }}>
                <h3 className="mb-4 fw-bold" style={{ color: '#14432A' }}>Network Dashboard</h3>
                <div className="row g-3 mb-4">
                  <div className="col-6">
                    <div className="text-center p-3" style={{ 
                      background: '#f8f9fa', 
                      borderRadius: '12px',
                      border: '2px solid #e9ecef'
                    }}>
                      <WifiIcon style={{ width: '32px', height: '32px', color: '#14432A' }} />
                      <div className="mt-2">
                        <h6 className="mb-1 fw-bold" style={{ color: '#14432A' }}>WiFi 6E</h6>
                        <small className="text-muted">Latest Standard</small>
                      </div>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="text-center p-3" style={{ 
                      background: '#f8f9fa', 
                      borderRadius: '12px',
                      border: '2px solid #e9ecef'
                    }}>
                      <BoltIcon style={{ width: '32px', height: '32px', color: '#14432A' }} />
                      <div className="mt-2">
                        <h6 className="mb-1 fw-bold" style={{ color: '#14432A' }}>10Gbps</h6>
                        <small className="text-muted">Max Speed</small>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mb-4">
                  <h6 className="fw-bold mb-3" style={{ color: '#14432A' }}>Network Features</h6>
                  <div className="space-y-2">
                    <div className="d-flex justify-content-between align-items-center p-2" style={{ background: '#f8f9fa', borderRadius: '8px' }}>
                      <span className="fw-medium">Mesh Networking</span>
                      <span className="text-success fw-bold">✓ Enabled</span>
                    </div>
                    <div className="d-flex justify-content-between align-items-center p-2" style={{ background: '#f8f9fa', borderRadius: '8px' }}>
                      <span className="fw-medium">VPN Support</span>
                      <span className="text-success fw-bold">✓ Active</span>
                    </div>
                    <div className="d-flex justify-content-between align-items-center p-2" style={{ background: '#f8f9fa', borderRadius: '8px' }}>
                      <span className="fw-medium">Firewall Protection</span>
                      <span className="text-success fw-bold">✓ Secured</span>
                    </div>
                    <div className="d-flex justify-content-between align-items-center p-2" style={{ background: '#f8f9fa', borderRadius: '8px' }}>
                      <span className="fw-medium">Phone Systems</span>
                      <span className="text-success fw-bold">✓ Integrated</span>
                    </div>
                    <div className="d-flex justify-content-between align-items-center p-2" style={{ background: '#f8f9fa', borderRadius: '8px' }}>
                      <span className="fw-medium">Messaging Systems</span>
                      <span className="text-success fw-bold">✓ Active</span>
                    </div>
                  </div>
                </div>
                
                <div className="mb-3">
                  <small className="text-muted d-block mb-2">Powered by Centuries Mutual Network Technology</small>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

