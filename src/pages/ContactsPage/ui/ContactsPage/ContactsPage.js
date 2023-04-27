import React from 'react';
import {PromoBlock} from "../PromoBlock/PromoBlock";
import {ContactUsBlock} from "../ContactUsBlock/ContactUsBlock";
import {MapBlock} from "../MapBlock/MapBlock";

const ContactsPage = () => {
  return (
    <div>
      <PromoBlock/>
      <ContactUsBlock/>
      <MapBlock/>
    </div>
  );
};

export default ContactsPage;
