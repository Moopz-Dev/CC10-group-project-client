import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import AuthContextProvider from './context/AuthContext';
import ErrorContextProvider from './context/ErrorContext';
import UserDataContextProvider from './context/UserDataContext';

ReactDOM.render(
  <React.StrictMode>
    <ErrorContextProvider>
      <AuthContextProvider>
        <UserDataContextProvider>
          <App />
        </UserDataContextProvider>
      </AuthContextProvider>
    </ErrorContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
