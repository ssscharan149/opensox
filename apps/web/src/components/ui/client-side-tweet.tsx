"use client";

import { TweetProps, useTweet } from "react-tweet";
import { MagicTweet, TweetNotFound } from "./Client-tweet";



export const ClientTweetCard = ({
    id,
    apiUrl,
    components,
    fetchOptions,
    onError,
    ...props
}: TweetProps & { className?: string }) => {
    const { data, error, } = useTweet(id, apiUrl, fetchOptions);

    if (error || !data) {
        const NotFound = components?.TweetNotFound || TweetNotFound;
        return <NotFound error={onError ? onError(error) : error} />;
    }

    return <MagicTweet tweet={data} components={components} {...props} />;
};
