'use client'

import React from 'react'
import { ThemeToggle } from './ThemeToggle'

export const Navigation: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-border/50">
      <div className="container-apple py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-accent to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
              <span className="text-accent-foreground font-semibold text-base">IC</span>
            </div>
            <span className="text-apple-title font-semibold">InterConnect</span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-apple-body text-muted-foreground hover:text-foreground transition-colors duration-200">
              功能特性
            </a>
            <a href="#quickstart" className="text-apple-body text-muted-foreground hover:text-foreground transition-colors duration-200">
              快速开始
            </a>
            <a href="#docs" className="text-apple-body text-muted-foreground hover:text-foreground transition-colors duration-200">
              文档
            </a>
            <a href="https://github.com/CloudWeave-YunZhi" className="text-apple-body text-muted-foreground hover:text-foreground transition-colors duration-200">
              GitHub
            </a>
          </div>

          <ThemeToggle />
        </div>
      </div>
    </nav>
  )
}
