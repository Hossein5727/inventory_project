import { TextField, Button, Grid } from '@mui/material'
import React, { useState } from 'react'
import { toast } from 'react-toastify'

function NewProduct({ setNewItem, value, setValue }) {

    const handleChange = (e) => {
        setValue(e.target.value)
    }

    const handleClick = () => {
        if (value.length < 1) {
            toast.warning("Please Enter a Item")
        }
        if (value.length != 0) {
            setNewItem(value)
        }
        setValue('')
    }

    return (
        <div style={{ background: '#9CA3AF', padding: '19px', borderRadius: '8px' }}>
            <div className="">
                <h3>New Item</h3>
            </div>
            <div>
                <Grid container spacing={8}>
                    <Grid item xs={3}>
                        <TextField
                            value={value}
                            onChange={handleChange}
                            label="category"
                            variant="filled"
                            color="warning"
                            fullWidth
                        />
                    </Grid>
                    <Grid item className="mt-3" xs={2}>
                        <Button fullWidth variant="contained" onClick={handleClick} color="warning">Add Item</Button>
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}

export default NewProduct
