import Image from 'next/image'
import React from 'react'

interface TypeInfoSectionThree {
    image: any,
    title: string,
    subtitle?: string,
    description: string,
    link?: string,
    titleLink?: string,
}

const Index = ({ image, title, subtitle, description, link, titleLink }: TypeInfoSectionThree) => {
    return (
        <div className='info_section-three'>
            <Image src={image} alt={title} />
            <div className='box_info-section-three'>
                <h3>{title}
                    {
                        subtitle && (
                            <span>{subtitle}</span>
                        )
                    }
                </h3>
                <p>
                    {description}
                    <a href={link} target='__blank'>{titleLink}</a>
                </p>
            </div>
        </div>
    )
}

export default Index