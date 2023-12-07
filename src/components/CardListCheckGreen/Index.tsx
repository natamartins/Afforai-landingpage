import { CheckCircle2 } from 'lucide-react'
import React from 'react'

const Index = ({ title }: any) => {
    return (
        <div className='list_check-green'>
            <CheckCircle2 scale={16} />
            <p>{title}</p>
        </div>
    )
}

export default Index