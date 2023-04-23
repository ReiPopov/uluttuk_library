import React from 'react';
import {Text, useWindowDimensions, VStack} from "../../../../shared";
import PropTypes from "prop-types";

export const AdvantagesItem = (props) => {
  const {img, title, text} = props
  const {isSmallScreen} = useWindowDimensions()
  return (
    <VStack align={'center'} gap={'32'} style={{width: isSmallScreen ? '100%' : '33.33333%', marginTop: 60}}>
      <img src={img} style={{width: 200, height: 200}} alt={'icon'}/>
      <Text size={'size_l'} align={'center'} color={'white'} title={title}/>
      <Text size={'size_l'} align={'center'} color={'white'} text={text}/>
    </VStack>
  );
};

AdvantagesItem.propTypes = {
  img: PropTypes.string,
  title: PropTypes.string,
  text: PropTypes.string,
}
