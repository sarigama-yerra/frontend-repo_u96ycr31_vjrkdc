import { motion } from 'framer-motion'
import { Bluetooth, Battery, Mic, Volume2 } from 'lucide-react'

const items = [
  { icon: Bluetooth, title: 'Seamless pairing', desc: 'Instant connection across all your Apple devices.' },
  { icon: Battery, title: 'All-day battery', desc: 'Up to 20 hours of high-fidelity listening.' },
  { icon: Mic, title: 'Active noise cancellation', desc: 'Block out the world with adaptive ANC.' },
  { icon: Volume2, title: 'Spatial audio', desc: 'Personalized sound that surrounds you.' },
]

export default function Features() {
  return (
    <section id="features" className="relative bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-4">
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ delay: i * 0.05, duration: 0.5 }}
              className="rounded-2xl border border-black/5 p-6 bg-gradient-to-br from-white to-gray-50 shadow-sm"
            >
              <item.icon className="h-5 w-5 text-gray-900" />
              <h3 className="mt-4 text-lg font-semibold tracking-tight">{item.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
