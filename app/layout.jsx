import './globals.css'

export const metadata = {
  title: 'Fee Calculator',
  description: 'Simple fee calculator with mock API',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Bootstrap CSS from CDN */}
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
          integrity="sha384-ENjdO4Dr2bkBIFxQpeoYz1D1yY3z1Z6b6bZ1Zq8q1YF6dJY5n9N6ztZ7X0fQ5g5y"
          crossOrigin="anonymous"
        />
      </head>
      <body suppressHydrationWarning>{children}</body>
    </html>
  )
}
