import PrimaryButton from '@/components/ui/custom-button'
import { FlickeringGrid } from '@/components/ui/flickering-grid'
import { ShineBorder } from '@/components/ui/shine-borders'
import { Check } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const Pricing = () => {
  return (
    <main className="w-full  overflow-hidden flex flex-col items-center justify-center relative">
      <div className="px-[30px] py-10 h-[100px] lg:h-[140px] relative overflow-hidden border-b border-[#252525] w-full">
        <h4 className='font-medium text-3xl lg:text-5xl tracking-tight absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 z-30 text-center text-balance'>Pricing</h4>
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
      <div className="flex flex-col gap-5 lg:gap-10 py-4 bg-[#151515]/20 backdrop-blur-xl h-full relative w-full  px-4 lg:px-10">
        <Image
          src="/assets/layer1.svg"
          alt='background'
          fill
          className="object-cover object-bottom w-full h-full absolute -z-10 opacity-95"
        />
        <div className="py-2">
          <div className=" border-border-primary w-full mx-auto flex">
            <div className="border-dashed border-border-primary w-full lg:w-max mx-auto relative">
              <div className="lg:h-[620px] w-full lg:w-[500px] relative overflow-hidden mx-auto py-10 pb-14">
                <ShineBorder shineColor={["#7150E7", "#C89BFF", "#432BA0"]} />
                <Image
                  src="/assets/card_bg.svg"
                  alt='background'
                  fill
                  className="object-cover object-bottom w-full h-full absolute -z-10"
                />
                <div className="w-full border-dashed border-border-primary px-10 pb-4">
                  <div className="w-12 h-12 relative">
                    <Image
                      src="/assets/logo_var2.svg"
                      alt='background'
                      fill
                      className="object-cover size-full"
                    />
                  </div>
                </div>

                <div className="w-full border-dashed border-border-primary px-10  py-4">
                  <h2 className='text-6xl lg:text-[90px] lg:leading-[82px] tracking-tight font-semibold'>$20</h2>
                </div>
                <div className="w-full border-dashed border-border-primary px-10 py-4 ">
                  <h2 className='text-xl lg:text-2xl tracking-tight text-left font-bold'>Early Access Lifetime Plan</h2>
                </div>
                <div className="w-full border-dashed border-border-primary px-10 py-4 flex flex-col gap-4">
                  <h2 className='text-lg lg:text-xl tracking-tight text-left font-bold'>WHAT YOU GET:</h2>
                  <div className="space-y-1 [&>p]:flex [&>p]:items-center [&>p]:gap-2 [&>p]:font-semibold">
                    <p ><Check className='w-5' strokeWidth={4} /> A beast mode search</p>
                    <p ><Check className='w-5' strokeWidth={4} /> Newsletter</p>
                    <p ><Check className='w-5' strokeWidth={4} /> Exclusive community</p>
                    <p ><Check className='w-5' strokeWidth={4} /> 1:1 mentorship</p>
                    <p ><Check className='w-5' strokeWidth={4} /> Any premium tools</p>
                  </div>
                </div>
                <div className="bg-white mix-blend-plus-lighter absolute h-[100px] w-full blur-[50px] right-0 -bottom-20"></div>
              </div>
            </div>
          </div>
          <div className="w-full border-dashed border-border-primary pt-2 ">
            <PrimaryButton classname='w-full max-w-[500px] mx-auto'>Buy Now</PrimaryButton>
          </div>
        </div>



      </div>
    </main>
  )
}

export default Pricing