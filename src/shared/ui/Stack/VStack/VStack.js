import {Flex} from '../Flex/Flex'
import PropTypes from "prop-types";

export const VStack = (props) => {
  const {align = 'start'} = props
  return <Flex {...props} direction='column' align={align}/>
}

VStack.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  justify: PropTypes.oneOf(['start', 'center', 'end', 'between']),
  align: PropTypes.oneOf(['start', 'center', 'end']),
  direction: PropTypes.oneOf(['row', 'column']),
  gap: PropTypes.oneOf(['4', '8', '16', '32']),
  max: PropTypes.bool
};
