import {useEffect, useState} from "react";
import {Link} from "@tanstack/react-router";
import React from 'react'
import {postIdRoute} from "@/router.js"
import {Post} from "@/interface/Post.js";


export default function Posts(){
    const [posts, setPosts] = useState<Post[]>([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts").then((res) => res.json())
            .then((data) => setPosts(data))
    }, []);

    return (
        <div>
            {posts.map((post : Post) => (
                <div key={post.id}>
                    <Link
                        className="text-red-600"
                        to={postIdRoute.to}
                        params={{ postId: post.id }}
                    >
                        {post.title}
                    </Link>
                    <p>{post.body}</p>
                </div>
            ))}
        </div>
    )
}
