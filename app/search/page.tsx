import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'

interface SearchPageProps {
  searchParams?: { q?: string }
}

/** Results surface for omnibar searches (placeholder wired to routing). */
export default function SearchPage({ searchParams }: SearchPageProps) {
  const q = searchParams?.q?.trim()

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-cream pb-24 pt-[max(12vh,96px)]">
      <div className="mx-auto max-w-3xl px-6">
        <h1 className="font-serif text-3xl font-semibold tracking-tight text-[#0F3D2E] md:text-[2rem]">
          Search
        </h1>
        {q ? (
          <p className="mt-6 font-sans text-lg text-[#3d4a41]">
            Showing results for <span className="font-semibold text-forest">{q}</span>
          </p>
        ) : (
          <p className="mt-6 font-sans text-lg text-muted">Enter a neighborhood or phrase from home search.</p>
        )}
        <div className="mt-14 rounded-2xl border border-[#E5E0D5] bg-[#fffefc] px-6 py-10 text-center font-sans text-muted shadow-sm">
          Live inventory filters connect here · under Centuries Mutual release planning.
        </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
