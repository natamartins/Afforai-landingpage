"use client"
import React, { useState } from 'react'
import Image from "next/image";
import Link from "next/link";
import Logo from '@/img/logo-new-violet.webp'
import CardPurple from '@/components/CardLinks/CardPurple'
import CardGray from '@/components/CardLinks/CardGray'
import { Menu } from 'lucide-react';

const Index = () => {
    const [open, setOpen] = useState(false)
    const handleToggleClick = () => {
        setOpen(!open);
    };

    return (
        <nav className="container_nav container">
            <div className='container_nav-bar'>
                <div className="container_nav-logo">
                    <Image src={Logo} width={25} height={25} alt="Logo of company" />
                    <p>Afforai</p>
                </div>
                <ul className="container_nav-links">
                    <Link href='https://afforai.getrewardful.com/signup'>
                        <li>Affiliation</li>
                    </Link>
                    <Link href='https://afforai.com/pricing'>
                        <li>Pricing</li>
                    </Link>
                    <Link href='/'>
                        <li>Testimonials</li>
                    </Link>
                    <Link href='https://help.afforai.com/en/'>
                        <li>Help Center</li>
                    </Link>
                </ul>
                <div className="container_nav-btn">
                    <CardGray title="Log in" />
                    <CardPurple title="Try for free" />
                    <button className="button-menu" onClick={handleToggleClick}>
                        <Menu size={20} />
                    </button>
                </div>
            </div>
            {
                open === true && (
                    <ul className="container_nav-links-mobile">
                        <Link href='https://afforai.getrewardful.com/signup'>
                            <li>Affiliation</li>
                        </Link>
                        <Link href='https://afforai.com/pricing'>
                            <li>Pricing</li>
                        </Link>
                        <Link href='/'>
                            <li>Testimonials</li>
                        </Link>
                        <Link href='https://help.afforai.com/en/'>
                            <li>Help Center</li>
                        </Link>
                    </ul>
                )
            }
        </nav>
    )
}

export default Index