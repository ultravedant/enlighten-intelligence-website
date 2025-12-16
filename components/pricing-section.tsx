"use client"

import { Button } from "@/components/ui/3d-button"
import { IconCheck } from "@tabler/icons-react"
import { motion } from "framer-motion"

export function PricingSection() {
  const plans = [
    {
      name: "Startup Launch",
      tag: "MVP Ready",
      timeline: "6-8 weeks",
      description: "Perfect for validating your idea and launching your MVP quickly.",
      features: [
        "MVP development",
        "Core product features",
        "Modern tech stack",
        "6-8 week delivery",
        "Basic analytics setup",
        "30 days post-launch support",
      ],
    },
    {
      name: "Growth Accelerator",
      tag: "Most Popular",
      timeline: "12-16 weeks",
      description: "Ideal for startups ready to scale with advanced features and AI integration.",
      features: [
        "Full product engineering",
        "AI system integration",
        "Custom design system",
        "Advanced analytics & monitoring",
        "Performance optimization",
        "API & third-party integrations",
        "90 days support & maintenance",
        "Growth strategy consultation",
      ],
      featured: true,
    },
    {
      name: "Enterprise Scale",
      tag: "Full Partnership",
      timeline: "Ongoing",
      description: "For established businesses needing comprehensive solutions and ongoing partnership.",
      features: [
        "Unlimited features & customization",
        "Dedicated development team",
        "Priority support 24/7",
        "Advanced AI & automation",
        "Cloud infrastructure setup",
        "Ongoing development sprints",
        "Performance monitoring",
        "Quarterly strategy sessions",
      ],
    },
  ]

  return (
    <section id="pricing" className="py-24 px-6 bg-secondary">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="font-serif text-4xl md:text-5xl font-bold mb-4"
          >
            Investment Packages
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            Choose the engagement model that fits your business stage. All packages include our expertise in intelligent
            systems and modern technology.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`rounded-2xl p-8 border-2 ${
                plan.featured ? "bg-background border-primary shadow-lg scale-105" : "bg-background border-border"
              }`}
            >
              {plan.featured && (
                <div className="text-xs font-bold text-primary uppercase tracking-wider mb-4">Most Popular</div>
              )}
              <h3 className="font-serif text-2xl font-bold mb-2">{plan.name}</h3>
              <div className="mb-4">
                <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold text-sm">
                  {plan.tag}
                </span>
                <div className="mt-3">
                  <span className="text-2xl font-bold">{plan.timeline}</span>
                  <span className="text-muted-foreground ml-2">delivery</span>
                </div>
              </div>
              <p className="text-muted-foreground mb-6 leading-relaxed">{plan.description}</p>
              <Button stretch className="mb-6 rounded-full">
                Schedule Consultation
              </Button>
              <div className="space-y-3">
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-start gap-3">
                    <IconCheck className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
