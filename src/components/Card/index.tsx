import React from 'react'

import { cardContainerStyles } from './card.styles'

interface CardProps {
    title: string
    description: string
}

const Card = ({ title, description }: CardProps) => {
  return (
    <div className={cardContainerStyles({ bgColor: 'white' })}>
        <h5 className="text-gray-950 text-lg font-semibold">{title}</h5>
        <p className="text-gray-950 text-base">{description}</p>
    </div>
  )
}

export default Card