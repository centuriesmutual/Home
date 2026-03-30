'use client'

import { motion } from 'framer-motion'
import { CheckBadgeIcon, ShieldCheckIcon, UserGroupIcon, StarIcon, ChatBubbleLeftRightIcon, HeartIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import { sectionAnimation, staggerContainer, slideInLeft, slideInRight, staggerItem } from '../utils/animations'

export default function BlockchainSection() {

  return (
    <>
      <section className="bg-dark text-white py-5">
        <div className="container">
          <motion.div className="text-center" {...sectionAnimation}>
            <div className="d-inline-flex align-items-center gap-2 mb-3">
              <CheckBadgeIcon style={{ width: '18px', height: '18px', color: 'rgba(255,255,255,0.9)' }} />
              <span style={{ 
                color: 'rgba(255,255,255,0.85)',
                fontSize: '0.8rem',
                fontWeight: '600',
                letterSpacing: '0.5px',
                textTransform: 'uppercase'
              }}>
                Patented Technology
              </span>
            </div>
            
            <h5 className="fw-bold mb-3" style={{ color: '#ffffff', fontSize: '1.1rem' }}>
              Patented Blockchain Technology
            </h5>
            
            <p className="mb-0" style={{ 
              fontSize: '0.95rem', 
              lineHeight: '1.6', 
              maxWidth: '800px', 
              margin: '0 auto',
              color: 'rgba(255,255,255,0.85)'
            }}>
              Our proprietary blockchain system ensures immutable, transparent, and secure contract enforcement 
              across all platform transactions, providing unparalleled trust and reliability in digital agreements.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-5" style={{ 
        background: 'linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%)',
        borderTop: '1px solid #e9ecef',
        borderBottom: '1px solid #e9ecef'
      }}>
        <div style={{ width: '100%', padding: '0' }}>
          <div className="row" style={{ margin: 0 }}>
            <div className="col-12">

            {/* Find Perfect Roommate Section */}
            <section className="d-flex align-items-center" style={{
              background: 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 50%, #e9ecef 100%)',
              position: 'relative',
              overflow: 'hidden',
              minHeight: '100vh',
              marginTop: 0,
              padding: '3rem 0',
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
                        Find Your Perfect Roommate
                      </h1>
                      <p className="lead mb-4" style={{ 
                        fontSize: '1.3rem',
                        color: '#495057',
                        maxWidth: '800px',
                        margin: '0 auto'
                      }}>
                        Connect with compatible roommates using our advanced matching system. Verified profiles, secure messaging, and our in-house trust score help you find the perfect living companion.
                      </p>
                    </motion.div>
                  </div>
                  
                  <motion.div className="col-lg-6" {...slideInLeft}>
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
                              <UserGroupIcon style={{ width: '24px', height: '24px', color: '#14432A' }} />
                            </div>
                            <div>
                              <h5 className="mb-1 fw-bold">Compatible Matching</h5>
                              <small className="opacity-75">Smart preference matching</small>
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
                              <h5 className="mb-1 fw-bold">Verified Profiles</h5>
                              <small className="opacity-75">ID & background checked</small>
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
                              <h5 className="mb-1 fw-bold">Secure Messaging</h5>
                              <small className="opacity-75">Safe communication</small>
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
                              <StarIcon style={{ width: '24px', height: '24px', color: '#14432A' }} />
                            </div>
                            <div>
                              <h5 className="mb-1 fw-bold">Trust Score</h5>
                              <small className="opacity-75">Reliable rating system</small>
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
                          href="/rooms" 
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
                          Browse Roommates
                        </Link>
                        <Link 
                          href="/rentalequity" 
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
                  
                  <motion.div className="col-lg-6" {...slideInRight}>
                    <div className="position-relative">
                      <div style={{
                        background: 'rgba(255,255,255,0.95)',
                        borderRadius: '20px',
                        padding: '50px',
                        boxShadow: '0 20px 60px rgba(0,0,0,0.3)',
                        backdropFilter: 'blur(10px)'
                      }}>
                        <h3 className="mb-4 fw-bold" style={{ color: '#14432A' }}>Roommate Matching Dashboard</h3>
                        <div className="row g-3 mb-4">
                          <div className="col-6">
                            <div className="text-center p-3" style={{ 
                              background: '#f8f9fa', 
                              borderRadius: '12px',
                              border: '2px solid #e9ecef'
                            }}>
                              <UserGroupIcon style={{ width: '32px', height: '32px', color: '#14432A' }} />
                              <div className="mt-2">
                                <h6 className="mb-1 fw-bold" style={{ color: '#14432A' }}>5,000+</h6>
                                <small className="text-muted">Verified Members</small>
                              </div>
                            </div>
                          </div>
                          <div className="col-6">
                            <div className="text-center p-3" style={{ 
                              background: '#f8f9fa', 
                              borderRadius: '12px',
                              border: '2px solid #e9ecef'
                            }}>
                              <HeartIcon style={{ width: '32px', height: '32px', color: '#14432A' }} />
                              <div className="mt-2">
                                <h6 className="mb-1 fw-bold" style={{ color: '#14432A' }}>95%</h6>
                                <small className="text-muted">Match Rate</small>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        <div className="mb-4">
                          <h6 className="fw-bold mb-3" style={{ color: '#14432A' }}>System Features</h6>
                          <div className="space-y-2">
                            <div className="d-flex justify-content-between align-items-center p-2" style={{ background: '#f8f9fa', borderRadius: '8px' }}>
                              <span className="fw-medium">Compatible Matching</span>
                              <span className="text-success fw-bold">✓ Active</span>
                            </div>
                            <div className="d-flex justify-content-between align-items-center p-2" style={{ background: '#f8f9fa', borderRadius: '8px' }}>
                              <span className="fw-medium">Verified Profiles</span>
                              <span className="text-success fw-bold">✓ Enabled</span>
                            </div>
                            <div className="d-flex justify-content-between align-items-center p-2" style={{ background: '#f8f9fa', borderRadius: '8px' }}>
                              <span className="fw-medium">Secure Messaging</span>
                              <span className="text-success fw-bold">✓ Secured</span>
                            </div>
                            <div className="d-flex justify-content-between align-items-center p-2" style={{ background: '#f8f9fa', borderRadius: '8px' }}>
                              <span className="fw-medium">Trust Score System</span>
                              <span className="text-success fw-bold">✓ Integrated</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </section>

            </div>
          </div>
        </div>
      </section>
    </>
  )
}
