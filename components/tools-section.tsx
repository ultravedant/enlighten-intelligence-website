"use client"

import { motion } from "framer-motion"

export function ToolsSection() {
  const tools = [
    { name: "ChatGPT", logo: "/chatgpt-logo-openai.jpg" },
    { name: "Claude", logo: "/claude-ai-anthropic-logo.jpg" },
    { name: "Midjourney", logo: "/midjourney-ai-art-logo.jpg" },
    { name: "GitHub Copilot", logo: "/github-copilot-logo.png" },
    { name: "Notion AI", logo: "/notion-ai-logo.png" },
    { name: "Jasper AI", logo: "/jasper-ai-writing-logo.jpg" },
    { name: "Perplexity", logo: "/perplexity-ai-search-logo.jpg" },
    { name: "Runway", logo: "/runway-ml-video-ai-logo.jpg" },
    { name: "Hugging Face", logo: "/hugging-face-ai-logo.jpg" },
    { name: "Stable Diffusion", logo: "/stable-diffusion-ai-logo.jpg" },
    { name: "LangChain", logo: "/langchain-framework-logo.jpg" },
    { name: "TensorFlow", logo: "/placeholder.svg?height=80&width=80" },
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
