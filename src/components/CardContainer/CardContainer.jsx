import React from 'react'
import { Link } from 'react-router-dom'

const CardContainer = () => {
    //!Importar las unidades
    const cards = [
        {
            title: 'Distance',
            description: 'Convert between units of distance',
            link: '/distance'
        },
        {
            title: 'Area',
            description: 'Convert between units of area',
            link: '/area'
        }
    ]
    return (
        <div className='flex justify-center gap-2'>
            {cards.map((card, index) => (
                <Link to={card.link} key={index} className='gap-2 bg-transparent w-40 p-4 rounded-lg hover:opacity-80'>
                    <h2 className="bg-cyan-800 uppercase">{card.title}</h2>
                    <p className="bg-cyan-700">{card.description}</p>
                </Link>
            ))}
        </div>
    )
}

export default CardContainer