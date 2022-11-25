import { Box, Input } from "@chakra-ui/react"
import { PropTypes } from "prop-types"
import { Select } from "./CurrencyInput.module"

const CurrencyInput = (props) => {
    return(
        <Box padding='5px' >
            <Input  padding='6px' borderRadius='4px' borderColor='transparent' margin='8px' type='text' value={props.amount} onChange={e=>props.onAmountChange(e.target.value)} />
            <Select value={props.currency} onChange={e=>props.onCurrencyChange(e.target.value)}>
                {props.currencies.map((currency => (
                    <option  value={currency}>{currency}</option>
                )))}
    </Select>
        </Box>
    )
}

export default CurrencyInput


CurrencyInput.propTypes = {
    amount: PropTypes.number.isRequired,
    currency: PropTypes.string.isRequired,
    currencies: PropTypes.array,
    onAmountChange: PropTypes.func,
    onCurrencyChange:PropTypes.func,
}