"use client"

export function PortfolioShowcase() {
  const portfolioItems = [
    {
      image: "/projects/workspace-interior.png",
      alt: "Interior Design Workspace Project - Creating inspiring workspaces",
    },
    {
      image: "/projects/langlore.png",
      alt: "LANGLORE - Language preservation platform",
    },
    {
      image: "/projects/satyam-classes.png",
      alt: "Satyam Classes - Educational platform for students",
    },
    {
      image: "/projects/wabbie.png",
      alt: "Wabbie - WhatsApp restaurant ordering system",
    },
    {
      image: "/projects/fast-lc.png",
      alt: "FAST LC - Trade growth platform",
    },
    {
      image: "/projects/healthchain.png",
      alt: "HealthChain - Blockchain medical records system",
    },
  ]

  return (
    <section className="pt-4 pb-20 overflow-hidden">
      <div className="relative flex">
        {/* First set of images */}
        <div className="flex gap-6 animate-scroll-seamless">
          {portfolioItems.map((item, index) => (
            <div key={`set1-${index}`} className="flex-shrink-0 w-[600px]">
              <div className="relative aspect-[4/3] overflow-hidden rounded-xl shadow-lg">
                <img src={item.image || "/placeholder.svg"} alt={item.alt} className="w-full h-full object-cover" />
              </div>
            </div>
          ))}
        </div>
        {/* Duplicate set for seamless loop */}
        <div className="flex gap-6 animate-scroll-seamless ml-6" aria-hidden="true">
          {portfolioItems.map((item, index) => (
            <div key={`set2-${index}`} className="flex-shrink-0 w-[600px]">
              <div className="relative aspect-[4/3] overflow-hidden rounded-xl shadow-lg">
                <img src={item.image || "/placeholder.svg"} alt={item.alt} className="w-full h-full object-cover" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
