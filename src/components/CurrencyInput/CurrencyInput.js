import { PropTypes } from "prop-types"

const CurrencyInput = (props) => {
    return(
    <>
            <input type='text' value={props.amount} onChange={e=>props.onAmountChange(e.target.value)} />
            <select value={props.currency} onChange={e=>props.onCurrencyChange(e.target.value)}>
                {props.currencies.map((currency => (
                    <option value={currency}>{currency}</option>
                )))}
    </select>
        </>
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