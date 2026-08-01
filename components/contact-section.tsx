"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const WHATSAPP_NUMBER = "923003509148"
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hi Archman Consultants, I'd like to get in touch regarding your services.")}`

export function ContactSection() {
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
        <div className="text-center mb-16">
          <h2
            className={`text-4xl md:text-5xl font-bold mb-6 text-balance transition-all duration-1000 ${isVisible ? "slide-up" : "opacity-0 translate-y-8"}`}
          >
            Get In <span className="text-accent">Touch</span>
          </h2>
          <p
            className={`text-xl text-muted-foreground max-w-3xl mx-auto text-pretty transition-all duration-1000 delay-200 ${isVisible ? "slide-up" : "opacity-0 translate-y-8"}`}
          >
            Ready to bring your architectural vision to life? Let's discuss your project.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <Card
            className={`hover-lift text-center transition-all duration-700 delay-300 ${isVisible ? "slide-in-left" : "opacity-0 -translate-x-8"}`}
          >
            <CardHeader>
              <div className="text-4xl mb-4"></div>
              <CardTitle>Office Location</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-pretty">
                Archman Consultants
                <br />
                Parking Floor, Gulf Center
                <br />
                6th Road, Rawalpindi
              </p>
            </CardContent>
          </Card>

          <Card
            className={`hover-lift text-center transition-all duration-700 delay-500 ${isVisible ? "slide-up" : "opacity-0 translate-y-8"}`}
          >
            <CardHeader>
              <div className="text-4xl mb-4"></div>
              <CardTitle>Phone Numbers</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                +92 300 350 9148
                <br />
                +92 345 350 9148
              </p>
            </CardContent>
          </Card>

          <Card
            className={`hover-lift text-center transition-all duration-700 delay-700 ${isVisible ? "slide-in-right" : "opacity-0 translate-x-8"}`}
          >
            <CardHeader>
              <div className="text-4xl mb-4"></div>
              <CardTitle>Email Address</CardTitle>
            </CardHeader>
            <CardContent>
              <a
                href="mailto:razarex875@gmail.com"
                className="text-muted-foreground hover:text-accent transition-colors"
              >
                razarex875@gmail.com
              </a>
            </CardContent>
          </Card>
        </div>

        <div
          className={`mt-12 text-center transition-all duration-1000 delay-900 ${isVisible ? "slide-up" : "opacity-0 translate-y-8"}`}
        >
          <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
            <Button
              size="lg"
              className="hover-lift gap-3 px-8 py-6 text-base bg-[#da0101] hover:bg-[#b40001] text-white border-0"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 shrink-0" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.881 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.89-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Send Plot Details on WhatsApp
            </Button>
          </a>
        </div>
      </div>
    </section>
  )
}
