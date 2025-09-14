'use client'
import Footer from '@/components/landing-sections/footer'
import Header from '@/components/ui/header'
import { ShineBorder } from '@/components/ui/shine-borders'
import { motion } from 'framer-motion'
import { Check, CornerDownRight, Target, Terminal } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import PrimaryButton from '@/components/ui/custom-button'
const opensoxFeatures = [
  {
    id: 1,
    title: "Opensox Advanced search tool",
    description: "One and only tool in the market that let you find open source with blizzing speed and scary accuracy. It will have:",
    features: [
      "Faster search of projects",
      "Higher accuracy (so that you exactly land on your dream open source project)",
      "Filters like, GSOC, YC, funding, hire contributors, trending, niche (like AI, Core ML, Web3, MERN), bounties, and many more."
    ]
  },
  {
    id: 2,
    title: "OX Newsletter",
    description: "A newsletter that keeps you ahead in open source world. It will cover:",
    features: [
      "Jobs/internships in opensource projects/companies",
      "Funding news",
      "What's trending in open source",
      "Upcoming trends",
      "Tips to ace in open source",
      "What's happening in open source companies?"
    ]
  },
  {
    id: 3,
    title: "30 days Opensox challenge sheet",
    description: [
      "A comprehensive sheet of 30+ modules along with detailed videos to give you a clear path to start rocking in open source.",
      "It will contain videos, resouces and hand made docs.",
      "In each of the 30 steps, you will learn, then apply, If stuck we'll help and then we'll do an accountability check."
    ],
    features: []
  }
];

const whySub = [
  { content: "Currently, we are working on opensox 2.0 so till the launch, we are offering premium plan at a discounted price - $15 for the whole year" },
  { content: "This offer is only available for the first 100 customers" },
  { content: "After the launch, the offer mentioned above will be removed and Opensox premium will be $5/mo." },
]

const freePlanCard = {
  whatYouGetImmediately: [
    "Free filters to search projects (tech stack, competition, activity, etc)",
    "Access to the general community"
  ],
  whatYouGetAfterLaunch: [
    "Everything mentioned above",
    "30 days opensox challenge sheet"
  ]
};

const premiumPlanCard = {
  whatYouGetImmediately: [
    "Everything in free plan +",
    "1:1 session on finding remote internships and jobs in open-source companies.",
    "Quick doubts resolution.",
    "Personalized guidance for gsoc, lfx, outreachy, etc",
    "Access to premium discord where you can ask anything anytime.",
    "Support to enhance skills for open source",
    "GSOC proposal, resume reviews, etc.",
    "Upcoming premium features"
  ],
  whatYouGetAfterLaunch: [
    "Everything mentioned above",
    "Advanced tool to find open source projects",
    "Premium newsletter",
    "30 days opensox challenge sheet",
    "Upcoming premium features."
  ]
};

