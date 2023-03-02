import { Button, Grid } from '@mui/material'
import React from 'react'
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';
import { CurrencyContext } from '../context/currencycontext';
import { useContext } from 'react';
const SwitchCurrency = () => {
    const {fromCurrency,
        setfromCurrency,
        toCurrency,
        settoCurrency,
        firstAmount,
        setFirstAmount} = useContext(CurrencyContext)
    const switchfunction = () => {
        setfromCurrency(toCurrency)
        settoCurrency(fromCurrency)
    }
  return (
    <Grid item xs={12} md="auto">
        <Button onClick={switchfunction} sx={{borderRadius:1,height:"100%"}}><CompareArrowsIcon sx={{fontSize:30}}/></Button>
    </Grid>
  )
}

export default SwitchCurrency