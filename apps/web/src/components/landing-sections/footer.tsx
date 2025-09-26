'use client'
import React from 'react'
import { Twitter, Email, Discord, Youtube } from '../icons/icons'
import Link from 'next/link'

const Footer = () => {
    const handleEmailClick = () => {
        const emailSubject = encodeURIComponent('[Inquiry about Opensox AI]');
        const emailBody = encodeURIComponent('Heyyo,\n\nwanna chat?');
        const mailtoLink = `mailto:hi@opensox.ai?subject=${emailSubject}&body=${emailBody}`;
        window.open(mailtoLink, '_blank');
    };

    return (
      <div
        id="Contact"
        className="border-x lg:border-x-2 border-t lg:border-t-2 border-[#252525] mt-2 mx-auto w-[98%]  flex flex-col justify-between px-4 lg:px-10 pt-4 lg:pt-10 pb-2 lg:pb-4  "
      >
        <div className="w-full  flex items-start justify-between pb-10">
          <div className="">
            <h4 className="text-3xl lg:text-7xl lg:text-[5rem] font-medium tracking-tighter">
              Opensox AI
            </h4>
            <p className="text-sm lg:text-xl tracking-tight text-[#b1b1b1]">
              Search. Find. Contribute.
            </p>
          </div>
          <div className="flex items-center gap-3">
            {/* <div className="w-6">
                        <Youtube />
                    </div> */}
            <Link
              href="https://x.com/opensoxai"
              className="w-5"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Twitter />
            </Link>
            {/* <Link href="https://www.linkedin.com/in/ajeetunc/" className="w-6">
                        <LinkedIn />
                    </Link> */}
            <button
              onClick={handleEmailClick}
              className="w-6 cursor-pointer hover:opacity-80 transition-opacity"
            >
              <Email />
            </button>
            <Link
              href="https://www.youtube.com/channel/UC7QV7uSxlbha-bNPaev5MeQ"
              className="w-7"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Youtube />
            </Link>
            <Link
              href="https://discord.gg/zbHzgMNBrm"
              className="w-7"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Discord />
            </Link>
            {/* <Link href="https://github.com/apsinghdev/opensox" className="w-6" target="_blank" rel="noopener noreferrer">
                        <Github />
                    </Link> */}
          </div>
        </div>
        <p className="font-mono text-center text-xs lg:text-sm text-[#b1b1b1]">
          © {new Date().getFullYear()} Opensox AI. All rights reserved.
        </p>
        <p className="font-mono text-center text-xs lg:text-xs italic text-[#b1b1b1] mt-2">
          Building 21st century open-source infrastructure
        </p>
      </div>
    );
}

export default Footer