import { Grid, InputAdornment, TextField } from "@mui/material";
import { CurrencyContext } from "../context/currencycontext";
import { useContext } from "react";
const InputAmount = () => {
  const { firstAmount, setFirstAmount} = useContext(CurrencyContext);
    return (
      <Grid item xs={12}  md>
      <TextField
      onChange={e => setFirstAmount(e.target.value)}
      label="Amount"
      fullWidth
      InputProps={{type:"Number",
    startAdornment:<InputAdornment position="start">$</InputAdornment>}}
      >

      </TextField>
      </Grid>
    )
  }
  
  export default InputAmount;
  