import PropTypes from "prop-types";
import {VStack} from "../../../../shared";
import {DissertationItem} from "../DissertationItem/DissertationItem";

export const DissertationList = ({dissertations}) => {
  return (
    <VStack gap={'64'}>
      {dissertations.map(dissertation => (
        <DissertationItem key={dissertation.storage_cipher} dissertation={dissertation}/>
      ))}
    </VStack>
  )
}

DissertationList.propTypes = {
  dissertations: PropTypes.arrayOf(PropTypes.shape({
    author: PropTypes.string,
    text: PropTypes.string,
    storage_cipher: PropTypes.string,
  }))
}
