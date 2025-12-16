"use client"

import { useState } from "react"
import { IconChevronDown } from "@tabler/icons-react"
import { motion } from "framer-motion"

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      question: "What types of businesses do you work with?",
      answer:
        "We work with startups at all stages - from idea validation to scaling operations. Whether you're launching your first product or expanding into new markets, we have the expertise to support your growth journey.",
    },
    {
      question: "How long does a typical project take?",
      answer:
        "Project timelines vary based on complexity. Product engineering projects typically take 8-16 weeks, while AI system integrations can be delivered in 4-8 weeks. We provide detailed timelines during our initial consultation.",
    },
    {
      question: "Do you provide ongoing support after launch?",
      answer:
        "Absolutely. We offer comprehensive post-launch support including monitoring, optimization, updates, and scaling assistance. Our goal is to be your long-term technology partner as your business grows.",
    },
    {
      question: "What AI tools and technologies do you specialize in?",
      answer:
        "We work with cutting-edge AI tools including ChatGPT, Claude, custom machine learning models, and automation frameworks. Our team stays current with the latest AI advancements to deliver innovative solutions.",
    },
    {
      question: "Can you help with an existing product or system?",
      answer:
        "Yes! We excel at enhancing existing products, refactoring legacy systems, integrating new technologies, and scaling infrastructure. We'll assess your current setup and provide strategic recommendations for improvement.",
    },
    {
      question: "How do you ensure the security of our data and IP?",
      answer:
        "Security is paramount. We implement industry-standard security practices, sign NDAs, use secure development environments, and follow strict data protection protocols. Your intellectual property is always protected.",
    },
  ]

  return (
    <section id="faq" className="py-24 px-6 bg-background">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="font-serif text-4xl md:text-5xl font-bold mb-4"
          >
            Frequently Asked Questions
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-muted-foreground"
          >
            Everything you need to know about partnering with Enlighten Intelligence.
          </motion.p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="border border-border rounded-xl overflow-hidden bg-secondary"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-background/50 transition-colors"
              >
                <span className="font-semibold text-lg pr-8">{faq.question}</span>
                <IconChevronDown
                  className={`w-5 h-5 flex-shrink-0 transition-transform ${openIndex === index ? "rotate-180" : ""}`}
                />
              </button>
              {openIndex === index && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="px-6 pb-5 text-muted-foreground leading-relaxed"
                >
                  {faq.answer}
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
