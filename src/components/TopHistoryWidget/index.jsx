import React from 'react';
import Chart from './Chart';
import CountrySelector from './CountrySelector/index.jsx';
import styles from './index.module.css';

const TopHistoryWidget = ({countries, categoriesMap, chartData, onSelectionChanged}) => {
  return (
      <div className={styles['history']}>
        <header className={styles["history__top-panel"]}>
          <h2>Top History</h2>
          <CountrySelector countries={countries} onSelectionChanged={onSelectionChanged}/>
        </header>
        <Chart categoriesMap={categoriesMap} chartData={chartData}/>
      </div>
  );
};

export default TopHistoryWidget;