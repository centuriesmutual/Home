'use client'

import { motion } from 'framer-motion'
import { ShieldCheckIcon, LockClosedIcon, CheckBadgeIcon, UserGroupIcon, CubeIcon, DocumentCheckIcon, HomeIcon, DocumentTextIcon, StarIcon, CreditCardIcon, MagnifyingGlassIcon, MapPinIcon, ChatBubbleLeftRightIcon, HeartIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import { sectionAnimation, staggerContainer, cardAnimation } from '../utils/animations'

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

