import React from 'react'
import { GlassCard } from './GlassCard'

const steps = [
  {
    title: '安装 InterConnect',
    description: '通过 npm 快速安装 InterConnect 服务器',
    command: 'npm install -g interconnect-server'
  },
  {
    title: '初始化配置',
    description: '创建配置文件并设置基本参数',
    command: 'interconnect init'
  },
  {
    title: '启动服务器',
    description: '运行 InterConnect 服务器实例',
    command: 'interconnect start --port 3000'
  },
  {
    title: '连接 Minecraft',
    description: '在您的 Minecraft 插件中连接到服务器',
    command: `// 在您的 Minecraft 插件中\nInterConnect.connect("ws://localhost:3000", "your-api-key");`
  }
]

export const QuickStart: React.FC = () => {
  return (
    <section id="quickstart" className="bg-apple-section-primary py-24 md:py-32">
      <div className="container-apple">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-apple-headline mb-4">
              快速开始
            </h2>
            <p className="text-apple-body text-muted-foreground">
              只需 4 步，5 分钟内即可完成部署
            </p>
          </div>

          <div className="space-y-6">
            {steps.map((step, index) => (
              <GlassCard key={index} delay={index * 0.1}>
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-accent to-blue-600 text-accent-foreground rounded-xl flex items-center justify-center font-semibold shadow-lg">
                    {index + 1}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-apple-title mb-2">{step.title}</h3>
                    <p className="text-apple-body text-muted-foreground mb-4">
                      {step.description}
                    </p>
                    <div className="relative group">
                      <pre className="glass p-4 rounded-xl overflow-x-auto">
                        <code className="text-sm font-mono text-foreground">
                          {step.command}
                        </code>
                      </pre>
                      <button
                        className="absolute top-3 right-3 p-2 rounded-lg bg-background/50 hover:bg-background/80 transition-all opacity-0 group-hover:opacity-100"
                        title="复制代码"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </GlassCard>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-apple-body text-muted-foreground mb-4">
              需要更多帮助？查看完整文档
            </p>
            <a href="#docs" className="text-accent text-apple-body inline-flex items-center gap-2 hover:gap-3 transition-all">
              阅读文档
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
