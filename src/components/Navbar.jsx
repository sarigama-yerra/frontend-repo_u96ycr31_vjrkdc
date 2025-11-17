import { useState } from 'react'
import { Menu, X, ShoppingBag } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-white/60 border-b border-black/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-6 w-6 rounded-full bg-black" aria-hidden />
            <span className="font-semibold tracking-tight">Apple Store</span>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm text-gray-700">
            <a href="#features" className="hover:text-black transition">Features</a>
            <a href="#gallery" className="hover:text-black transition">Gallery</a>
            <a href="#support" className="hover:text-black transition">Support</a>
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a href="#buy" className="inline-flex items-center gap-2 rounded-full bg-black text-white px-4 py-2 text-sm font-medium hover:bg-gray-900 transition">
              <ShoppingBag className="h-4 w-4" />
              Buy now
            </a>
          </div>

          <button className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100" onClick={() => setOpen(!open)} aria-label="Toggle menu">
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-black/5 bg-white/70 backdrop-blur">
          <div className="px-4 py-4 space-y-3 text-sm">
            <a href="#features" className="block">Features</a>
            <a href="#gallery" className="block">Gallery</a>
            <a href="#support" className="block">Support</a>
            <a href="#buy" className="inline-flex items-center gap-2 rounded-full bg-black text-white px-4 py-2 text-sm font-medium">
              <ShoppingBag className="h-4 w-4" />
              Buy now
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
