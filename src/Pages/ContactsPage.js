import React from 'react';
import ContactsForm from '../Components/ContactsForm';
import Filter from '../Components/Filter';
import ContactList from '../Components/ContactsList';

import Wrapper from '../Components/wrapper.styled';

const ContactsPage = () => {
  return (
    <Wrapper>
      <ContactsForm />
      <Filter />
      <ContactList />
    </Wrapper>
  );
};

export default ContactsPage;
