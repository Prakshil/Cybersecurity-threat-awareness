"use client"

import { CardFooter } from "@/components/ui/card"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  ChevronDown,
  Shield,
  AlertCircle,
  Lock,
  Fingerprint,
  Wifi,
  Mail,
  Globe,
  Database,
  CreditCard,
} from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { threats } from "@/data/threats"

export function ThreatCards() {
  const [expandedId, setExpandedId] = useState<string | null>(null)

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id)
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {threats.map((threat) => (
        <motion.div
          key={threat.id}
          layout
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="h-full"
        >
          <Card
            className={`h-full overflow-hidden border-slate-800 bg-slate-950/50 backdrop-blur-sm transition-colors hover:border-slate-700 ${
              expandedId === threat.id ? "ring-2 ring-cyan-500/50" : ""
            }`}
          >
            <CardHeader className="pb-3">
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

            <CardContent className="pb-3">
              <Button
                variant="ghost"
                size="sm"
                className="w-full justify-between text-cyan-400 hover:bg-slate-800 hover:text-cyan-300"
                onClick={() => toggleExpand(threat.id)}
              >
                <span>Learn more</span>
                <ChevronDown
                  className={`h-4 w-4 transition-transform ${expandedId === threat.id ? "rotate-180" : ""}`}
                />
              </Button>

              <AnimatePresence>
                {expandedId === threat.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="mt-4 space-y-4">
                      <div>
                        <h4 className="font-medium text-white mb-2">Description</h4>
                        <p className="text-slate-300 text-sm">{threat.description}</p>
                      </div>

                      <div>
                        <h4 className="font-medium text-white mb-2">Real-world Examples</h4>
                        <ul className="list-disc list-inside text-slate-300 text-sm space-y-1">
                          {threat.examples.map((example, index) => (
                            <li key={index}>{example}</li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-medium text-white mb-2">How to Stay Safe</h4>
                        <ul className="list-disc list-inside text-slate-300 text-sm space-y-1">
                          {threat.safetyTips.map((tip, index) => (
                            <li key={index}>{tip}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </CardContent>

            <CardFooter className="pt-0">
              {expandedId === threat.id && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                  <div className="text-xs text-center text-slate-400">Click outside to collapse</div>
                </motion.div>
              )}
            </CardFooter>
          </Card>
        </motion.div>
      ))}
    </div>
  )
}

export function getThreatIcon(iconName: string) {
  const iconProps = { className: "h-5 w-5 text-cyan-400" }

  switch (iconName) {
    case "phishing":
      return <Mail {...iconProps} />
    case "malware":
      return <AlertCircle {...iconProps} />
    case "password":
      return <Lock {...iconProps} />
    case "social":
      return <Globe {...iconProps} />
    case "data":
      return <Database {...iconProps} />
    case "identity":
      return <Fingerprint {...iconProps} />
    case "wifi":
      return <Wifi {...iconProps} />
    case "payment":
      return <CreditCard {...iconProps} />
    default:
      return <Shield {...iconProps} />
  }
}
