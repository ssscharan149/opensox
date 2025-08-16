"use client"

import { motion } from "framer-motion"
import type React from "react"

const PrimaryButton = ({ children }: { children: React.ReactNode }) => {
    return (
        <motion.button
            className="w-max bg-gradient-to-b from-[#5335FF] to-[#3C00FF] rounded-xl p-1 cursor-pointer z-30 relative"
            style={{
                boxShadow: "0 2px 10px -2px #5335FF",
            }}
            transition={{
                duration: 0.1,
                ease: "easeInOut",
            }}
        >
            <motion.div
                className="flex gap-2 items-center justify-center bg-gradient-to-b from-[#531FFF] to-[#5100FF] px-4 py-2 rounded-[10px] relative"
                whileHover={{
                    boxShadow: "0 3px 5px 0 #ffffff40 inset, 0 -1px 3px 0 #0044FF40 inset",
                    y: -0.5,
                }}
                whileTap={{
                    boxShadow: "0 2px 6px 0 #00000040 inset, 0 1px 2px 0 #ffffff10 inset",
                    y: 0.5,
                }}
                transition={{
                    duration: 0.1,
                    ease: "easeInOut",
                }}
            >
                <motion.p
                    className="flex gap-2 items-center text-white font-medium"
                >
                    {children}
                </motion.p>
            </motion.div>
        </motion.button>
    )
}

export default PrimaryButton
