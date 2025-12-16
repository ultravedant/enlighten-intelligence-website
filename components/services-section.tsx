"use client"

import { motion } from "framer-motion"

export function ServicesSection() {
  const services = [
    {
      title: "Product Engineering",
      description: "Build robust, scalable products with modern technology stacks",
      image: "/services/product-engineering.jpg",
    },
    {
      title: "Intelligent Systems",
      description: "Integrate AI and machine learning to automate and optimize",
      image: "/services/intelligent-systems.jpg",
    },
    {
      title: "Experience Design",
      description: "Create intuitive, user-centered interfaces that delight",
      image: "/services/experience-design.jpg",
    },
    {
      title: "Growth Strategy",
      description: "Scale your business with data-driven strategies",
      image: "/services/growth-strategy.jpg",
    },
  ]

  return (
    <section id="services" className="py-20 px-4 sm:px-6 w-full bg-background">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="font-serif text-5xl sm:text-6xl lg:text-7xl font-normal text-foreground mb-4 tracking-tight"
          >
            Our Services
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-sans text-lg sm:text-xl text-muted-foreground"
          >
            Comprehensive solutions to launch and scale your business vision.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-3xl h-[400px] cursor-pointer"
            >
              {/* Full-width background image */}
              <div className="absolute inset-0">
                <img
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

              {/* Content at bottom with blur effect */}
              <div className="absolute bottom-0 left-0 right-0 p-8 backdrop-blur-sm bg-black/20">
                <h3 className="font-serif text-2xl font-semibold text-white mb-2">{service.title}</h3>
                <p className="text-white/90 text-sm leading-relaxed">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
