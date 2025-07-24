import React from 'react';
import Chart from './Chart';
import CountrySelector from './CountrySelector/index.jsx';
import styles from './index.module.css';
import DataStatus from "../DataStatus.jsx";

const TopHistoryWidget = ({countries, categoriesMap, chartData, onSelectionChanged}) => {
  const shouldChartRender = !chartData.loading && !chartData.error&&(Object.keys(chartData.data).length!==0);

  return (
      <section className={styles['history']}>
        <header className={styles["history__top-panel"]}>
          <h2>Top History</h2>
          <CountrySelector countries={countries} onSelectionChanged={onSelectionChanged}/>
        </header>

        <div className={styles['history__chart-container']}>
          <DataStatus loading={chartData.loading} error={chartData.error}/>
          {shouldChartRender && <Chart categoriesMap={categoriesMap} chartData={chartData}/>}
        </div>
      </section>
  );
};

export default TopHistoryWidget;