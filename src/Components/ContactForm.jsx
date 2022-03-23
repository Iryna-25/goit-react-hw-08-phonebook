import { useState } from "react";
import PropTypes from "prop-types";
import { ToastContainer } from "react-toastify";
import { IconContext } from "react-icons";
import { Form, Label, Input, Button } from "../Components/ContactForm.styled";

export default function ContactForm({ onChangeState }) {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const handleInput = (e) => {
    const { value, name } = e.target;

    switch (name) {
      case "name":
        setName(value);
        break;
      case "number":
        setNumber(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (onChangeState(name, number) === "success") {
      setNumber("");
      setName("");
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Label htmlFor="inputName">
        Name
      </Label>

      <Input
        id="inputName"
        type="text"
        name="name"
        value={name}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        onChange={handleInput}
      />

      <Label htmlFor="inputNumber">
        Number
      </Label>

      <Input
        id="inputNumber"
        type="tel"
        name="number"
        value={number}
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        onChange={handleInput}
      />

      <Button type="submit" disabled={!name || !number}>
        Add contact
        <IconContext.Provider
          value={{
            size: "1.5em",
            style: { verticalAlign: "middle", marginLeft: "16px" },
          }}
        >
        </IconContext.Provider>
      </Button>
      <ToastContainer />
    </Form>
  );
}

ContactForm.propTypes = {
  onChangeState: PropTypes.func.isRequired,
};






















// import React, { useState, memo } from 'react';
// import {
//   useGetContactsQuery,
//   useAddContactMutation,
// } from '../contacts.API';
// import PropTypes from 'prop-types';
// import { Header, Form, Input, Button } from './ContactForm.styled';

// const ContactForm = () => {
//   const [name, setName] = useState('');
//   const [number, setNumber] = useState('');

//   const { data: contacts, error: contactsError } = useGetContactsQuery();
//   const [addContact] = useAddContactMutation();

//   const handleSubmit = e => {
//     e.preventDefault();

//     if (contactsError) {
//       alert(`Server not responding`);
//       return;
//     }

//     const isInContacts = ({ name, number }) => {
//       const normalizedName = name.toLowerCase();
//       const normalizedNumber = number;
//       return contacts.some(contact => {
//         return (
//           contact.name.toLowerCase() === normalizedName ||
//           contact.phone === normalizedNumber
//         );
//       });
//     };

//     if (isInContacts({ name, number })) {
//       alert(`${name} is already in your contacts`);
//       return;
//     }

//     addContact({ name, number });

//     setName('');
//     setNumber('');
//   };

//   const handleChange = e => {
//     const inputName = e.target.name;
//     const value = e.target.value;
//     if (inputName === 'name') {
//       setName(value);
//     }
//     if (inputName === 'number') {
//       setNumber(value);
//     }
//   };

//   return (
//     <div>
//       <Header> Phonebook </Header>
//       <Form onSubmit={handleSubmit}>
//         <label>
//           Name
//           <Input
//             type="text"
//             name="name"
//             pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//             title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//             required
//             value={name}
//             onChange={handleChange}
//           />
//         </label>
//         <label>
//           Number
//           <Input
//             type="tel"
//             name="number"
//             pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//             title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//             required
//             value={number}
//             onChange={handleChange}
//           />
//         </label>
//         <Button type="submit">Add contact</Button>
//       </Form>
//     </div>
//   );
// };

// ContactForm.propTypes = {
//   name: PropTypes.string,
//   number: PropTypes.string,
//   AddContact: PropTypes.func,
// };
// export default memo(ContactForm);