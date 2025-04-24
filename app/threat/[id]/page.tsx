"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { motion } from "framer-motion"
import { ArrowLeft, Shield, AlertTriangle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { threats } from "@/data/threats"
import { getThreatIcon } from "@/components/threat-cards"

export default function ThreatDetailPage({ params }: { params: { id: string } }) {
  const [threat, setThreat] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    const foundThreat = threats.find((t) => t.id === params.id)

    if (foundThreat) {
      setThreat(foundThreat)
    } else {
      // Redirect to home if threat not found
      router.push("/")
    }

    setLoading(false)
  }, [params.id, router])

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-950 to-slate-900 text-white flex items-center justify-center">
        <div className="animate-pulse flex flex-col items-center">
          <Shield className="h-16 w-16 text-cyan-400 mb-4" />
          <p className="text-slate-300">Loading threat information...</p>
        </div>
      </div>
    )
  }

  if (!threat) return null

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 to-slate-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <Button
          variant="ghost"
          className="mb-6 text-cyan-400 hover:bg-slate-800 hover:text-cyan-300"
          onClick={() => router.push("/")}
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to all threats
        </Button>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <Card className="border-slate-800 bg-slate-950/50 backdrop-blur-sm">
            <CardHeader className="pb-4">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="rounded-full bg-slate-800 p-3">{getThreatIcon(threat.icon)}</div>
                  <div>
                    <CardTitle className="text-2xl md:text-3xl text-white">{threat.title}</CardTitle>
                    <p className="text-slate-400 mt-1">{threat.shortDescription}</p>
                  </div>
                </div>
                <Badge
                  variant="outline"
                  className="bg-slate-800 text-cyan-400 hover:bg-slate-800 self-start md:self-auto"
                >
                  {threat.severity} Severity
                </Badge>
              </div>
            </CardHeader>

            <CardContent className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold text-white mb-3">About this Threat</h3>
                <p className="text-slate-300">{threat.description}</p>
              </div>

              <Separator className="bg-slate-800" />

              <div>
                <h3 className="text-xl font-semibold text-white mb-3">Real-world Examples</h3>
                <div className="grid gap-3">
                  {threat.examples.map((example: string, index: number) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="flex items-start gap-3 bg-slate-900 p-4 rounded-lg"
                    >
                      <AlertTriangle className="h-5 w-5 text-amber-500 mt-0.5" />
                      <p className="text-slate-300">{example}</p>
                    </motion.div>
                  ))}
                </div>
              </div>

              <Separator className="bg-slate-800" />

              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.3 }}>
                <h3 className="text-xl font-semibold text-white mb-3">
                  <span className="flex items-center gap-2">
                    <Shield className="h-5 w-5 text-cyan-400" />
                    Safety Guide: How to Protect Yourself
                  </span>
                </h3>
                <div className="bg-slate-900/50 border border-cyan-900/30 rounded-lg p-6">
                  <div className="grid gap-4">
                    {threat.safetyTips.map((tip: string, index: number) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                        className="flex items-start gap-3"
                      >
                        <div className="flex items-center justify-center rounded-full bg-cyan-900/30 h-6 w-6 mt-0.5 text-cyan-400 text-sm font-bold">
                          {index + 1}
                        </div>
                        <p className="text-slate-200">{tip}</p>
                      </motion.div>
                    ))}
                  </div>

                  <div className="mt-8"></div>
                </div>
              </motion.div>

              <div className="bg-slate-800/30 rounded-lg p-6 border border-slate-700/50">
                <h3 className="text-lg font-semibold text-white mb-3">Related Threats</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                  {threats
                    .filter((t) => t.id !== threat.id)
                    .slice(0, 3)
                    .map((relatedThreat) => (
                      <Button
                        key={relatedThreat.id}
                        variant="outline"
                        className="justify-start border-slate-700 bg-slate-800/50 hover:bg-slate-700 text-left"
                        onClick={() => router.push(`/threat/${relatedThreat.id}`)}
                      >
                        <div className="mr-2">{getThreatIcon(relatedThreat.icon)}</div>
                        <span className="truncate">{relatedThreat.title}</span>
                      </Button>
                    ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}
