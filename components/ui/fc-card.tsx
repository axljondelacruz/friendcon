import React from 'react'

interface CardProps {
  header?: React.ReactNode
  children: React.ReactNode
}

export default function Card({ header, children }: CardProps) {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
      {header && <div className="bg-gray-200 px-4 py-2">{header}</div>}
      <div className="p-4">{children}</div>
    </div>
  )
}
