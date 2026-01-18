import {useLoaderData, useParams} from "@tanstack/react-router";
import React from 'react'
import {Post} from "@/interface/Post.js";

export default function PostShow(){
    const {postId} = useParams({strict:false})
    const data : Post = useLoaderData({from: "/posts/$postId"})
    console.log(data)
    return (
        <div>
            <h1>Post cu id-ul: {postId}</h1>
            <p>{data.title}</p>
            <p>{data.body}</p>
        </div>
    )
}
