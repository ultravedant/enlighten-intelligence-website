export function ClientLogos() {
  const logos = [
    { name: "Thai Green Power Solution", src: "/clients/thai-green-power.png" },
    { name: "LANGLORE", src: "/clients/langlore.png" },
    { name: "allthingsdesign", src: "/clients/allthingsdesign.png" },
    { name: "Wabbie", src: "/clients/wabbie.png" },
    { name: "FAST LC", src: "/clients/fast-lc.png" },
  ]

  return (
    <section className="py-12 px-6 border-t border-border">
      <div className="container mx-auto">
        <h2 className="font-serif text-2xl md:text-3xl text-center mb-8 text-foreground/60">Trusted By</h2>
        <div className="flex items-center justify-center gap-12 flex-wrap opacity-60">
          {logos.map((logo) => (
            <div key={logo.name} className="flex items-center justify-center h-10">
              <img src={logo.src || "/placeholder.svg"} alt={logo.name} className="h-full w-auto" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
