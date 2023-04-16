import {useState} from "react";
import {AccordionItem} from "./AccordionItem/AccordionItem";
import PropTypes from "prop-types";

export const Accordion = (props) => {
  const {data, className} = props
  const [selectedIndex, setSelectedIndex] = useState(null)

  const onToggle = (index) => {
    if (selectedIndex === index) {
      return setSelectedIndex(null)
    }
    setSelectedIndex(index)
  }

  return (
    <div className={className}>
      {
        data.map((item, index) => (
          <AccordionItem
            onToggle={() => onToggle(index)}
            active={selectedIndex === index} k
            key={index}
            answer={item.answer}
            question={item.question}/>
        ))
      }
    </div>
  )
}

Accordion.propTypes = {
  data: PropTypes.array,
  className: PropTypes.string
}
