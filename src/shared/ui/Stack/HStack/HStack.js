import {Flex} from '../Flex/Flex'
import PropTypes from "prop-types";


export const HStack = (props) => {
  return <Flex {...props} direction='row'/>
}

HStack.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  justify: PropTypes.oneOf(['start', 'center', 'end', 'between']),
  align: PropTypes.oneOf(['start', 'center', 'end']),
  direction: PropTypes.oneOf(['row', 'column']),
  gap: PropTypes.oneOf(['4', '8', '16', '32']),
  max: PropTypes.bool
};
