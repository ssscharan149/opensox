import React from 'react'
import { FlickeringGrid } from '../ui/flickering-grid'

const Brands = () => {
    return (
        <div id='Stats' className="flex flex-col">
            <div className="px-[30px] py-10 h-[120px] lg:h-[180px] relative overflow-hidden border-b border-[#252525] ">
                <h4 className='font-medium text-3xl lg:text-5xl tracking-tight absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 z-30 text-center text-balance'>Statistics</h4>
                <div
                    style={{
                        background: 'radial-gradient(circle at center, #101010 30%, transparent 100%)',
                    }}
                    className=" h-full w-[100%] right-0 top-0 z-20 absolute"></div>
                <div className="absolute right-0 w-[100%] h-full top-0 z-10 opacity-50">
                    <FlickeringGrid
                        className="absolute -z-0  top-0 right-0"
                        squareSize={3}
                        gridGap={6}
                        color="#3F1FBC"
                        maxOpacity={1}
                        flickerChance={0.1}
                        height={200}
                        width={2000}
                    />
                </div>
            </div>
            <div className="border-b border-[#252525] flex items-center w-full">
                <div className="relative [box-shadow:0_0_100px_-10px_#14111C_inset] flex items-center justify-center bg-[#101010] w-full border-r border-[#252525] flex-col p-10  md:text-5xl">
                    <span style={{ "--text": 'Opensox' } as any} className=" md:text-7xl md:text-[76px] relative pointer-events-none text-center before:bg-gradient-to-b  before:from-[#9159E2] before:to-[#341e7b] before:to-80% before:bg-clip-text before:text-transparent before:content-['19000+'] after:absolute after:inset-0 after:bg-purple-500 after:bg-clip-text after:text-transparent  after:mix-blend-lighten after:content-['19000+'] after:[text-shadow:0_1px_0_black] text-[clamp(1rem,10vw,6rem)] overflow-hidden font-mono tracking-tighter font-medium"></span>
                    <span style={{ "--text": 'Opensox' } as any} className=" relative pointer-events-none text-center before:bg-gradient-to-b  before:from-[#9159E2] before:to-[#321D76] before:to-80% before:bg-clip-text before:text-transparent before:content-['Queries'] after:absolute after:inset-0 after:bg-purple-600 after:bg-clip-text after:text-transparent  after:mix-blend-lighten after:content-['Queries'] after:[text-shadow:0_1px_0_black] overflow-hidden font-mono tracking-tighter font-medium text-3xl md:text-5xl"></span>
                </div>
                <div className="relative flex [box-shadow:0_0_100px_-10px_#14111C_inset] items-center justify-center bg-[#101010] w-full  border-[#252525] flex-col p-10  md:text-5xl">
                    <span style={{ "--text": 'Opensox' } as any} className="md:text-7xl md:text-[76px] relative pointer-events-none text-center before:bg-gradient-to-b  before:from-[#9159E2] before:to-[#341e7b] before:to-80% before:bg-clip-text before:text-transparent before:content-['6500+'] after:absolute after:inset-0 after:bg-purple-500 after:bg-clip-text after:text-transparent  after:mix-blend-lighten after:content-['6500+'] after:[text-shadow:0_1px_0_black] text-[clamp(1rem,10vw,6rem)] overflow-hidden font-mono tracking-tighter font-medium"></span>
                    <span style={{ "--text": 'Opensox' } as any} className=" relative pointer-events-none text-center before:bg-gradient-to-b  before:from-[#9159E2] before:to-[#321D76] before:to-80% before:bg-clip-text before:text-transparent before:content-['Users'] after:absolute after:inset-0 after:bg-purple-600 after:bg-clip-text after:text-transparent  after:mix-blend-lighten after:content-['Users'] after:[text-shadow:0_1px_0_black] overflow-hidden font-mono tracking-tighter font-medium text-3xl md:text-5xl"></span>
                </div>
            </div>
        </div>
    )
}

export default Brands