import ContactForm from './Components/ContactForm';
import ContactList from './Components/ContactList';
import Filter from './Components/Filter';
import Wrapper from './wrapper.styled';

const App = () => {
  return (
    <Wrapper>
      <ContactForm />
      <Filter />
      <ContactList />
    </Wrapper>
  );
};

export default App;