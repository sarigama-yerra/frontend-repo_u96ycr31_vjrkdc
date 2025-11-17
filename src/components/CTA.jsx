import { motion } from 'framer-motion'

export default function CTA() {
  return (
    <section id="buy" className="relative bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-black/5 bg-gradient-to-br from-gray-50 to-white p-10 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-2xl md:text-3xl font-semibold tracking-tight"
          >
            Ready to make them yours?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="mt-3 text-gray-600"
          >
            Experience premium sound, comfort, and design.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mt-6 flex items-center justify-center gap-3"
          >
            <a href="#" className="inline-flex items-center justify-center rounded-full bg-black text-white px-6 py-3 text-sm font-medium hover:bg-gray-900 transition">
              Buy now
            </a>
            <a href="#" className="inline-flex items-center justify-center rounded-full bg-gray-900/5 text-gray-900 px-6 py-3 text-sm font-medium hover:bg-gray-900/10 transition">
              Find a store
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
