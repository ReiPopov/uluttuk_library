import React from 'react';
import {PromoBlock} from "../PromoBlock/PromoBlock";
import {LibraryHistoryBlock} from "../LibraryHistoryBlock/LibraryHistoryBlock";
import {PhotoGalleryBlock} from "../PhotoGalleryBlock/PhotoGalleryBlock";

const AboutPage = () => {
  return (
    <div>
      <PromoBlock/>
      <LibraryHistoryBlock/>
      <PhotoGalleryBlock/>
    </div>
  );
};

export default AboutPage;
