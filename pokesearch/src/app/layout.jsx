'use client'
import ThemeRegistry from '~/app/UI/Theme'

const metadata = {
  title: 'PokeSearch by Chava',
  description: 'PokeSearch - Tu buscador de Pokémon',
}


const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link rel="icon" type="image/svg+xml" href="https://i.ebayimg.com/images/g/544AAOSwpSlgT~YX/s-l400.jpg" />
      </head>
      <ThemeRegistry>
        <body>
          {children}
        </body>
      </ThemeRegistry>
    </html>
  )
}

export default RootLayout