import React from 'react';
import styles from '../App/App.css';
import { useUrl, useHandleUrlChange, useHandleBodyChange, useBody, useHandleMethodChange, useHandleSubmit, useMethod } from '../../hooks/StateProvider';

/* eslint-disable react/prop-types */
const RadioGroup = ({ name, onChange, children }) => {
  const radioButtonsWithNameAndOnChange = React.Children.map(children, child => {
    return React.cloneElement(child, {
      name,
      onChange
    });
  });

  return (
    <>
      {radioButtonsWithNameAndOnChange}
    </>
  );
};

const RadioButton = ({ name, value, onChange }) => (
  <div className={styles.radioButtonContainer} >
    <input id={value} type="radio" name={name} value={value} onChange={onChange} />
    <label htmlFor={value} className={styles.radioButton}>{value}</label>
  </div>
);

/* eslint-enable react/prop-types */
const Form = () => {
  const url = useUrl();
  const onUrlChange = useHandleUrlChange();
  const body = useBody();
  const onBodyChange = useHandleBodyChange();
  const onMethodChange = useHandleMethodChange();
  const onSubmit = useHandleSubmit();

  return (
    <form onSubmit={onSubmit} className={styles.Form}>
      <RadioGroup name="method" onChange={onMethodChange} className={styles.RadioGroup}>
        <RadioButton value="POST" />
        <RadioButton value="GET" />
        <RadioButton value="PATCH" />
        <RadioButton value="PUT" />
        <RadioButton value="DELETE" />
      </RadioGroup>
      <input type="text" value={url} placeholder="URL" onChange={onUrlChange} className={styles.url} />
      <input type="textarea" value={body} placeholder="Raw JSON Body" onChange={onBodyChange} className={styles.body} />
      <div className={styles.headers}>Placeholder for headers</div>
      <button className={styles.button}>Submit</button>
    </form>
  );
};

export default Form;
