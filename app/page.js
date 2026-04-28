import BlockchainSection from '../components/BlockchainSection'
import NetworkDevices from '../components/NetworkDevices'
import SmartHomeSecurity from '../components/SmartHomeSecurity'
import Legacy from '../components/Legacy'
import Footer from '../components/Footer'
import { SiteHeader } from '../components/layout/site-header'
import { CommunityHero } from '../components/hero/community-hero'

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <CommunityHero />
        <BlockchainSection />
        <NetworkDevices />
        <SmartHomeSecurity />
        <Legacy />
        <Footer />
      </main>
    </>
  )
} 