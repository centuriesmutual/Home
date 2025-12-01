'use client'

import Navbar from '../../components/Navbar'
import Link from 'next/link'
import { useState, useEffect, useRef } from 'react'
import { 
  MapPinIcon, 
  MagnifyingGlassIcon,
  FunnelIcon,
  StarIcon,
  HeartIcon,
  ChevronDownIcon
} from '@heroicons/react/24/outline'

export default function Rooms() {
  const [searchQuery, setSearchQuery] = useState('')
  const [filters, setFilters] = useState({
    maxPrice: '',
    location: '',
    roomType: ''
  })
  const [locationSuggestions, setLocationSuggestions] = useState([])
  const [showLocationDropdown, setShowLocationDropdown] = useState(false)
  const [priceError, setPriceError] = useState('')
  const [minPriceForLocation, setMinPriceForLocation] = useState(null)
  const locationInputRef = useRef(null)
  const dropdownRef = useRef(null)

  // Sample room listings with numeric prices for calculations
  const rooms = [
    {
      id: 1,
      title: 'Private Room in Downtown Seattle',
      location: 'Downtown Seattle, WA',
      price: '$1,200',
      priceNum: 1200,
      roomType: 'Private Room',
      rating: 4.8,
      reviews: 124,
      image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=400',
      trustScore: 285,
      available: 'Available Now'
    },
    {
      id: 2,
      title: 'Cozy Studio Apartment - Capitol Hill',
      location: 'Capitol Hill, Seattle, WA',
      price: '$1,500',
      priceNum: 1500,
      roomType: 'Studio',
      rating: 4.9,
      reviews: 89,
      image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=400',
      trustScore: 275,
      available: 'Available in 2 weeks'
    },
    {
      id: 3,
      title: 'Shared Room in Fremont',
      location: 'Fremont, Seattle, WA',
      price: '$800',
      priceNum: 800,
      roomType: 'Shared Room',
      rating: 4.7,
      reviews: 56,
      image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=400',
      trustScore: 268,
      available: 'Available Now'
    },
    {
      id: 4,
      title: '1 Bedroom in Ballard',
      location: 'Ballard, Seattle, WA',
      price: '$1,400',
      priceNum: 1400,
      roomType: '1 Bedroom',
      rating: 4.9,
      reviews: 203,
      image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=400',
      trustScore: 290,
      available: 'Available in 1 month'
    },
    {
      id: 5,
      title: 'Private Room in Queen Anne',
      location: 'Queen Anne, Seattle, WA',
      price: '$1,100',
      priceNum: 1100,
      roomType: 'Private Room',
      rating: 4.6,
      reviews: 78,
      image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=400',
      trustScore: 280,
      available: 'Available Now'
    },
    {
      id: 6,
      title: 'Shared Room in Green Lake',
      location: 'Green Lake, Seattle, WA',
      price: '$750',
      priceNum: 750,
      roomType: 'Shared Room',
      rating: 4.5,
      reviews: 45,
      image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=400',
      trustScore: 272,
      available: 'Available in 3 weeks'
    }
  ]

  // Available locations for suggestions
  const availableLocations = [
    'Downtown Seattle, WA',
    'Capitol Hill, Seattle, WA',
    'Fremont, Seattle, WA',
    'Ballard, Seattle, WA',
    'Queen Anne, Seattle, WA',
    'Green Lake, Seattle, WA',
    'Bellevue, WA',
    'Redmond, WA',
    'Tacoma, WA',
    'Everett, WA'
  ]

  // Filter locations based on input
  useEffect(() => {
    if (filters.location.trim()) {
      const filtered = availableLocations.filter(loc =>
        loc.toLowerCase().includes(filters.location.toLowerCase())
      )
      setLocationSuggestions(filtered.slice(0, 5))
      setShowLocationDropdown(filtered.length > 0)
    } else {
      setLocationSuggestions([])
      setShowLocationDropdown(false)
    }
  }, [filters.location])

  // Calculate minimum price for selected location
  useEffect(() => {
    if (filters.location) {
      const locationRooms = rooms.filter(room =>
        room.location.toLowerCase().includes(filters.location.toLowerCase())
      )
      if (locationRooms.length > 0) {
        const minPrice = Math.min(...locationRooms.map(r => r.priceNum))
        setMinPriceForLocation(minPrice)
      } else {
        setMinPriceForLocation(null)
      }
    } else {
      setMinPriceForLocation(null)
    }
  }, [filters.location])

  // Validate price when user types
  useEffect(() => {
    if (filters.maxPrice && minPriceForLocation) {
      const priceNum = parseInt(filters.maxPrice.replace(/[^0-9]/g, ''))
      if (priceNum < minPriceForLocation) {
        setPriceError(`Minimum price for ${filters.location} is $${minPriceForLocation.toLocaleString()}`)
      } else {
        setPriceError('')
      }
    } else {
      setPriceError('')
    }
  }, [filters.maxPrice, minPriceForLocation, filters.location])

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target) &&
          locationInputRef.current && !locationInputRef.current.contains(event.target)) {
        setShowLocationDropdown(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const handleLocationSelect = (location) => {
    setFilters({...filters, location})
    setShowLocationDropdown(false)
  }

  const filteredRooms = rooms.filter(room => {
    const matchesLocation = !filters.location || room.location.toLowerCase().includes(filters.location.toLowerCase())
    const matchesPrice = !filters.maxPrice || room.priceNum <= parseInt(filters.maxPrice.replace(/[^0-9]/g, ''))
    const matchesRoomType = !filters.roomType || room.roomType === filters.roomType
    return matchesLocation && matchesPrice && matchesRoomType
  })

  return (
    <>
      <Navbar />
      <main style={{ backgroundColor: '#ffffff', minHeight: '100vh', paddingTop: '20px' }}>
        <div className="container-fluid px-4">
          {/* Header with Search */}
          <div className="mb-4">
            <div className="d-flex justify-content-between align-items-center mb-4">
              <div>
                <h1 className="fw-bold mb-2" style={{ color: '#222222', fontSize: '1.75rem', fontWeight: '600' }}>Stays</h1>
                <p className="text-muted mb-0" style={{ fontSize: '0.9rem' }}>Find your perfect living space</p>
              </div>
            </div>

            {/* Search Bar - Airbnb Style */}
            <div className="card border shadow-sm mb-4" style={{ borderRadius: '40px', borderColor: '#dddddd', position: 'relative' }}>
              <div className="card-body p-2">
                <div className="row g-2 align-items-center">
                  <div className="col-md-4" style={{ position: 'relative' }}>
                    <div className="d-flex align-items-center px-3 py-2" style={{ cursor: 'pointer' }}>
                      <div className="border-end pe-3 me-3" style={{ borderColor: '#dddddd !important', flex: 1 }}>
                        <small className="fw-bold d-block" style={{ fontSize: '0.75rem', color: '#222222' }}>Location</small>
                        <input
                          ref={locationInputRef}
                          type="text"
                          className="border-0 p-0"
                          placeholder="Where are you going?"
                          value={filters.location}
                          onChange={(e) => setFilters({...filters, location: e.target.value})}
                          onFocus={() => {
                            if (locationSuggestions.length > 0) {
                              setShowLocationDropdown(true)
                            }
                          }}
                          style={{ fontSize: '0.875rem', color: '#717171', outline: 'none', width: '100%' }}
                        />
                      </div>
                    </div>
                    {/* Location Suggestions Dropdown */}
                    {showLocationDropdown && locationSuggestions.length > 0 && (
                      <div
                        ref={dropdownRef}
                        className="position-absolute bg-white border shadow-lg rounded-3"
                        style={{
                          top: '100%',
                          left: '15px',
                          right: '15px',
                          zIndex: 1000,
                          marginTop: '4px',
                          maxHeight: '300px',
                          overflowY: 'auto'
                        }}
                      >
                        {locationSuggestions.map((location, idx) => (
                          <div
                            key={idx}
                            onClick={() => handleLocationSelect(location)}
                            className="px-4 py-3"
                            style={{
                              cursor: 'pointer',
                              borderBottom: idx < locationSuggestions.length - 1 ? '1px solid #e9ecef' : 'none'
                            }}
                            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f8f9fa'}
                            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'white'}
                          >
                            <div className="d-flex align-items-center">
                              <MapPinIcon style={{ width: '16px', height: '16px', color: '#717171', marginRight: '8px' }} />
                              <span style={{ fontSize: '0.875rem', color: '#222222' }}>{location}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                  <div className="col-md-3">
                    <div className="d-flex align-items-center px-3 py-2" style={{ position: 'relative' }}>
                      <div className="border-end pe-3 me-3" style={{ borderColor: '#dddddd !important', flex: 1 }}>
                        <small className="fw-bold d-block" style={{ fontSize: '0.75rem', color: '#222222' }}>Max Price</small>
                        <input
                          type="text"
                          className="border-0 p-0"
                          placeholder={minPriceForLocation ? `Min: $${minPriceForLocation.toLocaleString()}` : "Enter max price"}
                          value={filters.maxPrice}
                          onChange={(e) => {
                            const value = e.target.value.replace(/[^0-9]/g, '')
                            setFilters({...filters, maxPrice: value ? `$${parseInt(value).toLocaleString()}` : ''})
                          }}
                          style={{ 
                            fontSize: '0.875rem', 
                            color: '#717171', 
                            outline: 'none', 
                            width: '100%',
                            borderColor: priceError ? '#dc3545' : '#dddddd'
                          }}
                        />
                        {priceError && (
                          <small className="text-danger d-block mt-1" style={{ fontSize: '0.7rem' }}>
                            {priceError}
                          </small>
                        )}
                        {minPriceForLocation && !priceError && (
                          <small className="text-muted d-block mt-1" style={{ fontSize: '0.7rem' }}>
                            Lowest price: ${minPriceForLocation.toLocaleString()}/month
                          </small>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="d-flex align-items-center px-3 py-2">
                      <div className="border-end pe-3 me-3" style={{ borderColor: '#dddddd !important', flex: 1 }}>
                        <small className="fw-bold d-block" style={{ fontSize: '0.75rem', color: '#222222' }}>Room Type</small>
                        <select
                          className="border-0 p-0"
                          value={filters.roomType}
                          onChange={(e) => setFilters({...filters, roomType: e.target.value})}
                          style={{ fontSize: '0.875rem', color: '#717171', outline: 'none', width: '100%', background: 'transparent' }}
                        >
                          <option value="">Any</option>
                          <option value="Private Room">Private Room</option>
                          <option value="Shared Room">Shared Room</option>
                          <option value="Studio">Studio</option>
                          <option value="1 Bedroom">1 Bedroom</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-2">
                    <div className="d-flex align-items-center justify-content-end px-3 py-2">
                      <button className="btn rounded-circle d-flex align-items-center justify-content-center" style={{ 
                        backgroundColor: '#FF385C', 
                        width: '48px', 
                        height: '48px',
                        border: 'none',
                        color: 'white'
                      }}>
                        <MagnifyingGlassIcon style={{ width: '16px', height: '16px' }} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Filters */}
          <div className="mb-4 d-flex gap-3 flex-wrap align-items-center">
            <button className="btn border rounded-pill px-4 py-2" style={{ fontSize: '0.875rem', color: '#222222', borderColor: '#dddddd' }}>
              <FunnelIcon style={{ width: '16px', height: '16px', display: 'inline', marginRight: '8px' }} />
              Filters
            </button>
            {(filters.location || filters.maxPrice || filters.roomType) && (
              <button 
                className="btn border rounded-pill px-4 py-2" 
                style={{ fontSize: '0.875rem', color: '#222222', borderColor: '#dddddd' }}
                onClick={() => setFilters({ maxPrice: '', location: '', roomType: '' })}
              >
                Clear Filters
              </button>
            )}
          </div>

          {/* Results Count */}
          <div className="mb-4">
            <p className="text-muted mb-0" style={{ fontSize: '0.875rem' }}>
              <strong>{filteredRooms.length}</strong> {filteredRooms.length === 1 ? 'stay' : 'stays'} available
              {(filters.location || filters.maxPrice || filters.roomType) && (
                <span className="ms-2">matching your search</span>
              )}
            </p>
          </div>

          {/* Room Grid - Airbnb Style */}
          {filteredRooms.length > 0 ? (
            <div className="row g-4">
              {filteredRooms.map((room) => (
                <div key={room.id} className="col-12 col-sm-6 col-lg-4 col-xl-3">
                  <div style={{ cursor: 'pointer' }}>
                    {/* Image */}
                    <div style={{
                      width: '100%',
                      height: '300px',
                      backgroundImage: `url(${room.image})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      borderRadius: '12px',
                      position: 'relative',
                      marginBottom: '12px'
                    }}>
                      <button className="btn position-absolute top-0 end-0 m-2 p-2 rounded-circle" style={{ 
                        backgroundColor: 'rgba(255, 255, 255, 0.9)',
                        border: 'none',
                        width: '32px',
                        height: '32px'
                      }}>
                        <HeartIcon style={{ width: '16px', height: '16px', color: '#222222' }} />
                      </button>
                    </div>
                    
                    {/* Content */}
                    <div>
                      <div className="d-flex justify-content-between align-items-start mb-1">
                        <div className="flex-grow-1">
                          <h3 className="fw-bold mb-1" style={{ 
                            color: '#222222', 
                            fontSize: '1rem', 
                            fontWeight: '600',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            whiteSpace: 'nowrap'
                          }}>
                            {room.title}
                          </h3>
                          <div className="d-flex align-items-center mb-1" style={{ fontSize: '0.875rem', color: '#717171' }}>
                            <MapPinIcon style={{ width: '14px', height: '14px', marginRight: '4px' }} />
                            <span>{room.location}</span>
                          </div>
                        </div>
                      </div>

                      <div className="d-flex align-items-center mb-2" style={{ fontSize: '0.875rem' }}>
                        <StarIcon style={{ width: '14px', height: '14px', color: '#FF385C', marginRight: '4px', fill: '#FF385C' }} />
                        <span className="fw-bold me-1" style={{ color: '#222222' }}>{room.rating}</span>
                        <span className="text-muted">({room.reviews})</span>
                      </div>

                      <div className="d-flex justify-content-between align-items-center">
                        <div>
                          <span className="fw-bold" style={{ color: '#222222', fontSize: '0.9375rem' }}>{room.price}</span>
                          <span className="text-muted" style={{ fontSize: '0.875rem' }}> /month</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-5">
              <p className="text-muted mb-3">No rooms found matching your search criteria.</p>
              <button 
                className="btn btn-outline-primary"
                onClick={() => setFilters({ maxPrice: '', location: '', roomType: '' })}
              >
                Clear Filters
              </button>
            </div>
          )}

          {/* Load More */}
          {filteredRooms.length > 0 && (
            <div className="text-center mt-5 mb-5">
              <button className="btn border rounded-pill px-5 py-2" style={{ 
                borderColor: '#222222', 
                color: '#222222',
                fontSize: '0.875rem',
                fontWeight: '600'
              }}>
                Show more
              </button>
            </div>
          )}
        </div>
      </main>
    </>
  )
}
