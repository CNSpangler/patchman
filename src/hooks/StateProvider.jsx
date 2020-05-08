import React, { createContext, useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const StateProvider = ({ children }) => {
  const [url, setUrl] = useState('');
  const [body, setBody] = useState('');
  const [method, setMethod] = useState('GET');
  const [results, setResults] = useState('');
  const [history, setHistory] = useState([]);

  const handleUrlChange = ({ target }) => {
    setUrl(target.value);
  };
  
  const handleMethodChange = ({ target }) => {
    setMethod(target.value);
  };
  
  const handleBodyChange = ({ target }) => {
    setBody(target.value);
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
  
    makeRequest(url, method, body)
      .then(response => setResults(response));
  
    // dependent state change
    setHistory(prevHistory => ([
      ...prevHistory,
      {
        url,
        method,
        body
      }
    ]));
  };

  return (
    <StateContext.Provider value={{ url, body, method, results, history, handleUrlChange, handleMethodChange, handleBodyChange, handleSubmit }}>
      {children}
    </StateContext.Provider>
  );
};

StateProvider.propTypes = {
  children: PropTypes.node
};

export default StateProvider;
