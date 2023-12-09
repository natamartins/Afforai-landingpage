import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import ProductHunt from '@/img/producthunt.svg'

interface TypeCardWitnesses {
    title: string,
    image: any,
    description: string
}

const Index = ({ image, description, title }: TypeCardWitnesses) => {
    return (
        <div className='card_witnesses'>
            <p className='card_witnesses-description'>{description}</p>
            <div className='card_witnesses-info-box'>
                <div className='card_witnesses-info'>
                    <Image src={image} alt='' />
                    <p>{title}</p>
                </div>
                <Link href='https://www.producthunt.com/products/afforai'>
                    <Image src={ProductHunt} alt='' />
                    <p>View on Product Hunt</p>
                </Link>
            </div>
        </div>
    )
}

export default Index