"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/3d-button"
import { motion } from "framer-motion"
import { Globe, Cpu, BookOpen, TrendingUp } from "lucide-react"

const benefits = [
  {
    icon: Globe,
    title: "Remote First",
    description: "Work from anywhere in the world. We value outcomes, flexibility, and autonomy over fixed office hours.",
  },
  {
    icon: Cpu,
    title: "Cutting-Edge Tech",
    description: "Build state-of-the-art products using AI, modern web frameworks, and modern development standards.",
  },
  {
    icon: BookOpen,
    title: "Growth & Learning",
    description: "Get access to learning resources, conferences, courses, and mentorship to level up your career.",
  },
  {
    icon: TrendingUp,
    title: "High Impact",
    description: "Play a key role in developing products for startups and scaling platforms, making a direct impact every day.",
  },
]

export default function CareersPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#fcfcfd] dark:bg-[#0a0a0a]">
      <Header />

      <main className="flex-grow pt-28 md:pt-36 pb-16 md:pb-24">
        {/* Hero Section */}
        <section className="container mx-auto px-4 sm:px-6 max-w-4xl text-center mb-12 md:mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-orange-500 dark:text-orange-400 font-semibold uppercase tracking-wider text-xs md:text-sm block mb-2 md:mb-3"
          >
            Careers
          </motion.span>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-neutral-900 dark:text-white leading-[1.15] md:leading-none mb-4 md:mb-6"
          >
            Build the Future <br className="hidden md:inline" /> of Digital Products
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-neutral-500 dark:text-neutral-400 text-sm md:text-lg lg:text-xl max-w-2xl mx-auto leading-relaxed font-sans mb-8 md:mb-10"
          >
            Join a fast-growing, collaborative team of engineers, designers, and innovators. We are on a mission to build highly intelligent systems and premium digital experiences.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex justify-center"
          >
            <Button
              href="https://ei-careers.vercel.app/"
              target="_blank"
              className="bg-orange-500 hover:bg-orange-600 text-white border-orange-700 border-b-4 border-b-orange-600 shadow-lg rounded-full px-8 py-4 text-base font-semibold transition-all hover:scale-[1.02]"
            >
              Join our team
            </Button>
          </motion.div>
        </section>

        {/* Benefits Grid */}
        <section className="container mx-auto px-4 sm:px-6 max-w-4xl mb-12">
          <div className="text-center mb-10">
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-neutral-900 dark:text-white">
              Why Join Enlighten Intelligence?
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  className="bg-white/50 dark:bg-neutral-900/50 backdrop-blur-md border border-neutral-200/60 dark:border-neutral-800/60 p-6 rounded-[15px] shadow-[0_10px_30px_rgba(0,0,0,0.02)] flex gap-4"
                >
                  <div className="w-10 h-10 rounded-xl bg-orange-500/10 text-orange-500 dark:text-orange-400 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-sans font-semibold text-neutral-950 dark:text-white mb-1.5 text-base md:text-lg">
                      {benefit.title}
                    </h3>
                    <p className="font-sans text-xs md:text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
