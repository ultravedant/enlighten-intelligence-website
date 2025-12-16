"use client"

import { motion } from "framer-motion"

export function ToolsSection() {
  const tools = [
    { name: "Claude AI", logo: "/tools/claude-logo.png" },
    { name: "ChatGPT", logo: "/tools/chatgpt-logo.png" },
    { name: "Hugging Face", logo: "/tools/huggingface-logo.png" },
    { name: "Anthropic", logo: "/tools/anthropic-logo.png" },
    { name: "Dialogflow", logo: "/tools/dialogflow-logo.png" },
    { name: "Replicate", logo: "/tools/replicate-logo.png" },
    { name: "Weights & Biases", logo: "/tools/wandb-logo.png" },
    { name: "Notion AI", logo: "/tools/notion-logo.png" },
    { name: "AI Assistant", logo: "/tools/chatbot-logo.png" },
  ]

  return (
    <section className="py-24 px-6 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="font-serif text-4xl md:text-5xl font-bold mb-4"
          >
            Tools We Use
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            Leveraging cutting-edge AI and technology tools to deliver exceptional results.
          </motion.p>
        </div>

        {/* Scrolling logos container */}
        <div className="relative overflow-hidden">
          {/* Gradient overlays for smooth fade effect */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-secondary/30 to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-secondary/30 to-transparent z-10" />

          {/* Scrolling content - duplicate for seamless loop */}
          <div className="flex gap-12 animate-scroll-left">
            {/* First set */}
            {tools.map((tool, index) => (
              <div
                key={`tool-1-${index}`}
                className="flex-shrink-0 w-32 h-32 bg-background rounded-2xl border border-border flex items-center justify-center p-6 hover:border-primary/50 transition-colors"
              >
                <img src={tool.logo || "/placeholder.svg"} alt={tool.name} className="w-full h-full object-contain" />
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {tools.map((tool, index) => (
              <div
                key={`tool-2-${index}`}
                className="flex-shrink-0 w-32 h-32 bg-background rounded-2xl border border-border flex items-center justify-center p-6 hover:border-primary/50 transition-colors"
              >
                <img src={tool.logo || "/placeholder.svg"} alt={tool.name} className="w-full h-full object-contain" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
