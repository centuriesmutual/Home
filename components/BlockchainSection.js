'use client'

import { motion } from 'framer-motion'
import { ShieldCheckIcon, LockClosedIcon, CheckBadgeIcon, UserGroupIcon, CubeIcon, DocumentCheckIcon, HomeIcon, DocumentTextIcon, StarIcon, CreditCardIcon, MagnifyingGlassIcon, MapPinIcon, ChatBubbleLeftRightIcon, HeartIcon, ClockIcon, CheckCircleIcon, ExclamationTriangleIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import { sectionAnimation, staggerContainer, cardAnimation, slideInLeft, slideInRight, staggerItem } from '../utils/animations'

export default function BlockchainSection() {

  return (
    <section className="py-5" style={{ 
      background: 'linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%)',
      borderTop: '1px solid #e9ecef',
      borderBottom: '1px solid #e9ecef'
    }}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <motion.div className="text-center mb-5" {...sectionAnimation}>
              <div className="d-inline-flex align-items-center gap-2 mb-3">
                <CheckBadgeIcon style={{ width: '18px', height: '18px', color: '#14432A' }} />
                <span style={{ 
                  color: '#14432A',
                  fontSize: '0.8rem',
                  fontWeight: '600',
                  letterSpacing: '0.5px',
                  textTransform: 'uppercase'
                }}>
                  Patented Technology
                </span>
              </div>
              
              <h5 className="fw-bold mb-3" style={{ color: '#14432A', fontSize: '1.1rem' }}>
                Patented Blockchain Technology
              </h5>
              
              <p className="text-muted mb-5" style={{ fontSize: '0.95rem', lineHeight: '1.6', maxWidth: '800px', margin: '0 auto' }}>
                Our proprietary blockchain system ensures immutable, transparent, and secure contract enforcement 
                across all platform transactions, providing unparalleled trust and reliability in digital agreements.
              </p>
            </motion.div>

            {/* Feature Icons */}
            <div className="row g-4 mt-4">
              <div className="col-md-4 text-center">
                <Link href="/individual-family-services" className="text-decoration-none">
                  <motion.div 
                    className="card border-0 shadow-sm h-100" 
                    style={{
                  background: '#ffffff',
                  borderRadius: '12px',
                  padding: '2rem 1.5rem',
                  border: '1px solid #e9ecef',
                  height: '100%',
                      boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease'
                    }}
                    whileHover={{ 
                      transform: 'translateY(-5px)',
                      boxShadow: '0 8px 25px rgba(0,0,0,0.15)'
                    }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.1 }}
                  >
                  <div className="mb-3 d-flex justify-content-center">
                      <UserGroupIcon style={{ 
                      width: '40px', 
                      height: '40px', 
                      color: '#14432A'
                    }} />
                  </div>
                  <h6 className="fw-bold mb-2" style={{ 
                    color: '#14432A',
                    fontSize: '1rem',
                    marginBottom: '0.75rem'
                  }}>
                      Individual & Family Services
                  </h6>
                  <p className="text-muted mb-0" style={{ 
                    fontSize: '0.9rem',
                    lineHeight: '1.6'
                  }}>
                      Comprehensive health insurance and health services for individuals and families
                  </p>
                  </motion.div>
                </Link>
              </div>
              
              <div className="col-md-4 text-center">
                <Link href="/blockchain" className="text-decoration-none">
                  <motion.div 
                    className="card border-0 shadow-sm h-100" 
                    style={{
                  background: '#ffffff',
                  borderRadius: '12px',
                  padding: '2rem 1.5rem',
                  border: '1px solid #e9ecef',
                  height: '100%',
                      boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease'
                    }}
                    whileHover={{ 
                      transform: 'translateY(-5px)',
                      boxShadow: '0 8px 25px rgba(0,0,0,0.15)'
                    }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.1 }}
                  >
                  <div className="mb-3 d-flex justify-content-center">
                      <CubeIcon style={{ 
                      width: '40px', 
                      height: '40px', 
                      color: '#14432A'
                    }} />
                  </div>
                  <h6 className="fw-bold mb-2" style={{ 
                    color: '#14432A',
                    fontSize: '1rem',
                    marginBottom: '0.75rem'
                  }}>
                      BlockChain
                  </h6>
                  <p className="text-muted mb-0" style={{ 
                    fontSize: '0.9rem',
                    lineHeight: '1.6'
                  }}>
                      Secure block space with messaging, contacts, room listings, with For You content
                  </p>
                  </motion.div>
                </Link>
              </div>
              
              <div className="col-md-4 text-center">
                <Link href="/audit-compliance" className="text-decoration-none">
                  <motion.div 
                    className="card border-0 shadow-sm h-100" 
                    style={{
                  background: '#ffffff',
                  borderRadius: '12px',
                  padding: '2rem 1.5rem',
                  border: '1px solid #e9ecef',
                  height: '100%',
                      boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease'
                    }}
                    whileHover={{ 
                      transform: 'translateY(-5px)',
                      boxShadow: '0 8px 25px rgba(0,0,0,0.15)'
                    }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.1 }}
                  >
                  <div className="mb-3 d-flex justify-content-center">
                      <DocumentCheckIcon style={{ 
                      width: '40px', 
                      height: '40px', 
                      color: '#14432A'
                    }} />
                  </div>
                  <h6 className="fw-bold mb-2" style={{ 
                    color: '#14432A',
                    fontSize: '1rem',
                    marginBottom: '0.75rem'
                  }}>
                      Audit & Compliance
                  </h6>
                  <p className="text-muted mb-0" style={{ 
                    fontSize: '0.9rem',
                    lineHeight: '1.6'
                  }}>
                      Automated smart contract governance and claims handling for financial contracts
                  </p>
                  </motion.div>
                </Link>
              </div>
            </div>

            {/* Find Perfect Roommate Section */}
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
                  
                  <motion.div className="col-lg-12" {...slideInLeft}>
                    <div className="text-dark" style={{ marginTop: '2rem' }}>
                      <motion.div 
                        className="row g-3 mb-5" 
                        style={{ marginBottom: '2rem' }}
                        variants={staggerContainer}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true, margin: '-50px' }}
                      >
                        <motion.div className="col-md-3" variants={staggerItem}>
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
                        <motion.div className="col-md-3" variants={staggerItem}>
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
                        <motion.div className="col-md-3" variants={staggerItem}>
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
                        <motion.div className="col-md-3" variants={staggerItem}>
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
                        className="position-relative mb-5"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-50px' }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                      >
                        <div style={{
                          background: 'rgba(255,255,255,0.95)',
                          borderRadius: '20px',
                          padding: '50px',
                          boxShadow: '0 20px 60px rgba(0,0,0,0.3)',
                          backdropFilter: 'blur(10px)'
                        }}>
                          <h3 className="mb-4 fw-bold" style={{ color: '#14432A' }}>Roommate Matching Dashboard</h3>
                          <div className="row g-3 mb-4">
                            <div className="col-md-3">
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
                            <div className="col-md-3">
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
                            <div className="col-md-6">
                              <div className="p-3" style={{ 
                                background: '#f8f9fa', 
                                borderRadius: '12px',
                                border: '2px solid #e9ecef'
                              }}>
                                <h6 className="fw-bold mb-3" style={{ color: '#14432A' }}>System Features</h6>
                                <div className="space-y-2">
                                  <div className="d-flex justify-content-between align-items-center p-2" style={{ background: '#ffffff', borderRadius: '8px' }}>
                                    <span className="fw-medium">Compatible Matching</span>
                                    <span className="text-success fw-bold">✓ Active</span>
                                  </div>
                                  <div className="d-flex justify-content-between align-items-center p-2" style={{ background: '#ffffff', borderRadius: '8px' }}>
                                    <span className="fw-medium">Verified Profiles</span>
                                    <span className="text-success fw-bold">✓ Enabled</span>
                                  </div>
                                  <div className="d-flex justify-content-between align-items-center p-2" style={{ background: '#ffffff', borderRadius: '8px' }}>
                                    <span className="fw-medium">Secure Messaging</span>
                                    <span className="text-success fw-bold">✓ Secured</span>
                                  </div>
                                  <div className="d-flex justify-content-between align-items-center p-2" style={{ background: '#ffffff', borderRadius: '8px' }}>
                                    <span className="fw-medium">Trust Score System</span>
                                    <span className="text-success fw-bold">✓ Integrated</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                      
                      <motion.div 
                        className="d-flex gap-3 flex-wrap justify-content-center" 
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
                </div>
              </div>
            </section>

            {/* In-House Trust Score System Section */}
            <section className="d-flex align-items-center" style={{
              background: 'linear-gradient(135deg, #f8f9fa 0%, #ffffff 50%, #f8f9fa 100%)',
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
                        In-House Trust Score System
                      </h1>
                      <p className="lead mb-4" style={{ 
                        fontSize: '1.3rem',
                        color: '#495057',
                        maxWidth: '800px',
                        margin: '0 auto'
                      }}>
                        Transparent in-house trust score based on our recommendation engine (1-300 scale) and verified member system. Find the perfect room and roommate with our patented member trust rating system.
                      </p>
                    </motion.div>
                  </div>
                  
                  <motion.div className="col-lg-12" {...slideInLeft}>
                    <div className="text-dark" style={{ marginTop: '2rem' }}>
                      <motion.div 
                        className="row g-3 mb-5" 
                        style={{ marginBottom: '2rem' }}
                        variants={staggerContainer}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true, margin: '-50px' }}
                      >
                        <motion.div className="col-md-3" variants={staggerItem}>
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
                        <motion.div className="col-md-3" variants={staggerItem}>
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
                              <small className="opacity-75">Reliable scoring system</small>
                            </div>
                          </div>
                        </motion.div>
                        <motion.div className="col-md-3" variants={staggerItem}>
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
                        <motion.div className="col-md-3" variants={staggerItem}>
                          <div className="d-flex align-items-center">
                            <div style={{
                              background: 'rgba(20, 67, 42, 0.1)',
                              borderRadius: '12px',
                              padding: '12px',
                              marginRight: '15px'
                            }}>
                              <HeartIcon style={{ width: '24px', height: '24px', color: '#14432A' }} />
                            </div>
                            <div>
                              <h5 className="mb-1 fw-bold">Roommate Matching</h5>
                              <small className="opacity-75">Compatible preferences</small>
                            </div>
                          </div>
                        </motion.div>
                      </motion.div>
                      
                      <motion.div 
                        className="position-relative mb-5"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-50px' }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                      >
                        <div style={{
                          background: 'rgba(255,255,255,0.95)',
                          borderRadius: '20px',
                          padding: '50px',
                          boxShadow: '0 20px 60px rgba(0,0,0,0.3)',
                          backdropFilter: 'blur(10px)'
                        }}>
                          <h3 className="mb-4 fw-bold" style={{ color: '#14432A' }}>Trust Score Dashboard</h3>
                          <div className="row g-3 mb-4">
                            <div className="col-md-3">
                              <div className="text-center p-3" style={{ 
                                background: '#f8f9fa', 
                                borderRadius: '12px',
                                border: '2px solid #e9ecef'
                              }}>
                                <StarIcon style={{ width: '32px', height: '32px', color: '#14432A' }} />
                                <div className="mt-2">
                                  <h6 className="mb-1 fw-bold" style={{ color: '#14432A' }}>225</h6>
                                  <small className="text-muted">Trust Score</small>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-3">
                              <div className="text-center p-3" style={{ 
                                background: '#f8f9fa', 
                                borderRadius: '12px',
                                border: '2px solid #e9ecef'
                              }}>
                                <CheckCircleIcon style={{ width: '32px', height: '32px', color: '#14432A' }} />
                                <div className="mt-2">
                                  <h6 className="mb-1 fw-bold" style={{ color: '#14432A' }}>Excellent</h6>
                                  <small className="text-muted">Rating</small>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="p-3" style={{ 
                                background: '#f8f9fa', 
                                borderRadius: '12px',
                                border: '2px solid #e9ecef'
                              }}>
                                <h6 className="fw-bold mb-3" style={{ color: '#14432A' }}>System Status</h6>
                                <div className="space-y-2">
                                  <div className="d-flex justify-content-between align-items-center p-2" style={{ background: '#ffffff', borderRadius: '8px' }}>
                                    <span className="fw-medium">In-House Trust Score</span>
                                    <span className="text-success fw-bold">✓ Active</span>
                                  </div>
                                  <div className="d-flex justify-content-between align-items-center p-2" style={{ background: '#ffffff', borderRadius: '8px' }}>
                                    <span className="fw-medium">Verified Members</span>
                                    <span className="text-success fw-bold">✓ Verified</span>
                                  </div>
                                  <div className="d-flex justify-content-between align-items-center p-2" style={{ background: '#ffffff', borderRadius: '8px' }}>
                                    <span className="fw-medium">Review System</span>
                                    <span className="text-success fw-bold">✓ Enabled</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                      
                      <motion.div 
                        className="d-flex gap-3 flex-wrap justify-content-center" 
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
                          Find Roommates
                        </Link>
                        <Link 
                          href="/trustscore" 
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
                          More Information
                        </Link>
                      </motion.div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </section>

            {/* eDocument System Section */}
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
                  
                  <motion.div className="col-lg-12" {...slideInLeft}>
                    <div className="text-dark" style={{ marginTop: '2rem' }}>
                      <motion.div 
                        className="row g-3 mb-5" 
                        style={{ marginBottom: '2rem' }}
                        variants={staggerContainer}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true, margin: '-50px' }}
                      >
                        <motion.div className="col-md-3" variants={staggerItem}>
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
                        <motion.div className="col-md-3" variants={staggerItem}>
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
                        <motion.div className="col-md-3" variants={staggerItem}>
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
                        <motion.div className="col-md-3" variants={staggerItem}>
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
                        className="position-relative mb-5"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-50px' }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                      >
                        <div style={{
                          background: 'rgba(255,255,255,0.95)',
                          borderRadius: '20px',
                          padding: '50px',
                          boxShadow: '0 20px 60px rgba(0,0,0,0.3)',
                          backdropFilter: 'blur(10px)'
                        }}>
                          <h3 className="mb-4 fw-bold" style={{ color: '#14432A' }}>eDocument Dashboard</h3>
                          <div className="row g-3 mb-4">
                            <div className="col-md-3">
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
                            <div className="col-md-3">
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
                            <div className="col-md-6">
                              <div className="p-3" style={{ 
                                background: '#f8f9fa', 
                                borderRadius: '12px',
                                border: '2px solid #e9ecef'
                              }}>
                                <h6 className="fw-bold mb-3" style={{ color: '#14432A' }}>Document Status</h6>
                                <div className="space-y-2">
                                  <div className="d-flex justify-content-between align-items-center p-2" style={{ background: '#ffffff', borderRadius: '8px' }}>
                                    <span className="fw-medium">Lease Agreement</span>
                                    <span className="text-success fw-bold">✓ Signed</span>
                                  </div>
                                  <div className="d-flex justify-content-between align-items-center p-2" style={{ background: '#ffffff', borderRadius: '8px' }}>
                                    <span className="fw-medium">Roommate Contract</span>
                                    <span className="text-success fw-bold">✓ Complete</span>
                                  </div>
                                  <div className="d-flex justify-content-between align-items-center p-2" style={{ background: '#ffffff', borderRadius: '8px' }}>
                                    <span className="fw-medium">Property Inspection</span>
                                    <span className="text-warning fw-bold">⚠ Pending</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                      
                      <motion.div 
                        className="d-flex gap-3 flex-wrap justify-content-center" 
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

          </div>
        </div>
      </div>
    </section>
  )
}

