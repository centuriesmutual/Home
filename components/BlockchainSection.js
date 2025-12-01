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

            {/* Find Your Perfect Room Section */}
            <motion.div 
              className="row align-items-center mb-5"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-200px' }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            >
              <div className="col-lg-12 mb-4">
                <div className="text-center">
                  <h2 className="display-4 fw-bold mb-3" style={{ 
                    fontFamily: "'Playfair Display', serif",
                    color: '#14432A'
                  }}>
                    Find Your Perfect Room
                  </h2>
                  <p className="lead mb-4" style={{ 
                    fontSize: '1.3rem',
                    color: '#495057',
                    maxWidth: '800px',
                    margin: '0 auto'
                  }}>
                    Discover amazing rental opportunities in your area. From cozy studios to shared apartments, we connect you with the perfect living space that fits your lifestyle and budget.
                  </p>
                </div>
              </div>

              <motion.div 
                className="col-lg-6"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-200px' }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
              >
                <motion.div 
                  className="row g-3 mb-4"
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
                        <ShieldCheckIcon style={{ width: '24px', height: '24px', color: '#14432A' }} />
                      </div>
                      <div>
                        <h5 className="mb-1 fw-bold">Trust Score Based Community</h5>
                        <small className="opacity-75">Verified trustworthy renters</small>
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
                        <HomeIcon style={{ width: '24px', height: '24px', color: '#14432A' }} />
                      </div>
                      <div>
                        <h5 className="mb-1 fw-bold">Beautiful Spaces</h5>
                        <small className="opacity-75">Great options available</small>
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
                        <CreditCardIcon style={{ width: '24px', height: '24px', color: '#14432A' }} />
                      </div>
                      <div>
                        <h5 className="mb-1 fw-bold">Secure Access</h5>
                        <small className="opacity-75">Coinbase wallet integration</small>
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
                        <h5 className="mb-1 fw-bold">Document Services</h5>
                        <small className="opacity-75">Secure digital document management</small>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>

                <motion.div 
                  className="d-flex gap-3 flex-wrap"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-200px' }}
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
                    Browse Rooms
                  </Link>
                  <Link 
                    href="/child-care" 
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
                    Child Care
                  </Link>
                </motion.div>
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
                      Start Your Search Today
                    </motion.h3>
                    <motion.div 
                      className="row g-3 mb-4"
                      variants={staggerContainer}
                      initial="initial"
                      whileInView="animate"
                      viewport={{ once: true, margin: '-50px' }}
                    >
                      <motion.div className="col-12" variants={staggerItem}>
                        <label className="form-label small fw-bold mb-2" style={{ color: '#14432A' }}>Location</label>
                        <div className="input-group">
                          <span className="input-group-text bg-white border-end-0">
                            <MapPinIcon style={{ width: '18px', height: '18px', color: '#14432A' }} />
                          </span>
                          <input
                            type="text"
                            className="form-control border-start-0"
                            placeholder="Enter city or neighborhood"
                          />
                        </div>
                      </motion.div>
                      <motion.div className="col-12" variants={staggerItem}>
                        <label className="form-label small fw-bold mb-2" style={{ color: '#14432A' }}>Max Price</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter max monthly rent (e.g., $1200)"
                        />
                      </motion.div>
                      <motion.div className="col-12" variants={staggerItem}>
                        <label className="form-label small fw-bold mb-2" style={{ color: '#14432A' }}>Room Type</label>
                        <select className="form-select">
                          <option>Private Room</option>
                          <option>Shared Room</option>
                          <option>Studio</option>
                          <option>1 Bedroom</option>
                        </select>
                      </motion.div>
                    </motion.div>
                    
                    <motion.div 
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: '-200px' }}
                      transition={{ duration: 0.5, delay: 0.4 }}
                    >
                      <Link 
                        href="/rooms" 
                        className="btn w-100 py-3 fw-bold"
                        style={{ 
                          backgroundColor: '#D4AF37',
                          color: 'white',
                          borderRadius: '12px',
                          textDecoration: 'none',
                          boxShadow: '0 4px 15px rgba(212, 175, 55, 0.3)'
                        }}
                        onMouseEnter={(e) => {
                          e.target.style.transform = 'translateY(-2px)';
                          e.target.style.boxShadow = '0 6px 20px rgba(212, 175, 55, 0.4)';
                        }}
                        onMouseLeave={(e) => {
                          e.target.style.transform = 'translateY(0)';
                          e.target.style.boxShadow = '0 4px 15px rgba(212, 175, 55, 0.3)';
                        }}
                      >
                        Search Available Rooms
                      </Link>
                    </motion.div>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>

            {/* In-House Trust Score System */}
              <div className="row g-4 mb-4">
                <div className="col-md-6">
                  <div className="card border-0 shadow-sm h-100" style={{ borderRadius: '16px', background: '#ffffff' }}>
                    <div className="card-body p-4">
                      <h5 className="fw-bold mb-3" style={{ color: '#14432A' }}>In-House Trust Score System</h5>
                      <p className="text-muted mb-4" style={{ fontSize: '0.9rem' }}>
                        Transparent in-house trust score based on our recommendation engine (1-300 scale) and verified member system
                      </p>
                      
                      {/* Circular Trust Score Display */}
                      <div className="text-center mb-4">
                        <div style={{
                          width: '120px',
                          height: '120px',
                          borderRadius: '50%',
                          background: 'linear-gradient(135deg, #14432A 0%, #206542 100%)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          margin: '0 auto 16px',
                          color: 'white',
                          fontSize: '2.5rem',
                          fontWeight: 'bold'
                        }}>
                          225
                        </div>
                        <div className="badge px-3 py-2 mb-2" style={{ backgroundColor: '#14432A', color: 'white' }}>In-House Trust Score</div>
                        <div className="badge bg-success px-3 py-2 mb-3">EXCELLENT RATING</div>
                        <div className="progress mb-2" style={{ height: '8px', background: '#e9ecef' }}>
                          <div className="progress-bar" role="progressbar" style={{ width: '75%', backgroundColor: '#14432A' }}></div>
                        </div>
                        <small className="text-muted">1 - 300</small>
                      </div>

                      {/* Feature List with Icons */}
                      <div className="mt-4">
                        <div className="d-flex align-items-start mb-3">
                          <StarIcon style={{ width: '20px', height: '20px', color: '#14432A', marginRight: '12px', marginTop: '2px', flexShrink: 0 }} />
                          <div>
                            <strong style={{ color: '#14432A' }}>In-House Trust Score Display:</strong>
                            <span className="text-muted"> Transparent in-house ratings for all members</span>
                          </div>
                        </div>
                        <div className="d-flex align-items-start mb-3">
                          <UserGroupIcon style={{ width: '20px', height: '20px', color: '#14432A', marginRight: '12px', marginTop: '2px', flexShrink: 0 }} />
                          <div>
                            <strong style={{ color: '#14432A' }}>Verified Members:</strong>
                            <span className="text-muted"> ID verification required</span>
                          </div>
                        </div>
                        <div className="d-flex align-items-start">
                          <ChatBubbleLeftRightIcon style={{ width: '20px', height: '20px', color: '#14432A', marginRight: '12px', marginTop: '2px', flexShrink: 0 }} />
                          <div>
                            <strong style={{ color: '#14432A' }}>Review System:</strong>
                            <span className="text-muted"> Rate your roommates and landlords</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="card border-0 shadow-sm h-100" style={{ borderRadius: '16px', background: '#ffffff' }}>
                    <div className="card-body p-4">
                      <h5 className="fw-bold mb-3" style={{ color: '#14432A', fontSize: '1.25rem' }}>Member In-House Trust Score System</h5>
                      <p className="text-muted mb-4" style={{ fontSize: '0.95rem' }}>
                        Find the perfect room and roommate with our patented member trust rating system. Verified profiles, secure payments, and reliable reviews help you make informed decisions for your next home.
                      </p>
                      
                      {/* Feature Grid */}
                      <div className="row g-3 mb-4">
                        <div className="col-6">
                          <div className="d-flex align-items-start">
                            <UserGroupIcon style={{ width: '24px', height: '24px', color: '#14432A', marginRight: '10px', marginTop: '2px', flexShrink: 0 }} />
                            <div>
                              <strong style={{ color: '#14432A', fontSize: '0.9rem' }}>Verified Profiles:</strong>
                              <div className="text-muted small">ID & background checked</div>
                            </div>
                          </div>
                        </div>
                        <div className="col-6">
                          <div className="d-flex align-items-start">
                            <StarIcon style={{ width: '24px', height: '24px', color: '#14432A', marginRight: '10px', marginTop: '2px', flexShrink: 0 }} />
                            <div>
                              <strong style={{ color: '#14432A', fontSize: '0.9rem' }}>Trust Score:</strong>
                              <div className="text-muted small">Reliable scoring system</div>
                            </div>
                          </div>
                        </div>
                        <div className="col-6">
                          <div className="d-flex align-items-start">
                            <ChatBubbleLeftRightIcon style={{ width: '24px', height: '24px', color: '#14432A', marginRight: '10px', marginTop: '2px', flexShrink: 0 }} />
                            <div>
                              <strong style={{ color: '#14432A', fontSize: '0.9rem' }}>Secure Messaging:</strong>
                              <div className="text-muted small">Safe communication</div>
                            </div>
                          </div>
                        </div>
                        <div className="col-6">
                          <div className="d-flex align-items-start">
                            <HeartIcon style={{ width: '24px', height: '24px', color: '#14432A', marginRight: '10px', marginTop: '2px', flexShrink: 0 }} />
                            <div>
                              <strong style={{ color: '#14432A', fontSize: '0.9rem' }}>Roommate Matching:</strong>
                              <div className="text-muted small">Compatible preferences</div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="d-flex gap-3">
                        <Link href="/rooms" className="btn px-4 py-2" style={{ backgroundColor: '#14432A', color: 'white', borderRadius: '8px', textDecoration: 'none', flex: 1 }}>
                          Find Roommates
                        </Link>
                        <Link href="/trustscore" className="btn px-4 py-2" style={{ border: '2px solid #14432A', color: '#14432A', borderRadius: '8px', textDecoration: 'none', flex: 1, background: 'transparent' }}>
                          More Information
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* eDocument System */}
              <div className="mb-5">
                <div className="text-center mb-4">
                  <h3 className="fw-bold mb-3" style={{ color: '#14432A', fontSize: '1.75rem' }}>eDocument System</h3>
                  <p className="text-muted mb-4" style={{ fontSize: '1rem', maxWidth: '700px', margin: '0 auto' }}>
                    Find and rent real estate with roommates using our comprehensive eDocument system. Streamline lease agreements, roommate contracts, and property documentation all in one place.
                  </p>
                </div>

                <div className="row g-4">
                  {/* eDocument Dashboard - Left */}
                  <div className="col-md-6">
                    <div className="card border-0 shadow-sm h-100" style={{ borderRadius: '16px', background: '#ffffff' }}>
                      <div className="card-body p-4">
                        <h5 className="fw-bold mb-4" style={{ color: '#14432A' }}>eDocument Dashboard</h5>
                        
                        {/* Summary Statistics */}
                        <div className="row g-3 mb-4">
                          <div className="col-6">
                            <div className="text-center p-3" style={{ background: 'rgba(20, 67, 42, 0.1)', borderRadius: '12px' }}>
                              <ShieldCheckIcon style={{ width: '32px', height: '32px', color: '#14432A', marginBottom: '8px' }} />
                              <div className="fw-bold mb-1" style={{ color: '#14432A', fontSize: '1.75rem' }}>15</div>
                              <small className="text-muted" style={{ fontSize: '0.75rem' }}>Active Leases</small>
                            </div>
                          </div>
                          <div className="col-6">
                            <div className="text-center p-3" style={{ background: 'rgba(20, 67, 42, 0.1)', borderRadius: '12px' }}>
                              <LockClosedIcon style={{ width: '32px', height: '32px', color: '#14432A', marginBottom: '8px' }} />
                              <div className="fw-bold mb-1" style={{ color: '#14432A', fontSize: '1.75rem' }}>3</div>
                              <small className="text-muted" style={{ fontSize: '0.75rem' }}>Pending Docs</small>
                            </div>
                          </div>
                        </div>

                        {/* Recent Documents */}
                        <div className="p-3 mb-4" style={{ background: 'rgba(20, 67, 42, 0.05)', borderRadius: '12px' }}>
                          <h6 className="fw-bold mb-3" style={{ color: '#14432A', fontSize: '0.95rem' }}>Recent Documents</h6>
                          <div className="small">
                            <div className="mb-2 d-flex justify-content-between align-items-center">
                              <span>Lease Agreement</span>
                              <span className="text-success">✓ Signed</span>
                            </div>
                            <div className="mb-2 d-flex justify-content-between align-items-center">
                              <span>Roommate Contract</span>
                              <span className="text-success">✓ Complete</span>
                            </div>
                            <div className="d-flex justify-content-between align-items-center">
                              <span>Property Inspection</span>
                              <span className="text-warning">⚠ Pending</span>
                            </div>
                          </div>
                        </div>

                        {/* View All Documents Button */}
                        <Link href="/edocument-system" className="btn w-100 py-3" style={{ backgroundColor: '#D4AF37', color: 'white', borderRadius: '8px', textDecoration: 'none', fontWeight: '600' }}>
                          View All Documents
                        </Link>
                      </div>
                    </div>
                  </div>

                  {/* eDocument Features - Right */}
                  <div className="col-md-6">
                    <div className="row g-3 mb-4">
                      <div className="col-6">
                        <div className="card border-0 shadow-sm h-100" style={{ borderRadius: '12px', background: '#ffffff', padding: '1.5rem' }}>
                          <DocumentTextIcon style={{ width: '32px', height: '32px', color: '#14432A', marginBottom: '12px' }} />
                          <h6 className="fw-bold mb-2" style={{ color: '#14432A', fontSize: '0.95rem' }}>Digital Leases</h6>
                          <p className="text-muted mb-0 small">Electronic lease agreements</p>
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="card border-0 shadow-sm h-100" style={{ borderRadius: '12px', background: '#ffffff', padding: '1.5rem' }}>
                          <DocumentCheckIcon style={{ width: '32px', height: '32px', color: '#14432A', marginBottom: '12px' }} />
                          <h6 className="fw-bold mb-2" style={{ color: '#14432A', fontSize: '0.95rem' }}>Roommate Contracts</h6>
                          <p className="text-muted mb-0 small">Secure roommate agreements</p>
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="card border-0 shadow-sm h-100" style={{ borderRadius: '12px', background: '#ffffff', padding: '1.5rem' }}>
                          <DocumentTextIcon style={{ width: '32px', height: '32px', color: '#14432A', marginBottom: '12px' }} />
                          <h6 className="fw-bold mb-2" style={{ color: '#14432A', fontSize: '0.95rem' }}>Property Documents</h6>
                          <p className="text-muted mb-0 small">Complete property files</p>
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="card border-0 shadow-sm h-100" style={{ borderRadius: '12px', background: '#ffffff', padding: '1.5rem' }}>
                          <LockClosedIcon style={{ width: '32px', height: '32px', color: '#14432A', marginBottom: '12px' }} />
                          <h6 className="fw-bold mb-2" style={{ color: '#14432A', fontSize: '0.95rem' }}>Instant Access</h6>
                          <p className="text-muted mb-0 small">24/7 document access</p>
                        </div>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="d-flex gap-3">
                      <Link href="/edocument-system" className="btn px-4 py-3" style={{ backgroundColor: '#14432A', color: 'white', borderRadius: '8px', textDecoration: 'none', flex: 1, fontWeight: '600' }}>
                        Access Documents
                      </Link>
                      <Link href="/edocuments-audit-tracking" className="btn px-4 py-3" style={{ border: '2px solid #14432A', color: '#14432A', borderRadius: '8px', textDecoration: 'none', flex: 1, background: 'transparent', fontWeight: '600' }}>
                        Learn More
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

            {/* eDocument System Section */}
            <section className="py-5" style={{
              background: 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 50%, #e9ecef 100%)',
              position: 'relative',
              overflow: 'hidden'
            }}>
              <div className="container">
                <div className="row align-items-center" style={{ padding: '1rem 0' }}>
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
                  
                  <motion.div className="col-lg-6" {...slideInRight}>
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
                </div>
              </div>
            </section>

            {/* In-House Trust Score System Section */}
            <section className="py-5" style={{
              background: 'linear-gradient(135deg, #f8f9fa 0%, #ffffff 50%, #f8f9fa 100%)',
              position: 'relative',
              overflow: 'hidden'
            }}>
              <div className="container">
                <div className="row align-items-center" style={{ padding: '1rem 0' }}>
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
                              <StarIcon style={{ width: '24px', height: '24px', color: '#14432A' }} />
                            </div>
                            <div>
                              <h5 className="mb-1 fw-bold">Trust Score</h5>
                              <small className="opacity-75">Reliable scoring system</small>
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
                  
                  <motion.div className="col-lg-6" {...slideInRight}>
                    <div className="position-relative">
                      <div style={{
                        background: 'rgba(255,255,255,0.95)',
                        borderRadius: '20px',
                        padding: '50px',
                        boxShadow: '0 20px 60px rgba(0,0,0,0.3)',
                        backdropFilter: 'blur(10px)'
                      }}>
                        <h3 className="mb-4 fw-bold" style={{ color: '#14432A' }}>Trust Score Dashboard</h3>
                        <div className="row g-3 mb-4">
                          <div className="col-6">
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
                          <div className="col-6">
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
                        </div>
                        
                        <div className="mb-4">
                          <h6 className="fw-bold mb-3" style={{ color: '#14432A' }}>System Status</h6>
                          <div className="space-y-2">
                            <div className="d-flex justify-content-between align-items-center p-2" style={{ background: '#f8f9fa', borderRadius: '8px' }}>
                              <span className="fw-medium">In-House Trust Score</span>
                              <span className="text-success fw-bold">✓ Active</span>
                            </div>
                            <div className="d-flex justify-content-between align-items-center p-2" style={{ background: '#f8f9fa', borderRadius: '8px' }}>
                              <span className="fw-medium">Verified Members</span>
                              <span className="text-success fw-bold">✓ Verified</span>
                            </div>
                            <div className="d-flex justify-content-between align-items-center p-2" style={{ background: '#f8f9fa', borderRadius: '8px' }}>
                              <span className="fw-medium">Review System</span>
                              <span className="text-success fw-bold">✓ Enabled</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </section>

            {/* Find Perfect Roommate Section */}
            <section className="py-5" style={{
              background: 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 50%, #e9ecef 100%)',
              position: 'relative',
              overflow: 'hidden'
            }}>
              <div className="container">
                <div className="row align-items-center" style={{ padding: '1rem 0' }}>
                  <div className="col-lg-12">
                    <motion.div className="text-dark text-center mb-5" {...sectionAnimation}>
                      <h1 className="display-3 fw-bold mb-4" style={{ 
                        fontFamily: "'Playfair Display', serif",
                        color: '#14432A'
                      }}>
                        Find Perfect Roommate
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
          </div>
        </div>
      </div>
    </section>
  )
}

