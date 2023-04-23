import React from 'react';
import {PromoBlock} from "../PromoBlock/PromoBlock";
import {ContentBlock} from "../ContentBlock/ContentBlock";
import {PhotoGalleryBlock} from "../PhotoGalleryBlock/PhotoGalleryBlock";

const DepartmentPage = () => {
  return (
    <div>
      <PromoBlock/>
      <ContentBlock/>
      <PhotoGalleryBlock/>
    </div>
  );
};

export default DepartmentPage;
