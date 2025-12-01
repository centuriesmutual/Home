'use client'

import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'
import Link from 'next/link'
import { 
  CameraIcon, 
  VideoCameraIcon, 
  WifiIcon, 
  ServerIcon, 
  HomeIcon, 
  ShieldCheckIcon,
  CheckCircleIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline'

export default function Shop() {
  const products = [
    {
      id: 1,
      category: 'Security Cameras',
      title: '4K Ultra HD Security Camera System',
      description: 'Custom-built security cameras with 4K Ultra HD quality, night vision, motion detection, and cloud storage.',
      features: [
        '4K Ultra HD Video Quality',
        '24/7 Live Monitoring',
        'Night Vision Enabled',
        'Motion Detection',
        'Encrypted Cloud Storage',
        'Smart Alerts'
      ],
      icon: CameraIcon,
      color: '#14432A'
    },
    {
      id: 2,
      category: 'Network Devices',
      title: 'WiFi 6E Router & Network System',
      description: 'High-performance network devices with WiFi 6E support, 10Gbps speeds, mesh networking, VPN support, and enterprise-grade firewall protection.',
      features: [
        'WiFi 6E Latest Standard',
        '10Gbps Max Speed',
        'Mesh Networking',
        'VPN Support',
        'Firewall Protection',
        'Smart Management'
      ],
      icon: WifiIcon,
      color: '#14432A'
    },
    {
      id: 3,
      category: 'Smart Home Security',
      title: 'Complete Smart Home Security System',
      description: 'Integrated security system combining cameras, network devices, and smart sensors. Complete home protection with 256-bit encryption and automated alerts.',
      features: [
        '100% Home Coverage',
        '256-bit Encryption',
        'Integrated System',
        'Smart Sensors',
        'Automated Alerts',
        'Access Control'
      ],
      icon: HomeIcon,
      color: '#14432A'
    }
  ]

  return (
    <>
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="position-relative" style={{ 
          background: 'linear-gradient(180deg, #14432A 0%, #1a5436 100%)',
          paddingTop: '80px',
          paddingBottom: '80px'
        }}>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-10 text-center text-white">
                <h1 className="display-4 fw-bold mb-4" style={{ 
                  fontFamily: "'Playfair Display', serif",
                  letterSpacing: '-0.5px'
                }}>
                  Network Products Shop
                </h1>
                <p className="lead mb-5" style={{ 
                  fontSize: '1.25rem', 
                  maxWidth: '800px', 
                  margin: '0 auto 2.5rem',
                  lineHeight: '1.8',
                  opacity: 0.95
                }}>
                  Custom-built network products. 
                  Secure your home with our advanced security cameras, network devices, and smart home systems.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Products Section */}
        <section className="py-5" style={{ backgroundColor: '#f8f9fa' }}>
          <div className="container py-5">
            <div className="row mb-5">
              <div className="col-lg-8 mx-auto text-center">
                <h2 className="display-5 fw-bold mb-3" style={{ 
                  color: '#14432A', 
                  fontFamily: "'Playfair Display', serif",
                  letterSpacing: '-0.5px'
                }}>
                  Our Products
                </h2>
                <p className="text-muted lead">
                  Enterprise-grade networking and security solutions for your home
                </p>
              </div>
            </div>

            <div className="row g-4">
              {products.map((product) => {
                const IconComponent = product.icon
                return (
                  <div key={product.id} className="col-lg-4 col-md-6">
                    <div className="card border-0 shadow-sm h-100" style={{ borderRadius: '16px', transition: 'all 0.3s ease' }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'translateY(-5px)'
                        e.currentTarget.style.boxShadow = '0 8px 25px rgba(0,0,0,0.15)'
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'translateY(0)'
                        e.currentTarget.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)'
                      }}
                    >
                      <div className="card-body p-4">
                        <div className="mb-4">
                          <div style={{
                            background: 'rgba(20, 67, 42, 0.1)',
                            borderRadius: '12px',
                            width: '64px',
                            height: '64px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginBottom: '16px'
                          }}>
                            <IconComponent style={{ width: '32px', height: '32px', color: product.color }} />
                          </div>
                          <span className="badge mb-2" style={{ 
                            background: 'rgba(20, 67, 42, 0.1)',
                            color: '#14432A',
                            fontSize: '0.75rem',
                            padding: '6px 12px'
                          }}>
                            {product.category}
                          </span>
                          <h3 className="fw-bold mb-3" style={{ color: '#14432A', fontSize: '1.5rem' }}>
                            {product.title}
                          </h3>
                          <p className="text-muted mb-4" style={{ lineHeight: '1.6' }}>
                            {product.description}
                          </p>
                        </div>

                        <div className="mb-4">
                          <h6 className="fw-bold mb-3" style={{ color: '#14432A' }}>Key Features:</h6>
                          <ul className="list-unstyled mb-0">
                            {product.features.map((feature, idx) => (
                              <li key={idx} className="mb-2 d-flex align-items-start">
                                <CheckCircleIcon style={{ 
                                  width: '20px', 
                                  height: '20px', 
                                  color: '#10b981', 
                                  marginRight: '8px',
                                  marginTop: '2px',
                                  flexShrink: 0
                                }} />
                                <span style={{ color: '#495057', fontSize: '0.9rem' }}>{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="mt-auto pt-3">
                          <button 
                            className="btn btn-primary w-100 fw-bold"
                            style={{ 
                              borderRadius: '12px',
                              backgroundColor: '#14432A',
                              borderColor: '#14432A',
                              padding: '12px 24px'
                            }}
                          >
                            Contact Sales
                            <ArrowRightIcon style={{ width: '18px', height: '18px', display: 'inline', marginLeft: '8px' }} />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>

            {/* CTA Section */}
            <div className="row mt-5">
              <div className="col-lg-8 mx-auto">
                <div className="card border-0 shadow-sm" style={{ 
                  borderRadius: '16px',
                  background: 'linear-gradient(135deg, #14432A 0%, #1a5436 100%)',
                  color: 'white'
                }}>
                  <div className="card-body p-5 text-center">
                    <h3 className="fw-bold mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>
                      Need Custom Solutions?
                    </h3>
                    <p className="mb-4" style={{ opacity: 0.95, fontSize: '1.1rem' }}>
                      Our team can design and build custom network and security solutions tailored to your specific needs.
                    </p>
                    <Link href="/contact" className="btn btn-light btn-lg px-5 py-3">
                      Contact Us
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

