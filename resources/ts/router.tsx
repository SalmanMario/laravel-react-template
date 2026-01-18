import {
    RootRoute,
    Route,
    Router,
} from '@tanstack/react-router'

import App from './App.js'
import Home from "./pages/index.js"
import Posts from "./pages/posts/posts.js";
import PostShow from "./pages/posts/postId.js";

const rootRoute = new RootRoute({
    component: App,
})

const indexRoute = new Route({
    getParentRoute: () => rootRoute,
    path: '/',
    component: Home,
})

const postRoute = new Route({
    getParentRoute: () => rootRoute,
    path: '/posts',
    component: Posts,
})

const postIdRoute = new Route({
    getParentRoute: () => rootRoute,
    path: '/posts/$postId',
    loader: async ({params}) => {
        const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`)
        return res.json()
    },
    component: PostShow,
})

const routeTree = rootRoute.addChildren([
    indexRoute,
    postRoute,
    postIdRoute,
])

export const router = new Router({routeTree})

declare module '@tanstack/react-router' {
    interface Register {
        router: typeof router
    }
}

export {postRoute, postIdRoute}
