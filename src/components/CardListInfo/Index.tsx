import React from 'react'

interface TypeCardListInfo {
    title: string,
    subtitle?: string,
    description: string
}

const Index = ({ title, subtitle, description }: TypeCardListInfo) => {
    return (
        <div className='list_info'>
            {
                subtitle && (
                    <span>{subtitle}</span>
                )
            }
            <h2>{title}</h2>
            <p>{description}</p>
        </div>
    )
}

export default Index