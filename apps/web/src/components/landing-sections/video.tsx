import React from 'react'

const Video = () => {
    return (
        <div id='demo' className="w-full border-b border-[#202020] p-2">
            <div className="w-full border border-dashed border-[#202020] p-8">
                <video autoPlay muted className="w-full h-full rounded-2xl">
                    <source src="/videos/os-demo.mp4" type="video/mp4" />
                </video>
            </div>
        </div>
    )
}

export default Video