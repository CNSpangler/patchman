import React from 'react';
import PropTypes from 'prop-types';
import styles from '../App/App.css';

const Header = ({ title = 'PATCHMAN' }) => (
  <div className={styles.Header}>
    <h3>na na na na na na na na</h3>
    <h1>{title}</h1>
    <div className={styles.belt}></div>
  </div>
);

Header.propTypes = {
  title: PropTypes.string
};

export default Header;
