import { Autocomplete, Grid, TextField } from '@mui/material'
import React from 'react'
import FetchData from './FetchData'

const SelectCountry = (props) => {
    const {label , value ,setvalue} = props
    const [data , loaded ,error] = FetchData("https://restcountries.com/v3.1/all")
    const datafilter = data.filter(item => "currencies" in item)
    const dataCountries = datafilter.map(item => {
        return `${item.flag} ${Object.keys(item.currencies)[0]} - ${item.name.common}`
      });
      
  return (
    <Grid item xs={12} md={3}>
        <Autocomplete
        disableClearable
            value = {value}
            onChange= {(event,newValue) => {setvalue(newValue)}}
            options = {dataCountries}
            renderInput = {(params) => <TextField {...params} label={label}/> }
            
        />
    </Grid>
  )
}

export default SelectCountry