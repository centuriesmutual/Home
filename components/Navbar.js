'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import { supabase } from '../lib/supabase'

export default function Navbar() {
  const [mounted, setMounted] = useState(false)
  const [windowWidth, setWindowWidth] = useState(0)
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const pathname = usePathname()
  const router = useRouter()
  const isLoginPage = pathname === '/login'
  const isSignupPage = pathname === '/signup'
  const isRentalEquityPage = pathname === '/rentalequity'
  const isInvestorRelationsPage = pathname === '/investor-relations'
  const isCareersPage = pathname === '/careers'
  const isChildCarePage = pathname === '/child-care'
  const isTrustScorePage = pathname === '/trustscore'

  useEffect(() => {
    setMounted(true)
    setWindowWidth(window.innerWidth)
    
    const handleResize = () => {
      setWindowWidth(window.innerWidth)
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    // Check active session
    const checkUser = async () => {
      const { data: { session } } = await supabase.auth.getSession()
      setUser(session?.user ?? null)
      setLoading(false)
    }

    checkUser()

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null)
    })

    return () => subscription.unsubscribe()
  }, [])

  const handleLogout = async () => {
    try {
      await supabase.auth.signOut()
      router.push('/')
      router.refresh()
    } catch (error) {
      console.error('Logout error:', error)
    }
  }

  // Calculate responsive sizes - use default values until mounted
  const getLogoSize = () => {
    if (!mounted) return { width: 200, height: 100, fontSize: '3.2rem' }
    if (windowWidth < 640) return { width: 50, height: 25, fontSize: '1.1rem' }
    if (windowWidth < 768) return { width: 40, height: 20, fontSize: '1.2rem' }
    return { width: 200, height: 100, fontSize: '3.2rem' }
  }

  const { width, height, fontSize } = getLogoSize()

  return (
    <>
      <style jsx global>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500&display=swap');
          
          nav {
            background: #ffffff !important;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
            position: sticky;
            top: 0;
            z-index: 1000;
          }
          
          @media (max-width: 768px) {
            .mobile-login {
              font-size: 0.85rem !important;
              padding: 0.4rem 0.8rem !important;
            }
          }
        `}
      </style>
      <nav className="navbar navbar-expand-lg navbar-light bg-white py-3">
        <div className="container">
          <Link href="/" className="navbar-brand d-flex align-items-center" style={{ textDecoration: 'none' }}>
            <Image
              src="/cmlogotreesmall-removebg-preview.png"
              alt="Centuries Mutual"
              width={width}
              height={height}
              style={{ 
                objectFit: 'contain',
                marginRight: '12px'
              }}
            />
            <span style={{ 
              color: '#14432A',
              fontFamily: "'Playfair Display', serif",
              fontSize: fontSize,
              fontWeight: '500',
              letterSpacing: '0.5px'
            }}>
              Centuries Mutual
            </span>
          </Link>
          
          <button 
            className="navbar-toggler" 
            type="button" 
            data-bs-toggle="collapse" 
            data-bs-target="#navbarNav"
            aria-controls="navbarNav" 
            aria-expanded="false" 
            aria-label="Toggle navigation"
            style={{ borderColor: '#14432A' }}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          
          <div className="collapse navbar-collapse" id="navbarNav">
            <div className="navbar-nav ms-auto d-flex align-items-center gap-3">
              {pathname !== '/' && pathname !== '/rooms' && (
                <Link href="/" className="nav-link" style={{ color: '#14432A' }}>
                  Home
                </Link>
              )}
              {!loading && (
                <>
                  {user ? (
                    <>
                      <span className="nav-link text-muted" style={{ fontSize: '0.9rem' }}>
                        {user.email}
                      </span>
                      <button
                        onClick={handleLogout}
                        className="btn btn-outline-primary px-2 px-lg-4 py-1 py-lg-2 mobile-login"
                        style={{ 
                          borderColor: '#14432A',
                          color: '#14432A',
                          fontSize: '1rem',
                          whiteSpace: 'nowrap',
                          minWidth: '120px',
                          padding: '0.5rem 1rem',
                          flexShrink: 0
                        }}
                      >
                        Logout
                      </button>
                    </>
                  ) : (
                    !isLoginPage && !isSignupPage && !isRentalEquityPage && !isInvestorRelationsPage && !isCareersPage && !isChildCarePage && !isTrustScorePage && (
                      <Link 
                        href="/login" 
                        className="btn btn-primary px-2 px-lg-4 py-1 py-lg-2 mobile-login"
                        style={{ 
                          backgroundColor: '#14432A', 
                          borderColor: '#14432A',
                          fontSize: '1rem',
                          whiteSpace: 'nowrap',
                          minWidth: '120px',
                          padding: '0.5rem 1rem',
                          flexShrink: 0
                        }}
                      >
                        Client Login
                      </Link>
                    )
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

