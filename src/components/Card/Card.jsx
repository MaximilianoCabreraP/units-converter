import { useState } from 'react'
import { Link } from 'react-router-dom'
import SelectUnit from '../SelectUnit/SelectUnit'
import { convertTo } from '../../utils/utils'

const Card = ({ units }) => {
    const keys = Object.keys(units)
    const [from, setFrom] = useState({ ...units[units.initials[0]], value: '1' })
    const [to, setTo] = useState({ ...units[units.initials[1]], value: (1 / units[units.initials[1]].formula) * units[units.initials[0]].formula })

    const handleChangeUnit = (e) => {
        const { name, value } = e.target
        const newDistance = { ...units[value] }
        if (name === 'from') {
            const newFrom = { ...newDistance, value: from.value }
            setFrom(newFrom)
            const newValue = convertTo(from.value, newFrom.formula, to.formula)
            setTo((prev) => {
                return { ...prev, value: newValue }
            })
        } else {
            const newValue = convertTo(from.value, from.formula, newDistance.formula)
            const newTo = { ...newDistance, value: newValue }
            setTo(newTo)
        }
    }
    function handleChangeValue(e) {
        const { name, value } = e.target
        if (name === 'fromValue') {
            setFrom((prev) => { return { ...prev, value } })
            const newValue = convertTo(value, from.formula, to.formula)
            setTo((prev) => { return { ...prev, value: newValue } })
        } else if (name === 'toValue') {
            setTo((prev) => { return { ...prev, value } })
            const newValue = convertTo(value, from.formula, to.formula)
            setFrom((prev) => { return { ...prev, value: newValue } })
        }
    }

    return (
        <>
            <div className='text-black flex justify-center py-3 gap-2'>
                <SelectUnit unit='from' value={from.unit} keys={keys} handleChange={handleChangeUnit} />
                <input min={0} type='number' value={from.value} name='fromValue' onChange={handleChangeValue} />
                <SelectUnit unit='to' value={to.unit} keys={keys} handleChange={handleChangeUnit} />
                <input min={0} type='number' value={to.value} name='toValue' onChange={handleChangeValue} />
            </div>
            <span>De: {from.value === '1' ? from.nombre.singular : from.nombre.plural} {from.value || 0} - </span>
            <span>To: {to.value === '1' ? to.nombre.singular : to.nombre.plural} {to.value || 0}</span>
            <Link to='/' className='text-white'>Volver</Link>
        </>
    )
}

export default Card
