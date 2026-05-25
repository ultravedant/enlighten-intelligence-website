"use client"

import * as React from "react"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"
import Image from "next/image"

export interface Testimonial {
  image: string
  quote: string
  name: string
  role: string
  rating: number
}

interface TestimonialSliderProps {
  testimonials: Testimonial[]
}

export function TestimonialSlider({ testimonials }: TestimonialSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0) // -1 for left, 1 for right

  // Auto-rotate every 8 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      handleNext()
    }, 8000)
    return () => clearInterval(timer)
  }, [currentIndex])

  const handlePrev = () => {
    setDirection(-1)
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1))
  }

  const handleNext = () => {
    setDirection(1)
    setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1))
  }

  if (!testimonials || testimonials.length === 0) return null

  const current = testimonials[currentIndex]

  // Slide variants
  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 100 : -100,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir: number) => ({
      x: dir < 0 ? 100 : -100,
      opacity: 0,
    }),
  }

  return (
    <div className="relative w-full max-w-4xl mx-auto px-4 py-8">
      {/* Testimonial Card Display */}
      <div className="relative min-h-[380px] md:min-h-[320px] bg-card/45 backdrop-blur-md border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl flex flex-col md:flex-row gap-8 items-center overflow-hidden">
        
        {/* Decorative ambient light */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl -z-10 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-[oklch(0.72_0.19_45)]/10 rounded-full blur-3xl -z-10 pointer-events-none" />

        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="flex flex-col md:flex-row gap-8 items-center w-full"
          >
            {/* Avatar / Image */}
            <div className="w-24 h-24 md:w-32 md:h-32 relative flex-shrink-0 rounded-2xl overflow-hidden border border-white/20 shadow-lg">
              <Image
                src={current.image}
                alt={current.name}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 96px, 128px"
              />
            </div>

            {/* Content */}
            <div className="flex-1 flex flex-col justify-between">
              <div>
                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < current.rating
                          ? "fill-[oklch(0.72_0.19_45)] text-[oklch(0.72_0.19_45)]"
                          : "text-muted-foreground/30"
                      }`}
                    />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-lg md:text-xl font-sans italic text-foreground leading-relaxed mb-6">
                  "{current.quote}"
                </blockquote>
              </div>

              {/* Author details */}
              <div>
                <h4 className="text-lg font-semibold text-foreground font-serif">{current.name}</h4>
                <p className="text-sm text-muted-foreground">{current.role}</p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation and Indicators */}
      <div className="flex items-center justify-between mt-8 max-w-xs mx-auto">
        <button
          onClick={handlePrev}
          className="w-12 h-12 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 text-foreground flex items-center justify-center transition-all duration-300 active:scale-95"
          aria-label="Previous testimonial"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        {/* Bullet indicators */}
        <div className="flex gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setDirection(index > currentIndex ? 1 : -1)
                setCurrentIndex(index)
              }}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                index === currentIndex ? "w-8 bg-indigo-500" : "w-2.5 bg-muted-foreground/30"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>

        <button
          onClick={handleNext}
          className="w-12 h-12 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 text-foreground flex items-center justify-center transition-all duration-300 active:scale-95"
          aria-label="Next testimonial"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  )
}
