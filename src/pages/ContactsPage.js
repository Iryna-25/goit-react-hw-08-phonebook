import React from "react";
import ContactsForm from "../components/Contacts/ContactsForm/ContactsForm";
import Filter from "../components/Contacts/Filter/Filter";
// import ContactsList from "../components/Contacts/ContactsList";

import Wrapper from "../components/wrapper.styled";

const ContactsPage = () => {
  return (
    <Wrapper>
      <ContactsForm />
      <Filter />
      {/* <ContactsList /> */}
    </Wrapper>
  );
};

export default ContactsPage;
