"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"

export function AboutSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <div className={`transition-all duration-1000 ${isVisible ? "slide-in-left" : "opacity-0 -translate-x-8"}`}>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-balance">
              About <span className="text-accent">Archman</span>
            </h2>
            <div className="space-y-6 text-lg text-muted-foreground">
              <p className="text-pretty">
                Founded over 13 years ago by <strong className="text-foreground">Arshad Thakur</strong>, Archman
                Consultants has grown from a vision of practical market insight into a leading architectural
                consultancy.
              </p>
              <p className="text-pretty">
                With 21+ years in the field and 16 years in Real Estate Marketing, our founder brings unique market
                realism to every design challenge, creating spaces that are both beautiful and buildable.
              </p>
              <p className="text-pretty">
                Today, we continue to shape urban landscapes with sustainable, functional, and aesthetically refined
                solutions that elevate daily life.
              </p>
            </div>
          </div>

          <div
            className={`transition-all duration-1000 delay-300 ${isVisible ? "slide-in-right" : "opacity-0 translate-x-8"}`}
          >
            <Card className="hover-lift bg-gradient-to-br from-card to-muted/20 border-0 shadow-lg">
              <CardContent className="p-8">
                <blockquote className="text-xl italic text-center text-pretty">
                  "With over two decades of experience, I've learned architecture is more than structures — it's about
                  shaping environments where people thrive. At Archman Consultants, every project is a partnership: our
                  expertise meeting your vision to build lasting value."
                </blockquote>
                <div className="mt-6 text-center">
                  <div className="font-semibold text-foreground">Arshad Thakur</div>
                  <div className="text-sm text-muted-foreground">CEO & Founder</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
