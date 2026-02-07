import '../css/app.css';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { createRouter, RouterProvider } from '@tanstack/react-router';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { routeTree } from './routeTree.gen';

export const router = createRouter({ routeTree });

declare module '@tanstack/react-router' {
    interface Register {
        router: typeof router;
    }
}

function App() {
    return <RouterProvider router={router} />;
}

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            gcTime: 0,
        },
    },
});

const rootElement = document.getElementById('app');

if (!rootElement) {
    throw new Error('No root element found. Make sure to include the <div id="app"></div> in your layout template.');
}

createRoot(rootElement).render(
    <StrictMode>
        <QueryClientProvider client={queryClient}>
            <App />
        </QueryClientProvider>
    </StrictMode>,
);
