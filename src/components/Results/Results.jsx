import React from 'react';
import PropTypes from 'prop-types';
import ReactJson from 'react-json-view';
import styles from '../App/App.css';
import { useResults } from '../../hooks/StateProvider';

const Results = () => {
  const results = useResults();

  return (
    <div className={styles.Results}>
      {results ? <ReactJson src={results} /> : <div>Please make a request above</div>}
    </div>
  );
};

Results.propTypes = {
  results: PropTypes.any
};

export default Results;
