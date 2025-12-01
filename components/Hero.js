'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section 
      className="hero-section position-relative overflow-hidden" 
      style={{ 
        minHeight: '60vh',
        backgroundColor: '#14432A',
        paddingTop: '0',
        paddingBottom: '0.5rem'
      }}
    >
      <style jsx>{`
        @media (max-width: 640px) {
          .hero-section {
            min-height: 55vh !important;
            overflow-x: hidden !important;
            padding-top: 2.5rem !important;
            padding-bottom: 1.5rem !important;
          }
          .hero-row {
            min-height: 55vh !important;
            overflow-x: hidden !important;
            padding-top: 0.75rem !important;
          }
          .hero-content {
            overflow-x: hidden !important;
            margin-top: 0.5rem !important;
          }
        }
      `}</style>
      <div className="container position-relative">
        <div 
          className="row align-items-center hero-row" 
          style={{ 
            minHeight: '60vh',
            paddingTop: '0.25rem'
          }}
        >
          <div className="col-lg-6 order-lg-2 order-2">
            <motion.div 
              className="hero-content"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              style={{ marginTop: '0' }}
            >
                            <motion.h1 
                className="display-3 text-white fw-bold mb-3 text-center text-lg-start" 
                style={{ 
                  fontFamily: "'Playfair Display', serif",
                  textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
                  fontSize: 'calc(1.8rem + 1.5vw)'
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <span className="d-none d-md-inline">Your Community Brokerage:</span>
                <span className="d-md-none" style={{ fontSize: 'calc(1.4rem + 1.2vw)' }}>Your Community Brokerage:</span>
              </motion.h1>
              <motion.p 
                className="lead text-white mb-4 text-center text-lg-start d-none d-md-block" 
                style={{
                  textShadow: '1px 1px 2px rgba(0,0,0,0.3)',
                  fontSize: 'calc(1rem + 0.3vw)',
                  maxWidth: '100%',
                  opacity: 0.95,
                  lineHeight: 1.6
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Providing a secure network for digital payments and travel services powered by blockchain technology
              </motion.p>
 
              <motion.div 
                className="d-flex gap-2 justify-content-center justify-content-lg-start flex-column flex-sm-row px-3 px-sm-0"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                style={{ marginBottom: '1rem', position: 'relative', zIndex: 5 }}
              >
                <motion.a 
                  href="/rentalequity" 
                  className="btn btn-outline-light btn-lg" 
                  style={{ position: 'relative', zIndex: 10 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.1 }}
                >
                  Learn More
                </motion.a>
                <motion.a 
                  href="/downloads" 
                  className="btn btn-light btn-lg"
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.1 }}
                >
                  Download App
                </motion.a>
              </motion.div>
              
              <motion.div 
                className="d-flex gap-1 justify-content-center justify-content-lg-start flex-wrap px-3 px-sm-0"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                style={{ marginBottom: '2rem', position: 'relative', zIndex: 5 }}
              >
                <motion.a 
                  href="/rooms" 
                  className="btn btn-sm text-white"
                  style={{ 
                    fontSize: '0.7rem',
                    padding: '0.25rem 0.5rem',
                    border: '1px solid rgba(255,255,255,0.3)',
                    borderRadius: '4px',
                    background: 'rgba(255,255,255,0.1)',
                    transition: 'all 0.2s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.background = 'rgba(255,255,255,0.2)';
                    e.target.style.borderColor = 'rgba(255,255,255,0.5)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.background = 'rgba(255,255,255,0.1)';
                    e.target.style.borderColor = 'rgba(255,255,255,0.3)';
                  }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.1 }}
                >
                  Spaces
                </motion.a>
                <motion.a 
                  href="https://newspaper.centuriesmutual.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-sm text-white"
                  style={{ 
                    fontSize: '0.7rem',
                    padding: '0.25rem 0.5rem',
                    border: '1px solid rgba(255,255,255,0.3)',
                    borderRadius: '4px',
                    background: 'rgba(255,255,255,0.1)',
                    transition: 'all 0.2s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.background = 'rgba(255,255,255,0.2)';
                    e.target.style.borderColor = 'rgba(255,255,255,0.5)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.background = 'rgba(255,255,255,0.1)';
                    e.target.style.borderColor = 'rgba(255,255,255,0.3)';
                  }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.1 }}
                  onClick={(e) => {
                    e.preventDefault();
                    window.location.href = 'https://newspaper.centuriesmutual.com';
                  }}
                >
                  Newspaper
                </motion.a>
                <motion.a 
                  href="/contact" 
                  className="btn btn-sm text-white"
                  style={{ 
                    fontSize: '0.7rem',
                    padding: '0.25rem 0.5rem',
                    border: '1px solid rgba(255,255,255,0.3)',
                    borderRadius: '4px',
                    background: 'rgba(255,255,255,0.1)',
                    transition: 'all 0.2s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.background = 'rgba(255,255,255,0.2)';
                    e.target.style.borderColor = 'rgba(255,255,255,0.5)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.background = 'rgba(255,255,255,0.1)';
                    e.target.style.borderColor = 'rgba(255,255,255,0.3)';
                  }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.1 }}
                >
                  Contact Us
                </motion.a>
              </motion.div>
              
              <motion.p 
                className="lead text-white mb-4 text-center text-lg-start d-md-none" 
                style={{
                  textShadow: '1px 1px 2px rgba(0,0,0,0.3)',
                  fontSize: 'calc(0.9rem + 0.2vw)',
                  maxWidth: '100%',
                  opacity: 0.95,
                  lineHeight: 1.6
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                Providing a secure network for digital payments and travel services powered by blockchain technology
              </motion.p>
            </motion.div>
          </div>
          
          <div className="col-lg-6 order-lg-1 order-1">
            <motion.div 
              className="position-relative"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="mb-4 overflow-hidden d-none d-lg-block" style={{ 
                height: '400px',
                width: '100%',
                position: 'relative',
                marginTop: '20px',
                borderRadius: '24px'
              }}>
                <Image
                  src="/buffalo2.png"
                  alt="Majestic Bison"
                  fill
                  priority
                  quality={100}
                  style={{
                    objectFit: 'cover',
                    objectPosition: 'center bottom',
                    transform: 'scale(1)',
                    boxShadow: '0 10px 30px rgba(0,0,0,0.15), 0 1px 8px rgba(0,0,0,0.1)',
                    borderRadius: '24px'
                  }}
                />
              </div>
              <div className="mb-3 overflow-hidden d-lg-none" style={{ 
                height: '250px',
                position: 'relative',
                marginTop: '0',
                marginBottom: '1.5rem',
                borderRadius: '20px'
              }}>
                <Image
                  src="/buffalo2.png"
                  alt="Majestic Bison"
                  fill
                  priority
                  quality={100}
                  className="rounded-3"
                  style={{
                    objectFit: 'cover',
                    objectPosition: 'center bottom',
                    transform: 'scale(1)',
                    boxShadow: '0 10px 30px rgba(0,0,0,0.15), 0 1px 8px rgba(0,0,0,0.1)'
                  }}
                />
              </div>
              
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
} 