const Pricing = () => {
  return (
    <>
      <main className="w-full  overflow-hidden flex flex-col items-center justify-center relative">
        <Header title="We are working on Opensox 2.0" />
        <div className="flex flex-col bg-[#151515]/20 backdrop-blur-xl relative w-full ">
          <div className="h-full px-[30px] lg:px-[50px] pv relative" >
            <div
              style={{
                height: "100%",
                "--pattern-fg": "#252525",
                borderRight: "1px solid #252525",
                backgroundImage:
                  "repeating-linear-gradient(315deg, #252525 0, #252525 1px, transparent 0, transparent 50%)",
                backgroundSize: "10px 10px",
                backgroundAttachment: "fixed",
              } as React.CSSProperties}
              className='absolute left-0 top-0 w-[30px] lg:w-[50px]'
            />
            <div
              style={{
                height: "100%",
                "--pattern-fg": "#252525",
                borderLeft: "1px solid #252525",
                backgroundImage:
                  "repeating-linear-gradient(315deg, #252525 0, #252525 1px, transparent 0, transparent 50%)",
                backgroundSize: "10px 10px",
                backgroundAttachment: "fixed",
              } as React.CSSProperties}
              className='absolute right-0 top-0 w-[30px] lg:w-[50px]'
            />
            <div className=" py-8 border-b border-[#252525]">
              <motion.h2
                initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                transition={{ duration: 0.6, ease: 'easeOut', type: 'spring', delay: 0.4 }}
                className="text-center text-3xl tracking-tight font-medium">What is Opensox 2.0?</motion.h2>
            </div>
            <div className=" w-full h-full flex flex-col gap-6  border-b border-[#252525]">
              <ul className='flex flex-col lg:flex-row [&>li]:w-full  [&>li]:p-6 divide-y lg:divide-y-0 lg:divide-x divide-[#252525] h-full '>
                {
                  opensoxFeatures.map((feature, index) => {
                    return (
                      <motion.li
                        initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
                        animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                        transition={{ duration: 0.6, ease: 'easeOut', type: 'spring', delay: 0.5 + index * 0.1 }}
                        key={index} className="flex flex-col gap-4 w-full flex-1 ">
                        <div className="flex flex-col gap-2 w-full">
                          <div className="flex gap-4">
                            <div className='text-6xl font-mono font-semibold text-transparent bg-clip-text bg-gradient-to-b from-[#a472ea] to-[#341e7b]'>{index + 1}</div>
                            <h3 className="text-2xl font-medium">{feature.title}</h3>
                          </div>
                          {Array.isArray(feature.description) ? (
                            <div className="font-medium">
                              {feature.description.map((sentence, sentenceIndex) => (
                                <p key={sentenceIndex} className="mb-2">
                                  {sentence}
                                </p>
                              ))}
                            </div>
                          ) : (
                            <p className="font-medium">{feature.description}</p>
                          )}
                        </div>
                        <div className="flex flex-col gap-2 w-full h-full">
                          <ul className="flex flex-col gap-3 w-full h-full pb-8">
                            {
                              feature.features.map((feature, index) => {
                                return (
                                  <li key={index} className="font- text-sm flex items-center gap-4">
                                    <CornerDownRight className='size-4 flex-shrink-0 text-[#a472ea]' />
                                    {feature}
                                  </li>
                                )
                              })
                            }
                          </ul>
                        </div>
                      </motion.li>
                    )
                  })
                }
              </ul>
            </div>

          </div>
          <div className="h-full px-[30px] lg:px-[50px] relative " >
            <div
              style={{
                height: "100%",
                "--pattern-fg": "#252525",
                borderRight: "1px solid #252525",
                backgroundImage:
                  "repeating-linear-gradient(315deg, #252525 0, #252525 1px, transparent 0, transparent 50%)",
                backgroundSize: "10px 10px",
                backgroundAttachment: "fixed",
              } as React.CSSProperties}
              className='absolute left-0 top-0 w-[30px] lg:w-[50px]'
            />
            <div
              style={{
                height: "100%",
                "--pattern-fg": "#252525",
                borderLeft: "1px solid #252525",
                backgroundImage:
                  "repeating-linear-gradient(315deg, #252525 0, #252525 1px, transparent 0, transparent 50%)",
                backgroundSize: "10px 10px",
                backgroundAttachment: "fixed",
              } as React.CSSProperties}
              className='absolute right-0 top-0 w-[30px] lg:w-[50px]'
            />
            <div className="py-8 border-b border-[#252525]">
              <motion.h2
                initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                transition={{ duration: 0.6, ease: 'easeOut', type: 'spring', delay: 0.8 }}
                className="text-center text-3xl tracking-tight font-medium">Why should i subscribe to opensox premium now?</motion.h2>
            </div>
            <div className="w-full border-b border-[#252525]">
              <div className="w-full max-w-2xl mx-auto border-b lg:border-b-0 lg:border-x border-[#252525] p-6 font-medium space-y-2 ">
                {whySub.map((sub, index) => {
                  return (
                    <motion.p
                      initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
                      animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                      transition={{ duration: 0.6, ease: 'easeOut', type: 'spring', delay: 0.9 + index * 0.1 }}
                      key={index} className="flex items-center gap-4"><Target className='size-5 flex-shrink-0 text-[#a472ea]' />{sub.content}</motion.p>
                  )
                })}
              </div>
            </div>

          </div>
          <div className="relative">
            <div className="hidden lg:block">
              <div
                style={{
                  height: "100%",
                  "--pattern-fg": "#252525",
                  borderRight: "1px solid #252525",
                  backgroundImage:
                    "repeating-linear-gradient(315deg, #252525 0, #252525 1px, transparent 0, transparent 50%)",
                  backgroundSize: "10px 10px",
                  backgroundAttachment: "fixed",
                } as React.CSSProperties}
                className='absolute left-0 top-0 w-[30px] lg:w-[50px]'
              />
              <div
                style={{
                  height: "100%",
                  "--pattern-fg": "#252525",
                  borderLeft: "1px solid #252525",
                  backgroundImage:
                    "repeating-linear-gradient(315deg, #252525 0, #252525 1px, transparent 0, transparent 50%)",
                  backgroundSize: "10px 10px",
                  backgroundAttachment: "fixed",
                } as React.CSSProperties}
                className='absolute right-0 top-0 w-[30px] lg:w-[50px]'
              />

            </div>

            <div className="flex flex-col gap-5 lg:gap-10 py-4 bg-[#151515]/20 backdrop-blur-xl h-full relative w-full overflow-hidden  px-4 lg:px-10">
              <div className="absolute inset-0 -top-72">
                <Image
                  src="/assets/layer1.svg"
                  alt='background'
                  fill
                  className=" w-full h-full  -z-10 opacity-90"
                />
              </div>
              <div className="flex flex-col lg:flex-row items-stretch justify-center gap-6">
                <PricingCard />
                <SecondaryPricingCard />
              </div>

            </div>
          </div>

        </div>
      </main>
      <Footer />
    </>
  )
}

