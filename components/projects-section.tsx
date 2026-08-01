"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const WHATSAPP_NUMBER = "923003509148"

type Project = {
  title: string
  location: string
  type: string
  description: string
  images: string[]
  category: "completed" | "upcoming"
}

const projects: Project[] = [
  {
    title: "Oslo Heights",
    location: "Mumtaz City, Islamabad",
    type: "Mixed-Use High-Rise",
    description:
      "12-storey multipurpose development combining apartments with commercial frontage. Emphasis on vertical mobility, parking, safety systems, and proximity to Islamabad International Airport.",
    images: ["/oslo-heights.jfif", "/crown-vista.jpg", "/hamdan.jpg"],
    category: "completed",
  },
  {
    title: "Rabi Center 1",
    location: "Bahria Town Phase 7 (Wallayat Complex)",
    type: "Retail / Mixed-Use",
    description:
      "Retail-led tower with shops at lower levels and apartments above. High footfall catchment; security, elevators, backup power, and active tenancy.",
    images: ["/rabi-centre.png", "/qazi-mall.jpg"],
    category: "completed",
  },
  {
    title: "Hamdan Heights",
    location: "Ghauri Town Phase 5, Islamabad",
    type: "Mixed-Use Mid-Rise",
    description:
      "Residential and commercial floors with basement parking and high-speed lifts. Public listings credit Archman Consultants with design; efficient cores and circulation.",
    images: ["/hamdan.jpg", "/crown-vista.jpg"],
    category: "completed",
  },
  {
    title: "Suzuki Gujarkhan Motors",
    location: "GT Road, Gujar Khan",
    type: "Automotive Dealership, 3S",
    description:
      "Sales, service, and spares facility on a regional artery; brand-compliant façade and customer-first layout.",
    images: ["/gujjarkhan.jpg"],
    category: "completed",
  },
  {
    title: "Crown Vista",
    location: "Ghauri Town Phase 5, Islamabad",
    type: "Apartments over Commercial",
    description:
      "Mixed-use development with apartments above retail; daylight-oriented layouts, balconies, and independent vertical circulation.",
    images: ["/crown-vista.jpg", "/hamdan.jpg", "/qazi-mall.jpg"],
    category: "completed",
  },
  {
    title: "Qazi Mall",
    location: "Ghauri Town Phase 7, Islamabad",
    type: "Mall + Apartments",
    description:
      "Community-scale mall with retail on lower floors and 1–3 bed apartments above; designed for family-friendly amenities and easy access.",
    images: ["/qazi-mall.jpg", "/rabi-centre.png"],
    category: "completed",
  },
  {
    title: "Al-Safa Plaza",
    location: "6th Road, Rawalpindi",
    type: "Commercial Plaza",
    description:
      "Multi-storey commercial plaza with modern façade, dedicated parking, and flexible retail/office units suited to high-traffic corridors.",
    images: ["/rabi-centre.png", "/oslo-heights.jfif"],
    category: "completed",
  },
  {
    title: "Metro Trade Center",
    location: "Saddar, Rawalpindi",
    type: "Mixed-Use Commercial",
    description:
      "Urban commercial hub combining showrooms, offices, and service outlets with efficient vertical circulation and contemporary street presence.",
    images: ["/gujjarkhan.jpg", "/crown-vista.jpg"],
    category: "completed",
  },
  {
    title: "Skyline Residency",
    location: "Bahria Town Phase 8, Rawalpindi",
    type: "Residential Tower",
    description:
      "Mid-rise residential tower with optimized unit layouts, communal amenities, and secure basement parking for families and investors.",
    images: ["/hamdan.jpg", "/oslo-heights.jfif"],
    category: "completed",
  },
  {
    title: "Oslo Heights Phase II",
    location: "Mumtaz City, Islamabad",
    type: "Mixed-Use High-Rise",
    description:
      "Next phase expansion with premium apartments and ground-floor commercial — currently in design and approvals stage.",
    images: ["/oslo-heights.jfif", "/crown-vista.jpg"],
    category: "upcoming",
  },
  {
    title: "Gulf Center Hub",
    location: "6th Road, Rawalpindi",
    type: "Commercial Development",
    description:
      "Flagship commercial hub adjacent to Gulf Center with modern retail frontage and flexible office spaces — launching soon.",
    images: ["/rabi-centre.png", "/qazi-mall.jpg"],
    category: "upcoming",
  },
  {
    title: "Mumtaz City Residency",
    location: "Mumtaz City, Islamabad",
    type: "Residential Complex",
    description:
      "Family-oriented residential complex near the airport corridor with contemporary layouts and community-focused planning.",
    images: ["/hamdan.jpg", "/oslo-heights.jfif"],
    category: "upcoming",
  },
  {
    title: "Rabi Center 2",
    location: "Bahria Town Phase 7",
    type: "Retail / Mixed-Use",
    description:
      "Successor to Rabi Center 1 — expanded retail podium with residential floors above, now in pre-launch phase.",
    images: ["/rabi-centre.png", "/crown-vista.jpg"],
    category: "upcoming",
  },
]

