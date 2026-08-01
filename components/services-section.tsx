"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const services = [
  {
    title: "Architectural Design",
    description: "Residential, commercial, and institutional architecture that balances form and function.",
    
  },
  {
    title: "Urban Planning",
    description: "Comprehensive masterplanning and zoning solutions for sustainable communities.",
    
  },
  {
    title: "Interior Design",
    description: "Functional, detail-driven interiors that enhance the human experience.",
    
  },
  {
    title: "Structural Engineering",
    description: "Cost-efficient, safe structural design and construction supervision.",
    
  },
  {
    title: "3D Visualization",
    description: "Realistic renderings and visualizations for approvals and marketing.",
    
  },
  {
    title: "Project Management",
    description: "End-to-end project supervision from concept to handover.",
    
  },
]

export function ServicesSection() {
  const [visibleCards, setVisibleCards] = useState<number[]>([])
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cardIndex = Number.parseInt(entry.target.getAttribute("data-index") || "0")
            setVisibleCards((prev) => [...prev, cardIndex])
          }
        })
      },
      { threshold: 0.1 },
    )

    const cards = sectionRef.current?.querySelectorAll("[data-index]")
    cards?.forEach((card) => observer.observe(card))

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
            Our <span className="text-accent">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Comprehensive architectural and engineering solutions tailored to your vision
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              data-index={index}
              className={`hover-lift transition-all duration-700 ${
                visibleCards.includes(index)
                  ? index % 2 === 0
                    ? "slide-in-left"
                    : "slide-in-right"
                  : "opacity-0 translate-x-8"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <CardHeader>
                
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
