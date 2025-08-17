'use client'
import React, { useState } from 'react'
import PrimaryButtom from '../ui/custom-button'
import { motion, useScroll, useMotionValueEvent } from 'framer-motion'
import Image from 'next/image'
import { Terminal } from 'lucide-react'
import Link from 'next/link'

const Navbar = () => {
    const { scrollYProgress } = useScroll()
    const [showNavbar, setShowNavbar] = useState(false)

    useMotionValueEvent(scrollYProgress, 'change', (latest) => {
        setShowNavbar(latest > 0)
    })

    return (
      <motion.nav
        initial={{ opacity: 0 }}
        animate={showNavbar ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="w-[94%] md:w-[80%] mx-auto fixed top-4 z-40 left-1/2 -translate-x-1/2 flex items-center justify-between px-4 py-3 rounded-3xl bg-neutral-900/5 backdrop-blur-xl border border-white/10"
      >
        <div className="text-2xl font-medium tracking-tighter flex items-center gap-2">
          <div className="w-10 aspect-square overflow-hidden relative">
            <Image
              src="/assets/logo.svg"
              alt="background"
              fill
              className="object-cover w-full h-full"
            />
          </div>
          Opensox AI
        </div>
        <div className="hidden md:flex items-center gap-4 tracking-tight text-lg font-light text-[#d1d1d1]">
          <Link href="#features" className="cursor-pointer hover:text-white">
            Features
          </Link>
          <Link href="#demo" className="cursor-pointer hover:text-white">
            Demo
          </Link>
          <Link href="#HIW" className="cursor-pointer hover:text-white">
            How it works
          </Link>
          <Link href="#Stats" className="cursor-pointer hover:text-white">
            Stats
          </Link>
          <Link href="#Contact" className="cursor-pointer hover:text-white">
            Contact
          </Link>
          <Link
            href="https://pages.razorpay.com/pl_R6WHnm15Fm98fI/view"
            target="_blank"
            className="cursor-pointer hover:text-white"
          >
            Pricing
          </Link>
        </div>
        <div className="">
          <Link href="/dashboard/home" className="cursor-pointer z-30">
            <PrimaryButtom>
              <Terminal />
              Get Started
            </PrimaryButtom>
          </Link>
        </div>
      </motion.nav>
    );
}

export default Navbar
