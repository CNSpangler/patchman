import React from 'react';
import PropTypes from 'prop-types';
import ReactJson from 'react-json-view';
import styles from '../App/App.css';
import { useHistory } from '../../hooks/StateProvider';

const History = () => {
  const history = useHistory();

  return (
    <div className={styles.History}>
      <h3>History:</h3>
      <ReactJson src={history} />
    </div>
  );
};

History.propTypes = {
  history: PropTypes.arrayOf(PropTypes.shape({
    url: PropTypes.string,
    method: PropTypes.string,
    body: PropTypes.any
  }))
};

export default History;
