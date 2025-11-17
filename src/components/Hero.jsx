import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] w-full overflow-hidden bg-black">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/m8wpIQzXWhEh9Yek/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradient overlays for mood (don't block Spline interactions) */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_20%,rgba(255,0,0,0.25),transparent_60%)]" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-40 pb-24">
        <div className="max-w-2xl">
          <p className="text-red-400/90 tracking-widest uppercase text-xs md:text-sm mb-3">Next-Gen Performance</p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight text-white">
            The Future of Driving, Engineered Today
          </h1>
          <p className="mt-6 text-base md:text-lg text-white/80 max-w-xl">
            A sleek, dark masterpiece with razor-sharp aerodynamics and an interior that glows with intent. Experience control, precision, and raw power designed to move you.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#models" className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-red-500 to-rose-600 text-white px-6 py-3 text-sm font-medium shadow-lg shadow-red-900/30 hover:opacity-90 transition-opacity">
              Explore Models
            </a>
            <a href="#contact" className="inline-flex items-center justify-center rounded-xl border border-white/20 text-white px-6 py-3 text-sm font-medium hover:bg-white/10 transition-colors">
              Book a Test Drive
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
