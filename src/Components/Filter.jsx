import PropTypes from "prop-types";
import { FcFilledFilter } from "react-icons/fc";
import { Container } from "./Filter.styled";
import { Input, Label } from "./ContactForm.styled";

export default function Filter({ onFilter, filter }) {
  const handleInput = (e) => {
    onFilter(e.target.value);
  };

  return (
    <Container>
      <Label htmlFor="inputFilter">
        <FcFilledFilter />
        Find contacts by name
      </Label>
      <Input
        id="inputFilter"
        type="text"
        value={filter}
        name="filter"
        onChange={handleInput}
      ></Input>
    </Container>
  );
}

Filter.propTypes = {
  onFilter: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
};















// import { memo } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import React from 'react';
// import PropTypes from 'prop-types';
// import { Header2, SearchInput } from './Filter.styled';
// import { changeFilter } from '../Redux/Contacts/contacts-actions';
// import { getFilter } from '../Redux/Contacts/contacts-selector';

// const Filter = () => {
//   const filter = useSelector(getFilter);
//   const dispatch = useDispatch();

//   const handleChange = e => dispatch(changeFilter(e.target.value));

//   return (
//     <div>
//       <Header2>Contacts</Header2>
//       Find contacts by name
//       <SearchInput type="text" value={filter} onChange={handleChange} />
//     </div>
//   );
// };

// Filter.propTypes = {
//   value: PropTypes.string,
//   onchangeFilter: PropTypes.func,
// };

// export default memo(Filter);