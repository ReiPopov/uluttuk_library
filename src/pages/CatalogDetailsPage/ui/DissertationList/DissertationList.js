import PropTypes from "prop-types";
import {VStack} from "../../../../shared";
import {DissertationItem} from "../DissertationItem/DissertationItem";

export const DissertationList = ({dissertations}) => {
  return (
    <VStack gap={'32'}>
      {dissertations.map(dissertation => (
        <DissertationItem dissertation={dissertation}/>
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
