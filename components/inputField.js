import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

export default function InputField({name,setFunction,options}){

    const handleChange = (event) =>{
        setFunction(event.target.value)
    }

    return <>
        <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
            <InputLabel>{name}</InputLabel>
            <Select
            onChange={(e)=>handleChange(e)}
            >
                <MenuItem value="">
                    <em>None</em>
                </MenuItem>
                {options.map((option,i) => <MenuItem key={i} value={option}>{option}</MenuItem>)}
            </Select>
      </FormControl>
    </>
}