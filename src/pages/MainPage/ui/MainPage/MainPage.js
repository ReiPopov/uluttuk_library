import React from 'react';
import {PromoBlock} from "../PromoBlock/PromoBlock";
import {DissertationBlock} from "../DissertationBlock/DissertationBlock";
import {RightsBlock} from "../RightsBlock/RightsBlock";
import {LastNewsBlock} from "../LastNewsBlock/LastNewsBlock";
import {Faq} from "../Faq/Faq";
import {AdvantagesBlock} from "../AdvantagesBlock/AdvantagesBlock";

const MainPage = () => {
  return (
    <>
      <PromoBlock/>
      <DissertationBlock/>
      <AdvantagesBlock/>
      <RightsBlock/>
      <LastNewsBlock/>
      <Faq/>
    </>
  );
};

export default MainPage;
