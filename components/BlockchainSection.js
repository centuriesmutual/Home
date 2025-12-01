'use client'

import { motion } from 'framer-motion'
import { ShieldCheckIcon, LockClosedIcon, CheckBadgeIcon, UserGroupIcon, CubeIcon, DocumentCheckIcon, HomeIcon, DocumentTextIcon, StarIcon, CreditCardIcon, MagnifyingGlassIcon, MapPinIcon, ChatBubbleLeftRightIcon, HeartIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import { useState } from 'react'
import { sectionAnimation, staggerContainer, cardAnimation } from '../utils/animations'

export default function BlockchainSection() {
  const [searchFilters, setSearchFilters] = useState({
    location: '',
    maxPrice: '',
    roomType: 'Private Room'
  })

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
            <motion.div className="mb-5" {...sectionAnimation}>
              <div className="text-center mb-4">
                <h3 className="fw-bold mb-3" style={{ color: '#14432A', fontSize: '1.75rem' }}>
                  Find Your Perfect Room
                </h3>
                <p className="text-muted mb-4" style={{ fontSize: '1rem', maxWidth: '700px', margin: '0 auto' }}>
                  Discover amazing rental opportunities in your area. From cozy studios to shared apartments, we connect you with the perfect living space that fits your lifestyle and budget.
                </p>
              </div>

              {/* Trust Score Based Community Features */}
              <div className="row g-3 mb-4">
                <div className="col-md-3 col-6">
                  <div className="text-center p-3" style={{ background: '#ffffff', borderRadius: '12px', border: '1px solid #e9ecef' }}>
                    <ShieldCheckIcon style={{ width: '32px', height: '32px', color: '#14432A', marginBottom: '8px' }} />
                    <h6 className="fw-bold mb-1" style={{ color: '#14432A', fontSize: '0.9rem' }}>Verified trustworthy renters</h6>
                  </div>
                </div>
                <div className="col-md-3 col-6">
                  <div className="text-center p-3" style={{ background: '#ffffff', borderRadius: '12px', border: '1px solid #e9ecef' }}>
                    <HomeIcon style={{ width: '32px', height: '32px', color: '#14432A', marginBottom: '8px' }} />
                    <h6 className="fw-bold mb-1" style={{ color: '#14432A', fontSize: '0.9rem' }}>Beautiful Spaces</h6>
                  </div>
                </div>
                <div className="col-md-3 col-6">
                  <div className="text-center p-3" style={{ background: '#ffffff', borderRadius: '12px', border: '1px solid #e9ecef' }}>
                    <CreditCardIcon style={{ width: '32px', height: '32px', color: '#14432A', marginBottom: '8px' }} />
                    <h6 className="fw-bold mb-1" style={{ color: '#14432A', fontSize: '0.9rem' }}>Secure Access</h6>
                    <small className="text-muted" style={{ fontSize: '0.75rem' }}>Coinbase wallet integration</small>
                  </div>
                </div>
                <div className="col-md-3 col-6">
                  <div className="text-center p-3" style={{ background: '#ffffff', borderRadius: '12px', border: '1px solid #e9ecef' }}>
                    <DocumentTextIcon style={{ width: '32px', height: '32px', color: '#14432A', marginBottom: '8px' }} />
                    <h6 className="fw-bold mb-1" style={{ color: '#14432A', fontSize: '0.9rem' }}>Document Services</h6>
                    <small className="text-muted" style={{ fontSize: '0.75rem' }}>Secure digital document management</small>
                  </div>
                </div>
              </div>

              {/* Start Your Search Today */}
              <div className="card border-0 shadow-sm mb-4" style={{ borderRadius: '16px', background: '#ffffff' }}>
                <div className="card-body p-4">
                  <h5 className="fw-bold mb-3 text-center" style={{ color: '#14432A' }}>Start Your Search Today</h5>
                  <div className="row g-3">
                    <div className="col-md-4">
                      <label className="form-label small fw-bold" style={{ color: '#14432A' }}>Location</label>
                      <div className="input-group">
                        <span className="input-group-text bg-white border-end-0">
                          <MapPinIcon style={{ width: '18px', height: '18px', color: '#14432A' }} />
                        </span>
                        <input
                          type="text"
                          className="form-control border-start-0"
                          placeholder="Enter city or neighborhood"
                          value={searchFilters.location}
                          onChange={(e) => setSearchFilters({...searchFilters, location: e.target.value})}
                        />
                      </div>
                    </div>
                    <div className="col-md-4">
                      <label className="form-label small fw-bold" style={{ color: '#14432A' }}>Max Price</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter max monthly rent (e.g., $1200)"
                        value={searchFilters.maxPrice}
                        onChange={(e) => setSearchFilters({...searchFilters, maxPrice: e.target.value})}
                      />
                    </div>
                    <div className="col-md-4">
                      <label className="form-label small fw-bold" style={{ color: '#14432A' }}>Room Type</label>
                      <select
                        className="form-select"
                        value={searchFilters.roomType}
                        onChange={(e) => setSearchFilters({...searchFilters, roomType: e.target.value})}
                      >
                        <option>Private Room</option>
                        <option>Shared Room</option>
                        <option>Studio</option>
                        <option>1 Bedroom</option>
                      </select>
                    </div>
                  </div>
                  <div className="text-center mt-3">
                    <Link href="/rooms" className="btn btn-primary px-5" style={{ backgroundColor: '#14432A', borderColor: '#14432A' }}>
                      <MagnifyingGlassIcon style={{ width: '18px', height: '18px', marginRight: '8px' }} />
                      Search Rooms
                    </Link>
                  </div>
                </div>
              </div>

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

              {/* Member In-House Trust Score System */}
              <div className="card border-0 shadow-sm mb-4" style={{ borderRadius: '16px', background: '#ffffff' }}>
                <div className="card-body p-4">
                  <h5 className="fw-bold mb-3" style={{ color: '#14432A' }}>Member In-House Trust Score System</h5>
                  <p className="text-muted mb-4">
                    Find the perfect room and roommate with our patented member trust rating system. Verified profiles, secure payments, and reliable reviews help you make informed decisions for your next home.
                  </p>
                  <div className="row g-3">
                    <div className="col-md-3 col-6">
                      <div className="text-center">
                        <ShieldCheckIcon style={{ width: '32px', height: '32px', color: '#14432A', marginBottom: '8px' }} />
                        <h6 className="fw-bold mb-1" style={{ color: '#14432A', fontSize: '0.9rem' }}>Verified Profiles</h6>
                        <small className="text-muted" style={{ fontSize: '0.75rem' }}>ID & background checked</small>
                      </div>
                    </div>
                    <div className="col-md-3 col-6">
                      <div className="text-center">
                        <StarIcon style={{ width: '32px', height: '32px', color: '#14432A', marginBottom: '8px' }} />
                        <h6 className="fw-bold mb-1" style={{ color: '#14432A', fontSize: '0.9rem' }}>Trust Score</h6>
                        <small className="text-muted" style={{ fontSize: '0.75rem' }}>Reliable scoring system</small>
                      </div>
                    </div>
                    <div className="col-md-3 col-6">
                      <div className="text-center">
                        <LockClosedIcon style={{ width: '32px', height: '32px', color: '#14432A', marginBottom: '8px' }} />
                        <h6 className="fw-bold mb-1" style={{ color: '#14432A', fontSize: '0.9rem' }}>Secure Messaging</h6>
                        <small className="text-muted" style={{ fontSize: '0.75rem' }}>Safe communication</small>
                      </div>
                    </div>
                    <div className="col-md-3 col-6">
                      <div className="text-center">
                        <UserGroupIcon style={{ width: '32px', height: '32px', color: '#14432A', marginBottom: '8px' }} />
                        <h6 className="fw-bold mb-1" style={{ color: '#14432A', fontSize: '0.9rem' }}>Roommate Matching</h6>
                        <small className="text-muted" style={{ fontSize: '0.75rem' }}>Compatible preferences</small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* eDocument System */}
              <div className="card border-0 shadow-sm mb-5" style={{ borderRadius: '16px', background: '#ffffff' }}>
                <div className="card-body p-4">
                  <h5 className="fw-bold mb-3" style={{ color: '#14432A' }}>eDocument System</h5>
                  <p className="text-muted mb-4">
                    Find and rent real estate with roommates using our comprehensive eDocument system. Streamline lease agreements, roommate contracts, and property documentation all in one place.
                  </p>
                  <div className="row g-3 mb-3">
                    <div className="col-md-3">
                      <div className="text-center p-3" style={{ background: 'rgba(20, 67, 42, 0.1)', borderRadius: '12px' }}>
                        <div className="fw-bold mb-1" style={{ color: '#14432A', fontSize: '1.5rem' }}>15</div>
                        <small className="text-muted" style={{ fontSize: '0.75rem' }}>Active Leases</small>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="text-center p-3" style={{ background: 'rgba(20, 67, 42, 0.1)', borderRadius: '12px' }}>
                        <div className="fw-bold mb-1" style={{ color: '#14432A', fontSize: '1.5rem' }}>3</div>
                        <small className="text-muted" style={{ fontSize: '0.75rem' }}>Pending Docs</small>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="p-3" style={{ background: 'rgba(20, 67, 42, 0.05)', borderRadius: '12px' }}>
                        <h6 className="fw-bold mb-2" style={{ color: '#14432A', fontSize: '0.9rem' }}>Recent Documents</h6>
                        <div className="small">
                          <div className="mb-1">Lease Agreement <span className="text-success">✓ Signed</span></div>
                          <div className="mb-1">Roommate Contract <span className="text-success">✓ Complete</span></div>
                          <div>Property Inspection <span className="text-warning">⚠ Pending</span></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row g-3">
                    <div className="col-md-3 col-6">
                      <div className="text-center">
                        <DocumentTextIcon style={{ width: '24px', height: '24px', color: '#14432A', marginBottom: '4px' }} />
                        <h6 className="fw-bold mb-1" style={{ color: '#14432A', fontSize: '0.85rem' }}>Digital Leases</h6>
                        <small className="text-muted" style={{ fontSize: '0.75rem' }}>Electronic lease agreements</small>
                      </div>
                    </div>
                    <div className="col-md-3 col-6">
                      <div className="text-center">
                        <DocumentCheckIcon style={{ width: '24px', height: '24px', color: '#14432A', marginBottom: '4px' }} />
                        <h6 className="fw-bold mb-1" style={{ color: '#14432A', fontSize: '0.85rem' }}>Roommate Contracts</h6>
                        <small className="text-muted" style={{ fontSize: '0.75rem' }}>Secure roommate agreements</small>
                      </div>
                    </div>
                    <div className="col-md-3 col-6">
                      <div className="text-center">
                        <DocumentTextIcon style={{ width: '24px', height: '24px', color: '#14432A', marginBottom: '4px' }} />
                        <h6 className="fw-bold mb-1" style={{ color: '#14432A', fontSize: '0.85rem' }}>Property Documents</h6>
                        <small className="text-muted" style={{ fontSize: '0.75rem' }}>Complete property files</small>
                      </div>
                    </div>
                    <div className="col-md-3 col-6">
                      <div className="text-center">
                        <LockClosedIcon style={{ width: '24px', height: '24px', color: '#14432A', marginBottom: '4px' }} />
                        <h6 className="fw-bold mb-1" style={{ color: '#14432A', fontSize: '0.85rem' }}>Instant Access</h6>
                        <small className="text-muted" style={{ fontSize: '0.75rem' }}>24/7 document access</small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
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
          </div>
        </div>
      </div>
    </section>
  )
}

