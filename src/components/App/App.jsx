import React from 'react';
import Header from '../Header/Header';
import styles from './App.css';
import Form from '../Form/Form';
import History from '../History/History';
import Results from '../Results/Results';
import { StateProvider } from '../../hooks/StateProvider';

export default function App() {
  return (
    <StateProvider>
      <div className={styles.mainGrid}>
        <Header />
        <Form />
        <Results />
        <History />
      </div>
    </StateProvider>
  );}
