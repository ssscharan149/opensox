import React from 'react'
import { FlickeringGrid } from '../ui/flickering-grid'
import OrbitComponent from '../ui/orbit'
import CardStack from '../ui/card-stack'
import Image from 'next/image'
import { AnimatedList } from '../ui/animated-list'
import { cn } from '@/lib/utils'
import { Cap, Lucid, Mail0, SupMemory } from '../icons/icons'


let notifications = [
    {
        name: "Start Contributing Now!",
        description: "Mail0",
        icon: <Mail0 />,
        color: "#101010",
    },
    {
        name: "Based on your Tech Stack",
        description: "Cap",
        icon: <div className="p-1.5 h-full w-full flex items-center justify-center"> <Cap /></div>,
        color: "#fff",
    },
    {
        name: "Dive into AI",
        description: "SuperMemory AI",
        icon: <div className=" h-full flex items-center justify-center w-7"> <SupMemory /></div>,
        color: "#101010",
    },
    {
        name: "OSS Google Docs!",
        description: "Lucid",
        icon: <div className=" h-full flex items-center justify-center w-7 rotate-180"> <Lucid /></div>,
        color: "#fff",
    },
];

notifications = Array.from({ length: 10 }, () => notifications).flat();

const Bento = () => {
    return (
        <div id='features' className="flex flex-col w-full">
            <div className="px-[30px] py-10 h-[160px] relative overflow-hidden border-b border-[#202020] ">
                <h4 className='font-medium w-full text-3xl lg:text-5xl tracking-tight absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 z-30 text-center text-balance'>Supercharge Your Open Source Journey</h4>
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
            <div className="w-full border-b border-[#202020] flex flex-col  lg:flex-row overflow-hidden">
                <div className="lg:w-1/3 border-b lg:border-b-0 lg:border-r border-[#202020] lg:aspect-square relative overflow-hidden p-2 flex-shrink-0 space-y-1 h-[400px] lg:h-full ">
                    <div className="border border-dashed border-[#202020] w-full h-full  relative overflow-hidden p-[30px] flex-shrink-0 flex flex-col gap-4 lg:gap-0 ">
                        <div className="space-y-1 flex-shrink-0 z-10">
                            <h5 className='text-2xl lg:text-3xl tracking-tighter text-left'>Personalized Recommendations</h5>
                            <p className='tracking-tight text-sm lg:text-lg text-[#d1d1d1]'>Get personalized repos you can contribute to.</p>
                        </div>
                        <div className="h-full w-full flex items-start lg:pt-10 lg:pb-4  relative overflow-hidden z-20">
                            <AnimatedList className='w-full'>
                                {notifications.map((item, idx) => (
                                    <Notification {...item} key={idx} />
                                ))}
                            </AnimatedList>
                        </div>

                        <div className="absolute w-full h-full top-0 left-0">
                            <Image
                                src="/assets/mask.svg"
                                alt="background"
                                fill
                                className="object-cover w-full h-full opacity-60 "
                            />
                        </div>

                        <div className="absolute h-full w-full bg-gradient-to-t from-[#101010]/75 via-transparent to-[#101010]/75 top-0 left-1/2 -translate-x-1/2"></div>
                        <div className="absolute h-full w-full bg-gradient-to-r from-[#101010]/75 via-transparent to-[#101010]/75 top-0 left-1/2 -translate-x-1/2"></div>
                        <div className="h-[90px] absolute -bottom-7 w-full bg-[#101010] blur-[15px] z-20"></div>
                    </div>
                </div>
                <div className="border-b lg:border-b-0 lg:border-r border-[#202020] lg:w-1/3 lg:aspect-square relative overflow-hidden p-2 flex-shrink-0 space-y-1 h-[400px] lg:h-full">
                    <div className="border border-dashed border-[#202020] w-full h-full relative overflow-hidden p-[30px] flex-shrink-0 space-y-1 flex flex-col items-center justify-start gap-4 z-10">
                        <div className="w-full z-10">
                            <h5 className='text-2xl lg:text-3xl tracking-tighter text-left'>Seamless Search </h5>
                            <p className='tracking-tight text-sm lg:text-lg text-[#d1d1d1]'>Search thousands of open-source repos instantly.</p>
                        </div>
                        <div className="absolute w-full h-full top-0 left-0">
                            <div className="absolute h-full w-full z-10"></div>

                            <Image
                                src="/assets/mask.svg"
                                alt="background"
                                fill
                                className="object-cover w-full h-full opacity-60 "
                            />
                        </div>
                        <div className="absolute h-full w-full bg-gradient-to-t from-[#101010]/75 via-transparent to-[#101010]/75 top-0 left-1/2 -translate-x-1/2"></div>
                        <div className="absolute h-full w-full bg-gradient-to-r from-[#101010]/75 via-transparent to-[#101010]/75 top-0 left-1/2 -translate-x-1/2"></div>
                        <div className="lg:translate-y-16 translate-y-5">
                            <OrbitComponent />
                        </div>
                        <div className="h-[90px] absolute -bottom-10 w-full bg-[#101010] blur-[15px]"></div>
                    </div>
                </div>
                <div className="lg:w-1/3 lg:aspect-square relative overflow-hidden p-2 flex-shrink-0 space-y-1 h-[400px] lg:h-full">
                    <div className="border border-dashed border-[#202020] w-full h-full relative overflow-hidden p-[30px] flex-shrink-0 flex flex-col gap-4 lg:gap-0 ">
                        <div className="space-y-1 flex-shrink-0 z-10">
                            <h5 className='text-2xl lg:text-3xl tracking-tighter text-left'>Precision Filters </h5>
                            <p className='tracking-tight text-sm lg:text-lg text-[#d1d1d1]'>Zero in on projects by language, stack and activity level.</p>
                        </div>
                        <div className="h-full w-full flex items-center lg:pt-10 lg:pb-4  relative overflow-hidden z-20">
                            <CardStack />
                        </div>

                        <div className="absolute w-full h-full top-0 left-0">
                            <div className="absolute h-full w-full   z-10"></div>

                            <Image
                                src="/assets/mask.svg"
                                alt="background"
                                fill
                                className="object-cover w-full h-full opacity-60 "
                            />
                        </div>
                        <div className="absolute h-full w-full bg-gradient-to-t from-[#101010]/75 via-transparent to-[#101010]/75 top-0 left-1/2 -translate-x-1/2"></div>
                        <div className="absolute h-full w-full bg-gradient-to-r from-[#101010]/75 via-transparent to-[#101010]/75 top-0 left-1/2 -translate-x-1/2"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Bento


const Notification = ({ name, description, icon, color, time }: any) => {
    return (
        <figure
            className={cn(
                "relative mx-auto min-h-fit w-full max-w-[400px] cursor-pointer overflow-hidden rounded-2xl p-4",
                "transition-all duration-200 ease-in-out hover:scale-[103%]",
                "transform-gpu bg-transparent backdrop-blur-md [border:1px_solid_rgba(255,255,255,.1)] [box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]",
            )}
        >
            <div className="flex flex-row items-center gap-3">
                <div
                    className="flex size-10 items-center justify-center rounded-2xl overflow-hidden relative"
                    style={{
                        backgroundColor: color,
                    }}
                >
                    <span className="text-lg w-10 lg:aspect-square flex items-center justify-center">{icon}</span>
                </div>
                <div className="flex flex-col overflow-hidden">
                    <figcaption className="flex flex-row items-center whitespace-pre text-lg font-medium text-white ">
                        <span className="text-sm sm:text-lg">{name}</span>
                        <span className="text-xs text-gray-500">{time}</span>
                    </figcaption>
                    <p className="text-sm font-normal text-white/60">
                        {description}
                    </p>
                </div>
            </div>
        </figure>
    );
};