import React from 'react'; // { useRef, useState }
// import { useDispatch, useSelector } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import RegisterPage from './Pages/RegisterPage';
import LogInPage from './Pages/LogInPage';
import ContactsPage from './Pages/ContactsPage';
import LogOutPage from './Pages/LogOutPage';
import Layout from './Components/Navigation/layout';
// import PrivateRoute from './Components/UserMenu/PrivateRoute';
// import PublicRoute from './Components/UserMenu/PublicRoute';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route
          path="/login"
          element={
            // <PublicRoute restricted>
            <LogInPage />
            // </PublicRoute>
          }
        />
        <Route
          path="/contacts"
          element={
            // <PrivateRoute>
            <ContactsPage />
            // </PrivateRoute>
          }
        />
        <Route path="/logout" element={<LogOutPage />} />
        {/* <Route path="*" element={<LogInPage />} /> */}
      </Route>
    </Routes>
  );
};

export default App;
