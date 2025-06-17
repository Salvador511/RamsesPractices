'use client'
import ThemeRegistry from '~/app/UI/Theme'
import NavBar from '~/app/Navbar'
import Footer from '~/app/Footer'

const metadata = {
  title: 'Practica DOM',
  description: 'Practica DOM',
}

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </head>
      <ThemeRegistry>
        <body>
          <NavBar />
          {children}
          <Footer />
        </body>
      </ThemeRegistry>
    </html>
  )
}

export default RootLayout