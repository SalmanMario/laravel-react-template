import React from 'react'
import ReactDOM from 'react-dom/client'
import {RouterProvider} from "@tanstack/react-router";
import "../../resources/css/app.css"
import {router} from "@/router.js"

ReactDOM.createRoot(
    document.getElementById('app')!
).render(
    <RouterProvider router={router}/>
)
