'use client'

import { motion } from 'framer-motion'
import {
  ShieldCheckIcon,
  UserGroupIcon,
  StarIcon,
  ChatBubbleLeftRightIcon,
} from '@heroicons/react/24/outline'
import Link from 'next/link'
import {
  sectionAnimation,
  staggerContainer,
  slideInLeft,
  slideInRight,
  staggerItem,
} from '../utils/animations'
import { RoommateMatchingIllustration } from './illustrations/home-illustrations'
import './illustrations/neighborhood-motion.css'

const FEATURES = [
  {
    Icon: UserGroupIcon,
    title: 'Compatible Matching',
    blurb: 'Smart preference matching across lifestyle and habits.',
  },
  {
    Icon: ShieldCheckIcon,
    title: 'Verified Profiles',
    blurb: 'ID and background checked before they ever message.',
  },
  {
    Icon: ChatBubbleLeftRightIcon,
    title: 'Secure Messaging',
    blurb: 'Direct, end-to-end conversations with audit trails.',
  },
  {
    Icon: StarIcon,
    title: 'Trust Score',
    blurb: 'A reliable rating that compounds over time.',
  },
]

export default function BlockchainSection() {
  return (
    <section
      className="cm-home-section"
      style={{
        background: '#FAFCFB',
        borderTop: '1px solid #E8EBEA',
        padding: '5rem 0',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div className="container">
        <div className="row align-items-center" style={{ rowGap: '2.5rem' }}>
          <div className="col-12">
            <motion.div className="text-center mb-5" {...sectionAnimation}>
              <p
                className="mb-3"
                style={{
                  fontSize: '0.6875rem',
                  letterSpacing: '0.22em',
                  textTransform: 'uppercase',
                  color: '#C9A53E',
                  fontWeight: 600,
                }}
              >
                — Roommates
              </p>
              <h2
                className="mb-3"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  color: '#14432A',
                  fontWeight: 500,
                  fontSize: 'clamp(2rem, 4.2vw, 3rem)',
                  letterSpacing: '-0.01em',
                  lineHeight: 1.15,
                }}
              >
                Find Your Perfect Roommate
              </h2>
              <p
                className="mx-auto"
                style={{
                  fontSize: '1.0625rem',
                  color: '#55655D',
                  maxWidth: '720px',
                  lineHeight: 1.6,
                }}
              >
                Connect with compatible roommates through verified profiles, secure messaging,
                and a trust score that reflects how you actually live together.
              </p>
            </motion.div>
          </div>

          <motion.div className="col-lg-6" {...slideInLeft}>
            <div
              style={{
                background: '#FFFFFF',
                border: '1px solid #E8EBEA',
                borderRadius: '20px',
                padding: '1.75rem',
                boxShadow: '0 16px 40px -20px rgba(15, 61, 46, 0.16)',
              }}
            >
              <RoommateMatchingIllustration />
            </div>
          </motion.div>

          <motion.div className="col-lg-6" {...slideInRight}>
            <motion.div
              className="row g-3 mb-4"
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, margin: '-50px' }}
            >
              {FEATURES.map(({ Icon, title, blurb }) => (
                <motion.div className="col-md-6" key={title} variants={staggerItem}>
                  <div
                    style={{
                      background: '#FFFFFF',
                      border: '1px solid #E8EBEA',
                      borderRadius: '14px',
                      padding: '1.1rem 1.25rem',
                      height: '100%',
                      transition: 'border-color 0.2s ease, transform 0.2s ease',
                    }}
                  >
                    <div className="d-flex align-items-start gap-3">
                      <div
                        style={{
                          background: 'rgba(20, 67, 42, 0.06)',
                          borderRadius: '10px',
                          padding: '10px',
                          flexShrink: 0,
                        }}
                      >
                        <Icon style={{ width: '20px', height: '20px', color: '#14432A' }} />
                      </div>
                      <div>
                        <h5
                          className="mb-1"
                          style={{
                            fontWeight: 600,
                            fontSize: '0.95rem',
                            color: '#14432A',
                            letterSpacing: '-0.005em',
                          }}
                        >
                          {title}
                        </h5>
                        <p
                          className="mb-0"
                          style={{ fontSize: '0.8125rem', color: '#55655D', lineHeight: 1.5 }}
                        >
                          {blurb}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              className="d-flex flex-wrap gap-3 mt-4"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Link
                href="/neighborhood"
                className="btn px-4 py-2 fw-semibold"
                style={{
                  borderRadius: '10px',
                  background: '#14432A',
                  borderColor: '#14432A',
                  color: '#FAFCFB',
                  letterSpacing: '0.01em',
                  boxShadow: '0 8px 24px -10px rgba(20, 67, 42, 0.45)',
                }}
              >
                Browse Roommates
              </Link>
              <Link
                href="/rentalequity"
                className="btn px-4 py-2 fw-semibold"
                style={{
                  borderRadius: '10px',
                  border: '1px solid #14432A',
                  color: '#14432A',
                  background: 'transparent',
                  letterSpacing: '0.01em',
                }}
              >
                Learn More
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
