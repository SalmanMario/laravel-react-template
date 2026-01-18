import Navbar from "@/components/Navbar.js";
import {Outlet} from "@tanstack/react-router";
import React from 'react'

function App() {

    return (
        <div>
            <Navbar/>
            <Outlet/>
        </div>
    )
}

export default App
