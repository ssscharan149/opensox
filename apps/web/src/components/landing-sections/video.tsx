import React from 'react'

const Video = () => {
    return (
        <div id='demo' className="w-full border-b border-[#202020] py-2 ">
            <div className="w-full border border-dashed border-[#202020] p-8 relative ">
                <div
                    style={{
                        width: "50px",
                        height: "100%",
                        "--pattern-fg": "#202020",
                        borderRight: "1px dashed #202020",
                        backgroundImage:
                            "repeating-linear-gradient(315deg, #202020 0, #202020 1px, transparent 0, transparent 50%)",
                        backgroundSize: "10px 10px",
                        backgroundAttachment: "fixed",
                    } as React.CSSProperties}
                    className='absolute left-0 top-0 hidden lg:block'
                />
                <div
                    style={{
                        width: "50px",
                        height: "100%",
                        "--pattern-fg": "#202020",
                        borderLeft: "1px dashed #202020",
                        backgroundImage:
                            "repeating-linear-gradient(315deg, #202020 0, #202020 1px, transparent 0, transparent 50%)",
                        backgroundSize: "10px 10px",
                        backgroundAttachment: "fixed",
                    } as React.CSSProperties}
                    className='absolute right-0 top-0 hidden lg:block'
                />
                <video autoPlay muted className="lg:w-[70%] mx-auto rounded-2xl">
                    <source src="/videos/os-demo.mp4" type="video/mp4" />
                </video>
            </div>
        </div>
    )
}

export default Video