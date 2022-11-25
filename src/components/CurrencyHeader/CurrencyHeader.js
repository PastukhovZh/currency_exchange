import { Box, Text } from "@chakra-ui/react"
import { PropTypes } from "prop-types"

const CurrencyHeader = (props) => {
    
    return (
            <ul>
                <Box display='flex'>
                    <Text padding='5px'>{props.currency}</Text>
                    <Text padding='5px'>{props.amount}</Text>
                </Box>
        </ul>
    )
}

CurrencyHeader.propTypes = {
    currency: PropTypes.string.isRequired,
    amount:PropTypes.number.isRequired,
}

export default CurrencyHeader