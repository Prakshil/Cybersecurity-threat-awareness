"use client"

import { useState } from "react"
import Link from "next/link"
import { Shield, Menu, X, Search } from "lucide-react"
import { Input } from "@/components/ui/input"

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="bg-slate-900 border-b border-slate-800">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-2">
              <Shield className="h-6 w-6 text-cyan-400" />
              <span className="font-bold text-white">CyberAware</span>
            </Link>
          </div>

          <div className="hidden md:block">
            <div className="flex items-center space-x-4">
              <Link href="/" className="text-slate-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                Home
              </Link>
              <Link
                href="/threats"
                className="text-slate-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Threats
              </Link>
              <Link
                href="/resources"
                className="text-slate-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Resources
              </Link>
              <Link href="/about" className="text-slate-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                About
              </Link>
            </div>
          </div>

          <div className="hidden md:block">
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Search className="absolute left-2 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500" />
                <Input
                  type="search"
                  placeholder="Search threats..."
                  className="w-64 pl-8 bg-slate-800 border-slate-700 text-white placeholder:text-slate-500 focus-visible:ring-cyan-500"
                />
              </div>
            </div>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-slate-300 hover:text-white">
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-slate-800">
            <Link href="/" className="text-white block px-3 py-2 rounded-md text-base font-medium">
              Home
            </Link>
            <Link
              href="/threats"
              className="text-slate-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Threats
            </Link>
            <Link
              href="/resources"
              className="text-slate-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Resources
            </Link>
            <Link
              href="/about"
              className="text-slate-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              About
            </Link>
            <div className="pt-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500" />
                <Input
                  type="search"
                  placeholder="Search threats..."
                  className="w-full pl-9 bg-slate-700 border-slate-600 text-white placeholder:text-slate-500"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
