import { useState } from 'react'
import { Link } from 'react-router-dom'
import SelectUnit from '../SelectUnit/SelectUnit'

const Card = ({ units }) => {
    const keys = Object.keys(units)
    const [from, setFrom] = useState({ ...units[units.initials[0]], value: '1' })
    const [to, setTo] = useState({ ...units[units.initials[1]], value: (1 / units[units.initials[1]].formula) * units[units.initials[0]].formula })
    const [messageFrom, setMessageFrom] = useState(units[units.initials[0]].nombre.singular)
    const [messageTo, setMessageTo] = useState(units[units.initials[1]].nombre.plural)

    const handleChangeUnit = (e) => {
        const { name, value } = e.target
        const newDistance = { ...units[value] }
        if (name === 'from') {
            const newFrom = { ...newDistance, value: from.value }
            setFrom(newFrom)
            setTo((prev) => {
                return { ...prev, value: (newFrom.formula * newFrom.value) / to.formula }
            })
        } else {
            const newTo = { ...newDistance, value: (from.formula * from.value) / newDistance.formula }
            setTo(newTo)
        }
        changeMessage();
    }
    function handleChangeValue(e) {
        const { name, value } = e.target
        if (name === 'fromValue') {
            setFrom((prev) => { return { ...prev, value } })
            setTo((prev) => { return { ...prev, value: (value * from.formula) / to.formula } })
        } else if (name === 'toValue') {
            setTo((prev) => { return { ...prev, value } })
            setFrom((prev) => { return { ...prev, value: (value * to.formula) / from.formula } })
        }
        changeMessage();
    }
    function changeMessage() {
        let message = from.value === '1' ? from.nombre.singular : from.nombre.plural
        setMessageFrom(message)

        message = to.value === '1' ? to.nombre.singular : to.nombre.plural
        setMessageTo(message)
    }

    return (
        <>
            <div className='text-black flex justify-center py-3 gap-2'>
                <SelectUnit unit='from' value={from.unit} keys={keys} handleChange={handleChangeUnit} />
                <input min={0} type='number' value={from.value} name='fromValue' onChange={handleChangeValue} />
                <SelectUnit unit='to' value={to.unit} keys={keys} handleChange={handleChangeUnit} />
                <input min={0} type='number' value={to.value} name='toValue' onChange={handleChangeValue} />
            </div>
            <span>De: {messageFrom} {from.value} - </span>
            <span>To: {messageTo} {to.value}</span>
            <Link to='/' className='text-white'>Volver</Link>
        </>
    )
}

export default Card
