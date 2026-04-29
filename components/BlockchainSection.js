'use client'

import { motion } from 'framer-motion'
import { CheckBadgeIcon, CubeIcon, GlobeAltIcon, ShieldCheckIcon, UserGroupIcon, StarIcon, ChatBubbleLeftRightIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import { sectionAnimation, staggerContainer, slideInLeft, slideInRight, staggerItem } from '../utils/animations'
import { RoommateMatchingDashboardImmersive } from './ImmersiveFeatureDashboards'

export default function BlockchainSection() {

  return (
    <section className="py-5" style={{ 
      background: 'linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%)',
      borderTop: '1px solid #e9ecef',
      borderBottom: '1px solid #e9ecef'
    }}>
      <div className="container">
        <motion.div className="text-center mb-4" {...sectionAnimation}>
          <div className="d-inline-flex align-items-center gap-2 mb-3">
            <CheckBadgeIcon style={{ width: '18px', height: '18px', color: '#14432A' }} />
            <span style={{ 
              color: '#14432A',
              fontSize: '0.8rem',
              fontWeight: '600',
              letterSpacing: '0.06em'
            }}>
              PATENTED BLOCKCHAIN TECHNOLOGY
            </span>
          </div>
        </motion.div>

        <div className="row g-3 g-md-4 mb-5 justify-content-center">
          <div className="col-md-4">
            <Link href="/blockchain" className="text-decoration-none text-reset">
              <motion.div 
                className="h-100"
                style={{
                  background: '#ffffff',
                  borderRadius: '16px',
                  border: '1px solid #e8ebea',
                  cursor: 'pointer',
                  transition: 'border-color 0.2s ease, box-shadow 0.2s ease'
                }}
                whileHover={{ 
                  y: -3,
                  boxShadow: '0 12px 32px rgba(20, 67, 42, 0.09)',
                  borderColor: 'rgba(20, 67, 42, 0.22)'
                }}
                whileTap={{ scale: 0.99 }}
              >
                <div className="p-4 p-md-4 text-center">
                  <div 
                    className="d-inline-flex align-items-center justify-content-center mb-3"
                    style={{
                      width: '48px',
                      height: '48px',
                      borderRadius: '14px',
                      background: 'rgba(20, 67, 42, 0.07)'
                    }}
                  >
                    <CubeIcon style={{ width: '24px', height: '24px', color: '#14432A' }} />
                  </div>
                  <h6 className="fw-bold mb-2" style={{ color: '#14432A', fontSize: '0.95rem', letterSpacing: '-0.01em' }}>
                    Blockchain
                  </h6>
                  <p className="mb-0" style={{ fontSize: '0.8125rem', lineHeight: 1.55, color: '#6c757d' }}>
                    Verifiable records for leases, eDocuments, and payments.
                  </p>
                </div>
              </motion.div>
            </Link>
          </div>

          <div className="col-md-4">
            <Link href="/network" className="text-decoration-none text-reset">
              <motion.div 
                className="h-100"
                style={{
                  background: '#ffffff',
                  borderRadius: '16px',
                  border: '1px solid #e8ebea',
                  cursor: 'pointer',
                  transition: 'border-color 0.2s ease, box-shadow 0.2s ease'
                }}
                whileHover={{ 
                  y: -3,
                  boxShadow: '0 12px 32px rgba(20, 67, 42, 0.09)',
                  borderColor: 'rgba(20, 67, 42, 0.22)'
                }}
                whileTap={{ scale: 0.99 }}
              >
                <div className="p-4 text-center">
                  <div 
                    className="d-inline-flex align-items-center justify-content-center mb-3"
                    style={{
                      width: '48px',
                      height: '48px',
                      borderRadius: '14px',
                      background: 'rgba(20, 67, 42, 0.07)'
                    }}
                  >
                    <GlobeAltIcon style={{ width: '24px', height: '24px', color: '#14432A' }} />
                  </div>
                  <h6 className="fw-bold mb-2" style={{ color: '#14432A', fontSize: '0.95rem', letterSpacing: '-0.01em' }}>
                    Network
                  </h6>
                  <p className="mb-0" style={{ fontSize: '0.8125rem', lineHeight: 1.55, color: '#6c757d' }}>
                    Profiles, messaging, and listings in one brokerage layer.
                  </p>
                </div>
              </motion.div>
            </Link>
          </div>

          <div className="col-md-4">
            <Link href="/security" className="text-decoration-none text-reset">
              <motion.div 
                className="h-100"
                style={{
                  background: '#ffffff',
                  borderRadius: '16px',
                  border: '1px solid #e8ebea',
                  cursor: 'pointer',
                  transition: 'border-color 0.2s ease, box-shadow 0.2s ease'
                }}
                whileHover={{ 
                  y: -3,
                  boxShadow: '0 12px 32px rgba(20, 67, 42, 0.09)',
                  borderColor: 'rgba(20, 67, 42, 0.22)'
                }}
                whileTap={{ scale: 0.99 }}
              >
                <div className="p-4 text-center">
                  <div 
                    className="d-inline-flex align-items-center justify-content-center mb-3"
                    style={{
                      width: '48px',
                      height: '48px',
                      borderRadius: '14px',
                      background: 'rgba(20, 67, 42, 0.07)'
                    }}
                  >
                    <ShieldCheckIcon style={{ width: '24px', height: '24px', color: '#14432A' }} />
                  </div>
                  <h6 className="fw-bold mb-2" style={{ color: '#14432A', fontSize: '0.95rem', letterSpacing: '-0.01em' }}>
                    Security
                  </h6>
                  <p className="mb-0" style={{ fontSize: '0.8125rem', lineHeight: 1.55, color: '#6c757d' }}>
                    Encryption and controls that keep accounts and data private.
                  </p>
                </div>
              </motion.div>
            </Link>
          </div>
        </div>
      </div>

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
                          href="/search" 
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
                    <div className="position-relative px-2 px-md-0">
                      <RoommateMatchingDashboardImmersive />
                    </div>
                  </motion.div>
                </div>
              </div>
            </section>

            </div>
          </div>
        </div>
    </section>
  )
}
