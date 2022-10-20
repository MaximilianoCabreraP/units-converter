import React from 'react'
import './selectUnit.css'

const SelectUnit = ({ unit, value, keys, handleChange }) => {
    const handleUnitChange = (e) => {
        let selectUnit = document.getElementsByName(unit)[0]
        for (let i = 0; i < selectUnit.length; i++) {
            if (selectUnit[i].value === e.target.value) {
                selectUnit[i].setAttribute('selected', 'selected')
            } else {
                selectUnit[i].removeAttribute('selected')
            }
        }
        handleChange(e)
    }
    return (
        <select className="prueba" name={unit} onChange={handleUnitChange} defaultValue={value}>
            {keys.map((key) => (
                key !== 'initials' &&
                <option key={key} value={key}>
                    {key}
                </option>
            ))}
        </select>
    )
}

export default SelectUnit
