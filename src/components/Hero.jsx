import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-[100svh] w-full overflow-hidden bg-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4JFCLsE5jz72cZzw/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div aria-hidden className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/60 via-white/20 to-white/80" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="pt-28 md:pt-40 pb-20 md:pb-24">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-semibold tracking-tight text-gray-900 max-w-3xl"
          >
            Elevate your sound with the new AirPods Max
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.6 }}
            className="mt-5 text-base md:text-lg text-gray-600 max-w-2xl"
          >
            Spatial audio, active noise cancellation, and a timeless aluminum design. Interact with the 3D model to explore every detail.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mt-8 flex flex-col sm:flex-row gap-3"
          >
            <a href="#buy" className="inline-flex items-center justify-center rounded-full bg-black text-white px-6 py-3 text-sm font-medium hover:bg-gray-900 transition">
              Buy now
            </a>
            <a href="#features" className="inline-flex items-center justify-center rounded-full bg-gray-900/5 text-gray-900 px-6 py-3 text-sm font-medium hover:bg-gray-900/10 transition">
              Learn more
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
