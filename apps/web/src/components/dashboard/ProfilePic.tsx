"use client"

export const ProfilePic = ({imageUrl}: {imageUrl: string}) => {
    const defaultUrl = "https://www.madlads.com/_next/image?url=https%3A%2F%2Fmadlads.s3.us-west-2.amazonaws.com%2Fimages%2F1.png&w=1200&q=75"
    return (
        <div className="rounded-full overflow-hidden inline-block h-8 w-8 border">
            <img src={imageUrl || defaultUrl} className="w-full h-full object-cover"></img>
        </div>
    )
}