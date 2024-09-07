import './globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <title>Lorem Ipsum Dolor Sit Amet</title>
      </head>
      <body>{children}</body>
    </html>
  )
}
