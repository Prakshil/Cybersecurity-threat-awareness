"use client"

import { useEffect, useState } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { motion } from "framer-motion"
import { ArrowLeft, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { SearchBar } from "@/components/search-bar"
import { threats } from "@/data/threats"
import { getThreatIcon } from "@/components/threat-cards"

export default function SearchResultsPage() {
  const searchParams = useSearchParams()
  const query = searchParams.get("q") || ""
  const [results, setResults] = useState<any[]>([])
  const router = useRouter()

  useEffect(() => {
    if (!query) {
      setResults([])
      return
    }

    const searchResults = threats.filter(
      (threat) =>
        threat.title.toLowerCase().includes(query.toLowerCase()) ||
        threat.description.toLowerCase().includes(query.toLowerCase()) ||
        threat.shortDescription.toLowerCase().includes(query.toLowerCase()) ||
        threat.examples.some((example) => example.toLowerCase().includes(query.toLowerCase())) ||
        threat.safetyTips.some((tip) => tip.toLowerCase().includes(query.toLowerCase())),
    )

    setResults(searchResults)
  }, [query])

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 to-slate-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <Button
          variant="ghost"
          className="mb-6 text-cyan-400 hover:bg-slate-800 hover:text-cyan-300"
          onClick={() => router.push("/")}
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to home
        </Button>

        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-6">Search Results</h1>
          <div className="max-w-2xl">
            <SearchBar />
          </div>
        </div>

        {query && (
          <div className="mb-6">
            <p className="text-slate-300">
              {results.length === 0
                ? `No results found for "${query}"`
                : `Found ${results.length} result${results.length === 1 ? "" : "s"} for "${query}"`}
            </p>
          </div>
        )}

        {results.length === 0 && query ? (
          <div className="text-center py-12">
            <Shield className="h-16 w-16 text-slate-600 mx-auto mb-4" />
            <h2 className="text-2xl font-semibold mb-2">No matching threats found</h2>
            <p className="text-slate-400 max-w-md mx-auto mb-8">
              We couldn't find any cybersecurity threats matching your search. Try different keywords or browse all
              threats.
            </p>
            <Button className="bg-cyan-600 hover:bg-cyan-700" onClick={() => router.push("/")}>
              View All Threats
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {results.map((threat, index) => (
              <motion.div
                key={threat.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <Card
                  className="h-full border-slate-800 bg-slate-950/50 backdrop-blur-sm hover:border-slate-700 cursor-pointer transition-all"
                  onClick={() => router.push(`/threat/${threat.id}`)}
                >
                  <CardHeader className="pb-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="rounded-full bg-slate-800 p-2">{getThreatIcon(threat.icon)}</div>
                        <CardTitle className="text-xl text-white">{threat.title}</CardTitle>
                      </div>
                      <Badge variant="outline" className="bg-slate-800 text-cyan-400 hover:bg-slate-800">
                        {threat.severity}
                      </Badge>
                    </div>
                    <CardDescription className="text-slate-400 mt-2">{threat.shortDescription}</CardDescription>
                  </CardHeader>

                  <CardContent>
                    <div className="flex justify-between items-center">
                      <p className="text-sm text-slate-400">{threat.safetyTips.length} safety tips available</p>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-cyan-400 hover:bg-slate-800 hover:text-cyan-300"
                      >
                        View Safety Guide
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
