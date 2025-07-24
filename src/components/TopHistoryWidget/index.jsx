import React from 'react';
import Chart from './Chart';
import CountrySelector from './CountrySelector/index.jsx';
import styles from './index.module.css';

const TopHistoryWidget = ({countries,categoriesMap,chartData,onSelectionChanged}) => {
  return (
      <div className={styles['top-history']}>
        <h2>Top History</h2>
        <Chart  categoriesMap={categoriesMap}  chartData={chartData}/>
        <CountrySelector countries = {countries} onSelectionChanged = {onSelectionChanged}/>
      </div>
  );
};

export default TopHistoryWidget;