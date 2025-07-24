import React from 'react';
import Chart from './Chart';
import CountrySelector from './CountrySelector/index.jsx';
import styles from './index.module.css';

const TopHistoryWidget = (props) => {
  console.log(props);
  return (
      <div className={styles['top-history']}>
        <h2>Top History</h2>
        <Chart/>
        <CountrySelector/>
      </div>
  );
};

export default TopHistoryWidget;