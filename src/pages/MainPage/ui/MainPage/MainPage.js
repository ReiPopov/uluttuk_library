import React from 'react';
import {PromoBlock} from "../PromoBlock/PromoBlock";
import {DissertationBlock} from "../DissertationBlock/DissertationBlock";
import {Advantages} from "../Advantages/Advantages";
import {RightsBlock} from "../RightsBlock/RightsBlock";
import {LastNewsBlock} from "../LastNewsBlock/LastNewsBlock";
import {Faq} from "../Faq/Faq";

const MainPage = () => {
  return (
    <>
      <PromoBlock/>
      <DissertationBlock/>
      <Advantages/>
      <RightsBlock/>
      <LastNewsBlock/>
      <Faq/>
      <div style={{height: 100}}></div>
    </>
  );
};

export default MainPage;
