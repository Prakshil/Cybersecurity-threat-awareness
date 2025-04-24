import { Shield } from "lucide-react"
import { SearchBar } from "./search-bar"

export function HeroSection() {
  return (
    <div className="relative overflow-hidden bg-slate-900 py-24 px-6 sm:px-10 lg:px-16">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f46e5,#06b6d4)] opacity-10"></div>
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=800&width=1600')] bg-cover bg-center opacity-5"></div>
      </div>

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <div className="flex justify-center mb-6">
          <Shield className="h-16 w-16 text-cyan-400" />
        </div>
        <h1 className="mb-6 text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
          Cybersecurity Threat Awareness
        </h1>
        <p className="mb-10 text-xl text-slate-300">
          Learn about common cybersecurity threats and how to protect yourself in the digital world.
        </p>
        <div className="flex flex-col items-center gap-6">
          <div className="w-full max-w-md">
            <SearchBar />
          </div>
        </div>
      </div>
    </div>
  )
}
