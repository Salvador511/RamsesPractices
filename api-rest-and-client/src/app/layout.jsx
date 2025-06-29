'use client'
import ThemeRegistry from '~/app/UI/Theme'
import NavBar from '~/app/Navbar'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const metadata = {
  title: 'Form',
  description: 'Form',
}
const queryClient = new QueryClient()

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </head>
      <ThemeRegistry>
        <QueryClientProvider client={queryClient}>
          <body>
            <NavBar />
            {children}
          </body>
        </QueryClientProvider>
      </ThemeRegistry>
    </html>
  )
}

export default RootLayout