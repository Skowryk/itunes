import { render } from '@testing-library/react'
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClient } from 'API/queryClient'

const customRender = (ui: React.ReactElement, options = {}) =>
  render(ui, {
    wrapper: ({ children }) => (
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    ),
    ...options
  })

export * from '@testing-library/react'
export { default as userEvent } from '@testing-library/user-event'
export { customRender as render }
