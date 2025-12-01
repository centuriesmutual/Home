'use client'

import { motion } from 'framer-motion'
import { ShieldCheckIcon, CheckBadgeIcon, StarIcon, ClockIcon } from '@heroicons/react/24/outline'
import { sectionAnimation, staggerContainer, staggerItem } from '../utils/animations'

export default function Legacy() {
  return (
    <section className="py-5" style={{ 
      background: 'linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <div style={{ width: '100%', padding: '0' }}>
        <div className="row" style={{ margin: 0 }}>
          <div className="col-12">
            <motion.div className="text-center mb-5" {...sectionAnimation}>
              <h2 className="display-4 fw-bold mb-4" style={{ 
                fontFamily: "'Playfair Display', serif",
                color: '#14432A'
              }}>
                Legacy of Trust
              </h2>
              <p className="lead mb-5" style={{ 
                fontSize: '1.2rem',
                color: '#495057',
                maxWidth: '800px',
                margin: '0 auto'
              }}>
                Built on decades of trust, innovation, and commitment to our community. Centuries Mutual has been a trusted partner for generations.
              </p>
            </motion.div>
          </div>
        </div>

        <div className="row g-4" style={{ margin: 0 }}>
          <motion.div 
            className="col-md-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-center p-4" style={{
              background: '#ffffff',
              borderRadius: '16px',
              boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
              height: '100%'
            }}>
              <div className="mb-3">
                <ClockIcon style={{ width: '48px', height: '48px', color: '#14432A', margin: '0 auto' }} />
              </div>
              <h3 className="fw-bold mb-3" style={{ color: '#14432A' }}>Decades of Experience</h3>
              <p className="text-muted mb-0">
                Over 50 years of serving our community with integrity and excellence.
              </p>
            </div>
          </motion.div>

          <motion.div 
            className="col-md-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="text-center p-4" style={{
              background: '#ffffff',
              borderRadius: '16px',
              boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
              height: '100%'
            }}>
              <div className="mb-3">
                <ShieldCheckIcon style={{ width: '48px', height: '48px', color: '#14432A', margin: '0 auto' }} />
              </div>
              <h3 className="fw-bold mb-3" style={{ color: '#14432A' }}>Trusted by Thousands</h3>
              <p className="text-muted mb-0">
                More than 100,000 members trust us with their homes, finances, and futures.
              </p>
            </div>
          </motion.div>

          <motion.div 
            className="col-md-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="text-center p-4" style={{
              background: '#ffffff',
              borderRadius: '16px',
              boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
              height: '100%'
            }}>
              <div className="mb-3">
                <StarIcon style={{ width: '48px', height: '48px', color: '#14432A', margin: '0 auto' }} />
              </div>
              <h3 className="fw-bold mb-3" style={{ color: '#14432A' }}>A+ Rating</h3>
              <p className="text-muted mb-0">
                Maintained the highest standards with an A+ rating from the Better Business Bureau.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

