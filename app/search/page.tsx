import type { Metadata } from 'next'
import Footer from '@/components/Footer'
import { NeighborhoodLanding } from '@/components/neighborhood/neighborhood-landing'
import { SiteHeader } from '@/components/layout/site-header'

export const metadata: Metadata = {
  title: 'Neighborhood',
  description: 'Search rooms, neighborhoods, and dates with Centuries Mutual.',
}

interface SearchPageProps {
  searchParams?: { q?: string }
}

/** Results surface for omnibar searches — full marketing layout matches home chrome. */
export default function SearchPage({ searchParams }: SearchPageProps) {
  const q = searchParams?.q?.trim()

  return (
    <>
      <SiteHeader />
      <main className="m-0 block bg-transparent p-0">
        <NeighborhoodLanding query={q} />
      </main>
      <Footer />
    </>
  )
}
