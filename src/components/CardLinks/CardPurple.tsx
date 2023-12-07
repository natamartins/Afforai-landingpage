'use client'
import Link from 'next/link'
import React from 'react'

const CardGray = ({ title }: any) => {
    return (
        <Link href='https://afforai.com/login' className="button-purple">{title}</Link>
    )
}

export default CardGray