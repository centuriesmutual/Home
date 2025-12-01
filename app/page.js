import Hero from '../components/Hero'
import BlockchainSection from '../components/BlockchainSection'
import NetworkTechnology from '../components/NetworkTechnology'
import NetworkDevices from '../components/NetworkDevices'
import SmartHomeSecurity from '../components/SmartHomeSecurity'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <BlockchainSection />
        <NetworkTechnology />
        <NetworkDevices />
        <SmartHomeSecurity />
        <Footer />
      </main>
    </>
  )
} 