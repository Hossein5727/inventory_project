import { FormGroup, TextField, Button } from '@mui/material'
import React from 'react'

function ShowCategory({ handleSubmit, newValue, handleChange }) {
    return (
        <div>
            <div style={{ width: '400px', height: '140px', background: '#8B5CF6', padding: '12px 23px' }} className="animate__animated animate__bounceIn">

                <form onSubmit={handleSubmit}>
                    <FormGroup>
                        <TextField
                            value={newValue}
                            onChange={handleChange}
                            label="category"
                            variant="filled"
                            color="error"
                        />
                        <Button type="submit" variant="contained" color="warning">Add Category</Button>
                    </FormGroup>
                </form>

            </div>
        </div>
    )
}

export default ShowCategory
