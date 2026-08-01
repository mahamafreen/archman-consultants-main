"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [currentSlide, setCurrentSlide] = useState(0)

  const heroImages = [
    "/oslo-heights.jfif",
    "/rabi-centre.png",
    "/hamdan.jpg",
    "/gujjarkhan.jpg",
    "/crown-vista.jpg",
  ]

  useEffect(() => {
    setIsVisible(true)

    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length)
    }, 5000)

    return () => clearInterval(slideInterval)
  }, [heroImages.length])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-[2000ms] ${index === currentSlide ? "opacity-100" : "opacity-0"
              }`}
          >
            <img
              src={image || "/placeholder.svg"}
              alt={`Archman Consultants project ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
        <div className="absolute inset-0 bg-background/20" />
        <div
          className="absolute inset-0"
          style={{
            background: "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(241, 240, 240, 0.75) 0%, rgba(241, 240, 240, 0) 100%)"
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center justify-center h-full pt-16">
        <div
          className={`transition-all duration-1000 ${isVisible ? "fade-in" : "opacity-0"} w-full max-w-5xl text-center`}
        >
          <h1 className="text-6xl md:text-8xl font-bold mb-6 text-balance tracking-tight">
            <span className="block text-foreground">ARCHMAN</span>
            <span className="block text-accent">CONSULTANTS</span>
          </h1>

          <p className="text-2xl md:text-3xl text-foreground/80 mb-4 max-w-3xl mx-auto text-balance font-extrabold">
            Planning & Engineering Solutions
          </p>

          <div className="w-16 h-1.5 bg-accent mx-auto my-6 rounded-full" />

          <p className="text-lg md:text-xl text-foreground font-bold mb-12 max-w-3xl mx-auto text-pretty leading-relaxed">
            Redefining urban and architectural landscapes with sustainable, functional, and aesthetically refined spaces
            that elevate daily life.
          </p>

          <div
            className={`flex flex-col sm:flex-row gap-5 justify-center transition-all duration-1000 delay-300 ${isVisible ? "slide-up" : "opacity-0 translate-y-8"
              }`}
          >
            <a href="#projects">
              <Button size="lg" className="hover-lift text-lg px-8 py-6 rounded-xl font-bold shadow-xl shadow-primary/20 bg-primary text-primary-foreground">
                Explore Our Work
              </Button>
            </a>

            <a href="#contact">
              <Button
                variant="outline"
                size="lg"
                className="hover-lift text-lg px-8 py-6 rounded-xl font-bold bg-transparent border-foreground/30 text-foreground hover:bg-foreground/5 backdrop-blur-none shadow-none"
              >
                Get In Touch
              </Button>
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce flex flex-col items-center gap-2">
        <div className="w-6 h-10 border-2 border-foreground rounded-full flex justify-center">
          <div className="w-1 h-3 bg-foreground rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}
