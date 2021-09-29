import React, { useState } from 'react'
import Select from 'react-select'
import { Button, Grid, TextField } from '@mui/material'
import { toast } from 'react-toastify'
import img1 from '../assets/img/img1.png'
import ShowCategory from './ShowCategory';

function ListProduct({
    options,
    selectedOption,
    setSelectedOption,
    newValue,
    setNewValue,
    stateOptions,
    setStateOptions,
    newItem,
    setNewItem,
    handlefilter,
}) {

    const [isShow, setIsShow] = useState(false)

    const handelChangeSelect = (e) => {
        // handlefilter(selectedOption)
        setSelectedOption(e.label)
        console.log(e.label);
    }


    const handleChange = (e) => {
        setNewValue(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if (newValue.length > 0) {
            const item = { label: newValue, value: newValue, id: Math.floor(Math.random() * 100) + 1 }

            setStateOptions([...stateOptions, item])
            console.log(stateOptions);
            toast.success("Category Added")
            setIsShow(false)
        }
        setNewValue('')
    }


    const handleDelete = (id) => {
        const clone = [...newItem]
        const selectedItems = clone.filter(item => item.id != id)

        setNewItem(selectedItems)
        toast.dark('Done👍')
    }


    return (
        <div style={{ background: '#6B7280', padding: '19px', marginTop: '80px', borderRadius: '4px' }}>
            <Select
                value={selectedOption.label}
                className="w-25"
                options={options}
                onChange={handelChangeSelect}
            />

            <div className="d-flex justify-content-center">

                <Button style={{ height: '40px' }} variant="contained" color={isShow ? 'error' : 'info'} onClick={() => setIsShow(!isShow)}>{isShow ? 'Cancel' : 'Add new category'}</Button>

                {isShow && (
                    <div >

                        <ShowCategory
                            handleChange={handleChange}
                            handleSubmit={handleSubmit}
                            newValue={newValue}
                        />

                    </div>
                )}
            </div>
            <div>
                {newItem.length < 1 && (
                    <div className="d-flex justify-content-center m-4 rounded-circle">
                        <img src={img1} width="400" />
                    </div>
                )}
                {newItem && (
                    newItem.map((item) => (
                        <div className="d-flex justify-content-center animate__animated animate__bounceInLeft text-center" key={item.id}>
                            <div className="m-2 bg-warning d-flex justify-content-between p-2 rounded-1 shadow w-75">
                                <h2>item: {item.text}</h2>
                                <div>{selectedOption && (<h5 className="p-3 rounded-circle bg-dark text-light">{selectedOption}</h5>)}</div>
                                <h3 className="text-light" onClick={() => handleDelete(item.id)} style={{ cursor: 'pointer' }}>X</h3>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    )
}

export default ListProduct
