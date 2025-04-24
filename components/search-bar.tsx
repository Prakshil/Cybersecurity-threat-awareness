"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { threats } from "@/data/threats"

export function SearchBar() {
  const [searchQuery, setSearchQuery] = useState("")
  const [suggestions, setSuggestions] = useState<string[]>([])
  const router = useRouter()

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()

    if (!searchQuery.trim()) return

    // Find the most relevant threat based on the search query
    const foundThreat = findRelevantThreat(searchQuery)

    if (foundThreat) {
      router.push(`/threat/${foundThreat.id}`)
    } else {
      // If no exact match, go to search results page
      router.push(`/search?q=${encodeURIComponent(searchQuery)}`)
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setSearchQuery(value)

    if (value.length > 2) {
      // Generate suggestions based on input
      const newSuggestions = threats
        .filter(
          (threat) =>
            threat.title.toLowerCase().includes(value.toLowerCase()) ||
            threat.shortDescription.toLowerCase().includes(value.toLowerCase()),
        )
        .map((threat) => threat.title)
        .slice(0, 5)

      setSuggestions(newSuggestions)
    } else {
      setSuggestions([])
    }
  }

  const selectSuggestion = (suggestion: string) => {
    setSearchQuery(suggestion)
    setSuggestions([])

    const foundThreat = threats.find((threat) => threat.title.toLowerCase() === suggestion.toLowerCase())

    if (foundThreat) {
      router.push(`/threat/${foundThreat.id}`)
    }
  }

  return (
    <div className="relative">
      <form onSubmit={handleSearch} className="relative">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
          <Input
            type="text"
            value={searchQuery}
            onChange={handleInputChange}
            placeholder="Search for a cybersecurity threat..."
            className="w-full pl-10 py-6 bg-slate-800/50 backdrop-blur-sm border-slate-700 text-white placeholder:text-slate-400 focus-visible:ring-cyan-500 rounded-full"
          />
        </div>
      </form>

      {suggestions.length > 0 && (
        <div className="absolute z-10 mt-1 w-full bg-slate-800 border border-slate-700 rounded-lg shadow-lg overflow-hidden">
          <ul>
            {suggestions.map((suggestion, index) => (
              <li
                key={index}
                className="px-4 py-2 hover:bg-slate-700 cursor-pointer text-slate-200"
                onClick={() => selectSuggestion(suggestion)}
              >
                {suggestion}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

function findRelevantThreat(query: string) {
  // First try to find an exact match by title
  let foundThreat = threats.find((threat) => threat.title.toLowerCase() === query.toLowerCase())

  // If no exact match, try partial match on title
  if (!foundThreat) {
    foundThreat = threats.find((threat) => threat.title.toLowerCase().includes(query.toLowerCase()))
  }

  // If still no match, try matching keywords in description
  if (!foundThreat) {
    foundThreat = threats.find(
      (threat) =>
        threat.description.toLowerCase().includes(query.toLowerCase()) ||
        threat.shortDescription.toLowerCase().includes(query.toLowerCase()),
    )
  }

  return foundThreat
}
