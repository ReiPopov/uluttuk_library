import React from 'react';
import cls from './PromoBlock.module.scss'
import {SMALL_SCREEN, Text, useWindowDimensions, VStack} from "../../../../shared";

export const PromoBlock = () => {
  const {width} = useWindowDimensions()
  return (
    <div className={cls.promo}>
      <VStack max justify={'center'} align={width > SMALL_SCREEN ? 'end': 'center'} className="container">
        <Text
          color={'white'}
          align={"right"}
          size={'size_xl'}
          title={'Отдел диссертаций'}
          headerCategory={'h1'}
        />
      </VStack>
    </div>
  );
};
