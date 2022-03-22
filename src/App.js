import 'react-toastify/dist/ReactToastify.css';
import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import HomePage from './Pages/HomePage';


export default function App() {
  const Layout = lazy(() => import('./Components/Layout'));
  const LoginPage = lazy(() => import('./Pages/LoginPage'));
  const RegisterPage = lazy(() => import('./Pages/RegisterPage'));
  const ContactsPage = lazy(() => import('./Pages/ContactsPage'));
  const LogOutPage = lazy(() => import('./Pages/LogOutPage'));

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="login" element={<LoginPage />}></Route>
          <Route path="register" element={<RegisterPage />}></Route>
          <Route path="contacts" element={<ContactsPage />}></Route>
          <Route path="logout" element={<LogOutPage />}></Route>
        </Route>
      </Routes>
    </Suspense>
  );
}








// import ContactForm from './Components/ContactForm';
// import ContactList from './Components/ContactList';
// import Filter from './Components/Filter';
// import Wrapper from './wrapper.styled';

// const App = () => {
//   return (
//     <Wrapper>
//       <ContactForm />
//       <Filter />
//       <ContactList />
//     </Wrapper>
//   );
// };

// export default App;