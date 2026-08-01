"use client"

import { Card, CardContent } from "@/components/ui/card"
import { PencilRuler, HardHat } from "lucide-react"

export function TeamSection() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <h3 className="text-5xl font-bold text-center mb-12">
          Our <span className="text-accent">Team</span>
        </h3>

        {/* CEO Card */}
        <div className="mb-12 flex justify-center">
          <Card className="hover-lift bg-gradient-to-br from-card to-muted/20 border-0 shadow-lg max-w-2xl w-full">
            <CardContent className="p-8">
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="w-40 h-50 rounded-lg overflow-hidden flex-shrink-0">
                  <img
                    src="/arshad.png"
                    alt="Arshad Thakur"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-center md:text-left">
                  <h4 className="text-2xl font-bold text-foreground mb-2">Arshad Thakur</h4>
                  <p className="text-accent font-semibold mb-3">CEO & Founder</p>
                  <p className="text-muted-foreground">
                    Visionary leader focused on quality, innovation, and client outcomes. 21+ years of experience in
                    architecture and real estate.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Team members */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="hover-lift bg-gradient-to-br from-card to-muted/20 border-0 shadow-lg">
            <CardContent className="p-6">
              <div className="flex flex-col items-center text-center">
                <div className="w-32 h-32 rounded-full overflow-hidden mb-4 ring-2 ring-accent/20">
                  <img src="/raza.jpg" alt="Raza Arshad" className="w-full h-full object-cover" />
                </div>
                <h4 className="text-lg font-bold text-foreground mb-2">Raza Arshad</h4>
                <p className="text-accent font-semibold mb-3">3D Visualizer & Drafting Assistant</p>
                <p className="text-muted-foreground text-sm">
                  Creates realistic 3D renderings and assists with technical drafting for project visualization and approvals.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="hover-lift bg-gradient-to-br from-card to-muted/20 border-0 shadow-lg">
            <CardContent className="p-6">
              <div className="flex flex-col items-center text-center">
                <div className="w-32 h-32 rounded-full mb-4 ring-2 ring-accent/20 bg-muted/30 flex items-center justify-center">
                  <PencilRuler className="w-12 h-12 text-accent" />
                </div>
                <h4 className="text-lg font-bold text-foreground mb-2">Sajjad Sabir</h4>
                <p className="text-accent font-semibold mb-3">Senior Draftsman</p>
                <p className="text-muted-foreground text-sm">
                  Expert in working drawings and technical detailing with precision and accuracy.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="hover-lift bg-gradient-to-br from-card to-muted/20 border-0 shadow-lg">
            <CardContent className="p-6">
              <div className="flex flex-col items-center text-center">
                <div className="w-32 h-32 rounded-full mb-4 ring-2 ring-accent/20 bg-muted/30 flex items-center justify-center">
                  <PencilRuler className="w-12 h-12 text-accent" />
                </div>
                <h4 className="text-lg font-bold text-foreground mb-2">Muhammad Shakir</h4>
                <p className="text-accent font-semibold mb-3">Junior Draftsman</p>
                <p className="text-muted-foreground text-sm">
                  Supports documentation, modeling, and presentation with attention to detail.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="hover-lift bg-gradient-to-br from-card to-muted/20 border-0 shadow-lg">
            <CardContent className="p-6">
              <div className="flex flex-col items-center text-center">
                <div className="w-32 h-32 rounded-full mb-4 ring-2 ring-accent/20 bg-muted/30 flex items-center justify-center">
                  <HardHat className="w-12 h-12 text-accent" />
                </div>
                <h4 className="text-lg font-bold text-foreground mb-2">Muhammad Ghufran</h4>
                <p className="text-accent font-semibold mb-3">Senior Supervisor</p>
                <p className="text-muted-foreground text-sm">
                  Coordinates supervisors and site milestones ensuring project success.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
