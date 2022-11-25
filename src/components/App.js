import axios from "axios";
import { useEffect, useState } from "react";
import CurrencyInput from "./CurrencyInput/CurrencyInput";

export const App = () => {

  const [amount1, setAmount1] = useState(1)
  
const [amount2, setAmount2] = useState(1)
  const [currency1, setCurrency1] = useState('USD')
  const [currency2, setCurrency2] = useState('UAH')


const [rates, setRates] = useState([])

useEffect(() => {
  axios.get('http://data.fixer.io/api/latest?access_key=3c346a871091a291f488da7227f927ff').then(response => {
  setRates(response.data.rates)
})
}, [])

  
console.log(rates===rates)
  
  
  const format = (number) => {
    return number.toFixed(2)
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
  
  return (
    <div>
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
    </div>
  );
};
