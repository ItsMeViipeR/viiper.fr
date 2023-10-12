import { ThemeProvider } from "@/src/theme/ThemeProvider"
import "./globals.css"
import { Header } from "@/src/feature/layout/Header"
import clsx from "clsx"
import {Footer} from "@/src/feature/layout/Footer";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width" />
        <link rel="icon" href="/logo.jpg" />
        <title>ViipeR</title>
      </head>
      <body className={clsx("bg-background h-full")}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex flex-col h-full">
            <Header />
            
            <div className="container">
              {children}
            </div>

            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
