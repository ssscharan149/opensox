import React from 'react'

const Video = () => {
    return (
        <div id='demo' className="w-full border-b border-[#252525] py-2 ">
            <div className="w-full border border-dashed border-[#252525] p-8 relative ">
                <div
                    style={{
                        width: "50px",
                        height: "100%",
                        "--pattern-fg": "#252525",
                        borderRight: "1px dashed #252525",
                        backgroundImage:
                            "repeating-linear-gradient(315deg, #252525 0, #252525 1px, transparent 0, transparent 50%)",
                        backgroundSize: "10px 10px",
                        backgroundAttachment: "fixed",
                    } as React.CSSProperties}
                    className='absolute left-0 top-0 hidden lg:block'
                />
                <div
                    style={{
                        width: "50px",
                        height: "100%",
                        "--pattern-fg": "#252525",
                        borderLeft: "1px dashed #252525",
                        backgroundImage:
                            "repeating-linear-gradient(315deg, #252525 0, #252525 1px, transparent 0, transparent 50%)",
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