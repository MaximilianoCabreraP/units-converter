import React from 'react'

const SelectUnit = ({ unit, value, keys, handleChange }) => {
    return (
        <select name={unit} onChange={handleChange} defaultValue={value}>
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
