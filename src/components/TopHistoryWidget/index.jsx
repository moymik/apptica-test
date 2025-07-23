import React from 'react';
import Chart from './Chart';
import CountrySelector from './CountrySelector/index.jsx';
import styles from './index.module.css';

const TopHistoryWidget = () => {
  return (
      <div className={styles.widget}>
        <h2>Top History</h2>
        <Chart/>
        <CountrySelector/>
      </div>
  );
};

export default TopHistoryWidget;