export default Pricing



const PricingCard = () => {
  return (
    <div className="py-2">
      <div className=" border-border-primary w-full mx-auto flex h-full">
        <div className="border-dashed border-border-primary w-full lg:w-max mx-auto relative h-full">
          <div className="w-full h-full lg:w-[500px] relative overflow-hidden mx-auto py-10 pb-14 flex flex-col rounded-3xl">
            <ShineBorder shineColor={["#7150E7", "#C89BFF", "#432BA0"]} />
            <Image
              src="/assets/card_bg.svg"
              alt='background'
              fill
              className="object-cover object-bottom w-full h-full absolute -z-10"
            />
            <div className="w-full border-dashed border-border-primary px-6 lg:px-10 pb-4">
              <div className="w-12 h-12 relative">
                <Image
                  src="/assets/logo_var2.svg"
                  alt='background'
                  fill
                  className="object-cover size-full"
                />
              </div>
            </div>

            <div className="w-full border-dashed border-border-primary px-6 lg:px-10  py-4">
              <h2 className='text-6xl lg:text-[90px] lg:leading-[82px] tracking-tight font-semibold'>Free</h2>
            </div>
            <div className="w-full border-dashed border-border-primary px-6 lg:px-10 py-4 ">
              <div className="">
                <Link href='/dashboard/home' className='cursor-pointer z-30'>
                  <PrimaryButton classname='w-full' >
                    <Terminal />
                    Get Started
                  </PrimaryButton>
                </Link>
              </div>
            </div>
            <div className="w-full border-dashed border-border-primary px-6 lg:px-10 py-4 flex flex-col gap-4 flex-1">
              <h2 className='text-lg lg:text-xl tracking-tight text-left font-bold'>What you get immediately:</h2>
              <div className="space-y-3 [&>p]:flex [&>p]:items-center [&>p]:gap-2 [&>p]:font-medium">
                {freePlanCard.whatYouGetImmediately.map((item, index) => {
                  return (
                    <p key={index} ><Check className='w-5 flex-shrink-0' strokeWidth={4} /> {item}</p>
                  )
                })}
              </div>
            </div>
            <div className="w-full border-dashed border-border-primary px-6 lg:px-10 py-4 flex flex-col gap-4 h-[244px]">
              <h2 className='text-lg lg:text-xl tracking-tight text-left font-bold'>What you get after the launch:</h2>
              <div className="space-y-3 [&>p]:flex [&>p]:items-center [&>p]:gap-2 [&>p]:font-medium">
                {freePlanCard.whatYouGetAfterLaunch.map((item, index) => {
                  return (
                    <p key={index} ><Check className='w-5 flex-shrink-0' strokeWidth={4} /> {item}</p>
                  )
                })}
              </div>
            </div>
            <div className="bg-white mix-blend-plus-lighter absolute h-[100px] w-full blur-[50px] right-0 -bottom-20"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

const SecondaryPricingCard = () => {
  return (
    <div className="py-2">
      <div className=" border-border-primary w-full mx-auto flex h-full">
        <div className="border-dashed border-border-primary w-full lg:w-max mx-auto relative h-full">
          <div className=" w-full lg:w-[500px] relative overflow-hidden mx-auto py-10 pb-14 flex flex-col h-full rounded-3xl">
            <ShineBorder shineColor={["#7150E7", "#C89BFF", "#432BA0"]} />
            <Image
              src="/assets/card_bg.svg"
              alt='background'
              fill
              className="object-cover object-bottom w-full h-full absolute -z-10"
            />
            <div className="w-full border-dashed border-border-primary px-6 lg:px-10 pb-4">
              <div className="w-12 h-12 relative">
                <Image
                  src="/assets/logo_var2.svg"
                  alt='background'
                  fill
                  className="object-cover size-full"
                />
              </div>
            </div>

            <div className="w-full border-dashed border-border-primary px-6 lg:px-10  py-4">
              <h2 className='text-6xl lg:text-[90px] lg:leading-[82px] tracking-tight font-semibold'>$15 <span className='text-4xl'>/ month</span></h2>
            </div>
            <div className="w-full border-dashed border-border-primary px-6 lg:px-10 py-4 ">
              <PrimaryButton classname='w-full max-w-[500px] mx-auto font-semibold'>Subscribe $15</PrimaryButton>
            </div>
            <div className="w-full border-dashed border-border-primary px-6 lg:px-10 py-4 flex flex-col gap-4 flex-1">
              <h2 className='text-lg lg:text-xl tracking-tight text-left font-bold'>What you get immediately:</h2>
              <div className="space-y-3 [&>p]:flex [&>p]:items-center [&>p]:gap-2 [&>p]:font-medium">
                {premiumPlanCard.whatYouGetImmediately.map((item, index) => {
                  return (
                    <p key={index} ><Check className='w-5 flex-shrink-0' strokeWidth={4} /> {item}</p>
                  )
                })}

              </div>
            </div>
            <div className="w-full border-dashed border-border-primary px-6 lg:px-10 py-4 flex flex-col gap-4">
              <h2 className='text-lg lg:text-xl tracking-tight text-left font-bold'>What you get after the launch:</h2>
              <div className="space-y-3 [&>p]:flex [&>p]:items-center [&>p]:gap-2 [&>p]:font-medium">
                {premiumPlanCard.whatYouGetAfterLaunch.map((item, index) => {
                  return (
                    <p key={index} ><Check className='w-5 flex-shrink-0' strokeWidth={4} /> {item}</p>
                  )
                })}
              </div>
            </div>
            <div className="bg-white mix-blend-plus-lighter absolute h-[100px] w-full blur-[50px] right-0 -bottom-20"></div>
          </div>
        </div>
      </div>
    </div>
  )
}