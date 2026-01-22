import React from 'react'
import { GlassButton } from './GlassButton'

export const Hero: React.FC = () => {
  return (
    <section className="bg-apple-section-primary pt-32 pb-24 md:pt-40 md:pb-32">
      <div className="container-apple">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6 animate-apple-fade-in">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-apple-caption">为 Minecraft 服务器设计的实时通信解决方案</span>
          </div>

          <h1 className="text-apple-display animate-apple-fade-in animation-delay-100">
            Minecraft 服务器
            <br />
            <span className="bg-gradient-to-r from-accent to-blue-600 bg-clip-text text-transparent">实时 WebSocket API</span>
          </h1>

          <p className="text-apple-body text-muted-foreground mt-6 max-w-2xl mx-auto animate-apple-fade-in animation-delay-200">
            InterConnect 提供无缝的事件通信、强大的密钥管理和直观的 Web 控制面板。
            <br />
            让您的 Minecraft 服务器连接前所未有的简单。
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10 animate-apple-fade-in animation-delay-300">
            <GlassButton variant="primary" href="#quickstart">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              立即开始
            </GlassButton>
            <GlassButton variant="secondary" href="#features">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              了解更多
            </GlassButton>
          </div>

          <div className="mt-16 animate-apple-fade-in animation-delay-400">
            <div className="glass-card max-w-2xl mx-auto text-left">
              <div className="flex items-center justify-between mb-3">
                <span className="text-apple-caption">安装命令</span>
                <button className="text-apple-caption hover:text-accent transition-colors">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                </button>
              </div>
              <pre className="text-sm overflow-x-auto">
                <code className="text-foreground font-mono">
{`# 安装 InterConnect
npm install interconnect-server

# 启动服务器
interconnect start --port 3000`}
                </code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
