import Image from 'next/image'
import React from 'react'

interface TypeCardIndoSectionTive {
    icon: any,
    title: string,
    subtitle: string,
    description: string,
}

const Index = ({ icon, title, subtitle, description }: TypeCardIndoSectionTive) => {
    return (
        <div className='info_section-five'>
                <Image src={icon} alt='' />
            <div className='info_section-five-box-info'>
                <h3>{title} <span>{subtitle}</span></h3>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default Index