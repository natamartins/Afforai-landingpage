"use client"
import { ChevronDown, ChevronUp } from 'lucide-react'
import React, { useState } from 'react'
interface typeCardFaqs {
    question: string,
    answer: string
}

const Inadex = ({ question, answer }: typeCardFaqs) => {
    const [openFAQ, setOpenFAQ] = useState(false)
    const handleOpenFaq = () => {
        setOpenFAQ(!openFAQ)
    }

    return (
        <div onClick={handleOpenFaq} className='card_faqs-container'>
            <div className='card_faqs-box'>
                <h4>{question}</h4>
                {
                    openFAQ ? (
                        <ChevronUp />
                    ) : (
                        <ChevronDown />
                    )
                }
            </div>
            {
                openFAQ && (
                    <p>{answer}</p>
                )
            }
        </div>
    )
}

export default Inadex