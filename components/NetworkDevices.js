'use client'

import { motion } from 'framer-motion'
import {
  ShieldCheckIcon,
  GlobeAltIcon,
  PhoneIcon,
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
import { SocialNetworkModal } from './illustrations/home-product-modals'
import './illustrations/neighborhood-motion.css'

const FEATURES = [
  {
    Icon: PhoneIcon,
    title: 'Profile & Presence',
    blurb: 'Your public profile and how you appear to your circle.',
  },
  {
    Icon: ShieldCheckIcon,
    title: 'Privacy Controls',
    blurb: 'Choose who sees posts and which signals stay private.',
  },
  {
    Icon: ChatBubbleLeftRightIcon,
    title: 'Chat & Threads',
    blurb: 'Direct messages and group conversations, side by side.',
  },
  {
    Icon: GlobeAltIcon,
    title: 'Connections & Circles',
    blurb: 'Follows, friends, and communities, kept separate by intent.',
  },
]

export default function NetworkDevices() {
  return (
    <section
      className="cm-home-section"
      style={{
        background: '#F4F1EC',
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
                — Network
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
                Social Network &amp; Messaging
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
                Build your profile, follow people, share updates in your feed, and keep
                conversations private — one network for identity, connections, and chat.
              </p>
            </motion.div>
          </div>

          <motion.div className="col-lg-6 order-lg-2" {...slideInRight}>
            <SocialNetworkModal />
          </motion.div>

          <motion.div className="col-lg-6 order-lg-1" {...slideInLeft}>
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
                href="/shop/network"
                className="btn px-4 py-2 fw-semibold"
                style={{
                  borderRadius: '10px',
                  background: '#14432A',
                  borderColor: '#14432A',
                  color: '#FAFCFB',
                  letterSpacing: '0.01em',
                  boxShadow: '0 8px 24px -10px rgba(20, 67, 42, 0.45)',
                  position: 'relative',
                  zIndex: 2,
                  pointerEvents: 'auto',
                }}
              >
                Shop Now
              </Link>
              <Link
                href="/learnmore/network"
                className="btn px-4 py-2 fw-semibold"
                style={{
                  borderRadius: '10px',
                  border: '1px solid #14432A',
                  color: '#14432A',
                  background: 'transparent',
                  letterSpacing: '0.01em',
                  position: 'relative',
                  zIndex: 2,
                  pointerEvents: 'auto',
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
