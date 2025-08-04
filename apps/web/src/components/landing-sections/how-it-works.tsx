
import { Sparkles, Upload, Zap } from "lucide-react";
import Features from "../ui/features";
import { FlickeringGrid } from "../ui/flickering-grid";

const data = [
    {
        id: 1,
        title: "1. Set Your Filters",
        content:
            "Choose the languages, stack, activity level, and other preferences that matter to you.",
        image: "/assets/filter.png",
        icon: <Upload className="w-6 h-6 text-primary" />,
    },
    {
        id: 2,
        title: "2. Search Instantly",
        content:
            "Hit search and explore thousands of open-source repositories matched to your criteria.",
        image: "/assets/search.png",
        icon: <Zap className="w-6 h-6 text-primary" />,
    },
    {
        id: 3,
        title: "3. Discover & Contribute",
        content:
            "Find the perfect project for your stack, start exploring the code, and make meaningful contributions.",
        image: "/assets/contribute.png",
        icon: <Sparkles className="w-6 h-6 text-primary" />,
    },
];

export default function HowItWorks() {
    return (
        <div id="HIW" className="border-b border-[#202020]">
            <div className="px-[30px] py-10 h-[120px] lg:h-[180px] relative overflow-hidden border-b border-[#202020] ">
                <h4 className='font-medium w-full text-3xl lg:text-5xl tracking-tight absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 z-30 text-center text-balance'>How it Works</h4>
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
            <div className="w-full relative px-[50px]">
                <div
                    style={{
                        width: "50px",
                        height: "100%",
                        "--pattern-fg": "#202020",
                        borderRight: "1px solid #202020",
                        backgroundImage:
                            "repeating-linear-gradient(315deg, #202020 0, #202020 1px, transparent 0, transparent 50%)",
                        backgroundSize: "10px 10px",
                        backgroundAttachment: "fixed",
                    } as React.CSSProperties}
                    className='absolute left-0 top-0'
                />
                <div
                    style={{
                        width: "50px",
                        height: "100%",
                        "--pattern-fg": "#202020",
                        borderLeft: "1px solid #202020",
                        backgroundImage:
                            "repeating-linear-gradient(315deg, #202020 0, #202020 1px, transparent 0, transparent 50%)",
                        backgroundSize: "10px 10px",
                        backgroundAttachment: "fixed",
                    } as React.CSSProperties}
                    className='absolute right-0 top-0 '
                />
                <Features data={data} />
            </div>
        </div>
    );
}
