export default function CTA() {
  return (
    <section id="contact" className="relative py-20 bg-gradient-to-b from-black to-neutral-950">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(60%_40%_at_70%_0%,rgba(255,0,0,0.12),transparent_60%)]" />
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-8 md:p-12 flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1">
            <h3 className="text-2xl md:text-3xl font-bold text-white">Ready to feel the road differently?</h3>
            <p className="mt-3 text-white/70 max-w-xl">Reserve your build today and be among the first to experience our next-gen performance platform when deliveries begin.</p>
          </div>
          <form className="w-full md:w-auto flex items-center gap-3">
            <input type="email" required placeholder="Your email" className="flex-1 md:w-80 rounded-xl bg-white/10 border border-white/15 px-4 py-3 text-white placeholder:text-white/50 outline-none focus:ring-2 focus:ring-red-500/50" />
            <button type="submit" className="rounded-xl bg-gradient-to-r from-red-500 to-rose-600 text-white px-6 py-3 text-sm font-medium shadow-lg shadow-red-900/30 hover:opacity-90 transition-opacity">Notify Me</button>
          </form>
        </div>
      </div>
    </section>
  )
}
