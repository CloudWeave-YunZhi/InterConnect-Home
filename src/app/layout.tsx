import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'InterConnect - Minecraft 服务器实时 WebSocket API',
  description: '为 Minecraft 服务器提供实时 WebSocket API 通信解决方案，支持事件通信、密钥管理和 Web 控制面板。',
  keywords: ['Minecraft', 'WebSocket', 'API', '服务器通信', 'InterConnect'],
  authors: [{ name: 'InterConnect Team' }],
  openGraph: {
    title: 'InterConnect - Minecraft 服务器实时 WebSocket API',
    description: '为 Minecraft 服务器提供实时 WebSocket API 通信解决方案',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-CN" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      </head>
      <body>{children}</body>
    </html>
  )
}
