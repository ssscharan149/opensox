import React from 'react'
import TweetGrid from '../ui/new-tweet-grid';
import { FlickeringGrid } from '../ui/flickering-grid';

const tweetsIDs = [
    "1871154863889092799",
    "1871803868620951686",
    "1871209255682154498",
    "1877286254770823519",
    "1871162837172895844",
    "1872250775147274505",
    "1871160171126304981",
    "1871181147537064077",
    "1871807215176474771",
    "1871416595131633978",
    "1871158905277227016",
    "1871178988183556210",
    "1871157673703727332",
    "1871262278051668130",
    "1871159748923699302",
    "1871211587190534395",
    "1871342967124021396",
    "1871217050938679805",
    "1871381671603540403",
    "1871389498271293826",
    "1871577544669233344",
    "1871561148065325520", //double line feedbacks
    "1871153542104248467",
    "1871527385381978417",
    "1871346167524769894",
    "1871285179345772582",
    "1871561148065325520",
    "1871153542104248467",
    "1871527385381978417",
    "1871346167524769894",
    "1871285179345772582",
    "1871561148065325520",
    "1871153542104248467",
    "1871527385381978417",
    "1871346167524769894",
    "1871285179345772582",
    "1871561148065325520",
];

const Testimonials = () => {
    return (
        <div className="flex flex-col border-b border-[#252525]">
            <div className="px-[30px] py-10 h-[120px] lg:h-[180px] relative overflow-hidden border-b border-[#252525] ">
                <h4 className='font-medium text-3xl lg:text-5xl tracking-tight absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 z-30 text-center text-balance'>Testimonials</h4>
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
            <div className="h-[500px] lg:h-[750px] px-[50px] relative " >
                <div
                    style={{
                        width: "50px",
                        height: "100%",
                        "--pattern-fg": "#252525",
                        borderRight: "1px solid #252525",
                        backgroundImage:
                            "repeating-linear-gradient(315deg, #252525 0, #252525 1px, transparent 0, transparent 50%)",
                        backgroundSize: "10px 10px",
                        backgroundAttachment: "fixed",
                    } as React.CSSProperties}
                    className='absolute left-0 top-0'
                />
                <div
                    style={{
                        width: "50px",
                        height: "100%",
                        "--pattern-fg": "#252525",
                        borderLeft: "1px solid #252525",
                        backgroundImage:
                            "repeating-linear-gradient(315deg, #252525 0, #252525 1px, transparent 0, transparent 50%)",
                        backgroundSize: "10px 10px",
                        backgroundAttachment: "fixed",
                    } as React.CSSProperties}
                    className='absolute right-0 top-0'
                />
                <TweetGrid
                    tweets={tweetsIDs}
                    speed="slow"
                    className="h-full"
                />
            </div>
        </div >
    )
}

export default Testimonials