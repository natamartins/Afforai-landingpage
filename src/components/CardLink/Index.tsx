'use client'
import Link from 'next/link'
import React from 'react'

const Index = ({ title }: any) => {
    return (
        <Link href='https://afforai.com/login' className="button-free">{title}</Link>
    )
}

export default Index