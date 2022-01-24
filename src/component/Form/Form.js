import React from 'react';
import TextField from '@mui/material/TextField';

import './Form.css'
import FormControl from "@mui/material/FormControl"
import InputLabel from "@mui/material/InputLabel"
import Select from "@mui/material/Select"
import MenuItem from "@mui/material/MenuItem"

const Form = ({search, filter}) => {

    return (
        <div
            className='cocktail_form'
        >
        <FormControl variant="standard" sx={{m: 2, minWidth: 350}}>
            <TextField

                id="standard-required"
                label="Enter name of cocktail"
                defaultValue=""
                variant="standard"
                onKeyUp={event => {
                    search(event.target.value)
                }}
            />
        </FormControl>

        <FormControl variant="standard" sx={{m: 2, minWidth: 120}}>

                <InputLabel

                    id="demo-simple-select-standard-label">Type </InputLabel>
                <Select
                    labelId="demo-simple-select-standard-label"
                    id="demo-simple-select-standard"
                    onChange={
                        (event) =>
                            filter(event.target.value)
                    }
                    label="Age"
                >

                    <MenuItem value="All">All</MenuItem>
                    <MenuItem value="Alcoholic">Alcoholic</MenuItem>
                    <MenuItem value="Non_Alcoholic">Non Alcoholic</MenuItem>
                </Select>
            </FormControl>
        </div>



    );
};

export default Form;