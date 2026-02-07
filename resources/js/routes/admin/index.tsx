import {createFileRoute} from '@tanstack/react-router'
import {Input} from "@/components/ui/input";

export const Route = createFileRoute('/admin/')({
    component: RouteComponent,
})

function RouteComponent() {
    return (
        <div>
            <h1 className="text-center text-7xl">Register</h1>
        </div>
    )
}
