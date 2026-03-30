import Hero from '../components/Hero'
import BlockchainSection from '../components/BlockchainSection'
import NetworkDevices from '../components/NetworkDevices'
import SmartHomeSecurity from '../components/SmartHomeSecurity'
import Legacy from '../components/Legacy'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <BlockchainSection />
        <NetworkDevices />
        <SmartHomeSecurity />
        <Legacy />
        <Footer />
      </main>
    </>
  )
} 