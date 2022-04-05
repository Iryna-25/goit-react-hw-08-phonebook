import React from 'react';
import ContactsForm from '../Components/ContactsForm';
import Filter from '../Components/Filter';
import ContactList from '../Components/ContactsList';

import { Link } from 'react-router-dom';


import Wrapper from '../Components/wrapper.styled';

const ContactsPage = () => {
  return (
    <Wrapper>
      <p>
        <Link to={'/'}> <button> Log Out </button> </Link>
      </p>
      <ContactsForm />
      <Filter />
      <ContactList />
    </Wrapper>
  );
};

export default ContactsPage;
