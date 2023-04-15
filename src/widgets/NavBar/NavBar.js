import React from 'react';
import './NavBar.scss'
import {HStack, Input} from "../../shared";
import {Link} from "react-router-dom";

export const NavBar = () => {
  return (
    <HStack className={'navbar'}>
      <div className={'container'}>
        <Input placeholder={'Поиск по сайту...'}/>
      </div>
      <Link to={'about'}>TEST</Link>
    </HStack>
  );
};
