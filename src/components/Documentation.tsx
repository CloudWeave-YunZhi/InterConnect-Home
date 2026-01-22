import React from 'react'
import { GlassCard } from './GlassCard'
import { GlassButton } from './GlassButton'

const docSections = [
  {
    title: 'API 参考文档',
    description: '完整的 API 文档，包含示例代码和最佳实践指南。',
    link: '#',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    )
  },
  {
    title: '插件开发指南',
    description: '学习如何创建自定义插件和扩展功能模块。',
    link: '#',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
      </svg>
    )
  },
  {
    title: '部署指南',
    description: '生产环境部署策略、配置优化和运维最佳实践。',
    link: '#',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
      </svg>
    )
  },
  {
    title: '安全最佳实践',
    description: '保护 InterConnect 安装和 API 密钥的安全策略。',
    link: '#',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    )
  }
]

export const Documentation: React.FC = () => {
  return (
    <section id="docs" className="bg-apple-section-secondary py-24 md:py-32">
      <div className="container-apple">
        <div className="text-center mb-16">
          <h2 className="text-apple-headline">
            完善的文档支持
          </h2>
          <p className="text-apple-body text-muted-foreground mt-4 max-w-2xl mx-auto">
            全面的指南和参考文档，帮助您充分利用 InterConnect 的强大功能
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
          {docSections.map((section, index) => (
            <GlassCard key={index} delay={index * 0.1}>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-accent/10 text-accent rounded-xl flex items-center justify-center">
                  {section.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-apple-title mb-2">
                    {section.title}
                  </h3>
                  <p className="text-apple-body text-muted-foreground mb-4 leading-relaxed">
                    {section.description}
                  </p>
                  <a
                    href={section.link}
                    className="text-accent text-apple-body inline-flex items-center gap-1 hover:gap-2 transition-all font-medium"
                  >
                    查看详情
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>

        <div className="text-center">
          <GlassButton variant="primary" href="#">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
            查看完整文档
          </GlassButton>
        </div>
      </div>
    </section>
  )
}
