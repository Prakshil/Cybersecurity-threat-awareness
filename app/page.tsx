import { ThreatCards } from "@/components/threat-cards"
import { HeroSection } from "@/components/hero-section"
import { SearchBar } from "@/components/search-bar"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 to-slate-900 text-white">
      <HeroSection />
      <div className="container mx-auto px-4 py-12">
        <div className="mb-12 max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold mb-4 text-center">Find Safety Guides for Specific Threats</h2>
          <p className="text-slate-300 text-center mb-6">
            Enter a cybersecurity threat you're concerned about to get a personalized safety guide
          </p>
          <SearchBar />
        </div>

        <h2 className="text-2xl font-bold mb-8 text-center">Common Cybersecurity Threats</h2>
        <ThreatCards />
      </div>
    </main>
  )
}
