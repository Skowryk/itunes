import './index.css'
import { createRoot } from 'react-dom/client'
import React from 'react'
import { HomePage } from 'Pages/HomePage'
import { queryClient } from 'API/queryClient'
import { QueryClientProvider } from '@tanstack/react-query'
import { Toaster } from 'react-hot-toast'
// import { worker } from 'mocks/browser'

const container = document.getElementById('root')

if (container) {
  const root = createRoot(container)
  // worker.start()

  root.render(
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <HomePage />
        <Toaster />
      </QueryClientProvider>
    </React.StrictMode>
  )
}
