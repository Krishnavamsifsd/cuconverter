import { useContext, useEffect, useState } from 'react'
import './App.css'
import { Button , Container,Typography, Grid ,Link ,Box ,ThemeProvider} from '@mui/material'
import InputAmount from './components/InputAmount';
import SwitchCurrency from './components/SwitchCurrency';
import SelectCountry from './components/SelectCountry';
import { CurrencyContext } from './context/currencycontext';
import axios from 'axios';
import MenuAppBar from './components/Appbar';


function App() {
  
  const boxStyles = {
    background: "#fdfdfd",
    marginTop: "10%",
    textAlign: "center",
    color: "#222",
    minHeight: "20rem",
    borderRadius: 2,
    padding: "4rem 2rem",
    boxShadow: "0px 10px 15px -3px rgba(0,0,0,0.1)",
    position: "relative"
  }
  
  const {fromCurrency,
    setfromCurrency,
    toCurrency,
    settoCurrency,
    firstAmount,
    } = useContext(CurrencyContext)
    const [resultCurrency, setResultCurrency] = useState(0);
    const codeFromCurrency = fromCurrency.split(" ")[1];
    const codeToCurrency = toCurrency.split(" ")[1];
  
    useEffect(() => {
      if(firstAmount) {
        axios("https://api.freecurrencyapi.com/v1/latest", {
          params: {
            apikey: import.meta.env.VITE_API_KEY,
            base_currency: codeFromCurrency,
            currencies: codeToCurrency
          }
        })
          .then(response => setResultCurrency(response.data.data[codeToCurrency]))
          .catch(error => console.log(error))
      }
    }, [firstAmount, fromCurrency, toCurrency])
  
  return (
    < >
   
    <MenuAppBar color="dark"/>
    <Container maxWidth="md"  sx={boxStyles}>
      
      <Typography variant='h5' sx={{marginBottom:"2rem"}}>Instantly convert any currency with just a few taps</Typography>
      
      <Grid container spacing={2}>
        <InputAmount />
        <SelectCountry value={fromCurrency} setvalue={setfromCurrency} label="From" />
        <SwitchCurrency />
        <SelectCountry value={toCurrency} setvalue={settoCurrency} label="To"/>
      </Grid>
      {firstAmount ? (
        <Box sx={{ textAlign: "left", marginTop: "1rem"}}>
          <Typography>{firstAmount} {fromCurrency} =</Typography>
          <Typography variant='h5' sx={{ marginTop: "5px", fontWeight: "bold"}}>{resultCurrency*firstAmount} {toCurrency}</Typography>
        </Box>
      ) : ""}
      <Typography fontSize="10px" sx={{ position: "absolute", bottom: "1rem", right: "1rem" }}>
        <Link target="_blank" rel="noopener" href="https://www.linkedin.com/in/krishnavamsifsd/">Follow me on Linkedin</Link>
      </Typography>
    </Container>
    </>
  )
}

export default App
