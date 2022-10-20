import React from 'react'
import { Link } from 'react-router-dom'

import './cardContainer.css'
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
        },
        {
            title: 'Area2',
            description: 'Convert between units of area',
            link: '/area'
        },
        {
            title: 'Area3',
            description: 'Convert between units of area',
            link: '/area'
        },
        {
            title: 'Area4',
            description: 'Convert between units of area',
            link: '/area'
        },
    ]
    return (
        <div className='grid gap-4 grid-cols-auto-fit-meme min-w-[30%] max-w-[80%]'>
            {
                cards.map((card, index) => (
                    <div className="flex flex-col items-center px-6 py-3 bg-slate-800 rounded-lg shadow-[2px_2px_10px_0_rgba(0,0,0,0.2)] cursor-pointer 
                    hover:bg-slate-600 hover:shadow-[2px_2px_10px_0_rgba(40,40,40,0.8)]" key={index}>
                        <Link to={card.link} className=''>
                            <h2 className="">{card.title}</h2>
                        </Link>
                    </div>
                ))
            }
        </div >
    )
}

export default CardContainer