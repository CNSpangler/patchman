import React from 'react';
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

export default History;
