import React from 'react'
import { LinkedIn, Twitter, Youtube } from '../icons/icons'
import Link from 'next/link'

const Footer = () => {
    return (
        <div id='Contact' className="border-x lg:border-x-2 border-t lg:border-t-2 border-[#202020] mt-2 mx-auto w-[98%]  flex flex-col justify-between px-4 lg:px-10 pt-4 lg:pt-10 pb-2 lg:pb-4  ">
            <div className="w-full  flex items-start justify-between pb-10">
                <div className="">
                    <h4 className='text-3xl lg:text-7xl lg:text-[5rem] font-medium tracking-tighter'>OPENSOX</h4>
                    <p className='text-sm lg:text-xl tracking-tight text-[#b1b1b1]'>Search. Find. Contribute.</p>
                </div>
                <div className="flex items-center gap-3">
                    <div className="w-6">
                        <Youtube />
                    </div>
                    <Link href="https://x.com/ajeetunc" className="w-5">
                        <Twitter />
                    </Link>
                    <Link href="https://www.linkedin.com/in/ajeetunc/" className="w-6">
                        <LinkedIn />
                    </Link>
                </div>
            </div>
            <p className="font-mono text-center text-xs lg:text-sm text-[#b1b1b1]">Opensox x Ajeet</p>
        </div>
    )
}

export default Footer