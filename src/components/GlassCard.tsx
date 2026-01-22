import React from 'react'

interface GlassCardProps {
  children: React.ReactNode
  className?: string
  delay?: number
}

export const GlassCard: React.FC<GlassCardProps> = ({
  children,
  className = '',
  delay = 0
}) => {
  return (
    <div
      className={`glass-card animate-apple-fade-in ${className}`}
      style={{ animationDelay: `${delay}s` }}
    >
      {children}
    </div>
  )
}
