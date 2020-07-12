import React, { useState } from 'react'
import PropTypes from 'prop-types';

export const AddCategory = ({ setCategories }) => {

    const [inputValue, setinputValue] = useState("")

    const handleInputChange = (e) => {
        const value = e.target.value;
        setinputValue(value);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputValue.trim().length > 0) {
            setCategories(el => { return [inputValue, ...el,] })
            setinputValue("");
        }
    }
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={inputValue}
                onChange={handleInputChange}></input>
        </form>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}