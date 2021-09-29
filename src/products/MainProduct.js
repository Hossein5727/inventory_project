import React, { useEffect, useState } from 'react'
import { ToastContainer } from 'react-toastify'
import ListProduct from './ListProduct'
import NewProduct from './NewProduct'
import 'react-toastify/dist/ReactToastify.css';

const option = [
    { label: 'Meat', value: 'meat', id: 1 },
    { label: 'Dairy', value: 'dairy', id: 2 },
    { label: 'Nuts', value: 'nuts', id: 3 },
]

function MainProduct() {

    const [newValue, setNewValue] = useState('')
    const [stateOptions, setStateOptions] = useState(option)
    const [selectedOption, setSelectedOption] = useState('')
    const [newItem, setNewItem] = useState([])
    const [value, setValue] = useState('')
    const [filterProducts, setfilterProducts] = useState([])

    const handleAdditem = (item) => {
        console.log(item);

        const data = { text: item, id: Math.floor(Math.random() * 100) + 1 }
        setNewItem([...newItem, data])
    }

    // const handlefilter = (label) => {
    //     switch (label) {
    //         case value:
    //             setfilterProducts(newItem.filter((p) => p.text != value))
    //             break;
    //         default:
    //             setfilterProducts(newItem)
    //             break;
    //     }
    // }

    // useEffect(() => {
    //     handlefilter(value)
    // }, [newItem, value])

    return (
        <div style={{ background: '#D1D5DB', padding: '12px 15px' }}>
            <header className="text-center mb-4">
                <h2>Production</h2>
            </header>
            <NewProduct
                setNewItem={handleAdditem}
                setValue={setValue}
                value={value}
            />
            <ListProduct
                stateOptions={stateOptions}
                setStateOptions={setStateOptions}
                newValue={newValue}
                setNewValue={setNewValue}
                options={stateOptions}
                selectedOption={selectedOption}
                setSelectedOption={setSelectedOption}
                newItem={newItem}
                setNewItem={setNewItem}
            // handlefilter={handlefilter}
            />
            <ToastContainer />
        </div>
    )
}

export default MainProduct
