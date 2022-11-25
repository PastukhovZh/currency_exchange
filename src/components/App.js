import { Box, Text } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import CurrencyHeader from "./CurrencyHeader/CurrencyHeader";
import CurrencyInput from "./CurrencyInput/CurrencyInput";

export const App = () => {

  const [amount1, setAmount1] = useState(1)
  
const [amount2, setAmount2] = useState(1)
  const [currency1, setCurrency1] = useState('USD')
  const [currency2, setCurrency2] = useState('UAH')

const [rates, setRates] = useState([])
  useEffect(() => {
    const isRates = !Boolean(rates)
    if (!isRates) {
      handleAmount1Change(1)
    }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [rates])
useEffect(() => {
  axios.get('http://data.fixer.io/api/latest?access_key=61f01c67c914d1b6356c8ea4dc838dcf').then(response => {
  setRates(response.data.rates)
})
}, [])

  // console.log(rates['USD']*rates['UAH'])
  // console.log(rates['EUR']*rates['UAH'])
  
  const format = (number) => {
    return Number(number.toFixed(2))
  }
  const handleAmount1Change = (amount1) => {
    setAmount2(format(amount1 * rates[currency2]/rates[currency1]))
  setAmount1(amount1)
}

  const handleCurrency1Change = (currency1)=>{
    setAmount2(format(amount1 * rates[currency2] / rates[currency1]))
    setCurrency1(currency1)
  }

    const handleAmount2Change = (amount2) => {
    setAmount1(format(amount2 * rates[currency1]/rates[currency2]))
  setAmount2(amount2)
}

  const handleCurrency2Change = (currency2)=>{
    setAmount1(format(amount2 * rates[currency1] / rates[currency2]))
    setCurrency2(currency2)
  }

  const UAH = rates['UAH']
  const USD = rates['UAH'] / rates['USD'] 
console.log()
  return (
    <Box textAlign='center' maxW='1200px'margin='auto' >
      <Box display='flex'>
      <CurrencyHeader
        currency={'EUR'}
        amount={UAH} />
      <CurrencyHeader
        currency={'USD'}
          amount={Number(USD.toFixed(6))} />
        </Box>
<Box>
      <Text fontSize='xxx-large'>Currency converter</Text>
      <CurrencyInput
        currencies={Object.keys(rates)}
        amount={amount1}
        currency={currency1}
        onAmountChange={handleAmount1Change}
        onCurrencyChange ={handleCurrency1Change}
      />
      <CurrencyInput
        currencies={Object.keys(rates)}
        amount={amount2}
        currency={currency2}
        onAmountChange={handleAmount2Change}
        onCurrencyChange ={handleCurrency2Change}
      />
</Box>
    </Box >
  );
};