const INITIAL_VISIBLE_COUNT = 6

function getWhatsAppLink(project: Project) {
  const message = encodeURIComponent(
    `Hi Archman Consultants, I'm interested in ${project.title} (${project.location}). Please share plot details and availability.`,
  )
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`
}

function ProjectImageSlideshow({ images, title }: { images: string[]; title: string }) {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (images.length <= 1) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [images.length])

  return (
    <div className="relative h-56 overflow-hidden">
      {images.map((image, index) => (
        <div
          key={`${title}-${index}`}
          className={`absolute inset-0 transition-all duration-[2500ms] ease-in-out ${index === currentIndex ? "opacity-100 scale-105" : "opacity-0 scale-100"
            }`}
        >
          <img
            src={image || "/placeholder.svg"}
            alt={`${title} — view ${index + 1}`}
            className="w-full h-full object-cover"
          />
        </div>
      ))}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
      {images.length > 1 && (
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
          {images.map((_, index) => (
            <span
              key={index}
              className={`h-1.5 rounded-full transition-all duration-500 ${index === currentIndex ? "w-5 bg-white" : "w-1.5 bg-white/40"
                }`}
            />
          ))}
        </div>
      )}
    </div>
  )
}

function ProjectCard({
  project,
  index,
  isVisible,
}: {
  project: Project
  index: number
  isVisible: boolean
}) {
  return (
    <div
      data-index={index}
      className={`group relative rounded-xl overflow-hidden bg-card shadow-md transition-all duration-700 hover:shadow-2xl hover:shadow-accent/10 hover:-translate-y-2 ${isVisible ? "slide-up" : "opacity-0 translate-y-8"
        }`}
      style={{ transitionDelay: `${(index % INITIAL_VISIBLE_COUNT) * 150}ms` }}
    >
      {/* Hover glow border */}
      <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-20 ring-1 ring-accent/30" />

      <div className="relative">
        <ProjectImageSlideshow images={project.images} title={project.title} />

        {/* Title overlay on image */}
        <div className="absolute bottom-0 left-0 right-0 p-4 z-10">
          <h3 className="text-xl font-bold text-white drop-shadow-lg">{project.title}</h3>
          <p className="text-white/80 text-sm flex items-center gap-1.5 mt-1">
            <svg className="w-3.5 h-3.5 shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
            </svg>
            {project.location}
          </p>
        </div>

        {/* Category badge */}
        <span className="absolute top-3 right-3 text-xs font-semibold px-3 py-1 bg-accent text-white rounded-full z-10 shadow-lg shadow-accent/25">
          {project.type}
        </span>
        {project.category === "upcoming" && (
          <span className="absolute top-3 left-3 text-[10px] font-bold uppercase tracking-widest px-3 py-1 bg-white/90 text-foreground rounded-full z-10 backdrop-blur-sm">
            ✦ Upcoming
          </span>
        )}
      </div>

      <div className="p-5 space-y-4">
        <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">{project.description}</p>
        <a href={getWhatsAppLink(project)} target="_blank" rel="noopener noreferrer" className="block">
          <button className="w-full flex items-center justify-center gap-2.5 py-2.5 px-4 rounded-lg text-sm font-semibold bg-[#25D366]/10 text-[#25D366] border border-[#25D366]/20 hover:bg-[#25D366] hover:text-white hover:border-[#25D366] hover:shadow-lg hover:shadow-[#25D366]/20 transition-all duration-300 cursor-none">
            <WhatsAppIcon />
            Send Plot Details on WhatsApp
          </button>
        </a>
      </div>
    </div>
  )
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 shrink-0" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.881 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.89-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  )
}

export function ProjectsSection() {
  const [visibleProjects, setVisibleProjects] = useState<number[]>([])
  const [showAllCompleted, setShowAllCompleted] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  const completedProjects = projects.filter((p) => p.category === "completed")
  const upcomingProjects = projects.filter((p) => p.category === "upcoming")
  const visibleCompleted = showAllCompleted
    ? completedProjects
    : completedProjects.slice(0, INITIAL_VISIBLE_COUNT)
  const hasMoreCompleted = completedProjects.length > INITIAL_VISIBLE_COUNT

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const projectIndex = Number.parseInt(entry.target.getAttribute("data-index") || "0")
            setVisibleProjects((prev) => (prev.includes(projectIndex) ? prev : [...prev, projectIndex]))
          }
        })
      },
      { threshold: 0.1 },
    )

    const projectCards = sectionRef.current?.querySelectorAll("[data-index]")
    projectCards?.forEach((card) => observer.observe(card))

    return () => observer.disconnect()
  }, [showAllCompleted])

  return (
    <section ref={sectionRef} className="py-24 bg-muted/20">
      <div className="container mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-accent font-semibold tracking-widest uppercase text-sm mb-3">Our Portfolio</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
            Featured <span className="text-accent">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Showcasing our commitment to innovative design and exceptional execution across diverse project types
          </p>
          <div className="mt-6 flex justify-center">
            <div className="h-1 w-16 bg-accent rounded-full" />
          </div>
        </div>

        {/* Completed projects grid */}
        <div className="relative pb-4">
          <div
            className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-500 ${hasMoreCompleted && !showAllCompleted ? "max-h-[1100px] overflow-hidden" : ""
              }`}
          >
            {visibleCompleted.map((project, index) => (
              <ProjectCard
                key={project.title}
                project={project}
                index={index}
                isVisible={visibleProjects.includes(index)}
              />
            ))}
          </div>

          {hasMoreCompleted && !showAllCompleted && (
            <>
              {/* Premium gradient overlay */}
              <div
                className="absolute bottom-0 left-0 right-0 h-72 pointer-events-none z-10"
                style={{
                  background:
                    "linear-gradient(to top, var(--background) 0%, var(--background) 8%, rgba(241, 240, 240, 0.95) 35%, rgba(241, 240, 240, 0.6) 65%, transparent 100%)",
                }}
              />
              {/* View More CTA */}
              <div className="absolute bottom-0 left-0 right-0 z-20 flex flex-col items-center pb-4">
                <p className="text-sm text-muted-foreground mb-5 font-medium">
                  {completedProjects.length - INITIAL_VISIBLE_COUNT} more projects await
                </p>
                <button
                  onClick={() => setShowAllCompleted(true)}
                  className="group/btn relative inline-flex items-center gap-3 px-10 py-4 rounded-full text-base font-bold bg-accent text-white shadow-xl shadow-accent/25 hover:shadow-2xl hover:shadow-accent/40 hover:scale-105 active:scale-95 transition-all duration-300 cursor-none"
                >
                  View All Projects
                  <svg className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </button>
                {/* Animated scroll hint */}
                <div className="mt-4 animate-bounce">
                  <svg className="w-5 h-5 text-muted-foreground/60" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                  </svg>
                </div>
              </div>
            </>
          )}
        </div>

        {/* Upcoming projects */}
        <div className="mt-24">
          <div className="text-center mb-12">
            <p className="text-accent font-semibold tracking-widest uppercase text-sm mb-3">Coming Soon</p>
            <h3 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
              Upcoming <span className="text-accent">Projects</span>
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              New developments on the horizon — register your interest early for priority access and plot details
            </p>
            <div className="mt-6 flex justify-center">
              <div className="h-1 w-12 bg-accent/50 rounded-full" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {upcomingProjects.map((project, index) => {
              const cardIndex = completedProjects.length + index
              return (
                <ProjectCard
                  key={project.title}
                  project={project}
                  index={cardIndex}
                  isVisible={visibleProjects.includes(cardIndex)}
                />
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

