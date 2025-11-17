import { ArrowRight } from 'lucide-react'

const models = [
  {
    name: 'Veloz R',
    tagline: 'Rear-wheel drive purity',
    img: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1200&auto=format&fit=crop',
  },
  {
    name: 'Veloz S AWD',
    tagline: 'All-weather control',
    img: 'https://images.unsplash.com/photo-1502877338535-766e1452684a?q=80&w=1200&auto=format&fit=crop',
  },
  {
    name: 'Veloz GT',
    tagline: 'Grand touring comfort',
    img: 'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=1200&auto=format&fit=crop',
  },
]

export default function Models() {
  return (
    <section id="models" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-end justify-between mb-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white">Models</h2>
            <p className="mt-2 text-white/70">Choose the configuration that fits your drive.</p>
          </div>
          <a href="#contact" className="hidden sm:inline-flex items-center gap-2 text-white/80 hover:text-white">
            Build yours <ArrowRight size={18} />
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {models.map((m) => (
            <div key={m.name} className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04]">
              <div className="aspect-[16/10] overflow-hidden">
                <img src={m.img} alt={m.name} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="p-5">
                <h3 className="text-white text-xl font-semibold">{m.name}</h3>
                <p className="text-white/70 text-sm">{m.tagline}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
