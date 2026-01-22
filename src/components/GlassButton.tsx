import React from 'react'

interface GlassButtonProps {
  children: React.ReactNode
  variant?: 'primary' | 'secondary'
  className?: string
  onClick?: () => void
  href?: string
}

export const GlassButton: React.FC<GlassButtonProps> = ({
  children,
  variant = 'secondary',
  className = '',
  onClick,
  href
}) => {
  const baseClass = variant === 'primary' ? 'glass-button-primary' : 'glass-button-secondary'
  const combinedClass = `${baseClass} ${className}`

  if (href) {
    return (
      <a
        href={href}
        className={combinedClass}
        onClick={onClick}
      >
        {children}
      </a>
    )
  }

  return (
    <button
      className={combinedClass}
      onClick={onClick}
    >
      {children}
    </button>
  )
}
