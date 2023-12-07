import { Check } from 'lucide-react'
import React from 'react'

const Index = ({ title }: any) => {
    return (
        <div className='card_check'>
            <Check size={13} />
            <p>{title}</p>
        </div>
    )
}

export default Index