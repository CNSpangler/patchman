import React, { createContext, useContext, useState } from 'react';
import PropTypes from 'prop-types';
import { makeRequest } from '../../services/apiCall';

const StateContext = createContext();

export const StateProvider = ({ children }) => {
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

export const useUrl = () => {
  const { url } = useContext(StateContext);
  return url;
};

export const useBody = () => {
  const { body } = useContext(StateContext);
  return body;
};

export const useMethod = () => {
  const { method } = useContext(StateContext);
  return method;
};

export const useResults = () => {
  const { results } = useContext(StateContext);
  return results;
};

export const useHistory = () => {
  const { history } = useContext(StateContext);
  return history;
};

export const useHandleUrlChange = () => {
  const { handleUrlChange } = useContext(StateContext);
  return handleUrlChange;
};

export const useHandleMethodChange = () => {
  const { handleMethodChange } = useContext(StateContext);
  return handleMethodChange;
};

export const useHandleBodyChange = () => {
  const { handleBodyChange } = useContext(StateContext);
  return handleBodyChange;
};

export const useHandleSubmit = () => {
  const { handleSubmit } = useContext(StateContext);
  return handleSubmit;
};
