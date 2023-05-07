import React from 'react';
import {PromoBlock} from "../PromoBlock/PromoBlock";
import {DissertationBlock} from "../DissertationBlock/DissertationBlock";
import {RightsBlock} from "../RightsBlock/RightsBlock";
import {LastNewsBlock} from "../LastNewsBlock/LastNewsBlock";
import {Faq} from "../Faq/Faq";
import {AdvantagesBlock} from "../AdvantagesBlock/AdvantagesBlock";
import {useSearchParams} from "react-router-dom";
import {SearchResultBlock} from "../SearchResultBlock/SearchResultBlock";

const MainPage = () => {
  const [searchParams] = useSearchParams()

  const searchValue = searchParams.get('search')

  if (searchValue) {
    return <SearchResultBlock searchValue={searchValue}/>
  }

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
