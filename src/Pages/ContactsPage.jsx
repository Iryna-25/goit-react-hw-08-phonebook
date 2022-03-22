import { ContactsTitle, Message } from "./ContactsPage.styled";
import ContactForm from '../Components/ContactForm';
import ContactList from '../Components/ContactList';
import Filter from '../Components/Filter';

export default function ContactsPage(loading, onChangeState, onContactsGroup, onContactsFilter, onFilter, filter, contacts, onDelete) {
  return (
    <>
  <ContactForm onChangeState={onChangeState} />
  {loading ? (
    alert ("Привет")
  ) : (
    <>
      {onContactsGroup ? (
        <>
          <ContactsTitle>Contacts</ContactsTitle>
          {onContactsFilter && (
            <Filter onFilter={onFilter} filter={filter} />
          )}
          <ContactList
            contacts={contacts}
            filter={filter}
            onDelete={onDelete}
          />
        </>
      ) : (
        <Message>You have no saved contacts</Message>
      )}
    </>
  )}
</>
  )
};