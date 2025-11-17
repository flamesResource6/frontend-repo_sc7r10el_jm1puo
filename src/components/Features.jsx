import { Gauge, Cpu, Sparkles, ShieldCheck, BatteryCharging, Navigation } from 'lucide-react'

const features = [
  {
    icon: Gauge,
    title: '3.0s 0-60',
    desc: 'Explosive acceleration with relentless torque delivery.',
  },
  {
    icon: Cpu,
    title: 'Adaptive Dynamics',
    desc: 'AI-tuned suspension that reads the road in milliseconds.',
  },
  {
    icon: ShieldCheck,
    title: 'Carbon Monocoque',
    desc: 'Ultra-light rigidity with motorsport-grade safety.',
  },
  {
    icon: BatteryCharging,
    title: '800V Architecture',
    desc: 'Rapid charging and cooler, more efficient performance.',
  },
  {
    icon: Navigation,
    title: 'Drive Intelligence',
    desc: 'Advanced driver assist with precise lane focus and awareness.',
  },
  {
    icon: Sparkles,
    title: 'Illuminated Interior',
    desc: 'Ambient red glow crafted for focus and presence.',
  },
]

export default function Features() {
  return (
    <section id="features" className="relative py-24 bg-gradient-to-b from-black via-neutral-950 to-black">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(60%_40%_at_50%_0%,rgba(255,0,0,0.12),transparent_60%)]" />
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Precision, Reimagined</h2>
          <p className="mt-3 text-white/70">Crafted for those who demand more than speed.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-6 hover:bg-white/[0.06] transition-colors">
              <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-red-500/80 to-rose-600/80 text-white grid place-items-center shadow-lg shadow-red-900/20">
                <Icon size={22} />
              </div>
              <h3 className="mt-4 text-xl font-semibold text-white">{title}</h3>
              <p className="mt-2 text-white/70 text-sm">{desc}</p>
              <div className="absolute -right-10 -bottom-10 h-32 w-32 rounded-full bg-red-500/10 blur-2xl group-hover:bg-red-500/20 transition-colors" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
