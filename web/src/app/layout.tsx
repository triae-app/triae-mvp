import type { Metadata } from 'next'
import './globals.css'
import { Geist, Geist_Mono } from 'next/font/google'
import { Providers } from './providers'

const fontSans = Geist({
	display: 'swap',
	variable: '--font-sans',
})

const fontMono = Geist_Mono({
	display: 'swap',
	variable: '--font-mono',
})

export const metadata: Metadata = {
	title: 'Triae',
	description: '',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body
				className={`${fontSans.variable} ${fontMono.variable} font-sans antialiased`}
			>
				<Providers>{children}</Providers>
			</body>
		</html>
	)
}
