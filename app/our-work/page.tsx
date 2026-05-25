"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { IconCircleArrowRight } from "@tabler/icons-react"

const projects = [
  {
    id: 1,
    name: "IV PATCH",
    subtext: "Ecommerce Store + CRM Development",
    image: "/projects/iv-patch.png",
    link: "https://ivpatch.com/",
  },
  {
    id: 2,
    name: "Ultra Smile",
    subtext: "Dental Clinic Page + Online Consultation Booking",
    image: "/projects/ultra-smile.png",
    link: "https://ultra-smile.vercel.app",
  },
  {
    id: 3,
    name: "All Things Design",
    subtext: "Web Development + UI Design",
    image: "/projects/workspace-interior.png",
    link: "https://www.allthingsdesign.in/",
  },
  {
    id: 4,
    name: "Langlore",
    subtext: "UI/UX Design & Preservation Platform",
    image: "/projects/langlore.png",
    link: "https://langlore.in/",
  },
  {
    id: 5,
    name: "Blipp AI",
    subtext: "Intelligence Layer for Modern States & Organizations",
    image: "/projects/blipp-ai.png",
    link: "https://www.blippai.com/",
  },
  {
    id: 6,
    name: "Samarth AI",
    subtext: "AI Advisory for Indians",
    image: "/projects/samarth.png",
    link: "https://samarth-ai-v1.vercel.app/",
  },
  {
    id: 7,
    name:"Wabbie",
    subtext: "WhatsApp Restaurant Ordering System",
    image: "/projects/wabbie.png",
    link: "https://wabbie-web.vercel.app/",
  },
  {
    id: 8,
    name: "FAST LC",
    subtext: "Trade Growth & Finance Platform",
    image: "/projects/fast-lc.png",
    link: "https://fast-loc.vercel.app/",
  },
  {
    id: 9,
    name: "HealthChain",
    subtext: "Blockchain Medical Records System",
    image: "/projects/healthchain.png",
    link: "https://healtchain.vercel.app/",
  },
  {
    id: 10,
    name: "Satyam Classes",
    subtext: "Educational Platform for Students",
    image: "/projects/satyam-classes.png",
    link: "https://v0-satyam-classes-website.vercel.app/",
  },
]

function ProjectCard({ project }: { project: typeof projects[0] }) {
  return (
    <div className="w-full">
      <div className="group relative overflow-hidden rounded-[15px] border border-neutral-200/60 dark:border-neutral-800/60 shadow-[0_20px_50px_rgba(0,0,0,0.06)] bg-neutral-100 dark:bg-neutral-900 w-full aspect-[4/3] md:aspect-[16/10]">
        {/* Website Image */}
        <Image
          src={project.image}
          alt={project.name}
          fill
          sizes="(max-width: 1400px) 100vw, 1400px"
          className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.01]"
        />

        {/* Bottom shadow gradient for readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60 pointer-events-none z-10" />

        {/* Glassmorphic Overlay in Bottom Left */}
        <div className="absolute bottom-3 left-3 md:bottom-8 md:left-8 z-30 max-w-[92%] md:max-w-md p-3 md:p-6 rounded-[15px] bg-white/70 dark:bg-black/60 backdrop-blur-xl border border-white/40 dark:border-white/10 shadow-2xl transition-all duration-300 group-hover:bg-white/85 dark:group-hover:bg-black/75 group-hover:scale-[1.01]">
          <h3 className="font-serif text-lg md:text-2xl lg:text-3xl font-bold text-neutral-950 dark:text-white tracking-tight mb-0.5 md:mb-1">
            {project.name}
          </h3>
          <p className="font-sans text-[10px] md:text-xs lg:text-sm text-neutral-600 dark:text-neutral-300 font-medium mb-2 md:mb-3.5 leading-relaxed">
            {project.subtext}
          </p>
          <Link
            href={project.link}
            className="inline-flex items-center gap-1.5 text-xs md:text-sm font-semibold text-neutral-900 dark:text-white hover:text-orange-500 dark:hover:text-orange-400 transition-colors group/btn"
          >
            View Project
            <IconCircleArrowRight className="w-4 h-4 md:w-5 md:h-5 text-neutral-900 dark:text-white transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:text-orange-500 dark:group-hover/btn:text-orange-400" />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default function OurWorkPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#fcfcfd] dark:bg-[#0a0a0a]">
      <Header />

      <main className="flex-grow pt-28 md:pt-36 pb-16 md:pb-24">
        {/* Intro Hero Section */}
        <section className="container mx-auto px-4 sm:px-6 max-w-4xl text-center mb-10 md:mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-orange-500 dark:text-orange-400 font-semibold uppercase tracking-wider text-xs md:text-sm block mb-2 md:mb-3"
          >
            Our Work
          </motion.span>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-neutral-900 dark:text-white leading-[1.15] md:leading-none mb-4 md:mb-6"
          >
            Let Our Work Speak <br className="hidden md:inline" /> For Itself
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-neutral-500 dark:text-neutral-400 text-sm md:text-lg lg:text-xl max-w-2xl mx-auto leading-relaxed font-sans"
          >
            Your vision, our expertise. We collaborate to craft impactful Shopify solutions within your timeframe and budget, propelling your business ambitions forward.
          </motion.p>
        </section>

        {/* Projects List */}
        <section className="container mx-auto px-4 sm:px-6 max-w-7xl scroll-mt-28">
          <div className="flex flex-col gap-8 md:gap-16">
            {projects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
              />
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
