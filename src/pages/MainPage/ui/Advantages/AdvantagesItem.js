import React from 'react';
import {Text, VStack} from "../../../../shared";
import PropTypes from "prop-types";

export const AdvantagesItem = (props) => {
  const {img, title, text} = props
  return (
    <VStack align={'center'} gap={'16'} style={{width: '33.33333%'}}>
      <img src={img} style={{width: 200, height: 200}} alt={'icon'}/>
      <Text align={'center'} color={'white'} title={title}/>
      <Text align={'center'} color={'white'} text={text}/>
    </VStack>
  );
};

AdvantagesItem.propTypes = {
  img: PropTypes.string,
  title: PropTypes.string,
  text: PropTypes.string,
}
